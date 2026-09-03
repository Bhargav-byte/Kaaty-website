import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConvexProvider, ConvexReactClient } from 'convex/react'
import './index.css'
import App from './App'

/* ── Error Boundary ──────────────────────────────────────────────────────── */
class RootErrorBoundary extends Component<{ children: React.ReactNode }, { error: Error | null }> {
  constructor(props: { children: React.ReactNode }) {
    super(props)
    this.state = { error: null }
  }
  static getDerivedStateFromError(error: Error) {
    return { error }
  }
  render() {
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
        </div>
      )
    }
    return this.props.children
  }
}

/* ── Convex URL resolution with fallback ─────────────────────────────────── */
const convexUrl =
  (import.meta.env.VITE_CONVEX_URL as string | undefined) || 'https://savory-crab-961.convex.cloud'

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
        <App />
      </ConvexProvider>
    </RootErrorBoundary>
  </StrictMode>,
)
