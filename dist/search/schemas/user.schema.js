"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSearchResponseSchema = exports.userSearchQuerySchema = void 0;
const zod_1 = require("zod");
const pagination_schema_1 = require("./common/pagination.schema");
const query_schema_1 = require("./common/query.schema");
exports.userSearchQuerySchema = query_schema_1.querySchema.extend({
    ...pagination_schema_1.paginationQuerySchema.shape,
    exclude_ids: zod_1.z.string().optional()
});
exports.userSearchResponseSchema = (0, pagination_schema_1.createPaginatedResponseSchema)(zod_1.z.object({
    id: zod_1.z.string(),
    username: zod_1.z.string(),
    username_updated_at: zod_1.z.string().nullable(),
    full_name: zod_1.z.string(),
    bio: zod_1.z.string().nullable(),
    avatar_url: zod_1.z.string().nullable(),
    website: zod_1.z.string().nullable(),
    favorite_color: zod_1.z.string().nullable(),
    followers_count: zod_1.z.number().min(0),
    following_count: zod_1.z.number().min(0),
    created_at: zod_1.z.string(),
    background_url: zod_1.z.string().nullable(),
    premium: zod_1.z.boolean(),
    language: zod_1.z.string(),
    private: zod_1.z.boolean(),
}));
//# sourceMappingURL=user.schema.js.map