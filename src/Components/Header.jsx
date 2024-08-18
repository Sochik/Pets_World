import React, { useState } from "react";
import { IoMdPaw } from "react-icons/io";
import { NavLink } from "react-router-dom"; // Import NavLink instead of Link
import { logo, menu_strip } from "../assets/Images";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for Hamburger menu

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed font-cabin z-20 top-0 left-0 text-primary w-full bg-backdrop">
      <div className="container mx-auto flex justify-between lg:justify-center items-center relative p-4 md:px-8 gap-4 lg:gap-8">
        {/* Hamburger Menu Icon */}
        <button
          className="text-3xl md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        {/* Navigation Links */}
        <ul
          className={`${
            menuOpen ? " block" : "hidden"
          } md:flex flex-col md:flex-row md:gap-4 z-30 text-center font-semibold text-base absolute md:static top-16 right-0 bg-backdrop pt-3 md:bg-transparent w-full md:w-auto transition-all duration-300 ease-in-out`}
        >
          <li className="p-2 md:p-0 ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "md:text-lg flex gap-1 items-center text-light"
                  : "md:text-lg flex gap-1 items-center hover:text-light"
              }
              onClick={() => setMenuOpen(false)}
            >
              <IoMdPaw />
              Home
            </NavLink>
          </li>
          <li className="p-2 md:p-0">
            <NavLink
              to="/About"
              className={({ isActive }) =>
                isActive
                  ? "md:text-lg flex gap-1 items-center text-light"
                  : "md:text-lg flex gap-1 items-center hover:text-light"
              }
              onClick={() => setMenuOpen(false)}
            >
              <IoMdPaw />
              About
            </NavLink>
          </li>
          <li className="p-2 md:p-0">
            <NavLink
              to="/News"
              className={({ isActive }) =>
                isActive
                  ? "md:text-lg flex gap-1 items-center text-light"
                  : "md:text-lg flex gap-1 items-center hover:text-light"
              }
              onClick={() => setMenuOpen(false)}
            >
              <IoMdPaw />
              News
            </NavLink>
          </li>

          {/* Logo */}
          <NavLink
            to="/"
            className=" cursor-pointer items-center flex justify-center mx-4 "
          >
            <img
              src={logo}
              alt="Pet_World"
              className="h-14 z-50 block absolute md:relative md:h-20 md:top-[50%] md:left-[50%] md:-translate-x-[50%] md:-translate-y-[80%] -top-14 right-7 w-14 md:w-20  object-cover hover:rotate-3"
            />
          </NavLink>
          {/* right navLink */}

          <li className="p-2 md:p-0">
            <NavLink
              to="/Personnels"
              className={({ isActive }) =>
                isActive
                  ? "md:text-lg flex gap-1 items-center text-light"
                  : "md:text-lg flex gap-1 items-center hover:text-light"
              }
              onClick={() => setMenuOpen(false)}
            >
              <IoMdPaw />
              Personnels
            </NavLink>
          </li>
          <li className="p-2 md:p-0 ">
            <NavLink
              to="/Gallery"
              className={({ isActive }) =>
                isActive
                  ? "md:text-lg flex gap-1 items-center text-light"
                  : "md:text-lg flex gap-1 items-center hover:text-light"
              }
              onClick={() => setMenuOpen(false)}
            >
              <IoMdPaw />
              Gallery
            </NavLink>
          </li>
          <li className="p-2 md:p-0">
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                isActive
                  ? "md:text-lg flex gap-1 items-center text-light"
                  : "md:text-lg flex gap-1 items-center hover:text-light"
              }
              onClick={() => setMenuOpen(false)}
            >
              <IoMdPaw />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="absolute w-full -bottom-11">
        <img src={menu_strip} alt="" className="h-11 object-cover" />
      </div>
    </header>
  );
}
