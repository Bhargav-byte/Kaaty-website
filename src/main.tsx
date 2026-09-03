import { Component, StrictMode } from 'react'
import type { ErrorInfo, ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConvexProvider, ConvexReactClient } from 'convex/react'
import './index.css'
import App from './App'
import { Router } from './lib/router'
import { initSentry, captureException } from './lib/sentry'
import { initAnalytics } from './lib/analytics'

// Initialize monitoring & analytics early
initSentry()
initAnalytics()

/* ── Error Boundary ──────────────────────────────────────────────────────── */
type ErrorBoundaryProps = { children: ReactNode }
type ErrorBoundaryState = { error: Error | null }

class RootErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    captureException(error, { componentStack: errorInfo.componentStack })
  }

  render(): ReactNode {
    if (this.state.error) {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            fontFamily: 'sans-serif',
            padding: '2rem',
            textAlign: 'center',
            background: '#fff8f5',
          }}
        >
          <img src="/favicon.png" alt="Kaaty" width={48} height={48} />
          <h1 style={{ marginTop: '1rem', color: '#0f172a' }}>Something went wrong</h1>
          <p style={{ color: '#64748b', maxWidth: 480 }}>{this.state.error.message}</p>
          <a
            href="/"
            style={{
              marginTop: '1rem',
              padding: '0.6rem 1.2rem',
              background: '#ff6b00',
              color: '#ffffff',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            Return to Homepage
          </a>
        </div>
      )
    }
    return this.props.children
  }
}

/* ── Convex URL resolution with environment-aware fallback ───────────────── */
const envConvexUrl = import.meta.env.VITE_CONVEX_URL as string | undefined

// Default production deployment fallback
const DEFAULT_CONVEX_URL = 'https://savory-crab-961.convex.cloud'

const convexUrl = envConvexUrl || DEFAULT_CONVEX_URL

if (!envConvexUrl && import.meta.env.DEV) {
  console.warn(
    '[Convex] VITE_CONVEX_URL is not set in your environment. Using default fallback: ' +
      DEFAULT_CONVEX_URL,
  )
}

/* ── Bootstrap ───────────────────────────────────────────────────────────── */
const convex = new ConvexReactClient(convexUrl)

const rootEl = document.getElementById('root')
if (!rootEl) {
  throw new Error('Root element #root not found in index.html')
}

createRoot(rootEl).render(
  <StrictMode>
    <RootErrorBoundary>
      <ConvexProvider client={convex}>
        <Router>
          <App />
        </Router>
      </ConvexProvider>
    </RootErrorBoundary>
  </StrictMode>,
)
