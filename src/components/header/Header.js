import { NavLink, Link } from "react-router-dom";

import logo from "../../assets/logo-black.png";
import SearchPanel from "../searchPanel/SearchPanel";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <nav className="header__menu menu">
          <div className="header__logo">
            <Link to="#">
              <img src={logo} width="70" alt="logo" />
            </Link>
          </div>
          <ul className="menu__list">
            <li className="menu__item">
              <NavLink to="/" className="menu__link white">
                home
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink to="/comics" className="menu__link">
                comics
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink to="#" className="menu__link">
                heroes
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="header__actions">
          <SearchPanel />
          <div className="header__icons">
            <Link to="/favorites" className="header__icons-item">
              <span className="header__icon header__icon-favorites"></span>
            </Link>
            <Link to="/store" className="header__icons-item">
              <span className="header__icon header__icon-store"></span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
