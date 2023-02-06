import { MovieResponse } from '@/pages/api/movie/validators';
import Image from 'next/image';
import Link from 'next/link';

type MovieCardProps = Pick<MovieResponse, 'imdbID' | 'Title' | 'Plot' | 'Poster'>;

export default function MovieCard(props: MovieCardProps) {
  return (
    <Link
      href={`/movie/${props.imdbID}`}
      className="flex flex-col items-center rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-xl md:flex-row"
    >
      <Image
        className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={props.Poster!}
        alt=""
        width={200}
        height={450}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.Title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.Plot}</p>
      </div>
    </Link>
  );
}
