import { useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import ComicCard from "../comics/ComicCard";
import { favoritesSelector } from "./favoritesSlice";

const FavoriteList = () => {
  const favorites = useSelector(favoritesSelector);

  const renderedFavorites = favorites.map((favComic) => (
    <CSSTransition key={favComic.id} timeout={600} classNames="item">
      <ComicCard key={favComic.id} comic={favComic} />
    </CSSTransition>
  ));

  return (
    <TransitionGroup component="ul" className="comics__cards">
      {renderedFavorites}
    </TransitionGroup>
  );
};

export default FavoriteList;
