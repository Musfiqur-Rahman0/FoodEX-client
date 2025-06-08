import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import FoodCard from "./FoodCard";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const FoodCardSlider = ({ items }) => {
  return (
    <Swiper
      //   navigation={true}
      pagination={true}
      modules={[Pagination]}
      slidesPerView={3}
      spaceBetween={50}
      loop
      className="mt-5 "
    >
      {items.map((_, index) => (
        <SwiperSlide key={index}>
          <FoodCard />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FoodCardSlider;
