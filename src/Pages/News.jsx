import React from "react";
import { newsData } from "./newsData";
import { title_img } from "../assets/Images";

export default function News() {
  return (
    <div className="flex flex-col gap-6 items-center pt-14 mx-auto md:gap-6 m-20 bg-white">
      <div className="flex flex-col lg:pt-6 items-center gap-1 lg:gap-3">
        <h2 className="text-highlight text-center font-extrabold text-2xl md:text-5xl font-calligraffitti">
          Blog & Our News
        </h2>
        <p className="text-primary text-base md:text-2xl font-Caveat">
          Get all the latest happenings around us
        </p>
        <img src={title_img} alt="Title" />
      </div>

      <div className="flex flex-col flex-wrap justify-center gap-8 p-5 ">
        {newsData.map((news, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-9 p-5  bg-orange-100 text-center rounded-lg group items-center w-full"
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full md:w-1/2 rounded-lg h-full object-cover"
            />
            <div className="flex flex-col justify-between">
              <h6 className="text-secondary text-sm">{news.date}</h6>
              <h2 className="font-extrabold text-xl md:text-2xl text-secondary">
                {news.title}
              </h2>
              <p className="text-base text-secondary">{news.description}</p>
              <a
                href="/"
                className="text-highlight font-bold hover:underline mt-2"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
