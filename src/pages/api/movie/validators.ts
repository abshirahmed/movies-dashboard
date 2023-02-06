import { z } from 'zod';

const MovieQueryParamsBase = z.object({
  type: z.union([z.literal('movie'), z.literal('series'), z.literal('episode')]).optional(),
  y: z.string().optional()
});

const MovieResponseBase = z.object({
  Title: z.string().optional(),
  Year: z.string().optional(),
  imdbID: z.string().optional(),
  Type: z.string().optional(),
  Poster: z.string().optional()
});

export const GetMovieQueryParams = MovieQueryParamsBase.extend({
  i: z.string().optional(),
  t: z.string().optional(),
  plot: z.union([z.literal('short'), z.literal('full')]).optional()
}).superRefine(({ i, t }, ctx) => {
  if (!i && !t) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['i', 't'],
      message: "While both 'i' and 't' are optional at least one argument is required",
      fatal: true
    });
  }
  return z.NEVER;
});

export const SearchMovieQueryParams = MovieQueryParamsBase.extend({
  s: z.string(),
  page: z.string().optional()
});

export const GetMovieResponse = MovieResponseBase.extend({
  Rated: z.string().optional(),
  Released: z.string().optional(),
  Runtime: z.string().optional(),
  Genre: z.string().optional(),
  Director: z.string().optional(),
  Writer: z.string().optional(),
  Actors: z.string().optional(),
  Plot: z.string().optional(),
  Language: z.string().optional(),
  Country: z.string().optional(),
  Awards: z.string().optional(),
  Ratings: z
    .array(
      z.object({
        Source: z.string().optional(),
        Value: z.string().optional()
      })
    )
    .optional(),
  imdbRating: z.string().optional(),
  imdbVotes: z.string().optional(),
  DVD: z.string().optional(),
  BoxOffice: z.string().optional(),
  Production: z.string().optional(),
  Website: z.string().optional(),
  Response: z.string(),
  Error: z.string().optional()
});

export const SearchMovieResponse = z.object({
  Search: z.array(MovieResponseBase).optional(),
  totalResults: z.string().optional(),
  Response: z.string(),
  Error: z.string().optional()
});

export type MovieResponse = z.infer<typeof GetMovieResponse>;

export type SearchResponse = z.infer<typeof SearchMovieResponse>;
