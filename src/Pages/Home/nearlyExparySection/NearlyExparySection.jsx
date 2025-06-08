import FoodCard from "@/Pages/Shared/FoodCard";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const NearlyExparySection = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold ">Nearly Expairy Date </h2>

      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={3}
        spaceBetween={50}
        loop
        className="mt-5 "
      >
        {[...Array(6)].map((_, index) => (
          <SwiperSlide key={index}>
            <FoodCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NearlyExparySection;
