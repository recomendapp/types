import { z } from 'zod';
import { querySchema, createPaginatedResponseSchema, paginationQuerySchema } from './common';
import { personSchema } from './person.schema';

const sortableFieldsSchema = z.object({
	sort_by: z.enum(['popularity']).default('popularity')
});

const filterableFieldsSchema = z.object({
    genre_ids: z.string().optional(),
	runtime_min: z.coerce.number().int().min(0).optional(),
    runtime_max: z.coerce.number().int().min(0).optional(),
    release_date_min: z.coerce.number().int().optional(),
    release_date_max: z.coerce.number().int().optional(),
});

export const movieSearchQuerySchema = querySchema
	.extend(paginationQuerySchema.shape)
	.extend(sortableFieldsSchema.shape)
	.extend(filterableFieldsSchema.shape);

export const movieSchema = z.object({
	id: z.number().int(),
	title: z.string(),
	poster_path: z.string().nullable(),
	poster_url: z.string().nullable(),
	backdrop_path: z.string().nullable(),
	backdrop_url: z.string().nullable(),
	directors: z.array(personSchema).nullable(),
	genres: z.array(z.object({
		id: z.number().int(),
		name: z.string()
	})).nullable(),
	release_date: z.string().nullable(),
	overview: z.string().nullable(),
	budget: z.number().int().nullable(),
	homepage: z.string().nullable(),
	revenue: z.number().int().nullable(),
	runtime: z.number().int().nullable(),
	original_language: z.string().nullable(),
	original_title: z.string().nullable(),
	status: z.string().nullable(),
	popularity: z.number().nullable(),
	vote_average: z.number().nullable(),
	vote_count: z.number().int().nullable(),
	slug: z.string().nullable(),
	url: z.string().nullable(),
	follower_avg_rating: z.number().nullable()
});

export const movieSearchResponseSchema = createPaginatedResponseSchema(movieSchema);

export type MovieSearchQuery = z.infer<typeof movieSearchQuerySchema>;