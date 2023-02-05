import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchMovieBySearch, fetchMovieByTitleOrId } from '@/lib/omdbClient';
import { MovieFetchResponse, MovieSearchResponse } from '@/pages/api/movie/validators';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MovieSearchResponse | MovieFetchResponse>
) {
  if (req.method !== 'GET') {
    res.status(405).end();
    return;
  }

  if (!req.query) {
    res.status(400).end();
    return;
  }

  if (!req.query.i && !req.query.t && !req.query.s) {
    res.status(400).end();
    return;
  }

  try {
    if (req.query.s) {
      const movie = await fetchMovieBySearch(req);
      res.status(200).json(movie);
      return;
    }

    const movie = await fetchMovieByTitleOrId(req);
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).end();
    return;
  }
}
