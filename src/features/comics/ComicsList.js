import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchComics, comicsSelector } from "./comicsSlice";

import ComicCard from "./ComicCard";
import "./ComicsList.scss";
import ComicsFilter from "./ComicsFilters";

const ComicsList = () => {
  const comics = useSelector(comicsSelector);
  const dispatch = useDispatch();

  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    dispatch(fetchComics());
  }, []);

  const handleSortBySelect = (e) => {
    setSortBy(e.target.value);
    localStorage.setItem("sortBy", e.target.value);
  };

  useEffect(() => {
    if (localStorage.getItem("sortBy")) {
      setSortBy(localStorage.getItem("sortBy"));
    }
  }, []);

  const sortComics = () => {
    switch (sortBy) {
      case "price-low":
        return comics
          .slice()
          .sort(
            (prevComic, nextComic) =>
              Number.parseInt(prevComic.price) - Number.parseInt(nextComic.price)
          );
      case "price-high":
        return comics
          .slice()
          .sort(
            (prevComic, nextComic) =>
              Number.parseInt(nextComic.price) - Number.parseInt(prevComic.price)
          );
      case "date":
        return comics
          .slice()
          .sort((prevComic, nextComic) => Number(nextComic.year) - Number(prevComic.year));
      case "alphabetically":
        return comics
          .slice()
          .sort((prevComic, nextComic) => prevComic.title.localeCompare(nextComic.title));
      default:
        return comics;
    }
  };

  const sortedComics = sortComics();

  const renderedComics = sortedComics.map((comic) => {
    return <ComicCard key={comic.id} {...comic} />;
  });

  return (
    <section className="comics">
      <h1 className="comics__title">Comics</h1>
      <p className="comics__counter">{comics.length} items</p>
      <div className="comics__sorting">
        <label className="comics__sorting-label">
          Sort by
          <select
            className="comics__sorting-select"
            name="sortBy"
            value={sortBy}
            onChange={handleSortBySelect}>
            <option value="rating">Rating</option>
            <option value="price-low">Price (low-high)</option>
            <option value="price-high">Price (high-low)</option>
            <option value="date">Newest</option>
            <option value="alphabetically">Alphabetically</option>
          </select>
        </label>
      </div>
      <ComicsFilter />
      <ul className="comics__cards">{renderedComics}</ul>
    </section>
  );
};

export default ComicsList;
