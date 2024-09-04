import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'DocsJet',
			social: {
				github: 'https://github.com/yveslaurentcreton/docsjet',
			},
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
							label: 'Powershell Modules',
							link: 'toolbox/powershell-modules',
						},
						{
							label: 'Technologies',
							link: 'toolbox/technologies',
						},
						{
							label: 'Tools',
							link: 'toolbox/tools',
						}
					]
				}
			],
		}),
	],
});
