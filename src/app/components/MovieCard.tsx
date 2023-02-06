import { MovieResponse } from '@/pages/api/movie/validators';
import Image from 'next/image';
import Link from 'next/link';

type MovieCardProps = Pick<MovieResponse, 'imdbID' | 'Title' | 'Plot' | 'Poster'>;

export default function MovieCard(props: MovieCardProps) {
  return (
    <Link
      href={`/movie/${props.imdbID}`}
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <Image
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
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
