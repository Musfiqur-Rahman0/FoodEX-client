import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import { foodItems } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section id="hero-section">
      <div className="h-[250px] md:h-[700px] w-full relative">
        {/* slider image opening */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="h-full w-full"
        >
          {foodItems.map((food) => (
            <SwiperSlide key={food.id} className="relative">
              <div className="relative flex flex-col md:flex-row items-center h-full w-full">
                {/* Left content: Text */}
                <div className="absolute md:static z-10 bg-white/80 md:bg-transparent md:w-1/2 text-center md:text-left p-6 md:p-12">
                  <h2 className="text-2xl md:text-4xl font-semibold text-gray-800">
                    {food.title}
                  </h2>
                  <h3 className="text-lg md:text-2xl italic text-green-600 mt-2">
                    {food.subtitle}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 mt-4">
                    {food.description}
                  </p>
                  <button className="mt-6 px-6 py-2 border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition duration-300">
                    {food.buttonText}
                  </button>
                </div>

                {/* Right content: Image */}
                <img
                  src={food.image}
                  alt={food.title}
                  className="absolute inset-0 h-full w-full  object-cover "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* slider image closed */}
      </div>
    </section>
  );
};

export default HeroSection;
