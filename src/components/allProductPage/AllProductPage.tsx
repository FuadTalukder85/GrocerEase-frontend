"use client";
import Image from "next/image";
import { IoMdCart } from "react-icons/io";
import { AllProductValues } from "../types.tsx/types";
import Link from "next/link";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const AllProductPage = ({
  allProducts,
}: {
  allProducts: AllProductValues[];
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-5 mt-16">
      {allProducts.map((product) => (
        <div key={product._id} className="border shadow-xl">
          <Link href={`/product/${product._id}`}>
            <Image
              src={product.image}
              alt="product1"
              width={150}
              height={150}
              className="mx-auto"
            ></Image>
            <div className="mt-5">
              <p className="text-[#E85363] font-semibold max-w-[15ch] mx-auto text-center">
                {product.title}
              </p>
            </div>
            <div className="flex justify-center mt-2">
              <Rating
                style={{ maxWidth: 100 }}
                value={product.rating}
                readOnly
              />
            </div>
          </Link>
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
  );
};

export default AllProductPage;
