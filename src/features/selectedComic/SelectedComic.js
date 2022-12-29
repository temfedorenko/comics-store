import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedComicSelector, fetchOneComic } from "./selectedComicSlice";

import "./SelectedComic.scss";

const SelectedComic = () => {
  const { comicId } = useParams();
  const selectedComic = useSelector(selectedComicSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOneComic(comicId));
  }, []);

  return <h1 className="comic__title">Selected Comic: {selectedComic.title}</h1>;
};

export default SelectedComic;
