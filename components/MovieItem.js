import Link from 'next/link';
import { imageUrlStart } from '../secrets';

import movieStyles from '../styles/Movie.module.css';

const MovieItem = ({ movie }) => {
  return (
    <Link href='/article/[id]' as={`/article/${movie.id}`}>
      <a className={movieStyles.card}>
        <h3>{movie.title} &rarr;</h3>
        <p>{movie.vote_average}</p>
        <img
          className='card-poster'
          src={`${imageUrlStart}${movie.poster_path}`}
        />
      </a>
    </Link>
  );
};

export default MovieItem;
