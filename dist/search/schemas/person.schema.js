"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.personSearchResponseSchema = exports.personSchema = exports.personSearchQuerySchema = void 0;
const zod_1 = require("zod");
const common_1 = require("./common");
const sortableFieldsSchema = zod_1.z.object({
    sort_by: zod_1.z.enum(['popularity']).default('popularity')
});
exports.personSearchQuerySchema = common_1.querySchema
    .extend(common_1.paginationQuerySchema.shape)
    .extend(sortableFieldsSchema.shape);
exports.personSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    url: zod_1.z.string(),
    name: zod_1.z.string(),
    slug: zod_1.z.string(),
    gender: zod_1.z.number().nullable(),
    imdb_id: zod_1.z.string().nullable(),
    birthday: zod_1.z.string().nullable(),
    deathday: zod_1.z.string().nullable(),
    homepage: zod_1.z.string().nullable(),
    biography: zod_1.z.string().nullable(),
    popularity: zod_1.z.number().nullable(),
    profile_url: zod_1.z.string().nullable(),
    profile_path: zod_1.z.string().nullable(),
    place_of_birth: zod_1.z.string().nullable(),
    known_for_department: zod_1.z.string().nullable()
});
exports.personSearchResponseSchema = (0, common_1.createPaginatedResponseSchema)(exports.personSchema);
//# sourceMappingURL=person.schema.js.map