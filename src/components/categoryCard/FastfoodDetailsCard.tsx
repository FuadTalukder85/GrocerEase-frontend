"use client";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AllProductValues } from "../types.tsx/types";
import Image from "next/image";

const FastfoodDetailsCard = ({
  fastFoodDetails,
}: {
  fastFoodDetails: AllProductValues;
}) => {
  console.log(fastFoodDetails);
  return (
    <div className="flex justify-between items-center gap-5 mt-10 p-28">
      <div className="w-full border">
        <Image
          className="mx-auto"
          src={fastFoodDetails.image}
          alt="vegetableDetails"
          width={500}
          height={500}
        ></Image>
      </div>
      <div className="w-full border p-7">
        <h1 className="text-3xl font-semibold text-[#333333]">
          {fastFoodDetails.title}
        </h1>
        <p className="text-xl font-semibold text-[#E85363] mt-3 pb-3">
          ${fastFoodDetails.price}
        </p>
        <hr />
        <div className="flex gap-5">
          <button className="mt-5 bg-[#5DD2C0] px-5 py-2 rounded-md  text-white font-medium">
            Add to cart
          </button>
          <button className="mt-5 bg-[#5DD2C0] px-5 py-2 rounded-md  text-white font-medium">
            Buy it now
          </button>
        </div>
        <p className="mt-7 text-[#E85363] pb-3">
          Please <a href="#">Contact Us</a> If You Are Interested In This
          Product.
        </p>
        <hr />
        <h3 className="mt-3 text-[#333333] font-semibold text-xl">
          Product Details
        </h3>

        <p className="mt-5 pb-3">{fastFoodDetails.description}</p>
        <hr />
        <h3 className="mt-3 text-[#333333] font-semibold text-xl">Share it</h3>
        <div className="flex gap-5 text-2xl text-[#E85363] font-semibold mt-5">
          <FaFacebook /> <FaInstagramSquare /> <FaTwitter /> <FaPinterest />{" "}
          <FaYoutube />
        </div>
      </div>
    </div>
  );
};

export default FastfoodDetailsCard;
