import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";

import logo from "../../assets/logo-black.png";
import { cartSelector } from "../../features/cart/cartSlice";
import { favoritesSelector } from "../../features/favorites/favoritesSlice";
import SearchPanel from "../searchPanel/SearchPanel";
import "./Header.scss";

const Header = () => {
  const favorites = useSelector(favoritesSelector);
  const cart = useSelector(cartSelector);

  const favoritesCounter = favorites.length;
  const cartCounter = cart.length;

  const menuLinkClasses = ({ isActive }) =>
    ["menu__link", isActive ? "menu__link active-link" : null].join(" ");

  const menuIconClasses = ({ isActive }) =>
    ["header__icons-item", isActive ? "header__icons-item active-link" : null].join(" ");

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
              <NavLink to="/" className={menuLinkClasses}>
                home
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink to="comics" className={menuLinkClasses}>
                comics
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink to="heroes" className={menuLinkClasses}>
                heroes
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="header__actions">
          <SearchPanel />
          <div className="header__icons">
            <NavLink to="/favorites" className={menuIconClasses}>
              <span className="header__icon header__icon-favorites">
                {favoritesCounter > 0 && (
                  <div className="header__icon-counter">{favoritesCounter}</div>
                )}
              </span>
            </NavLink>
            <NavLink to="/cart" className={menuIconClasses}>
              <span className="header__icon header__icon-store">
                {cartCounter > 0 && <div className="header__icon-counter">{cartCounter}</div>}
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
