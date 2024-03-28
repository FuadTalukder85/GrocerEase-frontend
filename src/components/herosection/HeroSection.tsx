"use client";

import Image from "next/image";
import heroImg2 from "../../assets/heroImg2.png";
import "./HeroSection.css";
import HeroSlider from "./HeroSlider";

const HeroSection = () => {
  return (
    <div className="grid md:grid-cols-12 gap-10 mt-5 md:mt-10">
      <div className="hero-banner  col-span-7 px-8 py-5 md:px-16 md:py-48 w-[375px] md:w-full">
        <p className="bg-[#E85363] w-[200px] text-center py-1 rounded-tr-lg rounded-bl-lg">
          100% Fresh Food
        </p>
        <h1 className="mt-2 md:mt-5 text-3xl md:text-6xl font-bold">
          <i>Fresh Organic</i>
        </h1>
        <p className="mt-3 text-xl font-semibold text-[#E85363]">
          Good For All
        </p>
        <button className="mt-2 md:mt-5 bg-[#5DD2C0] px-5 py-2 rounded-md  text-white font-medium">
          Shop Now
        </button>
      </div>
      <div className="col-span-5">
        <div className="max-w-[370px] md:max-w-full">
          <HeroSlider></HeroSlider>
        </div>
        <div className="mt-5">
          <Image className="w-full" src={heroImg2} alt="heroImg2"></Image>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
