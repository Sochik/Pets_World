import React from "react";
import { IoMdPaw } from "react-icons/io";
import { Link } from "react-router-dom";

import { logo, menu_strip } from "../assets/Images";

export default function Header() {
    return (
      <header className="fixed font-cabin z-50 top-0 left-0 text-primary w-full bg-backdrop">
        <div className="container mx-auto flex justify-center gap-3 text-base md:gap-8 items-center relative">
          <ul className="flex gap-2 font-semibold md:gap-4">
            <li>
              <Link
                to={"/"}
                href="#"
                className="md:text-lg flex gap-1 items-center hover:text-light"
              >
                <IoMdPaw />
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/About"}
                href="#"
                className="md:text-lg flex gap-1 items-center hover:text-light"
              >
                <IoMdPaw />
                About
              </Link>
            </li>
            <li>
              <Link
                to={"/News"}
                href="#"
                className="hidden md:visible md:text-lg md:flex gap-1 items-center hover:text-light"
              >
                <IoMdPaw />
                News
              </Link>
            </li>
          </ul>

          {/* Logo */}
          <Link to={"/"} className=" cursor-pointer items-center">
            <img
              src={logo}
              alt="Pet_World"
              className="h-12 w-12 md:w-20 md:h-20 object-cover hover:rotate-3"
            />
          </Link>

          <ul className="flex font-semibold gap-2 md:gap-4">
            <li>
              <Link
                to={"/Animals"}
                href="#"
                className="hidden md:visible md:text-lg md:flex gap-1 items-center hover:text-light"
              >
                <IoMdPaw />
                Animal
              </Link>
            </li>
            <li>
              <Link
                to={"/Gallery"}
                href="#"
                className="md:text-lg flex gap-1 items-center hover:text-light"
              >
                <IoMdPaw />
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to={"/Contact"}
                href="#"
                className="md:text-lg flex gap-1 items-center hover:text-light"
              >
                <IoMdPaw />
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className=" absolute w-full -bottom-11">
          <img src={menu_strip} alt="" className="h-11 object-cover" />
        </div>
      </header>
    );
}

