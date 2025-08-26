"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieSearchResponseSchema = exports.movieSchema = exports.movieSearchQuerySchema = void 0;
const zod_1 = require("zod");
const common_1 = require("./common");
const person_schema_1 = require("./person.schema");
const sortableFieldsSchema = zod_1.z.object({
    sort_by: zod_1.z.enum(['popularity']).default('popularity')
});
const filterableFieldsSchema = zod_1.z.object({
    genre_ids: zod_1.z.string().optional(),
    runtime_min: zod_1.z.coerce.number().int().min(0).optional(),
    runtime_max: zod_1.z.coerce.number().int().min(0).optional(),
    release_date_start: zod_1.z.coerce.number().int().optional(),
    release_date_end: zod_1.z.coerce.number().int().optional(),
});
exports.movieSearchQuerySchema = common_1.querySchema
    .extend(common_1.paginationQuerySchema.shape)
    .extend(sortableFieldsSchema.shape)
    .extend(filterableFieldsSchema.shape);
exports.movieSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    title: zod_1.z.string(),
    poster_path: zod_1.z.string().nullable(),
    poster_url: zod_1.z.string().nullable(),
    backdrop_path: zod_1.z.string().nullable(),
    backdrop_url: zod_1.z.string().nullable(),
    directors: zod_1.z.array(person_schema_1.personSchema).nullable(),
    genres: zod_1.z.array(zod_1.z.object({
        id: zod_1.z.number().int(),
        name: zod_1.z.string()
    })).nullable(),
    release_date: zod_1.z.string().nullable(),
    overview: zod_1.z.string().nullable(),
    budget: zod_1.z.number().int().nullable(),
    homepage: zod_1.z.string().nullable(),
    revenue: zod_1.z.number().int().nullable(),
    runtime: zod_1.z.number().int().nullable(),
    original_language: zod_1.z.string().nullable(),
    original_title: zod_1.z.string().nullable(),
    status: zod_1.z.string().nullable(),
    popularity: zod_1.z.number().nullable(),
    vote_average: zod_1.z.number().nullable(),
    vote_count: zod_1.z.number().int().nullable(),
    slug: zod_1.z.string().nullable(),
    url: zod_1.z.string().nullable(),
    follower_avg_rating: zod_1.z.number().nullable()
});
exports.movieSearchResponseSchema = (0, common_1.createPaginatedResponseSchema)(exports.movieSchema);
//# sourceMappingURL=movie.schema%20copy.js.map