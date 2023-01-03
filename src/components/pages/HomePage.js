import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchComics } from "../../features/comics/comicsSlice";
import BannerSlider from "../bannerSlider/BannerSlider";
import NewComicsSlider from "../newComicsSlider/NewComicsSlider";

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
      <NewComicsSlider comics={newestComics} />
    </>
  );
};

export default HomePage;
