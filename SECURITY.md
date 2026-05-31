# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in this repository or on the live Kaaty website, please **do not** open a public GitHub issue.

**Contact us privately:**

- Email: [support@kaaty.com](mailto:support@kaaty.com)
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

These files may contain:

- API Keys (Razorpay, Easebuzz, PhonePe, etc.)
- Netlify tokens or build hooks
- Supabase service-role keys
- Any authentication tokens or passwords

### Rules

1. **All secrets live in Netlify environment variables** — never in code.
2. **Secret scanning runs on every push** via the Gitleaks GitHub Action.
3. If a secret is accidentally committed, **immediately rotate it** and report to @Bhargav-byte.
4. Use `git filter-repo` or `BFG Repo Cleaner` to scrub a leaked secret from history.

---

## Dependency Security

- **Dependabot** is enabled and creates automated PRs for vulnerable packages weekly.
- `npm audit --audit-level=high` runs in every CI pipeline and blocks merges on high/critical vulnerabilities.
- Run `npm audit` locally before pushing any dependency changes.

---

## Content Security Policy

The Netlify deployment enforces a strict `Content-Security-Policy` header defined in `netlify.toml`. Any PR that adds a new external resource (CDN, font, script) **must** update the CSP accordingly and document the reason.

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
