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
    <div className="mt-16">
      <div className="flex justify-between">
        <h1 className="text-xl md:text-3xl font-semibold text-[#333333]">
          Trending Products
        </h1>
        <Link href="/trendingProducts">
          <h1 className="font-semibold text-[#333333] flex items-center gap-1">
            See All <MdKeyboardArrowRight className="text-3xl" />
          </h1>
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5">
        {trendingProduct.slice(0, 6).map((product) => (
          <div key={product._id} className="border shadow-xl">
            <Link href={`/product/${product._id}`}>
              <div className="relative">
                <Image
                  src={product.image}
                  alt="product1"
                  width={300}
                  height={300}
                  className="mx-auto"
                ></Image>
                <button className="absolute text-lg top-3 right-3 bg-[#cefff8] px-5 py-1 rounded-md text-[#3BB77E] font-medium">
                  -{product.discount}%
                </button>
              </div>

              <hr />
              <div className="flex justify-center items-center gap-10 mt-10">
                <div className="">
                  <p className="text-[#E85363] text-2xl font-semibold mx-auto text-center">
                    {product.title}
                  </p>
                </div>
                <div className="">
                  <Rating
                    style={{ maxWidth: 100 }}
                    value={product.rating}
                    readOnly
                  />
                </div>
              </div>
            </Link>
            <div className="flex justify-center items-center gap-10 mt-3 px-3 md:px-7 mb-3">
              <p>${product.price}</p>
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
