import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { vitePrerenderPlugin } from 'vite-prerender-plugin'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    /* Renders every route to real HTML at build time. Without it the site ships
       `<div id="root"></div>`, so crawlers see no H1, no links and no per-page
       metadata. Routes are discovered by following links from `/`. */
    vitePrerenderPlugin({
      renderTarget: '#root',
      prerenderScript: fileURLToPath(new URL('./src/prerender.tsx', import.meta.url)),
      additionalPrerenderRoutes: ['/404'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    target: 'es2022',
  },
})
