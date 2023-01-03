import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchComics } from "../../features/comics/comicsSlice";
import BannerSlider from "../bannerSlider/BannerSlider";
import CardsSlider from "../cardsSlider/CardsSlider";

const HomePage = () => {
  const comics = useSelector((state) => state.comics.comics);
  const newestComics = comics
    .slice()
    .sort((prev, next) => +next.year - +prev.year)
    .slice(0, 12);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!comics.length) {
      dispatch(fetchComics());
    }
  }, []);
  return (
    <>
      <BannerSlider />
      <CardsSlider type="new" title="New Comics" comics={newestComics} />
      <CardsSlider type="hot" title="HOT Comics" comics={comics.slice(20, 32)} />
    </>
  );
};

export default HomePage;
