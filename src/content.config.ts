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
        primaryImage: image().refine(() => true),
    }),
})

const extras = defineCollection({
    loader: glob({ base: './src/content/extras', pattern: '**/*.{md,mdx}' }),
    schema: ({ image }) => z.object({
        title: z.string(),
        type: z.string(),
        startDate: z.coerce.date(),
        endDate: z.union([z.literal("Present"), z.coerce.date()]),
        primaryImage: image().refine(() => true),
    }),
})

export const collections = { projects, extras };