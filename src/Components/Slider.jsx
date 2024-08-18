import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { bg_slider1, bg_slider4, bg_slider2 } from "../assets/Images";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Slider() {
  const images = [
    {
      id: 1,
      image: bg_slider1,
      title: (
        <h2 className="absolute font-calligraffitti mx-auto top-[42%] left-[68%] md:bottom-[30%] flex flex-col  justify-center items-center leading-tight">
          <span className="text-yellow-200 block font-extrabold text-2xl md:text-6xl">
            Save
          </span>
          <span className="text-lime-400 block font-extrabold text-2xl md:text-6xl">
            Adopt
          </span>
          <span className="text-highlight block font-extrabold text-2xl md:text-6xl">
            Donate
          </span>
        </h2>
      ),
    },
    {
      id: 2,
      image: bg_slider4,
      title: (
        <div className="absolute items-start font-calligraffitti text-dark mx-auto top-[38%] right-[42%] md:top-[30%] px-2 flex flex-col gap-2 justify-center">
          <h2 className=" text-white font-semibold text-xl md:text-4xl py-1">
            Searching for a Pet sitter?
          </h2>
          <p className="block text-white leading-5 pb-1 md:text-3xl">
            We got trained professionals for hire here
          </p>
          <button className="text-white md:text-3xl rounded py-1 px-1 md:p-3 bg-orange-400 hover:bg-white hover:text-orange-400">
            Click Here
          </button>
        </div>
      ),
    },
    {
      id: 3,
      image: bg_slider2,
      title: (
        <div className="absolute items-start font-calligraffitti text-dark mx-auto top-[42%] md:top-[28%] left-[58%] flex flex-col justify-center">
          <h2 className="font-semibold text-xl md:text-4xl py-3">
            Why Buy? Adopt
          </h2>
          <p className="block text-xl leading-5 pb-3 md:text-3xl">
            Lots of pets need your attention
          </p>
          <button className="text-white text-xl md:text-3xl rounded py-1 px-2 md:p-3 bg-lime-400 hover:bg-white hover:text-lime-400">
            Adopt
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="slider">
      <div className="">
        <Swiper
          className="mySwiper "
          modules={[Navigation, Pagination, Autoplay]}
          navigation={true}
          pagination={true}
          autoplay={{
            delay: 3000,
          }}
        >
          {images.map((item) => {
            return (
              <SwiperSlide key={item.id} className="w-full relative">
                <img
                  src={item.image}
                  alt="slider"
                  className="w-full object-cover"
                />
                {item.title}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
