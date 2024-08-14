import React, { useState } from "react";
import { Link } from "react-router-dom";
import { adoptData } from "./adoptData";
import { title_img } from "../assets/Images";

export default function Gallery() {
  // Step 1: Add state to manage the selected category
  const [selectedCategory, setSelectedCategory] = useState("All"); // Default category is "All"

  // Step 2: Filter the adoptData based on the selected category
  const filteredData =
    selectedCategory === "All"
      ? adoptData
      : adoptData.filter(
          (adopt) =>
            adopt.Category.toLowerCase() === selectedCategory.toLowerCase()
        );
  return (
    <main>
      <section className="container mx-auto relative flex items-center">
        <div className="flex flex-col gap-6 items-center pt-10 mx-auto p-7 md:gap-6 m-20">
          <div className="flex flex-col lg:pt-6 items-center gap-1 lg:gap-3">
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
                selectedCategory === "All" ? "bg-white" : "hover:text-light"
              }`}
            >
              All
            </Link>
            <Link
              to="#"
              onClick={() => setSelectedCategory("Dog")}
              className={`text-xl px-3 my-auto py-2 rounded-full md:text-2xl ${
                selectedCategory === "Dog" ? "bg-white" : "hover:text-light"
              }`}
            >
              Dogs
            </Link>
            <Link
              to="#"
              onClick={() => setSelectedCategory("Cat")}
              className={`text-xl px-3 my-auto py-2 rounded-full md:text-2xl ${
                selectedCategory === "Cat" ? "bg-white" : "hover:text-light"
              }`}
            >
              Cats
            </Link>
            <Link
              to="#"
              onClick={() => setSelectedCategory("Bird")}
              className={`text-xl px-3 my-auto py-2 rounded-full md:text-2xl ${
                selectedCategory === "Bird" ? "bg-white" : "hover:text-light"
              }`}
            >
              Birds
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {filteredData.map(
              (
                adopt //To Override the slice when a Category is selected
              ) => (
                <aside
                  key={adopt.id}
                  className="flex flex-col gap-0 bg-white shad font-bubblegum group h-80 w-30 rounded-lg group"
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
