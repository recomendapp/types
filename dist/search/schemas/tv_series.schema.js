"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tvSeriesSearchResponseSchema = exports.tvSeriesSchema = exports.tvSeriesSearchQuerySchema = void 0;
const zod_1 = require("zod");
const common_1 = require("./common");
const person_schema_1 = require("./person.schema");
const sortableFieldsSchema = zod_1.z.object({
    sort_by: zod_1.z.enum(['popularity']).default('popularity')
});
const filterableFieldsSchema = zod_1.z.object({
    genre_ids: zod_1.z.string().optional(),
    number_of_seasons_min: zod_1.z.coerce.number().int().optional(),
    number_of_seasons_max: zod_1.z.coerce.number().int().optional(),
    number_of_episodes_min: zod_1.z.coerce.number().int().optional(),
    number_of_episodes_max: zod_1.z.coerce.number().int().optional(),
    vote_average_min: zod_1.z.coerce.number().min(0).optional(),
    vote_average_max: zod_1.z.coerce.number().min(0).optional(),
    first_air_date_min: zod_1.z.coerce.number().int().optional(),
    first_air_date_max: zod_1.z.coerce.number().int().optional()
});
exports.tvSeriesSearchQuerySchema = common_1.querySchema
    .extend(common_1.paginationQuerySchema.shape)
    .extend(sortableFieldsSchema.shape)
    .extend(filterableFieldsSchema.shape);
exports.tvSeriesSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    name: zod_1.z.string(),
    poster_path: zod_1.z.string().nullable(),
    poster_url: zod_1.z.string().nullable(),
    backdrop_path: zod_1.z.string().nullable(),
    backdrop_url: zod_1.z.string().nullable(),
    created_by: zod_1.z.array(person_schema_1.personSchema).nullable(),
    genres: zod_1.z.array(zod_1.z.object({
        id: zod_1.z.number().int(),
        name: zod_1.z.string()
    })).nullable(),
    first_air_date: zod_1.z.string().nullable(),
    last_air_date: zod_1.z.string().nullable(),
    overview: zod_1.z.string().nullable(),
    number_of_episodes: zod_1.z.number().int().nullable(),
    number_of_seasons: zod_1.z.number().int().nullable(),
    in_production: zod_1.z.boolean().nullable(),
    original_language: zod_1.z.string().nullable(),
    original_name: zod_1.z.string().nullable(),
    status: zod_1.z.string().nullable(),
    type: zod_1.z.string().nullable(),
    popularity: zod_1.z.number().nullable(),
    vote_average: zod_1.z.number().nullable(),
    vote_count: zod_1.z.number().int().nullable(),
    slug: zod_1.z.string().nullable(),
    url: zod_1.z.string().nullable(),
    follower_avg_rating: zod_1.z.number().nullable()
});
exports.tvSeriesSearchResponseSchema = (0, common_1.createPaginatedResponseSchema)(exports.tvSeriesSchema);
//# sourceMappingURL=tv_series.schema.js.map