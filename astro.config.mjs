import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://yveslaurentcreton.github.io',
	base: '/',
	server: {
		host: true
	},
	integrations: [
		starlight({
			title: 'CretDocs',
			social: {
				github: 'https://github.com/yveslaurentcreton/cretDocs',
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
							label: 'Azure Data Studio Extensions',
							link: 'toolbox/azuredatastudio-extensions',
						},
						{
							label: 'Debian Packages',
							link: 'toolbox/debian-packages',
						},
						{
							label: 'Google Chrome Extensions',
							link: 'toolbox/chrome-extensions',
						},
						{
							label: 'NuGet Packages',
							link: 'toolbox/nuget-packages',
						},
						{
							label: 'Powershell Modules',
							link: 'toolbox/powershell-modules',
						},						{
							label: 'Resources',
							link: 'toolbox/resources',
						},
						{
							label: 'Technologies',
							link: 'toolbox/technologies',
						},
						{
							label: 'Tools',
							link: 'toolbox/tools',
						},
						{
							label: 'Visual Studio Code Extensions',
							link: 'toolbox/vscode-extensions',
						}
					]
				}
			]
		}),
	],
});
