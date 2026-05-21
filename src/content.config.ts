import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),

	// Unified software collection
	software: defineCollection({
		loader: glob({ pattern: '**/*.md', base: './src/content/software' }),
		schema: z.object({
			name: z.string(),
			description: z.string().optional(),
			externalLink: z.string().nullable().optional(),
			icon: z.string().optional(),

			// Flexible tagging - can be custom tags or references to other entries
			tags: z.array(z.string()).optional(),

			// Optional fields from legacy collections
			category: z.string().optional(),
			whenToUse: z.string().optional(),
			alternativeTo: z.string().optional(),
			render: z.boolean().optional(),
		}),
	}),
};
