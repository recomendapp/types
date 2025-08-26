import { z } from "zod";
import { querySchema } from "./common";
import { movieSchema, movieSearchResponseSchema } from "./movie.schema";
import { tvSeriesSchema, tvSeriesSearchResponseSchema } from "./tv_series.schema";
import { personSchema, personSearchResponseSchema } from "./person.schema";
import { userSchema, userSearchResponseSchema } from "./user.schema";
import { playlistSchema, playlistSearchResponseSchema } from "./playlist.schema";

export const allSearchQuerySchema = querySchema;

export const allSearchResponseSchema = z.object({
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

export type AllSearchQuery = z.infer<typeof allSearchQuerySchema>;
export type AllSearchResponse = z.infer<typeof allSearchResponseSchema>;