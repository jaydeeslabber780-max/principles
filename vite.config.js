import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // The site is served from the root of its custom domain
  // (https://principlesfc-sa.co.za). If it is ever served from a subpath again,
  // e.g. https://<user>.github.io/principles/ without a custom domain, change
  // this back to '/principles/'.
  base: '/',
  plugins: [
    tailwindcss(),
    react(),
  ],
})
