export interface LeadAttribution {
  gclid?: string
  gbraid?: string
  wbraid?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
  landing_page?: string
  referrer?: string
  captured_at?: string
}

const ATTRIBUTION_KEY = 'ambiental-lead-attribution-v1'
const EVENTS_KEY = 'ambiental-form-success-v1'
const MAX_AGE = 24 * 60 * 60 * 1000
const CAMPAIGN_KEYS = ['gclid', 'gbraid', 'wbraid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const
let memoryAttribution: LeadAttribution = {}
const recordedEvents = new Set<string>()

function pageWithoutQuery(value: string): string {
  try {
    const url = new URL(value)
    return `${url.origin}${url.pathname}`
  } catch {
    return ''
  }
}

// Session-only attribution; keep the original click ID, including its case.
// Call on entry, before internal navigation can remove the landing query.
export function captureLeadAttribution(): LeadAttribution {
  let saved = memoryAttribution
  try {
    saved = JSON.parse(sessionStorage.getItem(ATTRIBUTION_KEY) || '{}')
  } catch {
    // Storage can be disabled; the current page must still work.
  }
  const capturedAt = Date.parse(saved?.captured_at || '')
  if (!Number.isFinite(capturedAt) || Date.now() - capturedAt > MAX_AGE) saved = {}

  const params = new URLSearchParams(window.location.search)
  const current: LeadAttribution = {}
  for (const key of CAMPAIGN_KEYS) {
    const value = params.get(key)
    if (value && value.length <= 1024 && !/[\u0000-\u001f]/.test(value)) current[key] = value
  }
  // A new campaign replaces the previous campaign rather than mixing their IDs.
  const attribution = Object.keys(current).length ? {
    ...current,
    landing_page: pageWithoutQuery(window.location.href),
    referrer: pageWithoutQuery(document.referrer),
    captured_at: new Date().toISOString(),
  } : saved
  memoryAttribution = attribution
  try {
    sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(attribution))
  } catch {
    // Preserve the in-memory copy for internal navigation in this session.
  }
  return { ...attribution }
}

export function recordLeadSuccess(id: string, service: string, pagePath: string, isTest = false): void {
  if (recordedEvents.has(id)) return
  try {
    const saved = JSON.parse(sessionStorage.getItem(EVENTS_KEY) || '[]')
    if (Array.isArray(saved) && saved.includes(id)) return
  } catch {
    // In-memory deduplication remains available when storage is blocked.
  }

  const target = window as Window & { dataLayer?: unknown[] }
  target.dataLayer = target.dataLayer || []
  target.dataLayer.push({
    event: isTest ? 'ambiental_form_test_success' : 'ambiental_form_success',
    lead_id: id,
    transaction_id: id,
    service,
    form_page_path: pagePath,
    is_test: isTest,
  })
  recordedEvents.add(id)
  try {
    const saved = JSON.parse(sessionStorage.getItem(EVENTS_KEY) || '[]')
    sessionStorage.setItem(EVENTS_KEY, JSON.stringify([...(Array.isArray(saved) ? saved : []), id].slice(-100)))
  } catch {
    // This must not turn an accepted request into a displayed failure.
  }
}
