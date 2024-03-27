"use client";
import Image from "next/image";
import { IoMdCart } from "react-icons/io";
import { AllProductValues } from "../types.tsx/types";

const AllProductPage = ({
  allProducts,
}: {
  allProducts: AllProductValues[];
}) => {
  console.log("allProducts home > ", allProducts);
  return (
    <div>
      <div className="grid grid-cols-6 gap-5 mt-5">
        {allProducts.map((product) => (
          <div key={product._id} className="border shadow-xl">
            <Image
              src={product.image}
              alt="product1"
              width={200}
              height={200}
              className="mx-auto"
            ></Image>
            <div className="px-5 pb-5">
              <p className="text-[#E85363] font-semibold max-w-[15ch] mx-auto text-center">
                {product.title}
              </p>
              <div className="flex justify-between mt-3">
                <p>
                  {product.price} <small className="line-through">$89,74</small>
                </p>
                <button className="flex items-center gap-2 bg-[#cefff8] px-5 py-1 rounded-md text-lg text-[#3BB77E] font-medium">
                  <IoMdCart className="text-[#E85363]" />
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProductPage;
