import type { SchemaField } from '../types/studio';
import { z } from 'zod';

export function validateWithSchema<T>(schema: z.ZodType<T>, data: unknown): 
  { success: true; data: T } | { success: false; error: string } {
  try {
    const validated = schema.parse(data);
    return { success: true, data: validated };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { 
        success: false, 
        error: error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join(', ')
      };
    }
    return { success: false, error: 'Validation failed' };
  }
}

// Helper function to extract field information from Zod schema
export function extractSchemaFields(schema: z.ZodObject<any>): SchemaField[] {
  const shape = schema._def.shape();
  const fields: SchemaField[] = [];

  Object.entries(shape).forEach(([name, def]: [string, any]) => {
    const field: SchemaField = {
      name,
      type: getZodTypeString(def),
      required: !def.isOptional(),
    };
    
    // Check for default value
    if (def._def.defaultValue !== undefined) {
      field.defaultValue = def._def.defaultValue();
    }
    
    fields.push(field);
  });

  return fields;
}

// Helper to get a simple string representation of Zod types
function getZodTypeString(zodType: z.ZodTypeAny): string {
  if (zodType instanceof z.ZodString) return 'string';
  if (zodType instanceof z.ZodNumber) return 'number';
  if (zodType instanceof z.ZodBoolean) return 'boolean';
  if (zodType instanceof z.ZodDate) return 'date';
  if (zodType instanceof z.ZodArray) return 'array';
  if (zodType instanceof z.ZodEnum) return 'enum';
  if (zodType instanceof z.ZodOptional) return getZodTypeString(zodType._def.innerType);
  if (zodType instanceof z.ZodDefault) return getZodTypeString(zodType._def.innerType);
  
  // Handle special string formats
  if (zodType instanceof z.ZodString) {
    if (zodType._def.checks?.some(check => check.kind === 'url')) return 'url';
    if (zodType._def.checks?.some(check => check.kind === 'email')) return 'email';
  }
  
  return 'unknown';
}