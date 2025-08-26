import { z } from 'zod';
export declare const movieSearchQuerySchema: z.ZodObject<{
    query: z.ZodString;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    per_page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    sort_by: z.ZodDefault<z.ZodEnum<{
        popularity: "popularity";
    }>>;
    genre_ids: z.ZodOptional<z.ZodString>;
    runtime_min: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    runtime_max: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    release_date_start: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    release_date_end: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export declare const movieSearchResponseSchema: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{}, z.core.$strip>>;
    pagination: z.ZodObject<{
        total_results: z.ZodNumber;
        total_pages: z.ZodNumber;
        current_page: z.ZodNumber;
        per_page: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export type MovieSearchQuery = z.infer<typeof movieSearchQuerySchema>;
