import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import classNames from "classnames";

import logo from "../../assets/logo-black.png";
import { cartSelector } from "../../features/cart/cartSlice";
import { favoritesSelector } from "../../features/favorites/favoritesSlice";
import MenuButton from "./MenuButton";

import "./Menu.scss";

const Menu = ({ isOpen, closeMenu }) => {
  const favorites = useSelector(favoritesSelector);
  const cart = useSelector(cartSelector);

  const favoritesCounter = favorites.length;
  const cartCounter = cart.length;

  const menuLinkClasses = ({ isActive }) =>
    ["menu__link", isActive ? "menu__link active-link" : null].join(" ");

  const menuIconClasses = ({ isActive }) =>
    ["mobile__icons-item", isActive ? "mobile__icons-item active-link" : null].join(" ");

  return (
    <div className={classNames({ mobile: true, active: isOpen })} onClick={closeMenu}>
      <div className="mobile__logo">
        <Link to="/">
          <img src={logo} width="70" alt="logo" />
        </Link>
      </div>
      <nav className="mobile__menu menu">
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
      <div className="mobile__icons">
        <NavLink to="/favorites" className={menuIconClasses}>
          <span className="mobile__icon mobile__icon-favorites">
            {favoritesCounter > 0 && <div className="mobile__icon-counter">{favoritesCounter}</div>}
          </span>
        </NavLink>
        <NavLink to="/cart" className={menuIconClasses}>
          <span className="mobile__icon mobile__icon-store">
            {cartCounter > 0 && <div className="mobile__icon-counter">{cartCounter}</div>}
          </span>
        </NavLink>
      </div>
      <MenuButton />
    </div>
  );
};

export default Menu;
