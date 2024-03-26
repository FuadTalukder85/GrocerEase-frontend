"use client";
import React from "react";
import { IoMdCart } from "react-icons/io";
import trendingImg from "../../assets/trendingImg.png";
import Image from "next/image";

const TrendingProduct = () => {
  return (
    <div className="mt-7">
      <h1 className="text-3xl font-semibold text-[#333333]">
        Top Trending Products
      </h1>
      <div className="grid grid-cols-6 gap-5 mt-5">
        <div className="bg-[#cefff86e] pb-5 text-center shadow-xl">
          <Image
            src={trendingImg}
            className="mx-auto"
            alt="trendingImg"
          ></Image>
          <p className="text-xl font-semibold mt-5">Milk and Dairies</p>
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
          <div className="bg-[#5DD2C0] py-[2px]"></div>
        </div>
        <div className="bg-[#cefff86e] pb-5 text-center shadow-xl">
          <Image
            src={trendingImg}
            className="mx-auto"
            alt="trendingImg"
          ></Image>
          <p className="text-xl font-semibold mt-5">Milk and Dairies</p>
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
          <div className="bg-[#5DD2C0] py-[2px]"></div>
        </div>
        <div className="bg-[#cefff86e] pb-5 text-center shadow-xl">
          <Image
            src={trendingImg}
            className="mx-auto"
            alt="trendingImg"
          ></Image>
          <p className="text-xl font-semibold mt-5">Milk and Dairies</p>
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
          <div className="bg-[#5DD2C0] py-[2px]"></div>
        </div>
        <div className="bg-[#cefff86e] pb-5 text-center shadow-xl">
          <Image
            src={trendingImg}
            className="mx-auto"
            alt="trendingImg"
          ></Image>
          <p className="text-xl font-semibold mt-5">Milk and Dairies</p>
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
          <div className="bg-[#5DD2C0] py-[2px]"></div>
        </div>
        <div className="bg-[#cefff86e] pb-5 text-center shadow-xl">
          <Image
            src={trendingImg}
            className="mx-auto"
            alt="trendingImg"
          ></Image>
          <p className="text-xl font-semibold mt-5">Milk and Dairies</p>
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
          <div className="bg-[#5DD2C0] py-[2px]"></div>
        </div>
        <div className="bg-[#cefff86e] pb-5 text-center shadow-xl">
          <Image
            src={trendingImg}
            className="mx-auto"
            alt="trendingImg"
          ></Image>
          <p className="text-xl font-semibold mt-5">Milk and Dairies</p>
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
          <div className="bg-[#5DD2C0] py-[2px]"></div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProduct;
