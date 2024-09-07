"use client";

import Container from "./Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function Slider() {
  return (
    <section className="bg-[#50C5BB] py-20">
      <Container>
        <Swiper
          spaceBetween={30}
          slidesPerView={5}
          speed={1000} 
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <img src="./images/s (1).png" alt="s1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/s (2).png" alt="s1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/s (3).png" alt="s1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/s (4).png" alt="s1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/s (5).png" alt="s1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/s (6).png" alt="s1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/s (7).png" alt="s1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/s (8).png" alt="s1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/s (9).png" alt="s1" />
          </SwiperSlide>
        </Swiper>
       
      </Container>
    </section>
  );
}

export default Slider;
