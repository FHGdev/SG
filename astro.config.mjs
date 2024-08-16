import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://FHGdev.github.io/',
    base: '/sg/',
    integrations: [sitemap()],
});