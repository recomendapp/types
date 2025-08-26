import { z } from 'zod';
export declare const personSearchQuerySchema: z.ZodObject<{
    query: z.ZodString;
} & {
    page: z.ZodDefault<z.ZodNumber>;
    per_page: z.ZodDefault<z.ZodNumber>;
} & {
    sort_by: z.ZodDefault<z.ZodEnum<["popularity"]>>;
}, "strip", z.ZodTypeAny, {
    query: string;
    sort_by: "popularity";
    page: number;
    per_page: number;
}, {
    query: string;
    sort_by?: "popularity" | undefined;
    page?: number | undefined;
    per_page?: number | undefined;
}>;
export declare const personSchema: z.ZodObject<{
    id: z.ZodNumber;
    url: z.ZodString;
    name: z.ZodString;
    slug: z.ZodString;
    gender: z.ZodNullable<z.ZodNumber>;
    imdb_id: z.ZodNullable<z.ZodString>;
    birthday: z.ZodNullable<z.ZodString>;
    deathday: z.ZodNullable<z.ZodString>;
    homepage: z.ZodNullable<z.ZodString>;
    biography: z.ZodNullable<z.ZodString>;
    popularity: z.ZodNullable<z.ZodNumber>;
    profile_url: z.ZodNullable<z.ZodString>;
    profile_path: z.ZodNullable<z.ZodString>;
    place_of_birth: z.ZodNullable<z.ZodString>;
    known_for_department: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    popularity: number | null;
    id: number;
    url: string;
    name: string;
    slug: string;
    gender: number | null;
    imdb_id: string | null;
    birthday: string | null;
    deathday: string | null;
    homepage: string | null;
    biography: string | null;
    profile_url: string | null;
    profile_path: string | null;
    place_of_birth: string | null;
    known_for_department: string | null;
}, {
    popularity: number | null;
    id: number;
    url: string;
    name: string;
    slug: string;
    gender: number | null;
    imdb_id: string | null;
    birthday: string | null;
    deathday: string | null;
    homepage: string | null;
    biography: string | null;
    profile_url: string | null;
    profile_path: string | null;
    place_of_birth: string | null;
    known_for_department: string | null;
}>;
export declare const personSearchResponseSchema: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        url: z.ZodString;
        name: z.ZodString;
        slug: z.ZodString;
        gender: z.ZodNullable<z.ZodNumber>;
        imdb_id: z.ZodNullable<z.ZodString>;
        birthday: z.ZodNullable<z.ZodString>;
        deathday: z.ZodNullable<z.ZodString>;
        homepage: z.ZodNullable<z.ZodString>;
        biography: z.ZodNullable<z.ZodString>;
        popularity: z.ZodNullable<z.ZodNumber>;
        profile_url: z.ZodNullable<z.ZodString>;
        profile_path: z.ZodNullable<z.ZodString>;
        place_of_birth: z.ZodNullable<z.ZodString>;
        known_for_department: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        popularity: number | null;
        id: number;
        url: string;
        name: string;
        slug: string;
        gender: number | null;
        imdb_id: string | null;
        birthday: string | null;
        deathday: string | null;
        homepage: string | null;
        biography: string | null;
        profile_url: string | null;
        profile_path: string | null;
        place_of_birth: string | null;
        known_for_department: string | null;
    }, {
        popularity: number | null;
        id: number;
        url: string;
        name: string;
        slug: string;
        gender: number | null;
        imdb_id: string | null;
        birthday: string | null;
        deathday: string | null;
        homepage: string | null;
        biography: string | null;
        profile_url: string | null;
        profile_path: string | null;
        place_of_birth: string | null;
        known_for_department: string | null;
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
        popularity: number | null;
        id: number;
        url: string;
        name: string;
        slug: string;
        gender: number | null;
        imdb_id: string | null;
        birthday: string | null;
        deathday: string | null;
        homepage: string | null;
        biography: string | null;
        profile_url: string | null;
        profile_path: string | null;
        place_of_birth: string | null;
        known_for_department: string | null;
    }[];
    pagination: {
        per_page: number;
        total_results: number;
        total_pages: number;
        current_page: number;
    };
}, {
    data: {
        popularity: number | null;
        id: number;
        url: string;
        name: string;
        slug: string;
        gender: number | null;
        imdb_id: string | null;
        birthday: string | null;
        deathday: string | null;
        homepage: string | null;
        biography: string | null;
        profile_url: string | null;
        profile_path: string | null;
        place_of_birth: string | null;
        known_for_department: string | null;
    }[];
    pagination: {
        per_page: number;
        total_results: number;
        total_pages: number;
        current_page: number;
    };
}>;
export type PersonSearchQuery = z.infer<typeof personSearchQuerySchema>;
//# sourceMappingURL=person.schema.d.ts.map