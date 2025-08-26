import { z } from 'zod';
export declare const playlistSearchQuerySchema: z.ZodObject<{
    query: z.ZodString;
} & {
    page: z.ZodDefault<z.ZodNumber>;
    per_page: z.ZodDefault<z.ZodNumber>;
} & {
    sort_by: z.ZodDefault<z.ZodEnum<["created_at", "updated_at", "likes_count", "items_count"]>>;
}, "strip", z.ZodTypeAny, {
    query: string;
    page: number;
    per_page: number;
    sort_by: "created_at" | "likes_count" | "updated_at" | "items_count";
}, {
    query: string;
    page?: number | undefined;
    per_page?: number | undefined;
    sort_by?: "created_at" | "likes_count" | "updated_at" | "items_count" | undefined;
}>;
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
    }, "strip", z.ZodTypeAny, {
        user_id: string;
        id: number;
        poster_url: string | null;
        title: string;
        created_at: string;
        likes_count: number;
        updated_at: string;
        items_count: number;
        description: string | null;
        private: boolean;
        saved_count: number;
    }, {
        user_id: string;
        id: number;
        poster_url: string | null;
        title: string;
        created_at: string;
        likes_count: number;
        updated_at: string;
        items_count: number;
        description: string | null;
        private: boolean;
        saved_count: number;
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
        user_id: string;
        id: number;
        poster_url: string | null;
        title: string;
        created_at: string;
        likes_count: number;
        updated_at: string;
        items_count: number;
        description: string | null;
        private: boolean;
        saved_count: number;
    }[];
    pagination: {
        per_page: number;
        total_results: number;
        total_pages: number;
        current_page: number;
    };
}, {
    data: {
        user_id: string;
        id: number;
        poster_url: string | null;
        title: string;
        created_at: string;
        likes_count: number;
        updated_at: string;
        items_count: number;
        description: string | null;
        private: boolean;
        saved_count: number;
    }[];
    pagination: {
        per_page: number;
        total_results: number;
        total_pages: number;
        current_page: number;
    };
}>;
export type PlaylistSearchQuery = z.infer<typeof playlistSearchQuerySchema>;
//# sourceMappingURL=playlist.schema.d.ts.map