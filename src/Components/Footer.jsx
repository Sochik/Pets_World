import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaGooglePlusG } from "react-icons/fa";
import { IoMdPaw } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { RiFacebookFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white md:text-2xl pt-12">
      <div className="container mx-40 py-4 flex flex-row gap-8 relative">
        <aside className="flex flex-col max-w-sm g-2 items-center ">
          <div className="items-center justify-center pb-16 flex gap-2">
            <IoMdPaw />{" "}
            <h5 className="font-bubblegum text-lg lg:text-2xl font-bold">
              About Pet World
            </h5>
          </div>
          <div>
            <p className="font-cabin text-sm lg:text-base">
              Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Auas recusandae eligendi ipsum a.
            </p>
          </div>
        </aside>
        <aside className="flex flex-col max-w-sm gap-2 items-center">
          <div className="items-center justify-center pb-16 flex gap-2">
            <IoMdPaw />{" "}
            <h5 className="font-bubblegum text-lg lg:text-2xl font-bold">
              Helpful Links
            </h5>
          </div>
          <div>
            <ol className="font-cabin text-sm lg:text-base relative">
              <li className="before:bg-orange-400 before:w-1 before:rounded-full before:h-1 before:border-2  before:border-orange-400 before:p-0.5 before:top-50 before:translate-y-2 before:-translate-x-4 before:left-0 before:absolute before:hover:border-orange-400 hover:text-orange-400 before:hover:bg-white">
                <Link to={"/"} className href="">
                  Pet Attitude
                </Link>
              </li>
              <li className="before:bg-orange-400 before:w-1 before:rounded-full before:h-1 before:border-2  before:border-orange-400 before:p-0.5 before:top-50 before:translate-y-2 before:-translate-x-4 before:left-0 before:absolute before:hover:border-orange-400 hover:text-orange-400 before:hover:bg-white">
                <Link to={"/"} className href="">
                  Call a Vet.
                </Link>
              </li>
              <li className="before:bg-orange-400 before:w-1 before:rounded-full before:h-1 before:border-2  before:border-orange-400 before:p-0.5 before:top-50 before:translate-y-2 before:-translate-x-4 before:left-0 before:absolute before:hover:border-orange-400 hover:text-orange-400 before:hover:bg-white">
                <Link to={"/"} className href="">
                  Help a Pet
                </Link>
              </li>
            </ol>
          </div>
        </aside>
        <aside className="flex flex-col max-w-sm g-2 items-center">
          <div className="items-center justify-center pb-16 flex gap-2">
            <IoMdPaw />{" "}
            <h5 className="font-bubblegum text-lg lg:text-2xl font-bold">
              Overview
            </h5>
          </div>
          <div>
            <ol className="font-cabin text-sm lg:text-base relative">
              <li className="before:bg-orange-400 before:w-1 before:rounded-full before:h-1 before:border-2  before:border-orange-400 before:p-0.5 before:top-50 before:translate-y-2 before:-translate-x-4 before:left-0 before:absolute before:hover:border-orange-400 hover:text-orange-400 before:hover:bg-white">
                <Link to={"/"} className href="">
                  Cats
                </Link>
              </li>

              <li className="before:bg-orange-400 before:w-1 before:rounded-full before:h-1 before:border-2  before:border-orange-400 before:p-0.5 before:top-50 before:translate-y-2 before:-translate-x-4 before:left-0 before:absolute before:hover:border-orange-400 hover:text-orange-400 before:hover:bg-white">
                <Link to={"/"} className href="">
                  Dogs
                </Link>
              </li>

              <li className="before:bg-orange-400 before:w-1 before:rounded-full before:h-1 before:border-2  before:border-orange-400 before:p-0.5 before:top-50 before:translate-y-2 before:-translate-x-4 before:left-0 before:absolute before:hover:border-orange-400 hover:text-orange-400 before:hover:bg-white">
                <Link to={"/"} className href="">
                  Birds
                </Link>
              </li>

              <li className="before:bg-orange-400 before:w-1 before:rounded before:h-1 before:border-2  before:border-orange-400 before:p-0.5 before:top-50 before:translate-y-2 before:-translate-x-4 before:left-0 before:absolute before:hover:border-orange-400 hover:text-orange-400 before:hover:bg-white">
                <Link to={"/"} className href="">
                  Adopt a Pet
                </Link>
              </li>
            </ol>
          </div>
        </aside>
        <aside className="flex flex-col g-2 max-w-md items-center">
          <div className="items-center justify-center pb-12 flex gap-2">
            <IoMdPaw />{" "}
            <h5 className="font-bubblegum text-lg lg:text-2xl font-bold">
              Suscribe
            </h5>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Your Email Address"
              className="w-[400px] sm:w-[350px] bg-[rgba(46,16,16,0.40)] inset-0 text-base rounded px-2 py-3 focus:border-orange-400  focus:border-2 hover:border-orange-400 font-cabin"
            />
            <button type="submit">
              <MdEmail className="text-orange-400 hover:text-light absolute top-1/2 -translate-y-1/2 right-3" />
            </button>
          </div>
        </aside>
      </div>
      <div className="mx-40 py-10 flex flex-row gap-3">
        <Link to={"/"} href=""><RiFacebookFill className="hover:rotate-6] hover:text-light" />{" "}</Link>
        <Link to={"/"} href=""><BsTwitter className="hover:rotate-6 hover:text-light" />{" "}</Link>
        <Link to={"/"} href=""><FaGooglePlusG className="hover:rotate-6 hover:text-light" /></Link>
      </div>
      <small className="py-5 border-t bg-highlight my-auto h-14 border-light opacity-50 justify-center flex text-xs">
        &copy; Copyright{new Date().getFullYear()}. All rights reserved
      </small>
    </footer>
  );
}
