import { z } from 'zod';
export declare const baseId: {
    baseId: z.ZodString;
};
export declare const tableId: {
    tableId: z.ZodString;
    baseId: z.ZodString;
};
export declare const recordId: {
    recordId: z.ZodString;
    tableId: z.ZodString;
    baseId: z.ZodString;
};
export declare const detailLevel: z.ZodEnum<{
    tableIdentifiersOnly: "tableIdentifiersOnly";
    identifiersOnly: "identifiersOnly";
    full: "full";
}>;
