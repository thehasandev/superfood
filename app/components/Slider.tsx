"use client";

import Container from "./Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

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
          breakpoints={{
            "@0.00": {
              slidesPerView: 2,
             
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
            },
            "@1.50": {
              slidesPerView: 4,
            },
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <Image height={120} width={220} src="/images/s (1).png" alt="s1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image height={120} width={220} src="/images/s (2).png" alt="s1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image height={120} width={220} src="/images/s (3).png" alt="s1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image height={120} width={220} src="/images/s (4).png" alt="s1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image height={120} width={220} src="/images/s (5).png" alt="s1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image height={120} width={220} src="/images/s (6).png" alt="s1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image height={120} width={220} src="/images/s (7).png" alt="s1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image height={120} width={220} src="/images/s (8).png" alt="s1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image height={120} width={220} src="/images/s (9).png" alt="s1" />
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
}

export default Slider;
