import React from "react";
// Import Swiper React components
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { FreeMode, Pagination, Navigation } from "swiper";

export default function SwiperContainer({ children }) {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        {children}
      </Swiper>
    </>
  );
}
