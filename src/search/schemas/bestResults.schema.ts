import { z } from "zod";
import { querySchema } from "./common";
import { movieSchema, movieSearchResponseSchema } from "./movie.schema";
import { tvSeriesSchema, tvSeriesSearchResponseSchema } from "./tv_series.schema";
import { personSchema, personSearchResponseSchema } from "./person.schema";
import { userSchema, userSearchResponseSchema } from "./user.schema";
import { playlistSchema, playlistSearchResponseSchema } from "./playlist.schema";

export const bestResultsSearchQuerySchema = querySchema;

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