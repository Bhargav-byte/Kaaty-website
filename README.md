# Kaaty Landing Page
Official repository for the Kaaty marketing website and product ecosystem platform.

## Overview
This repository powers the public Kaaty website, including:

- Landing Pages
- Product Pages
- Solution Pages
- Integration Pages
- Pricing
- Resources
- Demo Booking Flow

**Tech Stack**

- React
- Vite
- TypeScript
- Tailwind CSS
- Netlify

---

# IMPORTANT WORKFLOW
The `main` branch is connected directly to the production website.

Any code pushed to `main` may automatically deploy to production.

Do NOT push directly to `main` unless the changes have been tested and approved.

---

# Getting Started

## Option 1: Clone Repository

```
git clone
cd kaaty-landing-page
npm install
npm run dev
```

## Option 2: Download ZIP

1. Download the repository ZIP.
2. Extract the files.
3. Open the project in VS Code.
4. Run:

```
npm install
npm run dev
```

---

# Development Workflow

## Step 1: Pull Latest Changes
Before starting any work:

```
git checkout main
git pull origin main
```

## Step 2: Create a Feature Branch
Create a branch based on the feature you are working on.

Examples:

```
git checkout -b navbar-redesign
```

```
git checkout -b pricing-page-update
```

```
git checkout -b mobile-menu-fix
```

```
git checkout -b integrations-section
```
Branch names should clearly describe the feature or bug being worked on.

---

## Step 3: Work On Your Changes
Run locally:

```
npm run dev
```
Test:

- Desktop
- Tablet
- Mobile
- Build process

---

## Step 4: Verify Build
Before pushing:

```
npm run build
```
Make sure:

- No build errors
- No TypeScript errors
- No console errors
- No broken layouts

---

## Step 5: Commit Changes

```
git add .
git commit -m "Add integrations section"
```
Use clear commit messages.

Examples:

```
feat: add integrations section
```

```
fix: resolve mobile navbar issue
```

```
refactor: improve hero component structure
```

---

## Step 6: Push Feature Branch
Never push unfinished work to main.

```
git push origin your-branch-name
```
Example:

```
git push origin pricing-page-update
```

---

## Step 7: Review Before Merge
Before merging into main:

- Code reviewed
- Build successful
- Responsive testing completed
- No console errors
- No broken pages

Only after verification should changes be merged into `main`.

---

# Production Branch Rules

## Main Branch

```
main = Production
```
Anything merged into `main` affects the live website.

Be careful.

---

# Environment Variables

## Never Upload
Do NOT commit:

```
.env
.env.local
.env.production
.env.development
```
These files may contain:

- API Keys
- Database Credentials
- Private Tokens
- Secret Keys

Keep all environment variables local and secure.

---

# Security Guidelines
Never commit:

- API Keys
- Access Tokens
- Database Passwords
- Netlify Secrets
- Supabase Service Keys

Always use environment variables.

---

# Before Merging To Main
Checklist:

- Branch created
- Feature completed
- Build passes
- No TypeScript errors
- Responsive tested
- No console errors
- Code reviewed
- Ready for production

Only then merge into `main`.

---

# Production Website
Changes merged into `main` may automatically deploy to the live Kaaty website.

Please verify everything carefully before merging.

Happy coding.
