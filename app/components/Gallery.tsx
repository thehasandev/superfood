"use client";

import Container from "./Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

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
        breakpoints={{
          "@0.00": {
            slidesPerView: 2,
          },
          "@0.75": {
            slidesPerView: 2,
          },
          "@1.00": {
            slidesPerView: 3,
          },
          "@1.50": {
            slidesPerView: 7,
          },
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <Image width={250} height={250} src="/images/g2.jpg" alt="g1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={250} height={250} src="/images/g3.jpg" alt="g1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={250} height={250} src="/images/g4.jpg" alt="g1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={250} height={250} src="/images/g5.jpg" alt="g1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={250} height={250} src="/images/g6.jpg" alt="g1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={250} height={250} src="/images/g6.jpg" alt="g1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={250} height={250} src="/images/g6.jpg" alt="g1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={250} height={250} src="/images/g2.jpg" alt="g1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={250} height={250} src="/images/g3.jpg" alt="g1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={250} height={250} src="/images/g4.jpg" alt="g1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={250} height={250} src="/images/g5.jpg" alt="g1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={250} height={250} src="/images/g6.jpg" alt="g1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={250} height={250} src="/images/g6.jpg" alt="g1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={250} height={250} src="/images/g6.jpg" alt="g1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={250} height={250} src="/images/g2.jpg" alt="g1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={250} height={250} src="/images/g3.jpg" alt="g1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={250} height={250} src="/images/g4.jpg" alt="g1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={250} height={250} src="/images/g5.jpg" alt="g1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={250} height={250} src="/images/g6.jpg" alt="g1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={250} height={250} src="/images/g6.jpg" alt="g1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={250} height={250} src="/images/g6.jpg" alt="g1" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
