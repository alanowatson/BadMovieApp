import Link from 'next/link';
import { MovieAPIkey, imageUrlStart } from '../../../secrets';

const movie = ({ movie }) => {
  // const router = useRouter();
  // const { id } = router.query;
  return (
    <>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <br />
      <img src={`${imageUrlStart}${movie.images.backdrops[0].file_path}`} />
      <Link href='/'>Go Back</Link>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${context.params.id}?api_key=${MovieAPIkey}&append_to_response=images`
  );
  const movie = await res.json();

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
