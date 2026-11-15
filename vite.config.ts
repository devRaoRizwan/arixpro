import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vitePrerenderPlugin } from 'vite-prerender-plugin'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    react(),
    vitePrerenderPlugin({
      renderTarget: '#root',
      prerenderScript: path.resolve(__dirname, 'src/prerender.tsx'),
      additionalPrerenderRoutes: [
        '/',
        '/services',
        '/work',
        '/work/jobharvester',
        '/work/bomwatcher',
        '/work/sitescopia',
        '/work/jobbr',
        '/process',
        '/about',
        '/contact',
      ],
    }),
  ],
  build: {
    outDir: 'dist',
  },
})
