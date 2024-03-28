import React from "react";
import aboutUsImg from "../../assets/aboutUs/aboutUs.png";
import aboutUsImg1 from "../../assets/aboutUs/about-1.png";
import aboutUsImg2 from "../../assets/aboutUs/about-2.png";
import aboutUsImg3 from "../../assets/aboutUs/about-3.png";
import icon1 from "../../assets/aboutUs/icon-1.png";
import icon2 from "../../assets/aboutUs/icon-2.png";
import icon3 from "../../assets/aboutUs/icon-3.png";
import icon4 from "../../assets/aboutUs/icon-4.png";

import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="mt-10 md:mt-28">
      <div className="md:flex gap-10 justify-between items-center">
        <div className="w-full">
          <Image
            className="rounded-2xl"
            src={aboutUsImg}
            alt="aboutUsImg"
          ></Image>
        </div>
        <div className="w-full">
          <h1 className="text-xl md:text-3xl font-semibold text-[#333333] mt-10 md:mt-0">
            Welcome to GrocerEase
          </h1>
          <p className="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ut
            aliquid commodi molestias nisi, voluptate optio. Mollitia fugit
            labore, ipsa repudiandae, veritatis quis soluta iste id nam
            architecto assumenda unde libero modi dignissimos sapiente facere!
            Nihil rerum.
          </p>

          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            praesentium quaerat, quod natus obcaecati reprehenderit possimus,
            excepturi at adipisci totam non? Sit et quam ipsum facilis fuga
            porro sint animi, maiores corrupti quibusdam sapiente, ratione
            quisquam, officia culpa debitis quas explicabo molestias at eaque
            accusamus iste. Libero, quae! Voluptate corporis numquam atque culpa
            voluptatem placeat veniam dolores. Ipsum nesciunt ad repellat
            officiis.
          </p>
          <div className="flex gap-5 justify-between mt-10 pr-20 md:pr-o">
            <Image
              className="rounded-2xl"
              src={aboutUsImg1}
              alt="aboutUsImg"
            ></Image>
            <Image
              className="rounded-2xl"
              src={aboutUsImg2}
              alt="aboutUsImg"
            ></Image>
            <Image
              className="rounded-2xl"
              src={aboutUsImg3}
              alt="aboutUsImg"
            ></Image>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-semibold text-center text-[#333333] mt-28">
          What We Provide?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-10 mt-16">
          <div className="px-5 py-10 border">
            <Image
              className="rounded-2xl mx-auto"
              src={icon1}
              alt="icon1"
              width={150}
            ></Image>
            <h3 className="text-xl font-semibold text-center text-[#333333] mt-5">
              Best Price and Offers
            </h3>
            <p className="mt-3 text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
              dolore, molestias non provident, expedita ipsa aperiam veniam
              repellat neque sapiente molestiae aspernatur maiores! Corrupti,
              sunt?
            </p>
            <p className="mt-10  text-center">
              <small className="text-[#E85363]">Read More</small>
            </p>
          </div>
          <div className="px-5 py-10 border">
            <Image
              className="rounded-2xl mx-auto"
              src={icon2}
              alt="icon1"
              width={150}
            ></Image>
            <h3 className="text-xl font-semibold text-center text-[#333333] mt-5">
              Best Price and Offers
            </h3>
            <p className="mt-3 text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
              dolore, molestias non provident, expedita ipsa aperiam veniam
              repellat neque sapiente molestiae aspernatur maiores! Corrupti,
              sunt?
            </p>
            <p className="mt-10  text-center">
              <small className="text-[#E85363]">Read More</small>
            </p>
          </div>
          <div className="px-5 py-10 border">
            <Image
              className="rounded-2xl mx-auto"
              src={icon3}
              alt="icon1"
              width={150}
            ></Image>
            <h3 className="text-xl font-semibold text-center text-[#333333] mt-5">
              Best Price and Offers
            </h3>
            <p className="mt-3 text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
              dolore, molestias non provident, expedita ipsa aperiam veniam
              repellat neque sapiente molestiae aspernatur maiores! Corrupti,
              sunt?
            </p>
            <p className="mt-10  text-center">
              <small className="text-[#E85363]">Read More</small>
            </p>
          </div>
          <div className="px-5 py-10 border">
            <Image
              className="rounded-2xl mx-auto"
              src={icon4}
              alt="icon1"
              width={150}
            ></Image>
            <h3 className="text-xl font-semibold text-center text-[#333333] mt-5">
              Best Price and Offers
            </h3>
            <p className="mt-3 text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
              dolore, molestias non provident, expedita ipsa aperiam veniam
              repellat neque sapiente molestiae aspernatur maiores! Corrupti,
              sunt?
            </p>
            <p className="mt-10  text-center">
              <small className="text-[#E85363]">Read More</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
