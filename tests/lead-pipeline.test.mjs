import test from 'node:test'
import assert from 'node:assert/strict'
import handler from '../api/send-lead.ts'
import { captureLeadAttribution, recordLeadSuccess } from '../src/lib/leadAttribution.ts'

const REQUEST_ID = '31f79772-c91a-49e3-89e5-38df79a55c11'
const validLead = () => ({
  nome: 'Teste Interno', empresa: 'Empresa de Teste', telefone: '(71) 99615-0067', demanda: 'PGRS',
  mensagem: 'TESTE INTERNO', request_id: REQUEST_ID, submitted_at: '2026-10-13T23:00:00.000Z',
  page_path: '/pgrs', attribution: { gclid: 'CaseSensitive-AbC_123', utm_source: 'google', utm_campaign: 'PGRS' },
})

async function invoke(body, method = 'POST') {
  const result = { status: null, body: null, headers: {} }
  const res = {
    setHeader(key, value) { result.headers[key] = value },
    status(value) { result.status = value; return this },
    json(value) { result.body = value; return this },
    end() { return this },
  }
  await handler({ method, body }, res)
  return result
}

function env(t) {
  const previous = { ...process.env }
  process.env.RESEND_API_KEY = 'test-key-never-sent'
  delete process.env.RESEND_FROM_EMAIL
  delete process.env.RESEND_TO_EMAIL
  t.after(() => {
    for (const key of ['RESEND_API_KEY', 'RESEND_FROM_EMAIL', 'RESEND_TO_EMAIL']) {
      if (previous[key] === undefined) delete process.env[key]
      else process.env[key] = previous[key]
    }
  })
}

test('invalid or missing contact fields never reach the email provider', async (t) => {
  env(t)
  const fetchMock = t.mock.method(globalThis, 'fetch', () => { throw new Error('Must not send') })
  for (const body of [{}, { ...validLead(), empresa: '<script></script>' }, { ...validLead(), telefone: '123' }, { ...validLead(), request_id: 'invalid' }]) {
    assert.equal((await invoke(body)).status, 400)
  }
  assert.equal(fetchMock.mock.callCount(), 0)
})

test('only an accepted email with a provider ID returns success and preserves attribution', async (t) => {
  env(t)
  const requests = []
  t.mock.method(globalThis, 'fetch', async (url, options) => {
    requests.push({ url, options })
    return new Response(JSON.stringify({ id: 'provider-accepted-id' }), { status: 200 })
  })
  const result = await invoke(validLead())
  assert.equal(result.status, 200)
  assert.equal(result.body.id, 'provider-accepted-id')
  assert.equal(result.body.registroTeste, true)
  assert.equal(result.body.recordedIn, 'resend')
  assert.equal(result.headers['Cache-Control'], 'no-store')
  const payload = JSON.parse(requests[0].options.body)
  assert.equal(payload.from, 'Anjos Brandão Soluções Ambientais <contato@anjosbrandao.eco.br>')
  assert.deepEqual(payload.to, ['contato@anjosbrandao.eco.br'])
  assert.ok(payload.text.includes('gclid: CaseSensitive-AbC_123'))
  assert.ok(payload.text.includes('page_path: /pgrs'))
  assert.ok(payload.text.includes(REQUEST_ID))
})

test('retries reuse the same idempotency key and the identical email payload', async (t) => {
  env(t)
  const requests = []
  t.mock.method(globalThis, 'fetch', async (_url, options) => {
    requests.push(options)
    return new Response(JSON.stringify({ id: 'same-email-id' }), { status: 200 })
  })
  const first = await invoke(validLead())
  const retry = await invoke(validLead())
  assert.equal(first.body.id, retry.body.id)
  assert.equal(requests[0].headers['Idempotency-Key'], `ambiental-lead/${REQUEST_ID}`)
  assert.equal(requests[0].body, requests[1].body)
})

test('provider rejection, network failure, and an empty successful response never return success', async (t) => {
  env(t)
  const responses = [
    () => new Response(JSON.stringify({ message: 'rejected' }), { status: 422 }),
    () => { throw new Error('network unavailable') },
    () => new Response(JSON.stringify({}), { status: 200 }),
  ]
  t.mock.method(globalThis, 'fetch', async () => responses.shift()())
  for (let i = 0; i < 3; i++) {
    const result = await invoke(validLead())
    assert.equal(result.status, 502)
    assert.equal(result.body.success, undefined)
    assert.equal(result.body.details, undefined)
  }
})

test('user text is escaped in HTML and the test sender is replaced with the verified domain', async (t) => {
  env(t)
  process.env.RESEND_FROM_EMAIL = 'Anjos Brandão <onboarding@resend.dev>'
  let payload
  t.mock.method(globalThis, 'fetch', async (_url, options) => {
    payload = JSON.parse(options.body)
    return new Response(JSON.stringify({ id: 'safe-email-id' }), { status: 200 })
  })
  const result = await invoke({ ...validLead(), empresa: 'A & "B"', attribution: { utm_campaign: '"><img src=x onerror=alert(1)>' } })
  assert.equal(result.status, 200)
  assert.ok(!payload.html.includes('<img src=x'))
  assert.ok(payload.html.includes('A &amp; &quot;B&quot;'))
  assert.ok(!payload.from.includes('resend.dev'))
})

function browserEnvironment(t, url) {
  const storage = new Map()
  const previous = Object.fromEntries(['window', 'document', 'sessionStorage'].map((key) => [key, Object.getOwnPropertyDescriptor(globalThis, key)]))
  Object.assign(globalThis, {
    window: { location: new URL(url), dataLayer: [] },
    document: { referrer: 'https://example.org/path?private=hidden' },
    sessionStorage: {
    getItem: (key) => storage.get(key) ?? null,
    setItem: (key, value) => storage.set(key, value),
    },
  })
  t.after(() => {
    for (const key of ['window', 'document', 'sessionStorage']) {
      if (previous[key]) Object.defineProperty(globalThis, key, previous[key])
      else delete globalThis[key]
    }
  })
  return storage
}

test('entry attribution survives internal navigation and a new campaign replaces the old campaign', (t) => {
  browserEnvironment(t, 'https://www.anjosbrandao.eco.br/?gclid=AbCd_123&utm_campaign=Primeira&email=private')
  const entry = captureLeadAttribution()
  window.location = new URL('https://www.anjosbrandao.eco.br/pgrs')
  const later = captureLeadAttribution()
  assert.equal(later.gclid, 'AbCd_123')
  assert.equal(later.utm_campaign, 'Primeira')
  assert.equal(later.captured_at, entry.captured_at)
  assert.equal(later.landing_page, 'https://www.anjosbrandao.eco.br/')
  assert.equal(later.referrer, 'https://example.org/path')
  assert.ok(!JSON.stringify(later).includes('private'))
  window.location = new URL('https://www.anjosbrandao.eco.br/pgrs?gclid=XyZ_456')
  assert.deepEqual(captureLeadAttribution().gclid, 'XyZ_456')
  assert.equal(captureLeadAttribution().utm_campaign, undefined)
})

test('the same accepted request emits one event with no contact data or extra conversions', (t) => {
  browserEnvironment(t, 'https://www.anjosbrandao.eco.br/pgrs')
  recordLeadSuccess('dedup-provider-id', 'PGRS', '/pgrs')
  recordLeadSuccess('dedup-provider-id', 'PGRS', '/pgrs')
  assert.deepEqual(window.dataLayer, [{
    event: 'ambiental_form_success', lead_id: 'dedup-provider-id', transaction_id: 'dedup-provider-id',
    service: 'PGRS', form_page_path: '/pgrs', is_test: false,
  }])
})

test('an internal test uses a separate event, excluded from production conversion triggers', (t) => {
  browserEnvironment(t, 'https://www.anjosbrandao.eco.br/pgrs')
  recordLeadSuccess('internal-test-provider-id', 'PGRS', '/pgrs', true)
  assert.equal(window.dataLayer[0].event, 'ambiental_form_test_success')
  assert.equal(window.dataLayer[0].is_test, true)
  assert.equal(window.dataLayer.filter((item) => item.event === 'ambiental_form_success').length, 0)
})
