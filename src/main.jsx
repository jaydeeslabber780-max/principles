import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'

const rootEl = document.getElementById('root')

const app = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
)

// App route for the current URL, e.g. '/principles/about/' -> '/about'.
const base = import.meta.env.BASE_URL.replace(/\/$/, '')
const route = window.location.pathname.slice(base.length).replace(/\/$/, '') || '/'

// Production pages are prerendered (scripts/prerender.mjs) and #root records
// which route its markup belongs to. Hydrate only when that matches this URL:
// a host that answers with another page's HTML (an SPA fallback redirect, or a
// server that ignores the missing trailing slash) would otherwise fail
// hydration. The dev server and 404.html serve an empty #root, which lands in
// the fresh-render branch too.
if (rootEl.dataset.route === route) {
  hydrateRoot(rootEl, app)
} else {
  // Clear any markup and head tags meant for a different page; each page adds
  // its own title and meta tags when it renders.
  rootEl.replaceChildren()
  document.head
    .querySelectorAll(
      'title, meta[name="description"], meta[property^="og:"], meta[name^="twitter:"], link[rel="canonical"], link[rel="preload"][as="image"]',
    )
    .forEach((el) => el.remove())
  createRoot(rootEl).render(app)
}
