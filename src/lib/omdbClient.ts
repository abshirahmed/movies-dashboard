import {
  GetMovieQueryParams,
  GetMovieResponse,
  MovieResponse,
  SearchMovieQueryParams,
  SearchMovieResponse,
  SearchResponse
} from '@/pages/api/movie/validators';
import { NextApiRequest } from 'next';
import { fetcher } from '@/lib/fetcher';

const baseUrl = `https://www.omdbapi.com?apiKey=${process.env.OMDB_API_KEY}`;

export const getMovie = async ({ query }: NextApiRequest): Promise<MovieResponse> => {
  const getMovieQueryParams = await GetMovieQueryParams.parseAsync(query);
  const url = `${baseUrl}&${new URLSearchParams(getMovieQueryParams)}`;

  const movieResponse = await fetcher<MovieResponse>(url);

  return GetMovieResponse.parseAsync(movieResponse);
};

export const searchMovie = async ({ query }: NextApiRequest): Promise<SearchResponse> => {
  const searchMovieQueryParams = await SearchMovieQueryParams.parseAsync(query);
  const url = `${baseUrl}&${new URLSearchParams(searchMovieQueryParams)}`;

  const searchResponse = await fetcher<SearchResponse>(url);

  return SearchMovieResponse.parseAsync(searchResponse);
};
