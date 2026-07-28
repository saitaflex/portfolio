# Portfolio — Oussama Labidi

Personal portfolio website built with **React + TypeScript + Vite**. Showcases my
projects, including [BatchTwin](https://github.com/saitaflex/batchtwin) — a GMP-compliant
electronic batch record system for pharmaceutical manufacturing.

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check and build to /dist
npm run preview  # preview the production build
```

## Editing content

All content lives in [`src/data.ts`](src/data.ts) — update your bio, projects, and
skills there without touching the components.

## Deploying to GitHub Pages

1. In `vite.config.ts`, set `base: '/portfolio/'`.
2. Build with `npm run build` and publish the `dist/` folder (e.g. via the
   [`gh-pages`](https://www.npmjs.com/package/gh-pages) package or a GitHub Actions workflow).

## Stack

React 18 · TypeScript · Vite 6 — no runtime UI dependencies, fully hand-written CSS.
