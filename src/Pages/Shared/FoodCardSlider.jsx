import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import FoodCard from "./FoodCard";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useLoaderData } from "react-router";

const FoodCardSlider = ({ items, expaired }) => {
  // console.log(items);

  return (
    <Swiper
      //   navigation={true}
      pagination={true}
      modules={[Pagination]}
      slidesPerView={1}
      spaceBetween={50}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      // loop
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
