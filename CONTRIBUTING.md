# Contributing to Kaaty Website

Thank you for contributing to the Kaaty landing page. This document explains the full development workflow from setup to merge.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Setup](#setup)
3. [Branching Strategy](#branching-strategy)
4. [Commit Conventions](#commit-conventions)
5. [Pull Request Workflow](#pull-request-workflow)
6. [Code Quality Requirements](#code-quality-requirements)
7. [Review & Merge Requirements](#review--merge-requirements)
8. [Environment Variables](#environment-variables)

---

## Prerequisites

- **Node.js** >= 20 (use [nvm](https://github.com/nvm-sh/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows))
- **npm** >= 10
- **Git** >= 2.40

---

## Setup

```bash
# 1. Clone the repository
git clone https://github.com/<org>/kaaty-website.git
cd kaaty-website

# 2. Install dependencies (also installs Husky git hooks automatically)
npm install

# 3. Start the dev server
npm run dev
```

After `npm install`, Husky will automatically configure the pre-commit and pre-push hooks. You should see confirmation in the terminal.

---

## Branching Strategy

| Branch      | Purpose                            | Example                      |
| ----------- | ---------------------------------- | ---------------------------- |
| `main`      | **Production** — always deployable | —                            |
| `feature/*` | New features or pages              | `feature/pricing-redesign`   |
| `fix/*`     | Bug fixes                          | `fix/mobile-navbar-overflow` |
| `hotfix/*`  | Urgent production fixes            | `hotfix/netlify-build-fail`  |

### Rules

- **Never push directly to `main`.**
- Always branch from the latest `main`:
  ```bash
  git checkout main && git pull origin main
  git checkout -b feature/your-feature-name
  ```
- Keep branches focused — one feature / fix per branch.
- Delete your branch after it's merged.

---

## Commit Conventions

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <short description>
```

| Type       | When to use                            |
| ---------- | -------------------------------------- |
| `feat`     | New feature or page section            |
| `fix`      | Bug fix                                |
| `style`    | Visual/CSS changes (no logic change)   |
| `refactor` | Code restructure (no behaviour change) |
| `chore`    | Tooling, deps, config                  |
| `docs`     | Documentation only                     |
| `ci`       | CI/CD workflow changes                 |

**Examples:**

```bash
git commit -m "feat(hero): add animated product showcase"
git commit -m "fix(navbar): resolve mobile overflow on small screens"
git commit -m "chore(deps): update eslint to v10"
git commit -m "ci: add lighthouse audit workflow"
```

---

## Pull Request Workflow

```bash
# 1. Push your feature branch
git push origin feature/your-feature-name

# 2. Open a PR on GitHub
#    → Base: main
#    → Fill out the PR template completely

# 3. CI must pass:
#    ✅ Format check
#    ✅ ESLint
#    ✅ TypeScript typecheck
#    ✅ Build succeeds
#    ✅ Bundle size ≤ 350 kB
#    ✅ Gitleaks secret scan passes

# 4. Review the Netlify preview deploy URL

# 5. Get approval from @Bhargav-byte

# 6. Squash & merge into main
```

---

## Code Quality Requirements

All of the following must pass before a PR can be merged:

```bash
npm run typecheck     # TypeScript strict mode — zero errors
npm run lint          # ESLint — zero errors
npm run format:check  # Prettier — zero diffs
npm run build         # Vite build — must succeed
npm run size          # Bundle ≤ 350 kB gzipped
```

### Auto-fix locally

```bash
npm run lint:fix      # Fix ESLint issues automatically
npm run format        # Format all files with Prettier
```

### Git hooks (automatic)

- **Pre-commit**: runs `lint-staged` (prettier + eslint on changed files only)
- **Pre-push**: runs `typecheck` + `build`

If a hook fails, fix the reported issues before committing / pushing.

---

## Review & Merge Requirements

- [ ] All CI checks green
- [ ] Netlify preview deploy reviewed in a browser
- [ ] Tested on mobile **and** desktop
- [ ] No console errors in the browser
- [ ] Approved by **@Bhargav-byte**
- [ ] PR template fully completed (including screenshots for UI changes)

Only **squash-merge** into `main`. Write a clear squash commit message.

---

## Environment Variables

**Never commit `.env` files.** All environment variables are managed in Netlify.

If you need a new environment variable:

1. Add it to Netlify → Site Settings → Environment Variables
2. Document the variable name (not the value) in this file below:

### Current Variables

| Variable           | Description                           | Required |
| ------------------ | ------------------------------------- | -------- |
| _(none currently)_ | This site has no runtime env vars yet | —        |

If you add one, update this table in your PR.
