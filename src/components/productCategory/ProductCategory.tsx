"use client";
import React from "react";
import categoryImg from "../../assets/category-1.png";
import Image from "next/image";

const ProductCategory = () => {
  return (
    <div className="mt-7">
      <h1 className="text-3xl font-semibold text-[#333333]">
        Shop by Categories
      </h1>
      <div className="grid grid-cols-6 gap-5 mt-5">
        <div className="bg-[#cefff86e] py-16 text-center">
          <Image
            src={categoryImg}
            className="mx-auto"
            alt="categoryImg"
          ></Image>
          <p className="text-xl font-semibold mt-3">Milk and Dairies</p>
          <p>7 items</p>
        </div>
        <div className="bg-[#cefff86e] py-16 text-center">
          <Image
            src={categoryImg}
            className="mx-auto"
            alt="categoryImg"
          ></Image>
          <p className="text-xl font-semibold mt-3">Milk and Dairies</p>
          <p>7 items</p>
        </div>
        <div className="bg-[#cefff86e] py-16 text-center">
          <Image
            src={categoryImg}
            className="mx-auto"
            alt="categoryImg"
          ></Image>
          <p className="text-xl font-semibold mt-3">Milk and Dairies</p>
          <p>7 items</p>
        </div>
        <div className="bg-[#cefff86e] py-16 text-center">
          <Image
            src={categoryImg}
            className="mx-auto"
            alt="categoryImg"
          ></Image>
          <p className="text-xl font-semibold mt-3">Milk and Dairies</p>
          <p>7 items</p>
        </div>
        <div className="bg-[#cefff86e] py-16 text-center">
          <Image
            src={categoryImg}
            className="mx-auto"
            alt="categoryImg"
          ></Image>
          <p className="text-xl font-semibold mt-3">Milk and Dairies</p>
          <p>7 items</p>
        </div>
        <div className="bg-[#cefff86e] py-16 text-center">
          <Image
            src={categoryImg}
            className="mx-auto"
            alt="categoryImg"
          ></Image>
          <p className="text-xl font-semibold mt-3">Milk and Dairies</p>
          <p>7 items</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
