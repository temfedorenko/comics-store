import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchComics } from "../comics/comicsSlice";
import CardsSlider from "../../components/cardsSlider/CardsSlider";
import SelectedComic from "./SelectedComic";

const SelectedComicPage = () => {
  const comics = useSelector((state) => state.comics.comics);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchComics());
  }, []);
  return (
    <>
      <SelectedComic />
      <CardsSlider type="rec" title="You may also like" comics={comics.slice(75, 90)} />
    </>
  );
};

export default SelectedComicPage;
