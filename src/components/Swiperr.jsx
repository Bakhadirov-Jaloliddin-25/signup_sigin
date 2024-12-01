import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.avif";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

export default function Swiperrr() {
  return (
    <div className="container mb-5">
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper w-[80%] h-[500px] rounded-2xl mb- max-lg:h-[350px] max-md:h-[300px]  max-sm:h-[250px]"
        loop={true}
      >
        <SwiperSlide className=" ">
          <img
            src="https://ae-pic-a1.aliexpress-media.com/kf/Se0d38d631c7e4c729f751f374bdae147y/1790x572.png"
            alt=""
            className="bg-no-repeat bg-center bg-cover h-full w-full"
          />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <img
            src="https://ae-pic-a1.aliexpress-media.com/kf/S4ae0beb379ab460e9e8a4f3e7f33c0e9K/1790x572.png"
            alt=""
            className="bg-no-repeat bg-center bg-cover h-full w-full"
          />
        </SwiperSlide>{" "}
        <SwiperSlide className="">
          <img
            src="https://ae-pic-a1.aliexpress-media.com/kf/S64d90fddc2ed43729df8472e74ed8dffF/1790x572.png"
            alt=""
            className="bg-no-repeat bg-center bg-cover h-full w-full"
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <img
            src="https://ae-pic-a1.aliexpress-media.com/kf/S9a2a3f7ec3fb49979663a104109d267dS/1790x572.png"
            alt=""
            className="bg-no-repeat bg-center bg-cover h-full w-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
