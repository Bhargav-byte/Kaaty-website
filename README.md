# Kaaty Website

> Official production repository for the KAATY landing page — an all-in-one food-tech platform for restaurants, cloud kitchens, and food courts.
> **`main` = production. Every merge deploys live.**

[![CI](https://github.com/Bhargav-byte/Kaaty-website/actions/workflows/ci.yml/badge.svg)](https://github.com/Bhargav-byte/Kaaty-website/actions/workflows/ci.yml)
[![Security Scan](https://github.com/Bhargav-byte/Kaaty-website/actions/workflows/security.yml/badge.svg)](https://github.com/Bhargav-byte/Kaaty-website/actions/workflows/security.yml)

---

## ⚠️ Production Warning

```
main branch = live production website
```

- **Never push directly to `main`.**
- **All changes must go through a Pull Request.**
- **Every PR must have CI passing + owner approval before merge.**

---

## What is KAATY?

KAATY is a food-tech platform built for the Indian restaurant and food service industry. It provides:

- **POS billing** — Fast, offline-first billing for restaurants and counters
- **Kitchen Display System (KDS)** — Real-time order routing to the kitchen
- **QR Ordering** — Contactless table ordering via QR code
- **Kiosk** — Self-service ordering terminals
- **Integrations** — Swiggy, Zomato, ONDC, Razorpay, PhonePe, Easebuzz, Pine Labs

KAATY is developed by **Benvora Groups Pvt Ltd** and is deployed across outlets in India.

---

## Tech Stack

| Tool                | Version  | Purpose                                      |
| ------------------- | -------- | -------------------------------------------- |
| React               | 19       | UI framework                                 |
| TypeScript          | 5        | Type safety (strict mode)                    |
| Vite                | 8        | Build tool & dev server                      |
| Tailwind CSS        | v4 (npm) | Styling (via @tailwindcss/vite)              |
| Lucide React        | npm      | Icons (tree-shaken)                          |
| Convex              | 1.x      | Backend / database / real-time               |
| Resend              | 6.x      | Transactional email (server-side via Convex) |
| Netlify             | —        | Hosting & deployment                         |
| ESLint + Prettier   | 10 / 3   | Code quality                                 |
| Husky + lint-staged | 9 / 15   | Git hooks                                    |
| GitHub Actions      | —        | CI/CD pipeline                               |

---

## Architecture

```
Browser
   │
   └── VITE_CONVEX_URL (public)
            ↓
         Convex (serverless backend)
            │
            ├── demoRequests (database)
            ├── testimonials (database)
            ├── integrations (database)
            ├── trustLogos (database)
            └── RESEND_API_KEY (server-side only)
                     ↓
                   Resend (email)
```

> **Security:** `RESEND_API_KEY` is stored **only** in the Convex Dashboard environment variables. It never touches the browser, Netlify, or Git.

---

## Getting Started

### Prerequisites

- Node.js >= 20
- npm >= 10

### Installation

```bash
git clone https://github.com/Bhargav-byte/Kaaty-website.git
cd Kaaty-website
npm install        # also installs Husky git hooks automatically
```

### Environment Setup

```bash
cp .env.example .env.local
# Edit .env.local and fill in your Convex URL from the Convex dashboard
```

```bash
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
| `npm run size`         | Check JS bundle stays ≤ 350 kB (gzipped)       |
| `npm test`             | Run test suite                                 |

---

## Environment Variables

### Frontend (Netlify + local)

| Variable               | Where set              | Description                  |
| ---------------------- | ---------------------- | ---------------------------- |
| `VITE_CONVEX_URL`      | Netlify + `.env.local` | Public Convex deployment URL |
| `CONVEX_DEPLOYMENT`    | `.env.local` only      | Used by `npx convex dev` CLI |
| `VITE_CONVEX_SITE_URL` | `.env.local` only      | Convex HTTP actions URL      |

### Server-side (Convex Dashboard only)

| Variable         | Where set                 | Description                                 |
| ---------------- | ------------------------- | ------------------------------------------- |
| `RESEND_API_KEY` | **Convex Dashboard only** | Email API key — **never expose to browser** |

> ⚠️ `RESEND_API_KEY` must be configured at:
> [https://dashboard.convex.dev](https://dashboard.convex.dev) → your project → Settings → Environment Variables

See `.env.example` for the complete template.

---

## Development Workflow

### Step 1 — Pull latest main

```bash
git checkout main
git pull origin main
```

### Step 2 — Create a feature branch

```bash
# Pattern: feature/* | fix/* | hotfix/* | refactor/* | docs/* | chore/*
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
npm run size         # JS bundle must be ≤ 350 kB gzipped
```

### Step 5 — Commit with a clear message

```bash
# Conventional commit format
git commit -m "feat(hero): add animated product showcase"
git commit -m "fix(navbar): resolve mobile overflow on small screens"
git commit -m "chore(deps): update convex to 1.45"
```

### Step 6 — Push and open a Pull Request

```bash
git push origin feature/your-branch-name
# Open a PR on GitHub → base: main
```

---

## Branching Strategy

| Branch       | Purpose                                               |
| ------------ | ----------------------------------------------------- |
| `main`       | Production — always deployable                        |
| `feature/*`  | New features (e.g. `feature/pricing-page`)            |
| `fix/*`      | Bug fixes (e.g. `fix/mobile-menu`)                    |
| `hotfix/*`   | Urgent production fixes (e.g. `hotfix/netlify-build`) |
| `refactor/*` | Code improvements without feature changes             |
| `docs/*`     | Documentation updates                                 |
| `chore/*`    | Dependency updates, tooling changes                   |

---

## Pull Request Rules

Before a PR can merge into `main`:

- [ ] CI pipeline fully green (lint, typecheck, build, bundle size, secret scan)
- [ ] Netlify preview deploy reviewed in a real browser
- [ ] Tested on mobile AND desktop
- [ ] No console errors
- [ ] No secrets committed
- [ ] Approved by **@Benvora**

---

## Production Deployment

Deployment is automatic via **Netlify**:

- Every merge to `main` → production deploy
- Every PR → Netlify preview deploy (review before merge)
- Config: `netlify.toml`

**Do not** deploy manually or bypass Netlify.

### Rollback

If a bad deployment reaches production:

1. In Netlify → **Deploys** → find the last good deploy → **Publish deploy**
2. This instantly rolls back without any code changes
3. Then fix the issue in a hotfix branch and go through the normal PR flow

---

## CI/CD Pipelines

| Workflow         | Trigger            | Checks                                      |
| ---------------- | ------------------ | ------------------------------------------- |
| `ci.yml`         | push / PR          | format, lint, typecheck, build, bundle size |
| `security.yml`   | push / PR / weekly | TruffleHog secret scan, npm audit           |
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

- `RESEND_API_KEY` anywhere outside the Convex Dashboard
- Netlify tokens or deploy hooks
- Authentication tokens or passwords
- Database credentials

If you accidentally commit a secret:

1. **Immediately rotate the leaked credential**
2. Contact the repository owner
3. Use `git filter-repo` to scrub history

See [SECURITY.md](./SECURITY.md) for the full security policy.

---

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the full contribution guide including commit conventions, PR workflow, and code quality requirements.

---

## License

Private repository. All rights reserved.
© 2026 Benvora Groups Private Limited.
