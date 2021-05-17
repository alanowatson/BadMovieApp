import { MovieAPIkey } from '../secrets.js';

import { server } from '../config';
import MovieList from '../components/MovieList';

export default function Home({ movies }) {
  console.log(movies);
  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${MovieAPIkey}`
  );
  // `https://api.themoviedb.org/3/search/movie?api_key=${MovieAPIkey}&query=Jack+Reacher`
  // or using server `${server}/api/articles`
  const movieObj = await res.json();
  const movies = movieObj.results.filter((movie) => {
    if (movie.vote_average < 7.0) return true;
  });
  console.log(movies);

  return {
    props: {
      movies,
    },
  };
};
