import test from 'node:test'
import assert from 'node:assert/strict'
import { JSDOM } from 'jsdom'
import { build } from 'esbuild'

const dom = new JSDOM('<div id="root"></div>', { url: 'https://www.anjosbrandao.eco.br/pgrs?gclid=AbC_123&utm_campaign=PGRS' })
Object.assign(globalThis, {
  window: dom.window, document: dom.window.document, sessionStorage: dom.window.sessionStorage,
  HTMLElement: dom.window.HTMLElement, IS_REACT_ACT_ENVIRONMENT: true,
})
Object.defineProperty(globalThis, 'navigator', { value: dom.window.navigator, configurable: true })
const channels = []
const NativeMessageChannel = globalThis.MessageChannel
globalThis.MessageChannel = class extends NativeMessageChannel {
  constructor() { super(); channels.push(this) }
}

const compiled = await build({
  stdin: { contents: "export {default as LeadForm} from './src/components/ui/LeadForm/LeadForm.tsx'; export {createRoot} from 'react-dom/client'; export {createElement, act} from 'react';", resolveDir: process.cwd(), loader: 'tsx' },
  bundle: true, platform: 'node', format: 'esm', write: false, outdir: 'test-build', jsx: 'automatic',
  loader: { '.css': 'empty' }, logLevel: 'silent',
})
const { LeadForm, createRoot, createElement, act } = await import(`data:text/javascript;base64,${Buffer.from(compiled.outputFiles[0].text).toString('base64')}`)

test('the actual form waits for success, preserves fields after error, and reuses its retry', async (t) => {
  t.after(() => {
    dom.window.close()
    for (const channel of channels) { channel.port1.close(); channel.port2.close() }
  })
  const element = document.getElementById('root')
  const root = createRoot(element)
  let respond
  const requests = []
  t.mock.method(globalThis, 'fetch', async (_url, options) => {
    requests.push(JSON.parse(options.body))
    return new Promise((resolve) => { respond = (status, body) => resolve(new Response(JSON.stringify(body), { status })) })
  })
  window.dataLayer = []
  let opened = 0
  window.open = () => { opened++; return null }
  await act(() => root.render(createElement(LeadForm, { defaultDemanda: 'PGRS' })))

  const submit = () => element.querySelector('form').dispatchEvent(new window.Event('submit', { bubbles: true, cancelable: true }))
  await act(() => { submit() })
  assert.equal(requests.length, 0, 'invalid form must not reach the server')

  for (const [id, value] of [['nome', 'João Teste'], ['empresa', 'Empresa Teste'], ['telefone', '71996150067']]) {
    const input = element.querySelector(`#${id}`)
    await act(() => {
      Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set.call(input, value)
      input.dispatchEvent(new window.Event('input', { bubbles: true }))
    })
  }

  await act(() => { submit() })
  assert.equal(requests.length, 1)
  assert.equal(element.querySelector('button[type=submit]').disabled, true)
  assert.equal(window.dataLayer.length, 0, 'must not emit a success event while awaiting the server')
  assert.equal(requests[0].attribution.gclid, 'AbC_123')

  await act(() => { respond(502, { error: 'Unavailable' }) })
  assert.ok(element.querySelector('[role=alert]'))
  assert.equal(element.querySelector('#nome').value, 'João Teste')
  assert.equal(window.dataLayer.length, 0)
  assert.equal(element.querySelector('h4'), null, 'a failed request must not show success')
  await act(() => { submit(); submit() })
  assert.equal(requests.length, 2, 'ignore the second in-flight submit')
  assert.deepEqual(requests[0], requests[1], 'the entire retry snapshot must match')
  await act(() => { respond(200, { success: true, id: 'ui-accepted-provider-id', registroTeste: false }) })
  assert.equal(element.querySelector('h4').textContent, '✓ Solicitação registrada com sucesso!')
  assert.equal(opened, 0, 'WhatsApp must require an explicit click')
  assert.deepEqual(window.dataLayer, [{
    event: 'ambiental_form_success', lead_id: 'ui-accepted-provider-id', transaction_id: 'ui-accepted-provider-id',
    service: 'PGRS', form_page_path: '/pgrs', is_test: false,
  }])
  await act(() => root.unmount())
})
