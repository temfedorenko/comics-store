import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";

import { fetchComics } from "../comics/comicsSlice";
import CardsSlider from "../../components/cardsSlider/CardsSlider";
import SelectedComic from "./SelectedComic";
import { selectedComicSelector } from "./selectedComicSlice";

const SelectedComicPage = () => {
  const comics = useSelector((state) => state.comics.comics);
  const selectedComic = useSelector(selectedComicSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchComics());
  }, []);
  return (
    <>
      <Helmet>
        <meta name="description" content={`${selectedComic.title} - comic`} />
        <title>{selectedComic.title}</title>
      </Helmet>
      <SelectedComic />
      <CardsSlider type="rec" title="You may also like" comics={comics.slice(75, 90)} />
    </>
  );
};

export default SelectedComicPage;
