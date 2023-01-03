import { Swiper as CardsSwiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import { ReactComponent as ArrowRightIcon } from "../../assets/icons/arrow-right.svg";

import ComicCard from "../../features/comics/ComicCard";

import "./NewComicsSlider.scss";

const NewComicsSlider = ({ comics }) => {
  const renderedSlides = comics.map((comic) => {
    return (
      <SwiperSlide key={comic.id}>
        <ComicCard {...comic} />
      </SwiperSlide>
    );
  });

  return (
    <div className="cards-slider">
      <div className="cards-slider__wrapper">
        <div className="cards-slider-btn cards-slider-btn-prev">
          <ArrowRightIcon className="arrow" />
        </div>
        <div className="cards-slider-btn cards-slider-btn-next">
          <ArrowRightIcon />
        </div>
        <CardsSwiper
          navigation={{
            nextEl: ".cards-slider-btn-next",
            prevEl: ".cards-slider-btn-prev",
            disabledClass: "cards-slider-btn-disabled",
          }}
          speed={500}
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={4}
          slidesPerGroup={4}>
          {renderedSlides}
        </CardsSwiper>
      </div>
    </div>
  );
};

export default NewComicsSlider;
