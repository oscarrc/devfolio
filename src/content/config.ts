import { defineCollection, z } from 'astro:content';

// Define project collection schema
export const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.date(),
  updatedDate: z.date().optional(),
  category: z.string(),
  tags: z.array(z.string()),
  image: z.string().optional(),
  github: z.string().url().optional(),
  live: z.string().url().optional(),
  featured: z.boolean().default(false),
});

// Define blog collection schema
export const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.date(),
  updatedDate: z.date().optional(),
  category: z.string(),
  tags: z.array(z.string()),
  image: z.string().optional(),
  draft: z.boolean().default(false),
});

// Define collections using the schemas
const projectsCollection = defineCollection({
  type: 'content',
  schema: projectSchema,
});

const blogCollection = defineCollection({
  type: 'content',
  schema: blogSchema,
});

export const collections = {
  'projects': projectsCollection,
  'blog': blogCollection,
};