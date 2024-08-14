import React, { useState } from "react";
import { aside, personnelsData } from "./personnelsData";
import { BG_main, title_img } from "../assets/Images";
import { Link } from "react-router-dom";
import { FaHouseChimney } from "react-icons/fa6";

export default function Personnels() {
  // Step 1: Add state to manage the selected category
  const [selectedCategory, setSelectedCategory] = useState("All"); // Default category is "All"

  // Step 2: Filter the adoptData based on the selected category
  const filteredData =
    selectedCategory === "All"
      ? personnelsData
      : personnelsData.filter(
          (Personnel) =>
            Personnel.Category.toLowerCase() === selectedCategory.toLowerCase()
        );
  return (
    <main>
      <section className="container mx-auto relative flex items-center">
        <div className="flex flex-col gap-6 items-center pt-14 mx-auto md:gap-6 m-20">
          <div className="flex flex-col lg:pt-6 items-center gap-1 lg:gap-3">
            <h2 className="text-highlight  text-center font-extrabold text-2xl md:text-5xl font-calligraffitti">
              Find an Affordable Pet Handler
            </h2>
            <p className="text-primary text-base md:text-2xl font-Caveat">
              we're the best in the class
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
              onClick={() => setSelectedCategory("Pet Sitter")}
              className={`text-xl px-3 my-auto py-2 rounded-full md:text-2xl ${
                selectedCategory === "Pet Sitter"
                  ? "bg-white"
                  : "hover:text-light"
              }`}
            >
              Pet Sitter
            </Link>
            <Link
              to="#"
              onClick={() => setSelectedCategory("Veterinary")}
              className={`text-xl px-3 my-auto py-2 rounded-full md:text-2xl ${
                selectedCategory === "Veterinary"
                  ? "bg-white"
                  : "hover:text-light"
              }`}
            >
              Veterinary
            </Link>
            <Link
              to="#"
              onClick={() => setSelectedCategory("Pet Groomer")}
              className={`text-xl px-3 my-auto py-2 rounded-full md:text-2xl ${
                selectedCategory === "Pet Groomer"
                  ? "bg-white"
                  : "hover:text-light"
              }`}
            >
              Pet Groomer
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 w-11/12 gap-4 md:gap-8">
            {filteredData.map(
              (
                Personnel //To Override the slice when a Category is selected
              ) => (
                <aside
                  key={Personnel.id}
                  className="flex flex-col gap-0 bg-white shad font-bubblegum group w-30 rounded-lg group"
                >
                  <div className="h-[65%]">
                    <img
                      src={Personnel.image}
                      alt={Personnel.name}
                      className="object-cover w-full rounded-t-lg h-full relative"
                    />
                  </div>

                  <div className="flex flex-col gap-1 items-center p-5 relative">
                    <h4 className="text-lg lg:text-2xl text-dark font-bold">
                      {Personnel.name}
                    </h4>
                    <h6 className="font-bold text-secondary px-2">
                      {Personnel.Category}
                    </h6>
                    <h6 className=" flex items-center gap-3 text-primary">
                      <FaHouseChimney />
                      <span className="font-normal">{Personnel.location}</span>
                    </h6>
                    <h6 className="text-secondary lg:px-2">
                      Exp: <span className="font-normal">{Personnel.exp}</span>
                    </h6>
                    <button className="cursor-pointer py-2 px-3 rounded-full bg-primary text-white my-2 text-base lg:text-lg font-bold hover:bg-highlight">
                      Hire
                    </button>
                  </div>
                </aside>
              )
            )}
          </div>
          <div className="flex flex-col items-center py-5 font-bubblegum gap-2">
            <h3 className=" font-extrabold text-2xl md:text-3xl text-secondary">
              Love animals? Earn upto $20/hr.
            </h3>
            <div className="grid grid-cols-2 gap-3 md:flex md:flex-row item-center">
              <p className="text-primary text-base md:text-2xl font-Caveat">
                Join 1000+ pet sitters - Nationwide
              </p>
            </div>
            <div className="flex flex-col gap-5 pt-10">
              <Link className="text-highlight font-semibold  md:text-2xl mx-auto rounded-md py-3 md:p-7 bg-white hover:shadow-md">
                Apply & Become a Pet Sitter
              </Link>
            </div>
          </div>
          <div
            className="flex flex-col items-center gap-6 h-full lg:gap-3"
            style={{
              backgroundImage: `url(${BG_main})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="w-full h-full bg-yellow-400 bg-opacity-70">
              <h2 className="text-secondary font-extrabold text-center pt-16 text-2xl md:text-5xl font-calligraffitti">
                All our Sitters are best in
              </h2>
              <div className="grid grid-col-2 md:flex w-10/12 font-bubblegum gap-2 py-10 items-center mx-auto">
                {aside.map((aside) => (
                  <div className="p-5 mx-auto group items-center">
                    <div className="flex flex-col gap-4 p-5 mx-auto text-center rounded-lg items-center group-hover:bg-yellow-400 group-hover:bg-opacity-65">
                      <h3 className=" text-2xl md:text-5xl text-secondary">
                        {aside.icon}
                      </h3>
                      <h2 className="font-extrabold text-xl md:text-2xl text-secondary">
                        {aside.name}
                      </h2>
                      <p className="text-base text-secondary ">{aside.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
