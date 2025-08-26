import { z } from 'zod';
export declare const paginationQuerySchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    per_page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export declare const paginationResponseSchema: z.ZodObject<{
    total_results: z.ZodNumber;
    total_pages: z.ZodNumber;
    current_page: z.ZodNumber;
    per_page: z.ZodNumber;
}, z.core.$strip>;
export declare function createPaginatedResponseSchema<T extends z.ZodType>(itemSchema: T): z.ZodObject<{
    data: z.ZodArray<T>;
    pagination: z.ZodObject<{
        total_results: z.ZodNumber;
        total_pages: z.ZodNumber;
        current_page: z.ZodNumber;
        per_page: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export type Pagination = z.infer<typeof paginationResponseSchema>;
//# sourceMappingURL=pagination.schema.d.ts.map