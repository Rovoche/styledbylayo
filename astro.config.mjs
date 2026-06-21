import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind({
    nested: true,
  })],
  server: {
    port: 3000,
    host: true,
  }
});