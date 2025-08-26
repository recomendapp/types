import { z } from 'zod';
export declare const playlistSearchQuerySchema: z.ZodObject<{
    query: z.ZodString;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    per_page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    sort_by: z.ZodDefault<z.ZodEnum<{
        created_at: "created_at";
        likes_count: "likes_count";
        updated_at: "updated_at";
        items_count: "items_count";
    }>>;
}, z.core.$strip>;
export declare const playlistSearchResponseSchema: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        created_at: z.ZodString;
        updated_at: z.ZodString;
        user_id: z.ZodString;
        title: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        poster_url: z.ZodNullable<z.ZodString>;
        private: z.ZodBoolean;
        items_count: z.ZodNumber;
        saved_count: z.ZodNumber;
        likes_count: z.ZodNumber;
    }, z.core.$strip>>;
    pagination: z.ZodObject<{
        total_results: z.ZodNumber;
        total_pages: z.ZodNumber;
        current_page: z.ZodNumber;
        per_page: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export type PlaylistSearchQuery = z.infer<typeof playlistSearchQuerySchema>;
