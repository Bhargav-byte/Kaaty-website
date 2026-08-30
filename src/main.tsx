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
          <img src="/favicon.svg" alt="Kaaty" width={48} height={48} />
          <h1 style={{ marginTop: '1rem', color: '#0f172a' }}>Something went wrong</h1>
          <p style={{ color: '#64748b', maxWidth: 480 }}>{this.state.error.message}</p>
        </div>
      )
    }
    return this.props.children
  }
}

/* ── Convex URL guard ────────────────────────────────────────────────────── */
const convexUrl = import.meta.env.VITE_CONVEX_URL as string | undefined

if (!convexUrl) {
  // Render a visible error instead of a blank page
  const root = document.getElementById('root')
  if (root) {
    root.innerHTML = `
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;
                  min-height:100vh;font-family:sans-serif;padding:2rem;text-align:center;background:#fff8f5">
        <h1 style="color:#0f172a">Configuration Error</h1>
        <p style="color:#64748b;max-width:480px">
          <code>VITE_CONVEX_URL</code> is not set.<br/>
          Add it in your Vercel project → Settings → Environment Variables.
        </p>
      </div>`
  }
  throw new Error('VITE_CONVEX_URL is not defined. Set it in Vercel Environment Variables.')
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
        <App />
      </ConvexProvider>
    </RootErrorBoundary>
  </StrictMode>,
)
