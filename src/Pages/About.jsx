import React from "react";
import {
    aboutimg1,
 BG_img, title_img
} from "../assets/Images";
import { IoMdPaw } from "react-icons/io";

export default function About() {
  return (
    <div className="flex flex-col gap-10 items-center pt-14 mx-auto md:gap-14 m-20">
      
      <div className="flex flex-col lg:pt-6 items-center gap-3 lg:gap-6">
        <h2 className="text-highlight text-center font-extrabold text-2xl md:text-5xl font-calligraffitti">
          About Us
        </h2>
        <p className="text-primary text-base md:text-2xl font-Caveat">
          Learn more about our mission and values
        </p>
        <img src={title_img} alt="About Us" />
      </div>

     
      <section className="flex flex-col lg:flex-row gap-10 mx-auto w-11/12 lg:gap-20 items-center">
        <img
          src={aboutimg1}
          alt="Our Team"
          className="w-full lg:w-1/2 rounded-lg object-cover shadow-lg"
        />
        <div className="flex flex-col gap-4 text-center lg:text-left lg:w-1/2">
          <h3 className="text-secondary font-bold text-xl md:text-3xl">
            Our Story
          </h3>
          <p className="text-base md:text-lg text-secondary">
            At Pet World, we believe in creating a community where pets and
            people come together in harmony. Our journey started with a simple
            idea: to make pet care and adoption easier for everyone. Over the
            years, we have grown into a trusted name, known for our dedication
            to animal welfare and our commitment to helping pet lovers find
            their perfect companions.
          </p>
        </div>
      </section>

      
      <section className="flex flex-col-reverse lg:flex-row gap-10 w-11/12 mx-auto lg:gap-20 items-center">
        <div className="flex flex-col gap-4 text-center lg:text-left lg:w-1/2">
          <h3 className="text-secondary font-bold text-xl md:text-3xl">
            Our Mission
          </h3>
          <p className="text-base md:text-lg text-secondary">
            Our mission is to create a world where every pet finds a loving
            home. We strive to provide the best resources, support, and
            education to pet owners, while also advocating for the well-being of
            animals everywhere. We believe in the power of love and compassion
            to make a difference in the lives of pets and their owners.
          </p>
        </div>
        <img
          src={BG_img}
          alt="Our Mission"
          className="w-full lg:w-1/2 rounded-lg object-cover"
        />
      </section>

      
      <div className="flex flex-col items-center gap-4 text-center bg-highlight py-10 px-6 shadow-lg">
        <h4 className="text-white font-extrabold text-xl md:text-3xl font-calligraffitti">
          Join Us in Making a Difference
        </h4>
        <p className="text-white text-base md:text-lg">
          Whether you’re looking to adopt a new pet, volunteer, or simply learn
          more about how you can help, we’re here to guide you every step of the
          way. Together, we can make a positive impact on the lives of animals
          and the people who love them.
        </p>
        <button className="bg-secondary text-white font-bold py-2 px-6 rounded-lg hover:bg-orange-400">
          Learn More
        </button>
      </div>
    </div>
  );
}
