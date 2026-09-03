/**
 * Kaaty Privacy-First Analytics Module
 *
 * Adheres strictly to no-PII guidelines:
 * - NO customer names
 * - NO email addresses
 * - NO phone numbers
 * - NO raw form inputs
 * - NO secrets or credentials
 */

export type AnalyticsEventName =
  | 'page_view'
  | 'cta_click'
  | 'demo_form_start'
  | 'demo_form_submit'
  | 'demo_form_error'
  | 'pricing_view'
  | 'product_page_view'
  | 'solution_page_view'
  | 'integration_page_view'
  | 'whatsapp_click'
  | 'phone_click'
  | 'faq_expand'
  | 'scroll_depth_50'
  | 'scroll_depth_100'

export type SafeEventProperties = {
  path?: string
  source?: string
  cta_text?: string
  cta_target?: string
  product_slug?: string
  solution_slug?: string
  integration_slug?: string
  plan_tier?: string
  faq_question?: string
  business_type?: string // Categorical only (e.g. "Restaurant", "College Canteen")
  error_fields?: string[] // e.g. ["phone", "email"] without any values
}

// Disallowed PII keys guard
const PII_KEYS = new Set([
  'name',
  'email',
  'phone',
  'telephone',
  'message',
  'password',
  'secret',
  'token',
  'creditcard',
  'card',
])

function scrubPII(props: Record<string, unknown>): Record<string, unknown> {
  const safe: Record<string, unknown> = {}
  for (const [k, v] of Object.entries(props)) {
    if (!PII_KEYS.has(k.toLowerCase()) && v !== undefined && v !== null) {
      // Ensure values don't look like email or phone numbers
      if (typeof v === 'string') {
        if (v.includes('@') && v.includes('.')) continue
        if (/^\+?[0-9\s-]{7,20}$/.test(v.trim())) continue
      }
      safe[k] = v
    }
  }
  return safe
}

// Global window extensions for Plausible or custom dispatch
declare global {
  interface Window {
    plausible?: (eventName: string, options?: { props?: Record<string, unknown> }) => void
    dataLayer?: unknown[]
  }
}

let isInitialized = false

export function initAnalytics(): void {
  if (isInitialized || typeof window === 'undefined') return
  isInitialized = true

  // Optional: If VITE_PLAUSIBLE_DOMAIN is provided, inject the script
  const domain = import.meta.env.VITE_PLAUSIBLE_DOMAIN as string | undefined
  if (domain && !document.querySelector('script[data-domain]')) {
    const s = document.createElement('script')
    s.defer = true
    s.setAttribute('data-domain', domain)
    s.src = 'https://plausible.io/js/script.tagged-events.js'
    document.head.appendChild(s)
  }
}

export function trackEvent(name: AnalyticsEventName, properties: SafeEventProperties = {}): void {
  const safeProps = scrubPII({
    ...properties,
    path: properties.path || (typeof window !== 'undefined' ? window.location.pathname : '/'),
  })

  // 1. Plausible
  if (typeof window !== 'undefined' && typeof window.plausible === 'function') {
    try {
      window.plausible(name, { props: safeProps })
    } catch {
      // Silent catch
    }
  }

  // 2. Dispatch custom DOM event for testing or integration
  if (typeof window !== 'undefined') {
    try {
      window.dispatchEvent(
        new CustomEvent('kaaty:analytics', {
          detail: { event: name, properties: safeProps, timestamp: Date.now() },
        }),
      )
    } catch {
      // Silent catch
    }
  }

  // 3. Development logger (warn in dev only)
  if (import.meta.env.DEV) {
    console.warn(`[Analytics] ${name}`, safeProps)
  }
}

/**
 * Setup scroll depth listener for a given page/route
 */
export function setupScrollDepthTracking(currentPath: string): () => void {
  if (typeof window === 'undefined') return () => {}

  let tracked50 = false
  let tracked100 = false

  const onScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
    if (scrollHeight <= 0) return

    const pct = (window.scrollY / scrollHeight) * 100

    if (pct >= 50 && !tracked50) {
      tracked50 = true
      trackEvent('scroll_depth_50', { path: currentPath })
    }
    if (pct >= 95 && !tracked100) {
      tracked100 = true
      trackEvent('scroll_depth_100', { path: currentPath })
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true })
  return () => window.removeEventListener('scroll', onScroll)
}
