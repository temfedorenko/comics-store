import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getComics } from "../../api/api";

export function ComicsList() {
  // api test
  const [comics, setComics] = useState([]);
  useEffect(() => {
    getComics().then(setComics);
  }, []);

  const renderedComics = comics?.map((comic) => {
    return (
      <li key={comic.id}>
        <p>{comic.title}</p>
        <img src={comic.thumbnail} alt="" />
      </li>
    );
  });

  return <div>{renderedComics}</div>;
}

export default ComicsList;
