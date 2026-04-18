import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemapPlugin from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemapPlugin({
      hostname: 'https://falconinvisiblegrill.com',
      dynamicRoutes: [
        '/',
        '/invisible-grills-chennai',
        '/invisible-grills-bangalore',
        '/invisible-grills-vizag',
        '/window-grills-chennai',
        '/balcony-grills-chennai',
        '/invisible-grill-cost',
        '/child-safety-grills',
        '/best-invisible-grill',
        '/invisible-grill-installation-process',
        '/transparent-safety-grills'
      ],
      changefreq: 'weekly',
      priority: 0.8
    })
  ],
})
