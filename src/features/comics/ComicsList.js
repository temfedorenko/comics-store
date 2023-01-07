import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchComics, comicsSelector } from "./comicsSlice";
import ComicCard from "./ComicCard";
import "./ComicsList.scss";
import ComicsFilters from "./ComicsFilters";
import Spinner from "../../components/spinner/Spinner";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import ComicsSortingSelect from "./ComicsSortingSelect";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import SearchPanel from "../../components/searchPanel/SearchPanel";

const ComicsList = () => {
  const comics = useSelector(comicsSelector);
  const status = useSelector((state) => state.comics.status);
  const searchQuery = useSelector((state) => state.comics.searchQuery);
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
          .sort((prev, next) => Number.parseInt(prev.price) - Number.parseInt(next.price));
      case "price-high":
        return comics
          .slice()
          .sort((prev, next) => Number.parseInt(next.price) - Number.parseInt(prev.price));
      case "date":
        return comics.slice().sort((prev, next) => Number(next.year) - Number(prev.year));
      case "alphabetically":
        return comics.slice().sort((prev, next) => prev.title.localeCompare(next.title));
      default:
        return comics;
    }
  };

  const searchComics = (items) => {
    if (!searchQuery) {
      return items;
    }

    return items.filter((item) => {
      return item.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
  };

  const sortedComics = searchComics(sortComics());

  const renderedComics = sortedComics.map((comic) => {
    return <ComicCard key={comic.id} comic={comic} />;
  });

  const errorMessage = status === "error" ? <ErrorMessage /> : null;
  const spinner = status === "loading" && <Spinner />;

  return (
    <>
      {errorMessage}
      {spinner}
      {status === "idle" && (
        <section className="comics">
          <Breadcrumbs firstPath={"Comics"} />
          <h1 className="section-title">Comics</h1>
          <p className="section-counter">{sortedComics.length} items</p>
          <ComicsSortingSelect filter={sortBy} onFilterSelect={handleSortBySelect} />
          <ComicsFilters />
          <SearchPanel />
          <ul className="comics__cards">{renderedComics}</ul>
        </section>
      )}
      {status === "idle" && sortedComics.length === 0 && (
        <p className="comics__empty"> There are no comics on your request. Please, try again 🦸‍♀️</p>
      )}
    </>
  );
};

export default ComicsList;
