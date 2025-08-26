import { z } from 'zod';
import { querySchema, createPaginatedResponseSchema, paginationQuerySchema } from './common';
import { personSchema } from './person.schema';

const sortableFieldsSchema = z.object({
	sort_by: z.enum(['popularity']).default('popularity')
});

const filterableFieldsSchema = z.object({
    genre_ids: z.string().optional(),
    number_of_seasons_min: z.coerce.number().int().optional(),
    number_of_seasons_max: z.coerce.number().int().optional(),
	number_of_episodes_min: z.coerce.number().int().optional(),
	number_of_episodes_max: z.coerce.number().int().optional(),
	vote_average_min: z.coerce.number().min(0).optional(),
	vote_average_max: z.coerce.number().min(0).optional(),
	first_air_date_min: z.coerce.number().int().optional(),
	first_air_date_max: z.coerce.number().int().optional()
});

export const tvSeriesSearchQuerySchema = querySchema
	.extend(paginationQuerySchema.shape)
	.extend(sortableFieldsSchema.shape)
	.extend(filterableFieldsSchema.shape);

export const tvSeriesSchema = z.object({
	id: z.number().int(),
	name: z.string(),
	poster_path: z.string().nullable(),
	poster_url: z.string().nullable(),
	backdrop_path: z.string().nullable(),
	backdrop_url: z.string().nullable(),
	created_by: z.array(personSchema).nullable(),
	genres: z.array(z.object({
		id: z.number().int(),
		name: z.string()
	})).nullable(),
	first_air_date: z.string().nullable(),
	last_air_date: z.string().nullable(),
	overview: z.string().nullable(),
	number_of_episodes: z.number().int().nullable(),
	number_of_seasons: z.number().int().nullable(),
	in_production: z.boolean().nullable(),
	original_language: z.string().nullable(),
	original_name: z.string().nullable(),
	status: z.string().nullable(),
	type: z.string().nullable(),
	popularity: z.number().nullable(),
	vote_average: z.number().nullable(),
	vote_count: z.number().int().nullable(),
	slug: z.string().nullable(),
	url: z.string().nullable(),
	follower_avg_rating: z.number().nullable()
});

export const tvSeriesSearchResponseSchema = createPaginatedResponseSchema(tvSeriesSchema);

export type TvSeriesSearchQuery = z.infer<typeof tvSeriesSearchQuerySchema>;