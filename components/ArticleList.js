import ArticleItem from './ArticleItem';
import articleStyles from '../styles/Article.module.css';

const ArticleList = ({ movies }) => {
  return (
    <div className={articleStyles.grid}>
      {movies.map((movie) => (
        <ArticleItem movie={movie} />
      ))}
    </div>
  );
};

export default ArticleList;
