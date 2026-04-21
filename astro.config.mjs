// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://isualc.github.io',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
});
