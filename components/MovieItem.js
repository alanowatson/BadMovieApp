import Link from 'next/link';

import movieStyles from '../styles/Movie.module.css';

const MovieItem = ({ movie }) => {
  return (
    <Link href='/article/[id]' as={`/article/${movie.id}`}>
      <a className={movieStyles.card}>
        <h3>{movie.title} &rarr;</h3>
        <p>{movie.body}</p>
      </a>
    </Link>
  );
};

export default MovieItem;
