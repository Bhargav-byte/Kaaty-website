import * as Sentry from '@sentry/react'

const SENTRY_DSN = import.meta.env.VITE_SENTRY_DSN as string | undefined

let sentryInitialized = false

export function initSentry(): void {
  if (sentryInitialized || !SENTRY_DSN) return

  try {
    Sentry.init({
      dsn: SENTRY_DSN,
      environment: import.meta.env.MODE || 'production',
      // Send 10% of sessions for performance monitoring in production
      tracesSampleRate: import.meta.env.PROD ? 0.1 : 1.0,
      beforeSend(event) {
        // PII and secrets scrubber
        if (event.request?.headers) {
          delete event.request.headers['authorization']
          delete event.request.headers['cookie']
          delete event.request.headers['x-forwarded-for']
        }

        // Scrub potential user lead data
        if (event.user) {
          delete event.user.email
          delete event.user.ip_address
          delete event.user.username
        }

        // Scrub breadcrumbs containing sensitive keys
        if (event.breadcrumbs) {
          event.breadcrumbs = event.breadcrumbs.map((b) => {
            if (b.data && typeof b.data === 'object') {
              const cleaned: Record<string, unknown> = {}
              for (const [k, v] of Object.entries(b.data)) {
                if (
                  !['password', 'phone', 'email', 'token', 'key', 'secret'].includes(
                    k.toLowerCase(),
                  )
                ) {
                  cleaned[k] = v
                }
              }
              b.data = cleaned
            }
            return b
          })
        }

        return event
      },
    })
    sentryInitialized = true
  } catch (err) {
    // Sentry init should never crash the app
    if (import.meta.env.DEV) {
      console.warn('Failed to initialize Sentry:', err)
    }
  }
}

export function captureException(error: unknown, context?: Record<string, unknown>): void {
  if (sentryInitialized) {
    Sentry.captureException(error, { extra: context })
  } else if (import.meta.env.DEV) {
    console.error('[Sentry Local Fallback]', error, context)
  }
}

export { Sentry }
