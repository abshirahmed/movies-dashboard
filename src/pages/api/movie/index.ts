import type { NextApiRequest, NextApiResponse } from 'next';
import { getMovie, searchMovie } from '@/lib/omdbClient';
import { MovieResponse, SearchResponse } from '@/pages/api/movie/validators';

export default async function handler(req: NextApiRequest, res: NextApiResponse<SearchResponse | MovieResponse>) {
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
      const movie = await searchMovie(req);
      res.status(200).json(movie);
      return;
    }

    const movie = await getMovie(req);
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).end();
  }
}
