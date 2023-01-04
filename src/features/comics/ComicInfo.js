import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  favoritesSelector,
  removeFromFavorites,
} from "../favorites/favoritesSlice";

import { addToCart, removeFromCart, cartSelector } from "../cart/cartSlice";

import { ReactComponent as EmptyHeartIcon } from "../../assets/icons/favorites-empty.svg";
import { ReactComponent as FillHeartIcon } from "../../assets/icons/favorites-fill.svg";

import "./ComicInfo.scss";

const ComicInfo = ({ comic }) => {
  const { id, price, format, pageCount, language, year } = comic;
  const dispatch = useDispatch();

  const favorites = useSelector(favoritesSelector);
  const isAddedToFavorites = favorites.find((favComic) => favComic.id === comic.id);

  const cart = useSelector(cartSelector);
  const isAddedToCart = cart.find((item) => item.id === comic.id);

  return (
    <div className="comic__info">
      <div className="comic__info-price">{price ? `$${price}` : `Not available`}</div>
      <div className="comic__info-features">
        <div className="comic__info-feature">
          <span className="comic__info-feature-label">Format</span>
          <span className="comic__info-feature-value">{format}</span>
        </div>
        <div className="comic__info-feature">
          <span className="comic__info-feature-label">Pages</span>
          <span className="comic__info-feature-value">{pageCount}</span>
        </div>
        <div className="comic__info-feature language">
          <span className="comic__info-feature-label">Language</span>
          <span className="comic__info-feature-value">{language}</span>
        </div>
        <div className="comic__info-feature">
          <span className="comic__info-feature-label">Year</span>
          <span className="comic__info-feature-value">{year}</span>
        </div>
      </div>

      <div className="comic__info-actions">
        {isAddedToCart ? (
          <button
            className="comic__info-button button add-button button_added"
            onClick={() => dispatch(removeFromCart(id))}>
            Added to cart
          </button>
        ) : (
          <button
            className="comic__info-button button add-button"
            onClick={() => dispatch(addToCart(comic))}
            disabled={!price}>
            Add to cart
          </button>
        )}

        {isAddedToFavorites ? (
          <button
            className="comic__info-favorite-btn"
            onClick={() => dispatch(removeFromFavorites(id))}>
            <FillHeartIcon />
          </button>
        ) : (
          <button
            className="comic__info-favorite-btn"
            onClick={() => dispatch(addToFavorites(comic))}>
            <EmptyHeartIcon />
          </button>
        )}
      </div>
    </div>
  );
};

export default ComicInfo;
