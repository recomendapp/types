"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allSearchResponseSchema = exports.allSearchQuerySchema = void 0;
const zod_1 = require("zod");
const common_1 = require("./common");
const movie_schema_1 = require("./movie.schema");
const tv_series_schema_1 = require("./tv_series.schema");
const person_schema_1 = require("./person.schema");
const user_schema_1 = require("./user.schema");
const playlist_schema_1 = require("./playlist.schema");
exports.allSearchQuerySchema = common_1.querySchema;
exports.allSearchResponseSchema = zod_1.z.object({
    bestResult: zod_1.z.object({
        type: zod_1.z.enum(['movie', 'tv_series', 'person', 'user', 'playlist']),
        data: zod_1.z.union([
            movie_schema_1.movieSchema,
            tv_series_schema_1.tvSeriesSchema,
            person_schema_1.personSchema,
            user_schema_1.userSchema,
            playlist_schema_1.playlistSchema
        ])
    }).nullable(),
    movies: movie_schema_1.movieSearchResponseSchema,
    tv_series: tv_series_schema_1.tvSeriesSearchResponseSchema,
    persons: person_schema_1.personSearchResponseSchema,
    users: user_schema_1.userSearchResponseSchema,
    playlists: playlist_schema_1.playlistSearchResponseSchema
});
//# sourceMappingURL=all.schema.js.map