# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in this repository or on the live Kaaty website, please **do not** open a public GitHub issue.

**Contact us privately:**

- Email: [support@kaaty.co.in](mailto:support@kaaty.co.in)
- Subject line: `[SECURITY] <short description>`

We aim to acknowledge all security reports within **48 hours** and provide a resolution or mitigation within **7 days** for critical issues.

---

## Supported Versions

| Version               | Supported |
| --------------------- | --------- |
| Current `main` branch | ✅        |
| Older branches        | ❌        |

---

## Secret & Credential Policy

### NEVER commit the following:

```
.env
.env.local
.env.development
.env.production
.env.staging
.env.*.local
```

### Where secrets live

| Secret            | Where it must be set            | Where it must NOT be                   |
| ----------------- | ------------------------------- | -------------------------------------- |
| `VITE_CONVEX_URL` | Netlify env vars + `.env.local` | Never hardcoded in source              |
| `RESEND_API_KEY`  | **Convex Dashboard only**       | Never in Git, Netlify, or `.env` files |

### Convex Secret Architecture

```
Browser
   │
   └── VITE_CONVEX_URL (public — safe)
            ↓
         Convex (server-side)
            │
            └── RESEND_API_KEY ← set in Convex Dashboard only
                     ↓
                   Resend (email delivery)
```

`RESEND_API_KEY` **never reaches the browser**. It is used only inside a Convex action (`convex/sendConfirmationEmail.ts`) which runs server-side. Set it at:

> **Convex Dashboard** → your project → Settings → Environment Variables

### Rules

1. **Frontend secrets** (e.g., `VITE_CONVEX_URL`) live in Netlify environment variables.
2. **Server-side secrets** (e.g., `RESEND_API_KEY`) live in Convex Dashboard environment variables only.
3. **Secret scanning runs on every push** via TruffleHog (free, open-source).
4. If a secret is accidentally committed, **immediately rotate it** and contact the repository owner.
5. Use `git filter-repo` or `BFG Repo Cleaner` to scrub a leaked secret from history.

---

## Dependency Security

- **Dependabot** is enabled and creates automated PRs for vulnerable packages weekly.
- `npm audit --audit-level=high` runs in every CI pipeline and blocks merges on high/critical vulnerabilities.
- Run `npm audit` locally before pushing any dependency changes.

---

## Content Security Policy

The Netlify deployment enforces a strict `Content-Security-Policy` header defined in `netlify.toml`.

Current policy allows:

- `connect-src`: `self`, `https://*.convex.cloud`, `wss://*.convex.cloud` (Convex real-time)
- `script-src`: `self`, `unsafe-inline` (required for Vite-injected module scripts)
- `font-src`: Google Fonts

Any PR that adds a new external resource (CDN, script, API endpoint) **must** update the CSP accordingly and document the reason.

---

## Responsible Disclosure

We follow responsible disclosure. If you report a valid security issue:

1. We will credit you in the fix commit (with your permission).
2. We will not take legal action against good-faith security researchers.
3. We ask that you give us reasonable time to patch before public disclosure.

---

## Security Checklist for Contributors

Before submitting a PR, confirm:

- [ ] No secrets or credentials in code or config files
- [ ] No new external scripts added without CSP update
- [ ] `npm audit` passes locally
- [ ] No `console.log` statements left in production code
- [ ] No hardcoded URLs that expose internal infrastructure
- [ ] `RESEND_API_KEY` is not in any `.env` file, README, or Netlify variables
