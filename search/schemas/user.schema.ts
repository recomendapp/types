import { z } from 'zod';
import { createPaginatedResponseSchema, paginationQuerySchema } from './common/pagination.schema';
import { querySchema } from './common/query.schema';

export const userSearchQuerySchema = querySchema.extend({
	...paginationQuerySchema.shape,
	exclude_ids: z.string().optional()
});

export const userSearchResponseSchema = createPaginatedResponseSchema(z.object({
	id: z.string(),
	username: z.string(),
	username_updated_at: z.string().nullable(),
	full_name: z.string(),
	bio: z.string().nullable(),
	avatar_url: z.string().nullable(),
	website: z.string().nullable(),
	favorite_color: z.string().nullable(),
	followers_count: z.number().min(0),
	following_count: z.number().min(0),
	created_at: z.string(),
	background_url: z.string().nullable(),
	premium: z.boolean(),
	language: z.string(),
	private: z.boolean(),
}));

export type UserSearchQuery = z.infer<typeof userSearchQuerySchema>;