import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // GitHub Pages serves this repo from https://jaydeeslabber780-max.github.io/principles/
  // so all built asset URLs need to be prefixed with /principles/ instead of /.
  // (Switch this to '/' if a custom domain is ever added, since a custom
  // domain serves from the root instead of a /principles/ subpath.)
  base: '/principles/',
  plugins: [
    tailwindcss(),
    react(),
  ],
})