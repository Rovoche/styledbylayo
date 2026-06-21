import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://rovoche.github.io',
  base: '/styledbylayo/',
  server: {
    port: 3000,
    host: true,
  }
});
