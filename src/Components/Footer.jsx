import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaGooglePlusG } from "react-icons/fa";
import { IoMdPaw } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { RiFacebookFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Footer({ selectedCategory, setSelectedCategory }) {
  return (
    <footer className="bg-secondary text-white text-sm md:text-lg lg:text-2xl pt-12">
      <div className="container mx-auto py-4 flex flex-col md:flex-row flex-wrap items-center justify-center gap-8 px-6 md:px-12 lg:px-20">
        <aside className="flex flex-col w-full md:w-1/2 lg:w-1/4 items-center">
          <div className="flex items-center justify-center pb-6 gap-2">
            <IoMdPaw />
            <h5 className="font-bubblegum text-lg lg:text-2xl font-bold">
              About Pet World
            </h5>
          </div>
          <p className="font-cabin text-sm lg:text-base text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
            recusandae eligendi ipsum a.
          </p>
        </aside>

        <aside className="flex flex-col w-full md:w-1/2 lg:w-1/4 items-center">
          <div className="flex items-center justify-center pb-6 gap-2">
            <IoMdPaw />
            <h5 className="font-bubblegum text-lg lg:text-2xl font-bold">
              Helpful Links
            </h5>
          </div>
          <ol className="font-cabin text-sm lg:text-base text-center">
            <li className="hover:text-orange-400 mb-2">
              <Link to={"/"}>Pet Attitude</Link>
            </li>
            <li className="hover:text-orange-400 mb-2">
              <Link to={"/"}>Call a Vet</Link>
            </li>
            <li className="hover:text-orange-400 mb-2">
              <Link to={"/"}>Help a Pet</Link>
            </li>
          </ol>
        </aside>

        <aside className="flex flex-col w-full md:w-1/2 lg:w-1/4 items-center">
          <div className="flex items-center justify-center pb-6 gap-2">
            <IoMdPaw />
            <h5 className="font-bubblegum text-lg lg:text-2xl font-bold">
              Overview
            </h5>
          </div>
          <ol className="font-cabin text-sm lg:text-base text-center">
            <li className="hover:text-orange-400 mb-2">
              <Link to={"/Gallery"} onClick={() => setSelectedCategory("Cats")}>
                Cats
              </Link>
            </li>
            <li className="hover:text-orange-400 mb-2">
              <Link to={"/Gallery"} onClick={() => setSelectedCategory("Dogs")}>
                Dogs
              </Link>
            </li>
            <li className="hover:text-orange-400 mb-2">
              <Link
                to={"/Gallery"}
                onClick={() => setSelectedCategory("Birds")}
              >
                Birds
              </Link>
            </li>
            <li className="hover:text-orange-400 mb-2">
              <Link to={"/Gallery"}>Adopt a Pet</Link>
            </li>
          </ol>
        </aside>

        <aside className="flex flex-col w-full md:w-1/2 lg:w-1/4 items-center">
          <div className="flex items-center justify-center pb-6 gap-2">
            <IoMdPaw />
            <h5 className="font-bubblegum text-lg lg:text-2xl font-bold">
              Subscribe
            </h5>
          </div>
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              placeholder="Your Email Address"
              className="w-full bg-[rgba(46,16,16,0.40)] text-base rounded px-2 py-3 focus:border-orange-400 focus:border-2 hover:border-orange-400 font-cabin"
            />
            <button type="submit">
              <MdEmail className="text-orange-400 hover:text-light absolute top-1/2 -translate-y-1/2 right-3" />
            </button>
          </div>
        </aside>
      </div>

      <div className="flex justify-center gap-3 py-4">
        <Link to={"/"} className="hover:text-light">
          <RiFacebookFill />
        </Link>
        <Link to={"/"} className="hover:text-light">
          <BsTwitter />
        </Link>
        <Link to={"/"} className="hover:text-light">
          <FaGooglePlusG />
        </Link>
      </div>

      <small className=" py-5 opacity-50 text-xs text-center">
        &copy; {new Date().getFullYear()}. All rights reserved.
      </small>
    </footer>
  );
}
 