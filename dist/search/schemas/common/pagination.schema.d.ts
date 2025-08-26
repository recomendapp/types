import { z } from 'zod';
export declare const paginationQuerySchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodNumber>;
    per_page: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    page: number;
    per_page: number;
}, {
    page?: number | undefined;
    per_page?: number | undefined;
}>;
export declare const paginationResponseSchema: z.ZodObject<{
    total_results: z.ZodNumber;
    total_pages: z.ZodNumber;
    current_page: z.ZodNumber;
    per_page: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    per_page: number;
    total_results: number;
    total_pages: number;
    current_page: number;
}, {
    per_page: number;
    total_results: number;
    total_pages: number;
    current_page: number;
}>;
export declare function createPaginatedResponseSchema<T extends z.ZodType>(itemSchema: T): z.ZodObject<{
    data: z.ZodArray<T, "many">;
    pagination: z.ZodObject<{
        total_results: z.ZodNumber;
        total_pages: z.ZodNumber;
        current_page: z.ZodNumber;
        per_page: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        per_page: number;
        total_results: number;
        total_pages: number;
        current_page: number;
    }, {
        per_page: number;
        total_results: number;
        total_pages: number;
        current_page: number;
    }>;
}, "strip", z.ZodTypeAny, {
    data: T["_output"][];
    pagination: {
        per_page: number;
        total_results: number;
        total_pages: number;
        current_page: number;
    };
}, {
    data: T["_input"][];
    pagination: {
        per_page: number;
        total_results: number;
        total_pages: number;
        current_page: number;
    };
}>;
export type Pagination = z.infer<typeof paginationResponseSchema>;
//# sourceMappingURL=pagination.schema.d.ts.map