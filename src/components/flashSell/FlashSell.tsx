"use client";
import { IoMdCart } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import { AllProductValues } from "../types.tsx/types";
import Link from "next/link";

const FlashSell = ({ flashSell }: { flashSell: AllProductValues[] }) => {
  return (
    <div className="mt-16">
      <div className="flex justify-between">
        <h1 className="text-xl md:text-3xl font-semibold text-[#333333]">
          Today,s Flash Sale
        </h1>
        <Link href={"/flash-sale"}>
          <h1 className="font-semibold text-[#333333] flex items-center gap-1">
            See All <MdKeyboardArrowRight className="text-3xl" />
          </h1>
        </Link>
      </div>
      <div className="md:grid grid-cols-12">
        <div className="col-span-4">
          <div className="text-center md:px-16">
            <p className="mt-24 text-4xl font-semibold text-center text-[#E85363]">
              UP TO 30%
            </p>
            <p className="mt-10 text-xl">Weekly Discounts on</p>
            <h1 className="mt-2 text-[#E85363] text-2xl font-semibold">
              Fruits, Vegetables and Shacks
            </h1>
            <button className="mt-5 text-lg bg-[#cefff8] px-5 py-1 rounded-md text-[#3BB77E] font-medium">
              View All
            </button>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              modi at quo? Deleniti aut quod, quibusdam sit magni eveniet fugit
              molestiae obcaecati deserunt repudiandae dolores, id aspernatur
              beatae reprehenderit voluptas dignissimos similique tenetur
              laborum nesciunt.
            </p>
          </div>
        </div>
        <div className="col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 items-center justify-center">
            {flashSell.slice(2, 6).map((flashProduct) => (
              <Link
                href={`/product/${flashProduct?._id}`}
                key={flashProduct._id}
              >
                <div className="border shadow-xl">
                  <div className="flex w-full">
                    <div className="relative w-[50%] overflow-hidden">
                      <Image
                        className="hover:scale-110 transition-all"
                        src={flashProduct.image}
                        alt="flashImg"
                        width={300}
                        height={300}
                      ></Image>
                      <button className="text-lg absolute top-3 right-3 bg-[#cefff8] px-5 py-1 rounded-md text-[#3BB77E] font-medium">
                        -{flashProduct.discount}%
                      </button>
                    </div>
                    <div className="p-2 md:p-5 py-5 md:py-16 w-[50%]">
                      <p className="text-[#E85363] md:text-2xl font-semibold text-center">
                        {flashProduct.title}
                      </p>
                      <p className="mt-5 truncate">
                        {flashProduct.description}
                      </p>
                      <div className="mt-5 flex md:text-xl justify-between">
                        <p>Price : ${flashProduct.price} </p>
                        <button className="flex items-center gap-2 bg-[#cefff8] px-2 md:px-5 py-1 rounded-md md:text-lg text-[#3BB77E] font-medium">
                          <IoMdCart className="text-[#E85363]" />
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSell;
