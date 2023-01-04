import { useSelector } from "react-redux";
import ComicCard from "../comics/ComicCard";
import { favoritesSelector } from "./favoritesSlice";

const FavoriteList = () => {
  const favorites = useSelector(favoritesSelector);

  const renderedFavorites = favorites.map((favComic) => {
    return <ComicCard key={favComic.id} comic={favComic} />;
  });

  return <ul className="comics__cards">{renderedFavorites}</ul>;
};

export default FavoriteList;
