// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	// Adresse du site en production : utilisée pour le sitemap, les URL canoniques et les données structurées
	site: 'https://smrenov24.fr',
	integrations: [
		sitemap({
			// La page 404 ne doit pas être indexée
			filter: (page) => !page.includes('/404'),
		}),
	],
});
