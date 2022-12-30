import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedComicSelector, fetchOneComic } from "./selectedComicSlice";

import "./SelectedComic.scss";
import ComicInfo from "../comics/ComicInfo";

const SelectedComic = () => {
  const { comicId } = useParams();
  const selectedComic = useSelector(selectedComicSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOneComic(comicId));
  }, []);

  return (
    <section className="selected-comic comic">
      <h1 className="comic__title">{selectedComic.title}</h1>
      <div className="comic__container">
        <img className="comic__image" src={selectedComic.thumbnail} />
        <div className="comic__info-wrapper">
          <ComicInfo {...selectedComic} />
          <div className="comic__info-about">
            <h2 className="comic__info-about-title">About</h2>
            <p className="comic__info-about-descr">{selectedComic.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectedComic;
