import { z } from 'zod';
/**
 * Enhanced error handling for Airtable API with troubleshooting guidance
 */
declare const AirtableApiErrorSchema: z.ZodObject<{
    error: z.ZodObject<{
        type: z.ZodString;
        message: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type AirtableApiError = z.infer<typeof AirtableApiErrorSchema>;
/**
 * Analyzes Airtable API errors and provides troubleshooting guidance
 */
export declare function enhanceAirtableError(error: Error, responseText: string, apiKey: string): void;
export {};
