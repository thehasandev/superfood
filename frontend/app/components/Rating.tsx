"use client";
import Container from "./Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
function Rating() {
  return (
    <section className="bg-rating bg-cover  bg-no-repeat">
      <div className="bg-black/5 py-20">
        <Container>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            speed={1000}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination]}
          >
            <SwiperSlide className="mb-5">
              <div className="text-center">
                <h2 className="text-5xl font-bold text-[#444444]">
                  Choose Your Protfolio
                </h2>
                <p className="text-xl my-4 w-8/12 mx-auto text-black/50">
                  The Elated Slider comes with video and image support, as well
                  as full screen and parallax functionality. Display your
                  essential content in style. Add sections with the stunning
                  parallax effect to your pages. Make browsing your website an
                  exciting and intuitive experience.
                </p>
                <p className="text-xl my-4 w-8/12 mx-auto text-[#444444]">
                  Stavan Smith
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center">
                <h2 className="text-5xl font-bold text-[#444444]">
                  Drag-and-drop builder
                </h2>
                <p className="text-xl my-4 w-8/12 mx-auto text-black/50">
                  The Elated Slider comes with video and image support, as well
                  as full screen and parallax functionality. Display your
                  essential content in style. Add sections with the stunning
                  parallax effect to your pages. Make browsing your website an
                  exciting and intuitive experience.
                </p>
                <p className="text-xl my-4 w-8/12 mx-auto text-[#444444]">
                  Glean Maxweal
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center">
                <h2 className="text-5xl font-bold text-[#444444]">
                  Show your Product
                </h2>
                <p className="text-xl my-4 w-8/12 mx-auto text-black/50">
                  The Elated Slider comes with video and image support, as well
                  as full screen and parallax functionality. Display your
                  essential content in style. Add sections with the stunning
                  parallax effect to your pages. Make browsing your website an
                  exciting and intuitive experience.
                </p>
                <p className="text-xl my-4 w-8/12 mx-auto text-[#444444]">
                  Philph England
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center">
                <h2 className="text-5xl font-bold text-[#444444]">
                  Example Your Test
                </h2>
                <p className="text-xl my-4 w-8/12 mx-auto text-black/50">
                  The Elated Slider comes with video and image support, as well
                  as full screen and parallax functionality. Display your
                  essential content in style. Add sections with the stunning
                  parallax effect to your pages. Make browsing your website an
                  exciting and intuitive experience.
                </p>
                <p className="text-xl my-4 w-8/12 mx-auto text-[#444444]">
                  Exeample Smith
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center">
                <h2 className="text-5xl font-bold text-[#444444]">
                  Beautiful Blog Layouts
                </h2>
                <p className="text-xl my-4 w-8/12 mx-auto text-black/50">
                  The Elated Slider comes with video and image support, as well
                  as full screen and parallax functionality. Display your
                  essential content in style. Add sections with the stunning
                  parallax effect to your pages. Make browsing your website an
                  exciting and intuitive experience.
                </p>
                <p className="text-xl my-4 w-8/12 mx-auto text-[#444444]">
                  Stavan Smith
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </Container>
      </div>
    </section>
  );
}

export default Rating;
