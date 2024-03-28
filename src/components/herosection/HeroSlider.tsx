import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import SlideOne from "./SlideOne";
import SlideTwo from "./SlideTwo";
import SlideThree from "./SlideThree";
import SlideFour from "./SlideFour";

export default function HeroSlider() {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
      // autoplay={{ delay: 2000 }}
      navigation={true}
      breakpoints={{
        480: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
      }}
    >
      <SwiperSlide>
        <SlideOne />
      </SwiperSlide>
      <SwiperSlide>
        <SlideTwo />
      </SwiperSlide>
      <SwiperSlide>
        <SlideThree />
      </SwiperSlide>
      <SwiperSlide>
        <SlideFour />
      </SwiperSlide>
      <SwiperSlide>
        <SlideOne />
      </SwiperSlide>
      <SwiperSlide>
        <SlideTwo />
      </SwiperSlide>
      <SwiperSlide>
        <SlideThree />
      </SwiperSlide>
      <SwiperSlide>
        <SlideFour />
      </SwiperSlide>
    </Swiper>
  );
}
