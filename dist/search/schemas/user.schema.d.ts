import { z } from 'zod';
export declare const userSearchQuerySchema: z.ZodObject<{
    query: z.ZodString;
    exclude_ids: z.ZodOptional<z.ZodString>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    per_page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export declare const userSearchResponseSchema: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        username: z.ZodString;
        username_updated_at: z.ZodNullable<z.ZodString>;
        full_name: z.ZodString;
        bio: z.ZodNullable<z.ZodString>;
        avatar_url: z.ZodNullable<z.ZodString>;
        website: z.ZodNullable<z.ZodString>;
        favorite_color: z.ZodNullable<z.ZodString>;
        followers_count: z.ZodNumber;
        following_count: z.ZodNumber;
        created_at: z.ZodString;
        background_url: z.ZodNullable<z.ZodString>;
        premium: z.ZodBoolean;
        language: z.ZodString;
        private: z.ZodBoolean;
    }, z.core.$strip>>;
    pagination: z.ZodObject<{
        total_results: z.ZodNumber;
        total_pages: z.ZodNumber;
        current_page: z.ZodNumber;
        per_page: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export type UserSearchQuery = z.infer<typeof userSearchQuerySchema>;
//# sourceMappingURL=user.schema.d.ts.map