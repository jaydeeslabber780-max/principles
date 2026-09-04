// GitHub Pages is a static host with no server-side rewrites — if someone
// opens /principles/about directly (or refreshes on it), GitHub Pages looks
// for a literal file at that path, finds nothing, and serves 404.html.
// Making 404.html an exact copy of index.html means the React app still
// boots there, and react-router then reads the URL client-side and renders
// the right page. This is the standard fix for React Router + GitHub Pages.
import { copyFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dist = resolve(__dirname, '../dist')

copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'))
console.log('✓ dist/404.html created from dist/index.html (GitHub Pages SPA fallback)')
