"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playlistSearchResponseSchema = exports.playlistSearchQuerySchema = void 0;
const zod_1 = require("zod");
const common_1 = require("./common");
const sortableFieldsSchema = zod_1.z.object({
    sort_by: zod_1.z.enum(['created_at', 'updated_at', 'likes_count', 'items_count']).default('created_at'),
});
exports.playlistSearchQuerySchema = common_1.querySchema
    .extend(common_1.paginationQuerySchema.shape)
    .extend(sortableFieldsSchema.shape);
exports.playlistSearchResponseSchema = (0, common_1.createPaginatedResponseSchema)(zod_1.z.object({
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