import { z } from 'zod';
export declare const userSearchQuerySchema: z.ZodObject<{
    query: z.ZodString;
} & {
    exclude_ids: z.ZodOptional<z.ZodString>;
    page: z.ZodDefault<z.ZodNumber>;
    per_page: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    query: string;
    page: number;
    per_page: number;
    exclude_ids?: string | undefined;
}, {
    query: string;
    page?: number | undefined;
    per_page?: number | undefined;
    exclude_ids?: string | undefined;
}>;
export declare const userSchema: z.ZodObject<{
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
}, "strip", z.ZodTypeAny, {
    id: string;
    created_at: string;
    private: boolean;
    username: string;
    username_updated_at: string | null;
    full_name: string;
    bio: string | null;
    avatar_url: string | null;
    website: string | null;
    favorite_color: string | null;
    followers_count: number;
    following_count: number;
    background_url: string | null;
    premium: boolean;
    language: string;
}, {
    id: string;
    created_at: string;
    private: boolean;
    username: string;
    username_updated_at: string | null;
    full_name: string;
    bio: string | null;
    avatar_url: string | null;
    website: string | null;
    favorite_color: string | null;
    followers_count: number;
    following_count: number;
    background_url: string | null;
    premium: boolean;
    language: string;
}>;
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
    }, "strip", z.ZodTypeAny, {
        id: string;
        created_at: string;
        private: boolean;
        username: string;
        username_updated_at: string | null;
        full_name: string;
        bio: string | null;
        avatar_url: string | null;
        website: string | null;
        favorite_color: string | null;
        followers_count: number;
        following_count: number;
        background_url: string | null;
        premium: boolean;
        language: string;
    }, {
        id: string;
        created_at: string;
        private: boolean;
        username: string;
        username_updated_at: string | null;
        full_name: string;
        bio: string | null;
        avatar_url: string | null;
        website: string | null;
        favorite_color: string | null;
        followers_count: number;
        following_count: number;
        background_url: string | null;
        premium: boolean;
        language: string;
    }>, "many">;
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
    data: {
        id: string;
        created_at: string;
        private: boolean;
        username: string;
        username_updated_at: string | null;
        full_name: string;
        bio: string | null;
        avatar_url: string | null;
        website: string | null;
        favorite_color: string | null;
        followers_count: number;
        following_count: number;
        background_url: string | null;
        premium: boolean;
        language: string;
    }[];
    pagination: {
        per_page: number;
        total_results: number;
        total_pages: number;
        current_page: number;
    };
}, {
    data: {
        id: string;
        created_at: string;
        private: boolean;
        username: string;
        username_updated_at: string | null;
        full_name: string;
        bio: string | null;
        avatar_url: string | null;
        website: string | null;
        favorite_color: string | null;
        followers_count: number;
        following_count: number;
        background_url: string | null;
        premium: boolean;
        language: string;
    }[];
    pagination: {
        per_page: number;
        total_results: number;
        total_pages: number;
        current_page: number;
    };
}>;
export type UserSearchQuery = z.infer<typeof userSearchQuerySchema>;
//# sourceMappingURL=user.schema.d.ts.map