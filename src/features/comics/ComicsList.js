import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchComics, comicsSelector } from "./comicsSlice";

import { ReactComponent as EmptyHeartIcon } from "../../assets/icons/favorites-empty.svg";
import { ReactComponent as FillHeartIcon } from "../../assets/icons/favorites-fill.svg";
import "./ComicsList.scss";

const ComicsList = () => {
  const comics = useSelector(comicsSelector);
  console.log(comics);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComics());
  }, []);

  const oneComic = comics.slice(10);

  const renderedComics = oneComic.map((comic) => {
    return (
      <li key={comic.id} className="comics__card">
        <div className="comics__card-content">
          <a href={`/comics/${comic.id}`}>
            <img src={comic.thumbnail} alt={comic.title} className="comics__card-image" />
          </a>

          <a href={`/comics/${comic.id}`} className="comics__card-title">
            {comic.title}
          </a>
        </div>

        <div className="comics__card-price">{comic.price}</div>
        <div className="comics__card-features">
          <div className="comics__card-feature">
            <span className="comics__card-feature-label">Format</span>
            <span className="comics__card-feature-value">{comic.format}</span>
          </div>
          <div className="comics__card-feature">
            <span className="comics__card-feature-label">Pages</span>
            <span className="comics__card-feature-value">{comic.pageCount}</span>
          </div>
        </div>

        <div className="comics__card-actions">
          <button className="comics__card-button button add-button">Add to card</button>
          <div className="comics__card-favorite-btn">
            <EmptyHeartIcon />
          </div>
        </div>
      </li>
    );
  });

  return <ul className="comics__cards">{renderedComics}</ul>;
};

export default ComicsList;
