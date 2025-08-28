import { z } from "zod";
import { querySchema } from "./common";
import { movieSchema, movieSearchResponseSchema } from "./movie.schema";
import { tvSeriesSchema, tvSeriesSearchResponseSchema } from "./tv_series.schema";
import { personSchema, personSearchResponseSchema } from "./person.schema";
import { userSchema, userSearchResponseSchema } from "./user.schema";
import { playlistSchema, playlistSearchResponseSchema } from "./playlist.schema";

export const bestResultsSearchQuerySchema = querySchema
	.extend(z.object({
		results_per_type: z.coerce.number().int().min(1).max(50).default(10)
	}).shape);

export const bestResultsSearchResponseSchema = z.object({
	bestResult: z.object({
		type: z.enum(['movie', 'tv_series', 'person', 'user', 'playlist']),
		data: z.union([
			movieSchema,
			tvSeriesSchema,
			personSchema,
			userSchema,
			playlistSchema
		])
	}).nullable(),
	movies: movieSearchResponseSchema,
	tv_series: tvSeriesSearchResponseSchema,
	persons: personSearchResponseSchema,
	users: userSearchResponseSchema,
	playlists: playlistSearchResponseSchema
});

export type BestResultsSearchQuery = z.infer<typeof bestResultsSearchQuerySchema>;
export type BestResultsSearchResponse = z.infer<typeof bestResultsSearchResponseSchema>;