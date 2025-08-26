import { z } from 'zod';
import { createPaginatedResponseSchema, paginationQuerySchema } from './common/pagination.schema';
import { querySchema } from './common/query.schema';

const sortableFieldsSchema = z.object({
	sort_by: z.enum(['created_at', 'updated_at', 'likes_count', 'items_count']).default('created_at'),
});

export const playlistSearchQuerySchema = querySchema
	.extend(paginationQuerySchema.shape)
	.extend(sortableFieldsSchema.shape);

export const playlistSearchResponseSchema = createPaginatedResponseSchema(z.object({
	id: z.number().int(),
	created_at: z.string(),
	updated_at: z.string(),
	user_id: z.string(),
	title: z.string(),
	description: z.string().nullable(),
	poster_url: z.string().nullable(),
	private: z.boolean(),
	items_count: z.number().min(0),
	saved_count: z.number().min(0),
	likes_count: z.number().min(0),
}));

export type PlaylistSearchQuery = z.infer<typeof playlistSearchQuerySchema>;