import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchComics, comicsSelector } from "./comicsSlice";

import ComicCard from "./ComicCard";
import "./ComicsList.scss";

const ComicsList = () => {
  const comics = useSelector(comicsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComics());
  }, []);

  const oneComic = comics.slice(10);

  const renderedComics = oneComic.map((comic) => {
    return <ComicCard key={comic.id} {...comic} />;
  });

  return <ul className="comics__cards">{renderedComics}</ul>;
};

export default ComicsList;
