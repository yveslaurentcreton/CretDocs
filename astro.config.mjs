import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
	site: 'https://yveslaurentcreton.github.io',
	base: '/',
	server: {
		host: true
	},
	integrations: [
		mermaid(),
		starlight({
			title: 'CretDocs',
			components: {
				Header: './src/components/CustomHeader.astro',
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/yveslaurentcreton/cretDocs' },
			],
			sidebar: [
				{
					label: 'Introduction',
					autogenerate: { directory: 'introduction' },
				},
				{
					label: 'Cheatsheets',
					autogenerate: { directory: 'cheatsheets' },
				},
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Templates',
					autogenerate: { directory: 'templates' },
				},
				{
					label: 'Toolbox',
					items: [
						{
							label: 'Software Catalog',
							link: 'toolbox/software',
						},
					]
				}
			]
		}),
	],
});
