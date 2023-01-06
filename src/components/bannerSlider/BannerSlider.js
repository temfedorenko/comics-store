import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import { ReactComponent as ArrowRightIcon } from "../../assets/icons/arrow-right.svg";
import firstSlider from "../../assets/images/marvel-comics1.jpg";
import secondSlider from "../../assets/images/marvel-comics2.jpg";
import thirdSlider from "../../assets/images/marvel-comics3.jpg";
import fourthSlider from "../../assets/images/marvel-comics4.jpg";
import fifthSlider from "../../assets/images/marvel-comics5.jpg";
import "swiper/css";

import "./BannerSlider.scss";

const BannerSlider = () => {
  const pagination = {
    clickable: true,
    el: ".swiper-pagination",
    renderBullet: () => {
      return '<span class="swiper-pagination-bullet"></span>';
    },
  };

  return (
    <div className="banner-slider">
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
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={pagination}
          breakpoints={
            {
              // 640: {
              //   slidesPerView: 2,
              //   spaceBetween: 20,
              // },
              // 768: {
              //   slidesPerView: 4,
              //   spaceBetween: 40,
              // },
              // 1024: {
              //   slidesPerView: 5,
              //   spaceBetween: 50,
              // },
            }
          }>
          <SwiperSlide>
            <img src={firstSlider} alt="comic" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={secondSlider} alt="comic" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={thirdSlider} alt="comic" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={fourthSlider} alt="comic" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={fifthSlider} alt="comic" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default BannerSlider;
