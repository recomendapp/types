"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginationResponseSchema = exports.paginationQuerySchema = void 0;
exports.createPaginatedResponseSchema = createPaginatedResponseSchema;
const zod_1 = require("zod");
exports.paginationQuerySchema = zod_1.z.object({
    page: zod_1.z.coerce.number().int().min(1).default(1),
    per_page: zod_1.z.coerce.number().int().min(1).max(50).default(20),
});
exports.paginationResponseSchema = zod_1.z.object({
    total_results: zod_1.z.number().int(),
    total_pages: zod_1.z.number().int(),
    current_page: zod_1.z.number().int(),
    per_page: zod_1.z.number().int(),
});
function createPaginatedResponseSchema(itemSchema) {
    return zod_1.z.object({
        data: zod_1.z.array(itemSchema),
        pagination: exports.paginationResponseSchema,
    });
}
//# sourceMappingURL=pagination.schema.js.map