import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://almarantemanuel.github.io',
  output: '/portfolio',
  vite: {
    plugins: [tailwindcss()],
  },
});
