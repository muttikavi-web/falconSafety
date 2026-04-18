import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteSitemapPlugin } from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteSitemapPlugin({
      hostname: 'https://falconinvisiblegrill.com',
      routes: [
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
