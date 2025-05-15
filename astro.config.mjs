// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import site from './src/config/site.json';
import sitemap from '@astrojs/sitemap';
import studio from './src/utils/studio';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: site.url,
  integrations: [
    react(),
    icon(),
    mdx(),
    sitemap()
  ],
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
    plugins: [
      tailwindcss(),
      studio(),
    ]
  }
});