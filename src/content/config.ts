import { z, defineCollection } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({ schema: docsSchema() }),
	technologies: defineCollection({
		type: 'content',
		schema: z.object({
			name: z.string(),
			description: z.string().optional(),
			render: z.boolean().nullable().optional(),
		}),
	}),
	tools: defineCollection({
		type: 'content',
		schema: z.object({
			name: z.string(),
			description: z.string().optional(),
			link: z.string().optional(),
			alternativeTo: z.string().nullable().optional(),
		}),
	}),
	powershellModules: defineCollection({
		type: 'content',
		schema: z.object({
			name: z.string(),
			type: z.string(),
			description: z.string().optional(),
		}),
	}),
	nugetPackages: defineCollection({
		type: 'content',
		schema: z.object({
			name: z.string(),
			description: z.string().optional(),
			link: z.string().optional(),
		}),
	}),
	azuredatastudioExtensions: defineCollection({
		type: 'content',
		schema: z.object({
			name: z.string(),
			description: z.string().optional(),
			link: z.string().optional(),
		}),
	}),
	chromeExtensions: defineCollection({
		type: 'content',
		schema: z.object({
			name: z.string(),
			description: z.string().optional(),
			link: z.string().optional(),
		}),
	}),
	vscodeExtensions: defineCollection({
		type: 'content',
		schema: z.object({
			name: z.string(),
			description: z.string().optional(),
			whenToUse: z.string().nullable().optional(),
		}),
	})
};
