# Principles Financial Consultants - website

Marketing site for Principles Financial Consultants (FSP 19721), built with Vite,
React, Tailwind CSS and Framer Motion. Every push to `main` is built and deployed
to GitHub Pages by `.github/workflows/deploy.yml`.

## Commands

```bash
npm install       # once, after cloning
npm run dev       # local dev server with hot reload
npm run build     # production build into dist/ (includes prerendering)
npm run preview   # serve dist/ locally to check the production build
```

## How pages are rendered

`npm run build` runs three steps:

1. `vite build` - the browser bundle.
2. `vite build --ssr src/entry-server.jsx` - a Node bundle of the same app.
3. `scripts/prerender.mjs` - renders every route to real HTML
   (`dist/index.html`, `dist/about/index.html`, ...), which the browser then
   hydrates. Search engines and link previews see the full page content.

To add a page: add its `<Route>` in `src/App.jsx`, its path to `routes` in
`scripts/prerender.mjs`, and a `<url>` in `public/sitemap.xml`.

## Contact form

GitHub Pages can't receive form submissions. Create a free form at
https://formspree.io and set `FORM_ENDPOINT` in `src/config/site.js`. Until it's
set, the form opens the visitor's email app with their message pre-filled.

## Privacy, cookies and security

- No cookies, analytics or trackers. Fonts are self-hosted, not loaded from Google.
- The Google map only loads after the visitor allows it (`src/lib/consent.js`,
  `src/components/CookieBanner.jsx`, `src/components/MapEmbed.jsx`).
- Production pages carry a Content-Security-Policy (`src/config/site.js`). If you
  add a third-party service (analytics, chat, video), add its origin there or the
  browser will block it.
- Never put private keys or passwords in this repo: everything under `src/` is
  sent to every visitor's browser.
- Dependabot (`.github/dependabot.yml`) opens pull requests for dependency updates.
- Legal pages: `src/pages/Privacy.jsx` (POPIA) and `src/pages/Legal.jsx` (FAIS).
  Update `POLICY_LAST_UPDATED` in `src/config/site.js` whenever you change them.
