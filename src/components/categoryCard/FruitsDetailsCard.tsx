"use client";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AllProductValues } from "../types.tsx/types";
import Image from "next/image";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const FruitsDetailsCard = ({
  fruitsDetails,
}: {
  fruitsDetails: AllProductValues;
}) => {
  console.log(fruitsDetails);
  return (
    <div className="flex justify-between items-center gap-5 mt-10 p-28">
      <div className="w-full border">
        <Image
          className="mx-auto"
          src={fruitsDetails.image}
          alt="fruitsDetails"
          width={500}
          height={500}
        ></Image>
      </div>
      <div className="w-full border p-7">
        <h1 className="text-3xl font-semibold text-[#333333]">
          {fruitsDetails.title}
        </h1>
        <div className="flex gap-5 items-center">
          <div className="flex gap-2 items-center">
            <p className="text-xl font-semibold text-[#E85363] mt-3 pb-3">
              ${fruitsDetails.price}
            </p>
            <p className="line-through  font-semibold text-[#E85363] mt-3 pb-3">
              ${fruitsDetails.discount}
            </p>
          </div>
          <div>
            <Rating
              style={{ maxWidth: 100 }}
              value={fruitsDetails.rating}
              readOnly
            />
          </div>
        </div>
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
          Please{" "}
          <a href="#" className="text-[#E85363] underline">
            Contact Us
          </a>{" "}
          If You Are Interested In This Product.
        </p>
        <hr />
        <h3 className="mt-3 text-[#333333] font-semibold text-xl">
          Product Details
        </h3>

        <p className="mt-5 pb-3">{fruitsDetails.description}</p>
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

export default FruitsDetailsCard;
