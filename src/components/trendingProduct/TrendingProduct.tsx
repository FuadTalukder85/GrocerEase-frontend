"use client";
import { IoMdCart } from "react-icons/io";
import { AllProductValues } from "../types.tsx/types";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const TrendingProduct = ({
  trendingProduct,
}: {
  trendingProduct: AllProductValues[];
}) => {
  return (
    <div className="mt-7">
      <div className="flex justify-between">
        <h1 className="text-xl md:text-3xl font-semibold text-[#333333]">
          Trending Products
        </h1>
        <Link href="/product">
          <h1 className="font-semibold text-[#333333] flex items-center gap-1">
            See All <MdKeyboardArrowRight className="text-3xl" />
          </h1>
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-5 mt-5">
        {trendingProduct.slice(0, 6).map((product) => (
          <div
            key={product._id}
            className="bg-[#cefff86e] text-center shadow-xl"
          >
            <Image
              src={product.image}
              width={150}
              height={150}
              className="mx-auto"
              alt="trendingImg"
            ></Image>
            <p className="text-xl font-semibold mt-5">{product.title}</p>
            <div className="flex justify-center mt-2">
              <Rating
                style={{ maxWidth: 100 }}
                value={product.rating}
                readOnly
              />
            </div>
            <div className="flex justify-between mt-3 px-3 items-center md:px-7 mb-3">
              <p>
                ${product.price}{" "}
                <small className="line-through">${product.discount}</small>
              </p>
              <button className="flex items-center gap-2 bg-[#cefff8] md:px-5 py-1 rounded-md text-lg text-[#3BB77E] font-medium">
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

export default TrendingProduct;
