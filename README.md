# Kaaty Landing Page

Modern landing page for Kaaty, built with React + Vite.

## Requirements

- Node.js 18+
- npm 9+

## Local development

```bash
npm install
npm run dev
```

Vite will print the local URL (usually http://localhost:5173).

## Production build

```bash
npm run build
```

The production output is in the `dist/` folder.

## Netlify (manual deploy)

1) Run `npm run build`
2) Drag and drop the `dist/` folder into https://app.netlify.com/drop

## Netlify (auto deploy from GitHub)

1) Open Netlify and click "Add new site" -> "Import an existing project".
2) Connect your GitHub account and select this repo.
3) Use these settings:
	- Build command: `npm run build`
	- Publish directory: `dist`
4) Click "Deploy site".

Netlify will redeploy automatically on every push to `main`.
