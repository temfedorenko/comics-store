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

  const renderedComics = comics.map((comic) => {
    return <ComicCard key={comic.id} {...comic} />;
  });

  console.log(comics);

  return <ul className="comics__cards">{renderedComics}</ul>;
};

export default ComicsList;
