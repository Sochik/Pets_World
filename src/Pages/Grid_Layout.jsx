import React from "react";
import { aboutimg1 } from "../assets/Images";
import { Link } from "react-router-dom";

export const Grid_layout = [
  {
    id: "22330",
    title: <div></div>,
  },
  {
    id: "22331",
    title: (
      <Link
        className="col-span-1 row-span-1 px-4 md:px-5 items-start font-calligraffitti text-center h-full text-white flex flex-col md:gap-4 bg-highlight bg-opacity-70 rounded-lg"
        style={{
          backgroundImage: ``,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="font-semibold text-lg md:text-2xl p-2 md:p-5">
          Did You Know?
        </h2>
        <p className="text-sm leading-tight le md:text-xl">
          Cats spend about 70% of their lives sleeping. They are known to be one
          of the laziest creatures, but this helps them conserve energy for
          hunting.
        </p>
      </Link>
    ),
  },
  {
    id: "22332",
    title: (
      <Link
        className="col-span-1 row-span-1 px-4 md:px-5 items-start font-calligraffitti text-center h-full text-white flex flex-col md:gap-4 bg-light bg-opacity-70 rounded-lg"
        style={{
          backgroundImage: ``,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="font-semibold text-lg md:text-2xl p-2 md:p-5">
          Pet Facts
        </h2>
        <p className="text-sm leading-tight le md:text-xl">
          Having a pet can reduce stress levels and improve overall well-being.
          Pets offer companionship and can even help to lower blood pressure.
        </p>
      </Link>
    ),
  },
  {
    id: "22333",
    title: (
      <Link
        to="/Personnels"
        className="col-span-1 row-span-1 items-start font-calligraffitti text-center w-full h-full text-white flex gap-2 bg-dark bg-opacity-70 hover:bg-opacity-80 rounded-lg"
        style={{
          backgroundImage: ``,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="md:h-full flex-1 h-48 w-48 md:w-64 rounded-lg md:rounded-full my-auto mx-2">
          <img
            src={aboutimg1}
            alt=""
            className="w-full h-full rounded-lg md:rounded-full object-cover"
          />
        </div>
        <div className="flex-1 my-auto px-3 flex flex-col gap-3">
          <h2 className="font-semibold  text-lg md:text-2xl p-2 md:p-5">
            Meet Our Team
          </h2>
          <p className="text-sm leading-tight le md:text-xl">
            Our dedicated team of experts is passionate about animal welfare.
            With years of experience, they ensure the best care for your pets.
          </p>
        </div>
      </Link>
    ),
  },
];
