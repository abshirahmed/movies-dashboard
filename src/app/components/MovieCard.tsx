import { MovieResponse } from '@/pages/api/movie/validators';
import Image from 'next/image';
import Link from 'next/link';

export default function MovieCard(props: MovieResponse) {
  const genres = props?.Genre?.split(', ');

  return (
    <div className="flex flex-col">
      <div className="py-3 sm:mx-auto sm:max-w-xl">
        <div className="flex max-h-80 space-x-8 rounded-3xl border bg-white p-8 shadow-lg">
          <div className="w-1/2 overflow-visible">
            <Image className="rounded-3xl shadow-lg" src={props?.Poster!} alt="" width={300} height={450} />
          </div>
          <div className="flex w-1/2 flex-col space-y-4">
            <div className="flex items-start justify-between">
              <Link href={`https://imdb.com/title/${props.imdbID}`} className="hover:underline" target="_blank">
                <h2 className="text-3xl font-bold">{props.Title}</h2>
              </Link>
              <div className="rounded-xl bg-yellow-400 p-2 font-bold">{props.imdbRating}</div>
            </div>
            <div className="hidden md:block">
              <div className="text-sm capitalize text-gray-400">{props.Type}</div>
              <div className="text-lg text-gray-800">{props.Year}</div>
            </div>
            <p className=" max-h-40 overflow-auto text-gray-400">{props.Plot}</p>
            <div className="hidden flex-wrap gap-2 sm:flex">
              {genres?.map((actor, index) => (
                <div
                  key={index}
                  className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800"
                >
                  {actor}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
