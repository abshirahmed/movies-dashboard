import axios from 'axios';
import {
  MovieBySearchQueryParameters,
  MovieBySearchResponse,
  MovieByTitleOrIdQueryParameters,
  MovieByTitleOrIdResponse,
  MovieFetchResponse,
  MovieSearchResponse
} from '@/pages/api/movie/validators';
import { NextApiRequest } from 'next';

const omdbClient = axios.create({
  baseURL: 'https://www.omdbapi.com',
  params: {
    apikey: process.env.OMDB_API_KEY
  }
});

export const fetchMovieByTitleOrId = async ({ query }: NextApiRequest) => {
  const movieByTitleOrIdQueryParameters = await MovieByTitleOrIdQueryParameters.parseAsync(query);

  const { data } = await omdbClient.get<MovieFetchResponse>('', {
    params: movieByTitleOrIdQueryParameters
  });

  return MovieByTitleOrIdResponse.parseAsync(data);
};

export const fetchMovieBySearch = async ({ query }: NextApiRequest) => {
  const movieBySearchQueryParameters = await MovieBySearchQueryParameters.parseAsync(query);

  const { data } = await omdbClient.get<MovieSearchResponse>('', {
    params: movieBySearchQueryParameters
  });

  return MovieBySearchResponse.parseAsync(data);
};
