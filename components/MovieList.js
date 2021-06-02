import MovieItem from './MovieItem';
import movieStyles from '../styles/Movie.module.css';
import headerStyles from '../styles/Header.module.css';

const MovieList = ({ movies }) => {
  return (
    <div className={movieStyles.grid}>
      <h2 className={headerStyles.description}>
        This week's worst trending movies and TV. Skip em, or learn more if
        you're into that sort of thing.
      </h2>
      {movies.map((movie) => (
        <MovieItem movie={movie} key={`${movie.id}`} />
      ))}
    </div>
  );
};

export default MovieList;
