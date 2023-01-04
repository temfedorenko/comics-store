import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { selectedComicSelector, fetchOneComic } from "./selectedComicSlice";

import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow-down.svg";

import "./SelectedComic.scss";
import ComicInfo from "../comics/ComicInfo";
import Spinner from "../../components/spinner/Spinner";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";

const SelectedComic = () => {
  const { comicId } = useParams();
  const selectedComic = useSelector(selectedComicSelector);
  const status = useSelector((state) => state.selectedComic.status);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOneComic(comicId));
  }, [comicId]);

  const errorMessage = status === "error" && <ErrorMessage />;
  const spinner = status === "loading" && <Spinner />;

  return (
    <>
      {errorMessage}
      {spinner}
      {status === "idle" && (
        <section className="selected-comic comic">
          <Breadcrumbs firstPath={"Comics"} secondPath={selectedComic.title} />

          <button className="comic__back" onClick={() => navigate(-1)}>
            <ArrowIcon />
            <span>Back</span>
          </button>
          <h1 className="comic__title">{selectedComic.title}</h1>
          <div className="comic__container">
            <img className="comic__image" src={selectedComic.thumbnail} />
            <div className="comic__info-wrapper">
              <ComicInfo comic={selectedComic} />
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
