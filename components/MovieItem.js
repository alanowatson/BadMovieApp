import Link from 'next/link';
import { imageUrlStart } from '../secrets';

import movieStyles from '../styles/Movie.module.css';

const MovieItem = ({ movie }) => {
  return (
    <Link href='/movie/[id]' as={`/movie/${movie.id}`}>
      <a className={movieStyles.card}>
        <h3>{movie.title}</h3>
        <p>Average user rating: {movie.vote_average}</p>
        <img
          className={movieStyles.poster}
          src={`${imageUrlStart}${movie.poster_path}`}
        />
      </a>
    </Link>
  );
};

export default MovieItem;
