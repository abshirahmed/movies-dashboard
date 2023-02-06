import { fetcher } from '@/lib/fetcher';
import { MovieResponse } from '@/pages/api/movie/validators';
import MovieCard from '@/app/components/MovieCard';

export const runtime = 'experimental-edge'; // 'nodejs' (default) | 'experimental-edge'

export default async function MoviePage({ params }: { params: { id: string } }) {
  const movie = await fetcher<MovieResponse>(process.env.API_URL + `/api/movie?i=${params.id}`);

  if (movie.Response === 'False') {
    return (
      <main>
        <h1>Movie not found</h1>
      </main>
    );
  }

  return <MovieCard {...movie} />;
}
