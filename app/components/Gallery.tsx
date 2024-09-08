"use client";

import Container from "./Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Gallery() {
  return (
    <section className="bg-black">
      <Swiper
        slidesPerView={7}
        speed={1000}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
   
        <SwiperSlide>
          <img src="./images/g2.jpg" alt="g1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/g3.jpg" alt="g1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/g4.jpg" alt="g1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/g5.jpg" alt="g1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/g6.jpg" alt="g1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/g6.jpg" alt="g1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/g6.jpg" alt="g1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/g2.jpg" alt="g1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/g3.jpg" alt="g1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/g4.jpg" alt="g1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/g5.jpg" alt="g1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/g6.jpg" alt="g1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/g6.jpg" alt="g1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/g6.jpg" alt="g1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/g2.jpg" alt="g1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/g3.jpg" alt="g1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/g4.jpg" alt="g1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/g5.jpg" alt="g1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/g6.jpg" alt="g1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/g6.jpg" alt="g1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/g6.jpg" alt="g1" />
        </SwiperSlide>

        
      </Swiper>
    </section>
  );
}
