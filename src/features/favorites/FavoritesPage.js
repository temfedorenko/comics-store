import { useDispatch, useSelector } from "react-redux";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";

import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import FavoriteList from "./FavoritesList";
import { favoritesSelector, favoritesUpdated } from "./favoritesSlice";

import "./FavoritesPage.scss";

const FavoritesPage = () => {
  const favorites = useSelector(favoritesSelector);

  const dispatch = useDispatch();

  const infoContent =
    favorites.length === 0 ? (
      <div className="section-info">
        <h2>Please, choose your favorites comics</h2>
        <Link to="/comics" className="hero-emoji">
          🦸‍♀️
        </Link>
      </div>
    ) : (
      <>
        <p className="section-counter">{favorites.length} items</p>
        <button
          onClick={() => dispatch(favoritesUpdated([]))}
          className="comics__filters-btn clear-btn">
          Clear favorites
        </button>
      </>
    );
  return (
    <>
      <Helmet>
        <meta name="description" content="List of favorites marvel comics" />
        <title>Favorites - Comics Store</title>
      </Helmet>
      <section>
        <Breadcrumbs firstPath={"Favorites"} />
        <h1 className="section-title">Favorites</h1>
        {infoContent}
        <FavoriteList />
      </section>
    </>
  );
};

export default FavoritesPage;
