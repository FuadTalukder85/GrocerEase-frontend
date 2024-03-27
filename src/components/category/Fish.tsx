"use client";
import { IoMdCart } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { AllProductValues } from "../types.tsx/types";

const Fish = ({ fishItem }: { fishItem: AllProductValues[] }) => {
  return (
    <div className="grid grid-cols-6 gap-5 mt-10">
      {fishItem.map((fish) => (
        <div key={fish._id} className="border shadow-xl">
          <Link href={`/fish/${fish._id}`}>
            <Image
              src={fish.image}
              alt="product1"
              width={200}
              height={200}
              className="mx-auto"
            ></Image>
            <div className="mt-5">
              <p className="text-[#E85363] font-semibold max-w-[15ch] mx-auto text-center">
                {fish.title}
              </p>
            </div>
          </Link>
          <div className="flex justify-between px-5 pb-5 mt-3">
            <p>
              {fish.price} <small className="line-through">$89,74</small>
            </p>
            <button className="flex items-center gap-2 bg-[#cefff8] px-5 py-1 rounded-md text-lg text-[#3BB77E] font-medium">
              <IoMdCart className="text-[#E85363]" />
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Fish;
