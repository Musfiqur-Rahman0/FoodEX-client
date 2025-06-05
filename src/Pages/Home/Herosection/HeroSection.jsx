import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import img1 from "../../../assets/at_fruit_slide1_h5 (1).webp";
import img2 from "../../../assets/at_fruit_slide2_h5.webp";
import img3 from "../../../assets/at_fruit_slide1_h5.webp";
const HeroSection = () => {
  return (
    <section id="hero-section">
      <div className="h-[250px] md:h-[900px] w-full relative">
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
          {[img1, img2, img3].map((img, i) => (
            <SwiperSlide key={i}>
              <img src={img} alt="" className=" h-full w-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* slider image closed */}

        <div className="absolute inset-0 z-10 max-w-7xl mx-auto">
          <h2 className="text-center ">Hellow world</h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
