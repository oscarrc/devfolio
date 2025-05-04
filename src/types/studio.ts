import type { z } from 'zod';

export interface CollectionInfo {
  name: string;
  schema: z.ZodType<any, any, any>;
}

export interface CollectionItem {
  slug: string;
  content: string;
}

// Helper type to get field info from Zod schema
export type SchemaField = {
  name: string;
  type: string;
  required: boolean;
  defaultValue?: any;
};