import React from "react";
import { title_img, formBackground } from "../assets/Images";

export default function Contact() {
  return (
    <main>
      <section className="container relative flex flex-col mx-auto lg:mx-0">
        <div className="flex flex-col gap-6 items-center mx-auto p-7 md:gap-6 m-20">
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.2617420461456!2d7.391532174618711!3d9.220869790848331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104ddc34ceaba157%3A0xc491bc197c4a3588!2sThe%20British%20Oasis%20Academy%2C%20Abuja.!5e0!3m2!1sen!2sng!4v1723310465010!5m2!1sen!2sng"
                allowfullscreen=""
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
        </div>
      </section>
    </main>
  );
}
