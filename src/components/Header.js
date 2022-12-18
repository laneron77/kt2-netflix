import NetflixLogo from '../assets/Logonetflix.png';
import '../styles/header.scss'
import Form from './subComponents/Form';
import LangSelect from './subComponents/LangSelect';

const Header = () => {
  return (
    <div className="header-container">
      <header>
        <img className="netflix-logo" src={NetflixLogo} alt="Netflix Logo" />
        <div>
          <LangSelect />
          <a href="/" className="signin-btn">
            Увійти
          </a>
        </div>
      </header>
      <div className="showcase-wrapper">
        <div className="showcase">
          <p className="showcase-title">
          Фільми, серіали й інший контент без обмежень.
          </p>
          <p className="showcase-sub-title">
          Дивіться будь-де. Скасувати підписку можна будь-коли.
          </p>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Header;