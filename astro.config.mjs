// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), icon(), mdx()],
  vite: {
    plugins: [
      tailwindcss(),
      {
        name: 'studio',
        apply: 'build',
        resolveId(id) {
          if (id.includes('/studio/') || id.includes('/pages/studio')) {
            return { id: 'export default {}', external: false };
          }
        }
      },
    ]
  }
});