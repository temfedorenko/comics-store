import { Link } from "react-router-dom";

import logo from "../../assets/logo-black.png";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow-down.svg";

import "./Footer.scss";

const Footer = () => {
  const scrollUp = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__logo">
          <Link to="#">
            <img src={logo} width="70" alt="logo" />
          </Link>
        </div>
        <nav className="footer__menu menu">
          <ul className="menu__list">
            <li className="menu__item">
              <a
                href="https://github.com/temfedorenko/comics-store"
                className="menu__link white"
                target="_blank">
                github
              </a>
            </li>
            <li className="menu__item">
              <Link to="/contacts" className="menu__link">
                contacts
              </Link>
            </li>
          </ul>
        </nav>
        <div className="footer__to-top" onClick={scrollUp}>
          <span className="footer__to-top-label">Back to top</span>
          <div className="footer__to-top-btn">
            <ArrowIcon />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
