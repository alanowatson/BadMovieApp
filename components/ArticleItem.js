import Link from 'next/link';

import articleStyles from '../styles/Article.module.css';

const ArticleItem = ({ movie }) => {
  return (
    <Link href='/article/[id]' as={`/article/${movie.id}`}>
      <a className={articleStyles.card}>
        <h3>{movie.title} &rarr;</h3>
        <p>{movie.body}</p>
      </a>
    </Link>
  );
};

export default ArticleItem;
