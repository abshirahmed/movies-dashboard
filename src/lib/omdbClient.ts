import axios from 'axios';
import {
  SearchMovieQueryParams,
  SearchMovieResponse,
  GetMovieQueryParams,
  GetMovieResponse,
  MovieResponse,
  SearchResponse
} from '@/pages/api/movie/validators';
import { NextApiRequest } from 'next';

const omdbClient = axios.create({
  baseURL: 'https://www.omdbapi.com',
  params: {
    apikey: process.env.OMDB_API_KEY
  }
});

export const getMovie = async ({ query }: NextApiRequest) => {
  const getMovieQueryParams = await GetMovieQueryParams.parseAsync(query);

  const { data } = await omdbClient.get<MovieResponse>('', {
    params: getMovieQueryParams
  });

  return GetMovieResponse.parseAsync(data);
};

export const searchMovie = async ({ query }: NextApiRequest) => {
  const searchMovieQueryParams = await SearchMovieQueryParams.parseAsync(query);

  const { data } = await omdbClient.get<SearchResponse>('', {
    params: searchMovieQueryParams
  });

  return SearchMovieResponse.parseAsync(data);
};
