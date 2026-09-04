import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Custom domain (principlesfc.co.za) serves from the root, not a /principles/
  // subpath — unlike the raw jaydeeslabber780-max.github.io/principles/ URL.
  base: '/',
  plugins: [
    tailwindcss(),
    react(),
  ],
})