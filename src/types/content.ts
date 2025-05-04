import { blogSchema, projectSchema } from '../content/config';

import { z } from 'zod';

// Infer types from Zod schemas
export type ProjectFrontmatter = z.infer<typeof projectSchema>;
export type BlogPostFrontmatter = z.infer<typeof blogSchema>;

export interface ContentItem<T> {
  slug: string;
  frontmatter: T;
  content: string;
}