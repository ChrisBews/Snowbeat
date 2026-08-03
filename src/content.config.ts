import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
    loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
    schema: ({ image }) => z.object({
        title: z.string(),
        type: z.string(),
        startDate: z.coerce.date(),
        endDate: z.union([z.literal("Present"), z.coerce.date()]),
        primaryImage: image(),
        technologies: z.array(z.string()),
        languages: z.array(z.string()),
        websiteUrl: z.optional(z.string()),
        appStoreUrl: z.optional(z.string()),
        playStoreUrl: z.optional(z.string()),
    }),
})

const extras = defineCollection({
    loader: glob({ base: './src/content/extras', pattern: '**/*.{md,mdx}' }),
    schema: ({ image }) => z.object({
        title: z.string(),
        type: z.string(),
        startDate: z.coerce.date(),
        endDate: z.union([z.literal("Present"), z.coerce.date()]),
        primaryImage: image(),
    }),
})

export const collections = { projects, extras };