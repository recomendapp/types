import { z } from 'zod';
export declare const movieSearchQuerySchema: z.ZodObject<{
    query: z.ZodString;
} & {
    page: z.ZodDefault<z.ZodNumber>;
    per_page: z.ZodDefault<z.ZodNumber>;
} & {
    sort_by: z.ZodDefault<z.ZodEnum<["popularity"]>>;
} & {
    genre_ids: z.ZodOptional<z.ZodString>;
    runtime_min: z.ZodOptional<z.ZodNumber>;
    runtime_max: z.ZodOptional<z.ZodNumber>;
    release_date_start: z.ZodOptional<z.ZodNumber>;
    release_date_end: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    query: string;
    page: number;
    per_page: number;
    sort_by: "popularity";
    genre_ids?: string | undefined;
    runtime_min?: number | undefined;
    runtime_max?: number | undefined;
    release_date_start?: number | undefined;
    release_date_end?: number | undefined;
}, {
    query: string;
    page?: number | undefined;
    per_page?: number | undefined;
    sort_by?: "popularity" | undefined;
    genre_ids?: string | undefined;
    runtime_min?: number | undefined;
    runtime_max?: number | undefined;
    release_date_start?: number | undefined;
    release_date_end?: number | undefined;
}>;
export declare const movieSearchResponseSchema: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, "many">;
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
    data: {}[];
    pagination: {
        per_page: number;
        total_results: number;
        total_pages: number;
        current_page: number;
    };
}, {
    data: {}[];
    pagination: {
        per_page: number;
        total_results: number;
        total_pages: number;
        current_page: number;
    };
}>;
export type MovieSearchQuery = z.infer<typeof movieSearchQuerySchema>;
//# sourceMappingURL=movie.schema.d.ts.map