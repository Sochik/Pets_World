import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "../Components/Slider";
import { aboutData } from "./aboutData";
import { adoptData } from "./adoptData";
import { IoMdPaw } from "react-icons/io";
import { title_img } from "../assets/Images";

export default function Home({ selectedCategory, setSelectedCategory }) {
  // Step 2: Filter the adoptData based on the selected category
  const filteredData =
    selectedCategory === "All"
      ? adoptData
      : adoptData.filter(
          (adopt) =>
            adopt.Category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <main className="min-h-full">
      <section className="container mx-auto relative flex items-center">
        <aside className="h-full w-full">
          <Slider />
        </aside>
      </section>

      <section className="container mx-auto relative flex items-center mb-4">
        <div className="flex flex-col gap-6 items-center mx-auto md:gap-6 my-3">
          <div className="flex flex-col items-center gap-1 lg:gap-3 lg:py-3">
            <h2 className="text-highlight font-extrabold text-2xl md:text-5xl font-calligraffitti">
              Services we Provide
            </h2>
            <p className="text-primary text-base md:text-2xl font-Caveat">
              we fulfill your needs
            </p>
            <img src={title_img} alt="" />
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            {aboutData.map((aboutData) => (
              <aside
                key={aboutData.id}
                className="flex lg:flex-col shad pt-2 mx-3.5 items-center lg:w-54 rounded-lg relative bg-white"
              >
                <div className="w-full h-48">
                  <img
                    src={aboutData.image}
                    alt={aboutData.aboutHeader}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="flex-col px-3 md:pt-8 items-center">
                  <div className="flex flex-col gap-3 pb-9 lg:gap-8 flex-1">
                    <h4 className="text-lg font-bubblegum lg:text-2xl text-dark font-bold">
                      {aboutData.aboutHeader}
                    </h4>
                    <p className="text-base lg:text-lg font-cabin text-primary">
                      {aboutData.aboutNote}
                    </p>
                  </div>
                  <div className="rounded-full h-[55px] mx-auto py-2 w-[55px] bg-highlight absolute -bottom-[10%] lg:-bottom-[5%] left-[50%] -translate-x-[50%]">
                    <IoMdPaw className="w-full h-full text-xl text-white" />
                  </div>
                </div>
              </aside>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto relative flex items-center  bg-white">
        <div className="flex flex-col gap-6 items-center mx-auto px-3 md:gap-6 m-20">
          <div className="flex flex-col items-center gap-1 lg:gap-3">
            <h2 className="text-highlight font-extrabold text-2xl md:text-5xl font-calligraffitti">
              Pets for Adoption
            </h2>
            <p className="text-primary text-base md:text-2xl font-Caveat">
              you are in the right place
            </p>
            <img src={title_img} alt="" />
          </div>

          <div className="flex font-bubblegum gap-1 md:gap-9 items-center mx-auto py-2 lg:pb-8 font-bold text-dark">
            <Link
              to="#"
              onClick={() => setSelectedCategory("All")}
              className={`text-xl px-3 my-auto py-2 rounded-full md:text-2xl ${
                selectedCategory === "All"
                  ? "bg-light text-white"
                  : "hover:text-light"
              }`}
            >
              All
            </Link>
            <Link
              to="#"
              onClick={() => setSelectedCategory("Dog")}
              className={`text-xl px-3 my-auto py-2 rounded-full md:text-2xl ${
                selectedCategory === "Dog"
                  ? "bg-light text-white"
                  : "hover:text-light"
              }`}
            >
              Dogs
            </Link>
            <Link
              to="#"
              onClick={() => setSelectedCategory("Cat")}
              className={`text-xl px-3 my-auto py-2 rounded-full md:text-2xl ${
                selectedCategory === "Cat"
                  ? "bg-light text-white"
                  : "hover:text-light"
              }`}
            >
              Cats
            </Link>
            <Link
              to="#"
              onClick={() => setSelectedCategory("Bird")}
              className={`text-xl px-3 my-auto py-2 rounded-full md:text-2xl ${
                selectedCategory === "Bird"
                  ? "bg-light text-white"
                  : "hover:text-light"
              }`}
            >
              Birds
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {filteredData.slice(0, 6).map(
              (
                adopt //To Override the slice when a Category is selected
              ) => (
                <aside
                  key={adopt.id}
                  className="flex flex-col gap-0  shad font-bubblegum group h-80 w-30 rounded-lg group"
                >
                  <div className="h-[65%] relative">
                    <img
                      src={adopt.image}
                      alt={adopt.name}
                      className="object-cover w-full rounded-t-lg h-full relative"
                    />
                    <h6 className="font-bold absolute text-white bottom-2 px-2">
                      Age: <span className="font-normal">{adopt.age}</span>
                    </h6>
                  </div>

                  <div className="flex flex-col gap-2 mx-auto items-center">
                    <div className="flex flex-col gap-1 items-center relative">
                      <h4 className="text-lg lg:text-2xl text-dark font-bold">
                        {adopt.name}
                      </h4>
                      <div className="lg:flex lg:flex-row lg:gap-2 text-primary font-bold">
                        <h6 className="lg:border-r-2 lg:px-2">
                          Breed:{" "}
                          <span className="font-normal">{adopt.breed}</span>
                        </h6>
                        <h6 className="lg:px-2">
                          Gender:{" "}
                          <span className="font-normal">{adopt.gender}</span>
                        </h6>
                      </div>
                      <button className="cursor-pointer py-2 px-3 rounded-full bg-primary text-white my-2 text-base lg:text-lg font-bold hover:bg-highlight">
                        Adopt
                      </button>
                    </div>
                  </div>
                </aside>
              )
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
