import MovieItem from './MovieItem';
import movieStyles from '../styles/Movie.module.css';

const MovieList = ({ movies }) => {
  return (
    <div className={movieStyles.grid}>
      {movies.map((movie) => (
        <MovieItem movie={movie} key={`${movie.id}`} />
      ))}
    </div>
  );
};

export default MovieList;
