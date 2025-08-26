import { z } from 'zod';
import { querySchema, createPaginatedResponseSchema, paginationQuerySchema } from './common';

const sortableFieldsSchema = z.object({
	sort_by: z.enum(['popularity']).default('popularity')
});

export const personSearchQuerySchema = querySchema
	.extend(paginationQuerySchema.shape)
	.extend(sortableFieldsSchema.shape)

export const personSchema = z.object({
	id: z.number().int(),
	url: z.string(),
	name: z.string(),
	slug: z.string(),
	gender: z.number().nullable(),
	imdb_id: z.string().nullable(),
	birthday: z.string().nullable(),
	deathday: z.string().nullable(),
	homepage: z.string().nullable(),
	biography: z.string().nullable(),
	popularity: z.number().nullable(),
	profile_url: z.string().nullable(),
	profile_path: z.string().nullable(),
	place_of_birth: z.string().nullable(),
	known_for_department: z.string().nullable()
});

export const personSearchResponseSchema = createPaginatedResponseSchema(personSchema);

export type PersonSearchQuery = z.infer<typeof personSearchQuerySchema>;