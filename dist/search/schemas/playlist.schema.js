"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playlistSearchResponseSchema = exports.playlistSearchQuerySchema = void 0;
const zod_1 = require("zod");
const pagination_schema_1 = require("./common/pagination.schema");
const query_schema_1 = require("./common/query.schema");
const sortableFieldsSchema = zod_1.z.object({
    sort_by: zod_1.z.enum(['created_at', 'updated_at', 'likes_count', 'items_count']).default('created_at'),
});
exports.playlistSearchQuerySchema = query_schema_1.querySchema
    .extend(pagination_schema_1.paginationQuerySchema.shape)
    .extend(sortableFieldsSchema.shape);
exports.playlistSearchResponseSchema = (0, pagination_schema_1.createPaginatedResponseSchema)(zod_1.z.object({
    id: zod_1.z.number().int(),
    created_at: zod_1.z.string(),
    updated_at: zod_1.z.string(),
    user_id: zod_1.z.string(),
    title: zod_1.z.string(),
    description: zod_1.z.string().nullable(),
    poster_url: zod_1.z.string().nullable(),
    private: zod_1.z.boolean(),
    items_count: zod_1.z.number().min(0),
    saved_count: zod_1.z.number().min(0),
    likes_count: zod_1.z.number().min(0),
}));
//# sourceMappingURL=playlist.schema.js.map