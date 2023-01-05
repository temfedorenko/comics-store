import { useDispatch, useSelector } from "react-redux";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import FavoriteList from "./FavoritesList";
import { favoritesSelector, setFavorites } from "./favoritesSlice";

import "./FavoritesPage.scss";

const FavoritesPage = () => {
  const favorites = useSelector(favoritesSelector);

  const dispatch = useDispatch();

  const infoContent =
    favorites.length === 0 ? (
      <h2 className="section-info">Please choose your favorites comics</h2>
    ) : (
      <>
        <p className="section-counter">{favorites.length} items</p>
        <button
          onClick={() => dispatch(setFavorites([]))}
          className="comics__filters-btn clear-btn">
          Clear favorites
        </button>
      </>
    );
  return (
    <section>
      <Breadcrumbs firstPath={"Favorites"} />
      <h1 className="section-title">Favorites</h1>
      {infoContent}
      <FavoriteList />
    </section>
  );
};

export default FavoritesPage;
