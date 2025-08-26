import { z } from 'zod';
import { createPaginatedResponseSchema, paginationQuerySchema } from './common/pagination.schema';
import { querySchema } from './common/query.schema';

const sortableFieldsSchema = z.object({
	sort_by: z.enum(['popularity']).default('popularity')
});

const filterableFieldsSchema = z.object({
    genre_ids: z.string().optional(),
	runtime_min: z.coerce.number().int().min(0).optional(),
    runtime_max: z.coerce.number().int().min(0).optional(),
    release_date_start: z.coerce.number().int().optional(),
    release_date_end: z.coerce.number().int().optional(),
});

export const movieSearchQuerySchema = querySchema
	.extend(paginationQuerySchema.shape)
	.extend(sortableFieldsSchema.shape)
	.extend(filterableFieldsSchema.shape);

export const movieSearchResponseSchema = createPaginatedResponseSchema(z.object({
	
}));

export type MovieSearchQuery = z.infer<typeof movieSearchQuerySchema>;