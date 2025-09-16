import { z } from 'zod';
import { querySchema, createPaginatedResponseSchema, paginationQuerySchema } from './common';

export const userSearchQuerySchema = querySchema.extend({
	...paginationQuerySchema.shape,
	exclude_ids: z.string().optional()
});

export const userSchema = z.object({
	id: z.string(),
	username: z.string(),
	full_name: z.string(),
	bio: z.string().nullable(),
	avatar_url: z.string().nullable(),
	website: z.string().nullable(),
	favorite_color: z.string().nullable(),
	followers_count: z.number().min(0),
	following_count: z.number().min(0),
	background_url: z.string().nullable(),
	premium: z.boolean(),
	private: z.boolean(),
	visible: z.boolean(),
	created_at: z.string(),
});

export const userSearchResponseSchema = createPaginatedResponseSchema(userSchema);

export type UserSearchQuery = z.infer<typeof userSearchQuerySchema>;
export type UserSearchResponse = z.infer<typeof userSearchResponseSchema>;