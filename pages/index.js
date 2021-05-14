import MovieAPIkey from '../secrets.js';

import { server } from '../config';
import ArticleList from '../components/ArticleList';

export default function Home({ movies }) {
  console.log(movies);
  return (
    <div>
      <ArticleList movies={movies} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=baa04c13778d34c2b0aacb32ef7fed1c&query=Jack+Reacher`
  );
  // `https://api.themoviedb.org/3/search/movie?api_key=${MovieAPIkey}&query=Jack+Reacher`
  // or using server `${server}/api/articles`
  const movieObj = await res.json();
  const movies = movieObj.results;

  return {
    props: {
      movies,
    },
  };
};
