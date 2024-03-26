import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import SlideOne from "./SlideOne";
import SlideTwo from "./SlideTwo";
import SlideFour from "./SlideFour";
import SlideThre from "./SlideThree";

export default function HeroSlider() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        slidesPerView={2}
        spaceBetween={15}
        autoplay={{ delay: 2000 }}
        navigation={true}
      >
        <SwiperSlide>
          <SlideOne></SlideOne>
        </SwiperSlide>

        <SwiperSlide>
          <SlideTwo></SlideTwo>
        </SwiperSlide>

        <SwiperSlide>
          <SlideThre></SlideThre>
        </SwiperSlide>
        <SwiperSlide>
          <SlideFour></SlideFour>
        </SwiperSlide>
        <SwiperSlide>
          <SlideOne></SlideOne>
        </SwiperSlide>

        <SwiperSlide>
          <SlideTwo></SlideTwo>
        </SwiperSlide>

        <SwiperSlide>
          <SlideThre></SlideThre>
        </SwiperSlide>
        <SwiperSlide>
          <SlideFour></SlideFour>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
