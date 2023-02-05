import { z } from 'zod';

const BaseMovieQuery = z.object({
  type: z.union([z.literal('movie'), z.literal('series'), z.literal('episode')]).optional(),
  y: z.string().optional()
});

const MovieResponseBase = z.object({
  Title: z.string(),
  Year: z.string(),
  imdbID: z.string(),
  Type: z.string(),
  Poster: z.string()
});

export const MovieByTitleOrIdQueryParameters = BaseMovieQuery.extend({
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

export const MovieBySearchQueryParameters = BaseMovieQuery.extend({
  s: z.string(),
  page: z.number().optional()
});

export const MovieByTitleOrIdResponse = MovieResponseBase.extend({
  Rated: z.string(),
  Released: z.string(),
  Runtime: z.string(),
  Genre: z.string(),
  Director: z.string(),
  Writer: z.string(),
  Actors: z.string(),
  Plot: z.string(),
  Language: z.string(),
  Country: z.string(),
  Awards: z.string(),
  Ratings: z.array(
    z.object({
      Source: z.string(),
      Value: z.string()
    })
  ),
  imdbRating: z.string(),
  imdbVotes: z.string(),
  DVD: z.string(),
  BoxOffice: z.string(),
  Production: z.string(),
  Website: z.string(),
  Response: z.string()
}).deepPartial();

export const MovieBySearchResponse = z
  .object({
    Search: z.array(MovieResponseBase),
    totalResults: z.string(),
    Response: z.string()
  })
  .deepPartial();

export type MovieFetchResponse = z.infer<typeof MovieByTitleOrIdResponse>;

export type MovieSearchResponse = z.infer<typeof MovieBySearchResponse>;