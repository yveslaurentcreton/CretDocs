import { z, defineCollection } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({ schema: docsSchema() }),
	technologies: defineCollection({
		type: 'content',
		schema: z.object({
			name: z.string(),
			description: z.string().optional(),
			externalLink: z.string().nullable().optional(),
			render: z.boolean().nullable().optional(),
		}),
	}),
	tools: defineCollection({
		type: 'content',
		schema: z.object({
			name: z.string(),
			description: z.string().optional(),
			externalLink: z.string().nullable().optional(),
			alternativeTo: z.string().nullable().optional(),
		}),
	}),
	debianPackages: defineCollection({
		type: 'content',
		schema: z.object({
			name: z.string(),
			category: z.string().optional(),
		}),
	}),
	powershellModules: defineCollection({
		type: 'content',
		schema: z.object({
			name: z.string(),
			type: z.string(),
			description: z.string().optional(),
			externalLink: z.string().nullable().optional(),
		}),
	}),
	nugetPackages: defineCollection({
		type: 'content',
		schema: z.object({
			name: z.string(),
			description: z.string().optional(),
			externalLink: z.string().nullable().optional(),
		}),
	}),
	azuredatastudioExtensions: defineCollection({
		type: 'content',
		schema: z.object({
			name: z.string(),
			description: z.string().optional(),
			externalLink: z.string().nullable().optional(),
		}),
	}),
	chromeExtensions: defineCollection({
		type: 'content',
		schema: z.object({
			name: z.string(),
			description: z.string().optional(),
			externalLink: z.string().nullable().optional(),
		}),
	}),
	resources: defineCollection({
		type: 'content',
		schema: z.object({
			name: z.string(),
			description: z.string().optional(),
			externalLink: z.string().nullable().optional(),
		}),
	}),
	vscodeExtensions: defineCollection({
		type: 'content',
		schema: z.object({
			name: z.string(),
			description: z.string().optional(),
			externalLink: z.string().nullable().optional(),
			whenToUse: z.string().nullable().optional(),
		}),
	})
};
