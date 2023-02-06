export const runtime = 'experimental-edge'; // 'nodejs' (default) | 'experimental-edge'

import { fetcher } from '@/lib/fetcher';
import { MovieResponse } from '@/pages/api/movie/validators';

export default async function MoviePage({ params }: { params: { id: string } }) {
  const { Title } = await fetcher<MovieResponse>(`/api/movie?i=${params.id}`);

  return (
    <main>
      <h1>Title: {Title}</h1>
    </main>
  );
}
