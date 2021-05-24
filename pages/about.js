import Meta from '../components/Meta';

import movieStyles from '../styles/Movie.module.css';

const about = () => {
  return (
    <div>
      <Meta title='About' />
      <h1>About WNTW...</h1>
      <p>
        What not to watch examines what's trending this week and only shows
        lower rated titles. In a world that is trying to get you to recommend
        things to watch, we're highlighting this weeks worst-rated (but somehow
        popular) titles.
      </p>

      <p>
        What not to watch is made with <a href='https://Next.js.org'>Next.JS</a>{' '}
        Next.JS and{' '}
        <a href='https://www.themoviedb.org/'>the Movie Database API.</a>
      </p>
    </div>
  );
};

export default about;
