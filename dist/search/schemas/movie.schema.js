"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieSearchResponseSchema = exports.movieSearchQuerySchema = void 0;
const zod_1 = require("zod");
const pagination_schema_1 = require("./common/pagination.schema");
const query_schema_1 = require("./common/query.schema");
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
exports.movieSearchQuerySchema = query_schema_1.querySchema
    .extend(pagination_schema_1.paginationQuerySchema.shape)
    .extend(sortableFieldsSchema.shape)
    .extend(filterableFieldsSchema.shape);
exports.movieSearchResponseSchema = (0, pagination_schema_1.createPaginatedResponseSchema)(zod_1.z.object({}));
//# sourceMappingURL=movie.schema.js.map