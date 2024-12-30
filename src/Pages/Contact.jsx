import React, { useEffect } from "react";
import { title_img, formBackground } from "../assets/Images";
import { Link } from "react-router-dom";
import { FaScissors, FaUserDoctor } from "react-icons/fa6";
import { FaBabyCarriage, FaChalkboardTeacher } from "react-icons/fa";

export default function Contact() {
  useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <main>
      <section className="container relative flex flex-col mx-auto lg:mx-0">
        <div className="flex flex-col gap-6 items-center mx-auto pt-14 p-7 md:gap-6 m-20">
          <div className="flex flex-col lg:pt-6 items-center gap-1 lg:gap-3">
            <h2 className="text-highlight font-extrabold text-2xl md:text-5xl font-calligraffitti">
              Contact Us!
            </h2>
            <p className="text-primary text-base md:text-2xl font-Caveat">
              you can reach us!
            </p>
            <img src={title_img} alt="" />
          </div>
        </div>
        <div>
          <aside className="flex flex-col-reverse lg:flex-row w-full items-top rounded-lg lg:rounded-none lg:h-auto gap-5 lg:gap-0">
            <div className="w-full rounded-lg lg:rounded-none pb-5 px-2 lg:px-0">
              <iframe
                className="object-cover  w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3938.2486880839847!2d7.390709074783087!3d9.2220395908472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMTMnMTkuMyJOIDfCsDIzJzM1LjgiRQ!5e0!3m2!1sen!2sng!4v1735495517501!5m2!1sen!2sng"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
            <div
              className="rounded-lg lg:rounded-none p-3 shad lg:w-[100%] items-center justify-center font-bubblegum"
              style={{
                backgroundImage: `url(${formBackground})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h5 className="font-semibold text-center">
                Enter your information here to have your request sent directly
                to this Pets World’s e-mail address.
              </h5>
              <form className=" flex flex-col w-full lg:w-[65%] gap-6 px-10 pt-10 pb-7">
                <input
                  type="text"
                  required
                  placeholder="Name"
                  className=" border-2 border-orange-300 inset-0 text-base rounded px-2 py-3 focus:border-orange-400  focus:border-2 hover:border-orange-400 font-cabin"
                />
                <input
                  type="text"
                  required
                  placeholder="Your Email Address"
                  className=" border-2 border-orange-300 inset-0 text-base rounded px-2 py-3 focus:border-orange-400  focus:border-2 hover:border-orange-400 font-cabin"
                />
                <textarea
                  type="text"
                  required
                  placeholder="Your Message"
                  className="border-orange-300 border-2 inset-0 text-base rounded
                  px-2 py-3 h-36 focus:border-orange-400 focus:border-2
                  hover:border-orange-400 font-cabin"
                ></textarea>
                <button
                  type="submit"
                  className="text-white md:text-3xl rounded py-3 md:p-5 bg-light hover:shadow-md"
                >
                  Send Message
                </button>
              </form>
            </div>
          </aside>
          <div className="flex flex-col items-center py-5 font-bubblegum gap-10">
            <h3 className=" font-extrabold text-2xl md:text-3xl text-secondary">
              Whom do you Need?
            </h3>
            <div className="grid grid-cols-2 gap-3 md:flex md:flex-row item-center">
              <Link className="bg-violet-400 hover:bg-violet-500 md:w-36 justify-center flex items-center gap-2 text-white text-center p-2 rounded-md">
                <FaBabyCarriage />A Pet Sitter
              </Link>
              <Link className="bg-sky-400 hover:bg-sky-500 justify-center md:w-36 flex items-center gap-2 text-white text-center p-2 rounded-md">
                <FaUserDoctor />A vet
              </Link>
              <Link className="bg-orange-400 hover:bg-orange-500 justify-center md:w-36 flex items-center gap-2 text-white text-center p-2 rounded-md">
                <FaScissors />
                Pet Groomer
              </Link>
              <Link className="bg-lime-400 hover:bg-lime-500 justify-center md:w-36 flex items-center gap-2 text-white text-center p-2 rounded-md">
                <FaChalkboardTeacher />A Pet Trainer
              </Link>
            </div>
            <div className="flex flex-col gap-5 pb-7">
              <h5 className="text-secondary text-lg md:text-2xl font-bold">
                If you need any help or have any queries
              </h5>
              <Link className="text-highlight font-semibold  md:text-xl mx-auto rounded-md py-3 md:p-5 bg-white hover:shadow-md">
                Call us @ 2348149625268
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
