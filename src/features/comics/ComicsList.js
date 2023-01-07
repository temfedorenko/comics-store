import ComicCard from "./ComicCard";
import "./ComicsList.scss";

const ComicsList = ({ comics }) => {
  const renderedComics = comics.map((comic) => {
    return <ComicCard key={comic.id} comic={comic} />;
  });

  return <ul className="comics__cards">{renderedComics}</ul>;
};

export default ComicsList;
