// Build-time server rendering. Runs React on Node for every route and writes a
// fully formed HTML file per page, so browsers, crawlers and social-media
// previews receive real content instead of an empty <div id="root">.
//
// GitHub Pages is a static host with no server runtime, so rendering happens at
// build time rather than per request. For a site with no per-visitor content
// the output is the same, without needing a server.
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = resolve(root, 'dist')
const ssrDist = resolve(root, '.ssr-build')

// Must match the <Route path> list in src/App.jsx.
const routes = ['/', '/about', '/services', '/contact', '/privacy', '/legal']

const CHARSET = '<meta charset="UTF-8" />'
const ROOT = '<div id="root">'

// The client build already rewrote asset URLs to their hashed filenames, so its
// output is the page shell; only the placeholders get filled in.
const template = readFileSync(resolve(dist, 'index.html'), 'utf-8')

for (const marker of ['<!--app-html-->', '<!--app-head-->', CHARSET, ROOT]) {
  if (!template.includes(marker)) {
    throw new Error(`index.html is missing ${marker}`)
  }
}

// The Content-Security-Policy only allows same-origin script files, so an
// inline <script> in the shell would silently break in production.
if (/<script(?![^>]*\bsrc=)[^>]*>/i.test(template)) {
  throw new Error('index.html contains an inline <script>, which the CSP would block')
}

const { render, contentSecurityPolicy } = await import(
  pathToFileURL(resolve(ssrDist, 'entry-server.js')).href
)

// GitHub Pages can't send security headers, so these ship as <meta> tags. They
// go straight after <meta charset> because a CSP only covers what follows it.
const securityTags = [
  `<meta http-equiv="Content-Security-Policy" content="${contentSecurityPolicy}" />`,
  '<meta name="referrer" content="strict-origin-when-cross-origin" />',
].join('\n    ')
const shell = template.replace(CHARSET, `${CHARSET}\n    ${securityTags}`)

for (const route of routes) {
  const { html, head } = render(route)

  const titleCount = head.match(/<title>/g)?.length ?? 0
  if (titleCount !== 1) {
    throw new Error(`Route ${route} put ${titleCount} <title> tags in <head> (expected 1)`)
  }
  if (!html.trim()) {
    throw new Error(`Route ${route} rendered empty markup`)
  }

  // data-route tells src/main.jsx which URL this markup is for, so it only
  // hydrates when the host served the page that matches the address bar.
  const page = shell
    .replace('<!--app-head-->', head)
    .replace(ROOT, `<div id="root" data-route="${route}">`)
    .replace('<!--app-html-->', html)

  // '/' is the site root; every other route becomes <route>/index.html so the
  // static host serves it directly.
  const outFile =
    route === '/'
      ? resolve(dist, 'index.html')
      : resolve(dist, `.${route}`, 'index.html')

  mkdirSync(dirname(outFile), { recursive: true })
  writeFileSync(outFile, page)
  console.log(`  ✓ ${route.padEnd(10)} → ${outFile.replace(dist, 'dist')}`)
}

// 404.html catches URLs with no prerendered file (typos, old links). It stays an
// empty shell on purpose: React boots, reads the URL and renders on the client.
// Prerendered markup here would mismatch during hydration on those URLs.
writeFileSync(
  resolve(dist, '404.html'),
  shell
    .replace('<!--app-head-->', '<title>Principles Financial Consultants</title>')
    .replace('<!--app-html-->', ''),
)
console.log('  ✓ 404.html   → dist/404.html (client-rendered fallback)')

rmSync(ssrDist, { recursive: true, force: true })
console.log(`\nPrerendered ${routes.length} routes.`)
