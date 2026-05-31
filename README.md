# Kaaty Website

> Official production repository for the Kaaty marketing website and product ecosystem platform.
> **`main` = production. Every merge deploys live.**

[![CI](https://github.com/Bhargav-byte/kaaty-website/actions/workflows/ci.yml/badge.svg)](https://github.com/Bhargav-byte/kaaty-website/actions/workflows/ci.yml)
[![Security Scan](https://github.com/Bhargav-byte/kaaty-website/actions/workflows/security.yml/badge.svg)](https://github.com/Bhargav-byte/kaaty-website/actions/workflows/security.yml)

---

## ⚠️ Production Warning

```
main branch = live production website
```

- **Never push directly to `main`.**
- **All changes must go through a Pull Request.**
- **Every PR must have CI passing + owner approval before merge.**

---

## Tech Stack

| Tool                | Version | Purpose                   |
| ------------------- | ------- | ------------------------- |
| React               | 19      | UI framework              |
| TypeScript          | 5       | Type safety (strict mode) |
| Vite                | 8       | Build tool & dev server   |
| Tailwind CSS        | CDN     | Styling                   |
| Netlify             | —       | Hosting & deployment      |
| ESLint + Prettier   | 10 / 3  | Code quality              |
| Husky + lint-staged | 9 / 15  | Git hooks                 |
| GitHub Actions      | —       | CI/CD pipeline            |

---

## Getting Started

### Prerequisites

- Node.js >= 20
- npm >= 10

### Installation

```bash
git clone https://github.com/Bhargav-byte/kaaty-website.git
cd kaaty-website
npm install        # also installs Husky git hooks automatically
npm run dev        # http://localhost:5173
```

---

## Available Scripts

| Script                 | Description                                    |
| ---------------------- | ---------------------------------------------- |
| `npm run dev`          | Start dev server at localhost:5173             |
| `npm run build`        | Production build → `dist/`                     |
| `npm run preview`      | Preview production build locally               |
| `npm run typecheck`    | TypeScript strict check (zero errors required) |
| `npm run lint`         | ESLint check                                   |
| `npm run lint:fix`     | ESLint auto-fix                                |
| `npm run format`       | Prettier format all source files               |
| `npm run format:check` | Prettier check (used in CI)                    |
| `npm run size`         | Check JS bundle stays ≤ 350 kB                 |
| `npm test`             | Run test suite                                 |

---

## Development Workflow

### Step 1 — Pull latest main

```bash
git checkout main
git pull origin main
```

### Step 2 — Create a feature branch

```bash
# Pattern: feature/* | fix/* | hotfix/*
git checkout -b feature/navbar-redesign
git checkout -b fix/mobile-menu-overflow
git checkout -b hotfix/netlify-build-failure
```

### Step 3 — Develop locally

```bash
npm run dev
```

Test on **Desktop**, **Tablet**, and **Mobile** before pushing.

### Step 4 — Verify before pushing

```bash
npm run typecheck    # must be zero errors
npm run lint         # must be zero errors
npm run format:check # must be zero diffs
npm run build        # must succeed
npm run size         # bundle must be ≤ 350 kB
```

### Step 5 — Commit with a clear message

```bash
# Conventional commit format
git commit -m "feat(hero): add animated product showcase"
git commit -m "fix(navbar): resolve mobile overflow on small screens"
git commit -m "style(pricing): improve card spacing on mobile"
```

### Step 6 — Push and open a Pull Request

```bash
git push origin feature/your-branch-name
# Open a PR on GitHub → base: main
# Fill the PR template completely including screenshots
```

---

## Branching Strategy

| Branch      | Purpose                                               |
| ----------- | ----------------------------------------------------- |
| `main`      | Production — always deployable                        |
| `feature/*` | New features (e.g. `feature/pricing-page`)            |
| `fix/*`     | Bug fixes (e.g. `fix/mobile-menu`)                    |
| `hotfix/*`  | Urgent production fixes (e.g. `hotfix/netlify-build`) |

---

## Pull Request Rules

Before a PR can merge into `main`:

- [ ] CI pipeline fully green (lint, typecheck, build, bundle size, secret scan)
- [ ] Netlify preview deploy reviewed in a real browser
- [ ] Tested on mobile AND desktop
- [ ] No console errors
- [ ] No secrets committed
- [ ] Approved by **@Bhargav-byte**

---

## Production Deployment

Deployment is automatic via **Netlify**:

- Every merge to `main` → production deploy
- Every PR → Netlify preview deploy (review before merge)
- Config: `netlify.toml`

**Do not** deploy manually or bypass Netlify.

---

## CI/CD Pipelines

| Workflow         | Trigger            | Checks                                      |
| ---------------- | ------------------ | ------------------------------------------- |
| `ci.yml`         | push / PR          | format, lint, typecheck, build, bundle size |
| `security.yml`   | push / PR / weekly | Gitleaks secret scan, npm audit             |
| `lighthouse.yml` | push to main / PR  | Performance ≥ 85, A11y ≥ 90, SEO ≥ 90       |

---

## Security Guidelines

### NEVER commit:

```
.env
.env.local
.env.production
.env.development
.env.staging
```

### NEVER hardcode:

- API Keys (Razorpay, Easebuzz, PhonePe, etc.)
- Netlify tokens or deploy hooks
- Authentication tokens or passwords
- Database credentials

All secrets are stored in **Netlify Environment Variables** only.

If you accidentally commit a secret:

1. **Immediately rotate the leaked credential**
2. Contact @Bhargav-byte
3. Use `git filter-repo` to scrub history

See [SECURITY.md](./SECURITY.md) for the full security policy.

---

## Environment Variables

This site currently has **no runtime environment variables**.

If you add one:

- Add it to Netlify → Site Settings → Environment Variables
- Document it in [CONTRIBUTING.md](./CONTRIBUTING.md)
- **Never add it to any `.env` file that gets committed**

---

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the full contribution guide including commit conventions, PR workflow, and code quality requirements.

---

## License

Private repository. All rights reserved.
© 2025 Benvora Groups Private Limited.
