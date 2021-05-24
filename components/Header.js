import headerStyles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        What <span>NOT</span> To Watch
      </h1>
    </div>
  );
};

export default Header;
