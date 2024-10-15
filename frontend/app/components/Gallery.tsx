"use client";

import Container from "./Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { getImgUrl } from "../utils/getImgUrl";
import Link from "next/link";

export default function Gallery({ data }: any) {
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
        {data.map((item: any) => (
          <SwiperSlide key={item._id}>
            <Link href={`/${item.category.name}/${item._id}`}>
              <img
                className="w-full h-[180px] object-cover aspect-video"
                src={getImgUrl(item.image)}
                alt={item.name}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
