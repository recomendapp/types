import { z } from "zod";
import { createPaginatedResponseSchema, paginationQuerySchema, querySchema } from "./common";
import { movieSchema } from "./movie.schema";
import { tvSeriesSchema } from "./tv_series.schema";
import { personSchema } from "./person.schema";
import { userSchema } from "./user.schema";
import { playlistSchema } from "./playlist.schema";

export const allSearchQuerySchema = querySchema
	.extend(paginationQuerySchema.shape);

const searchResultItemSchema = z.discriminatedUnion("type", [
	z.object({ type: z.literal("movie"), data: movieSchema }),
	z.object({ type: z.literal("tv_series"), data: tvSeriesSchema }),
	z.object({ type: z.literal("person"), data: personSchema }),
	z.object({ type: z.literal("user"), data: userSchema }),
	z.object({ type: z.literal("playlist"), data: playlistSchema }),
]);

export const allSearchResponseSchema = createPaginatedResponseSchema(searchResultItemSchema);


export type AllSearchQuery = z.infer<typeof allSearchQuerySchema>;
export type AllSearchResponse = z.infer<typeof allSearchResponseSchema>;