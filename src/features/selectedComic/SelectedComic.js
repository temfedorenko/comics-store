import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectedComicSelector, fetchOneComic } from "./selectedComicSlice";

import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow-down.svg";

import "./SelectedComic.scss";
import ComicInfo from "../comics/ComicInfo";
import Spinner from "../../components/spinner/Spinner";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";

const SelectedComic = () => {
  const { comicId } = useParams();
  const selectedComic = useSelector(selectedComicSelector);
  const status = useSelector((state) => state.selectedComic.status);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOneComic(comicId));
  }, []);

  const errorMessage = status === "error" && <ErrorMessage />;
  const spinner = status === "loading" && <Spinner />;

  return (
    <>
      {errorMessage}
      {spinner}
      {status === "idle" && (
        <section className="selected-comic comic">
          <Link to="/comics" className="comic__back">
            <ArrowIcon />
            <span>Back</span>
          </Link>
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
      )}
    </>
  );
};

export default SelectedComic;
