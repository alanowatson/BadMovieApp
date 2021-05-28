import Link from 'next/link';
import { MovieAPIkey, imageUrlStart } from '../../../secrets';
import movieStyles from '../../../styles/Movie.module.css';

const movie = ({ movie }) => {
  // const router = useRouter();
  // const { id } = router.query;
  return (
    <>
      <div className={movieStyles.grid}>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <p>
          Genre:{' '}
          {movie.genres.map((genre, idx) => {
            return <span key={`${genre.name}${idx}`}>{genre.name} </span>;
          })}
        </p>
      </div>
      <img
        className={movieStyles.posterBig}
        src={`${imageUrlStart}${movie.images.backdrops[0].file_path}`}
      />

      <hr />

      <Link href='/'>Go Back</Link>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${context.params.id}?api_key=${MovieAPIkey}&append_to_response=images`
  );
  const movie = await res.json();
  console.log('single Movie', movie);

  return {
    props: {
      movie,
    },
  };
};

export const getStaticPaths = async () => {
  // const res = await fetch(
  //   `https://api.themoviedb.org/3/discover/movie?api_key=${MovieAPIkey}&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1`
  // );

  const res = await fetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${MovieAPIkey}`
  );

  const movieObj = await res.json();
  const movies = movieObj.results.filter((movie) => {
    if (movie.vote_average < 7.0) return true;
  });

  const ids = movies.map((movie) => movie.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default movie;
