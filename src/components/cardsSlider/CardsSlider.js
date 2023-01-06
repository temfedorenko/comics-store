import { Swiper as CardsSwiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useSelector } from "react-redux";

import { ReactComponent as ArrowRightIcon } from "../../assets/icons/arrow-right.svg";
import ComicCard from "../../features/comics/ComicCard";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

import "./CardsSlider.scss";

const CardsSlider = ({ type, title, comics }) => {
  const status = useSelector((state) => state.comics.status);

  const renderedSlides = comics.map((comic) => {
    return (
      <SwiperSlide key={comic.id}>
        <ComicCard comic={comic} />
      </SwiperSlide>
    );
  });

  const createControllersClasses = (btn) => {
    return `${type}-cards-slider__btn ${type}-cards-slider__btn-${btn}`;
  };

  const prevBtnClasses = createControllersClasses("prev");
  const nextBtnClasses = createControllersClasses("next");
  const prevEl = `.${type}-cards-slider__btn-prev`;
  const nextEl = `.${type}-cards-slider__btn-next`;

  const errorMessage = status === "error" && <ErrorMessage />;
  const spinner = status === "loading" && <Spinner />;

  return (
    <div className="cards-slider">
      <div className="cards-slider__top">
        <h2 className="cards-slider__title">{title}</h2>
        <div className="cards-slider__controllers">
          <div className={prevBtnClasses}>
            <ArrowRightIcon className="arrow" />
          </div>
          <div className={nextBtnClasses}>
            <ArrowRightIcon />
          </div>
        </div>
      </div>
      {errorMessage}
      {spinner}
      {status === "idle" && (
        <div className="cards-slider__wrapper">
          <CardsSwiper
            navigation={{
              nextEl,
              prevEl,
              disabledClass: "cards-slider__btn_disabled",
            }}
            speed={800}
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            slidesPerGroup={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },

              1200: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
              1400: {
                slidesPerView: 4,
                slidesPerGroup: 4,
              },
            }}>
            {renderedSlides}
          </CardsSwiper>
        </div>
      )}
    </div>
  );
};

export default CardsSlider;
