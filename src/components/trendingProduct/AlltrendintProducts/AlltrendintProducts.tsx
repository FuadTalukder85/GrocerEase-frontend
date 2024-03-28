"use client";
import React from "react";
import { IoMdCart } from "react-icons/io";
import Image from "next/image";
import { AllProductValues } from "@/components/types.tsx/types";

const AlltrendintProducts = ({
  trendingProduct,
}: {
  trendingProduct: AllProductValues[];
}) => {
  return (
    <div className="mt-7">
      <h1 className="text-3xl font-semibold text-[#333333]">
        Top Trending Products
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-5 mt-5">
        {trendingProduct.map((product) => (
          <div
            key={product._id}
            className="bg-[#cefff86e] text-center shadow-xl"
          >
            <Image
              src={product.image}
              width={200}
              height={200}
              className="mx-auto"
              alt="trendingImg"
            ></Image>
            <p className="text-xl font-semibold mt-5">{product.title}</p>
            <div className="flex justify-between mt-3 px-7 mb-3">
              <p>
                <a href="" className="link text-[#3BB77E] text-lg font-medium">
                  $59
                </a>
              </p>
              <button className="flex items-center gap-2 bg-[#cefff8] px-5 py-1 rounded-md text-lg text-[#3BB77E] font-medium">
                <IoMdCart className="text-[#E85363]" />
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlltrendintProducts;
