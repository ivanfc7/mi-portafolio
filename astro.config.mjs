import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ivanfc.github.io', // Tu usuario de GitHub
  base: '/mi-portafolio',     // Nombre exacto de tu repositorio
  integrations: [mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});