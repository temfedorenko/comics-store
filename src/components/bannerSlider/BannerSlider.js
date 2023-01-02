import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import { ReactComponent as ArrowRightIcon } from "../../assets/icons/arrow-right.svg";
import firstSlider from "../../assets/images/marvel-comics1.jpg";
import secondSlider from "../../assets/images/marvel-comics2.jpg";
import thirdSlider from "../../assets/images/marvel-comics3.jpg";
import "swiper/css";

import "./BannerSlider.scss";

const BannerSlider = () => {
  return (
    <div className="swiper__wrapper">
      <div className="swiper-btn swiper-btn-prev">
        <ArrowRightIcon className="arrow" />
      </div>
      <div className="swiper-btn swiper-btn-next">
        <ArrowRightIcon />
      </div>
      <Swiper
        navigation={{
          nextEl: ".swiper-btn-next",
          prevEl: ".swiper-btn-prev",
          disabledClass: "swiper-btn-disabled",
        }}
        speed={500}
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}>
        <SwiperSlide>
          <img src={firstSlider} alt="comic" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={secondSlider} alt="comic" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={thirdSlider} alt="comic" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
