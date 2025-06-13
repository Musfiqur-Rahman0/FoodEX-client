import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import FoodCard from "./FoodCard";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useLoaderData } from "react-router";

const FoodCardSlider = ({ items }) => {
  // console.log(items);

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
      {items?.map((food, index) => (
        <SwiperSlide key={index}>
          <FoodCard food={food} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FoodCardSlider;
