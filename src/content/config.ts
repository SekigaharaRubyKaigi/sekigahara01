import { defineCollection, z } from 'astro:content';

const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.date(),
    title: z.string(),
    externalLink: z.string().url().optional(),
  }),
});

export const collections = {
  news: newsCollection,
};
