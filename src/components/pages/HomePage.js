import { Helmet } from "react-helmet";
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
      <Helmet>
        <meta name="description" content="Marvel comics store" />
        <title>Comics Store</title>
      </Helmet>
      <section>
        <BannerSlider />
      </section>
      <section>
        <CardsSlider type="new" title="New Comics" comics={newestComics} />
      </section>
      <section>
        <CardsSlider type="hot" title="HOT Comics" comics={comics.slice(20, 32)} />
      </section>
    </>
  );
};

export default HomePage;
