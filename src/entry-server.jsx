// Server-side render entry. Runs in Node at build time (see scripts/prerender.mjs)
// to turn each route into real HTML, rather than shipping an empty <div id="root">.
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'

export { contentSecurityPolicy } from './config/site.js'

// Vite inlines this at build time ('/principles/' for GitHub Pages).
const base = import.meta.env.BASE_URL

// On React 19, react-helmet-async renders <title>/<meta>/<link> as ordinary
// elements and leaves its SSR context empty. React's renderToString emits those
// hoistable tags as one contiguous run at the very start of its output, so that
// run is what belongs in <head>. prerender.mjs fails the build if this ever
// stops yielding exactly one <title> per page.
const LEADING_HEAD_TAGS = /^(?:<title>[^<]*<\/title>|<(?:meta|link)\b[^>]*>)+/

/**
 * Render one app route to HTML.
 * @param {string} route App-level path, e.g. '/' or '/about'.
 * @returns {{html: string, head: string}} Markup for #root, and <head> tags.
 */
export function render(route) {
  // StaticRouter wants the full URL path including the base, exactly as the
  // browser sees it, so the basename strips to the same route on hydration.
  const location = base.replace(/\/$/, '') + route

  const markup = renderToString(
    <StrictMode>
      <HelmetProvider>
        <StaticRouter location={location} basename={base}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>,
  )

  const head = markup.match(LEADING_HEAD_TAGS)?.[0] ?? ''
  return { head, html: markup.slice(head.length) }
}
