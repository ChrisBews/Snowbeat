import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
    loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            type: z.string(),
            startDate: z.coerce.date(),
            endDate: z.union([z.literal('Present'), z.coerce.date()]),
            primaryImage: image(),
            technologies: z.array(z.string()),
            languages: z.array(z.string()),
            websiteUrl: z.optional(z.string()),
            appStoreUrl: z.optional(z.string()),
            playStoreUrl: z.optional(z.string()),
            isFeatured: z.optional(z.coerce.boolean()),
        }),
});

const extras = defineCollection({
    loader: glob({ base: './src/content/extras', pattern: '**/*.{md,mdx}' }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            type: z.string(),
            startDate: z.coerce.date(),
            endDate: z.union([z.literal('Present'), z.coerce.date()]),
            primaryImage: image(),
            technologies: z.optional(z.array(z.string())),
            languages: z.optional(z.array(z.string())),
            websiteUrl: z.optional(z.string()),
            appStoreUrl: z.optional(z.string()),
            playStoreUrl: z.optional(z.string()),
            isFeatured: z.optional(z.coerce.boolean()),
        }),
});

const timeline = defineCollection({
    loader: glob({ base: './src/content/timeline', pattern: '**/*.{md,mdx}' }),
    schema: ({ image }) =>
        z.object({
            companyName: z.string(),
            companyLogo: image(),
            startYear: z.number(),
            endYear: z.number(),
            roles: z.array(
                z.object({
                    position: z.string(),
                    startYear: z.number(),
                    endYear: z.number(),
                })
            ),
        }),
});

export const collections = { projects, extras, timeline };
