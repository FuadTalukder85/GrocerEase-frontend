"use client";
import { IoMdCart } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import flashImg1 from "../../assets/slideImg1.jpg";
import flashImg2 from "../../assets/slideImg2.jpg";
import flashImg3 from "../../assets/slideImg3.jpg";
import flashImg4 from "../../assets/slideImg4.jpg";

const FlashSell = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-between">
        <h1 className="text-xl md:text-3xl font-semibold text-[#333333]">
          Today,s Flash Sale
        </h1>
        <h1 className="font-semibold text-[#333333] flex items-center gap-1">
          See All <MdKeyboardArrowRight className="text-3xl" />
        </h1>
      </div>
      <div className="grid md:grid-cols-4 gap-5 mt-5">
        <div className="border shadow-xl">
          <Image src={flashImg1} alt="flashImg"></Image>
          <div className="p-5 px-10">
            <p className="text-[#E85363] font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="flex justify-between mt-3">
              <p>
                <a href="" className=" text-[#3BB77E] text-lg font-medium">
                  $59.00
                </a>
              </p>
              <button className="flex items-center gap-2 bg-[#cefff8] px-5 py-1 rounded-md text-lg text-[#3BB77E] font-medium">
                <IoMdCart className="text-[#E85363]" />
                Add
              </button>
            </div>
          </div>
          <div className="bg-[#5DD2C0] py-[2px]"></div>
        </div>
        <div className="border shadow-xl">
          <Image src={flashImg2} alt="flashImg"></Image>
          <div className="p-5 px-10">
            <p className="text-[#E85363] font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="flex justify-between mt-3">
              <p>
                <a href="" className="text-[#3BB77E] text-lg font-medium">
                  $100
                </a>
              </p>
              <button className="flex items-center gap-2 bg-[#cefff8] px-5 py-1 rounded-md text-lg text-[#3BB77E] font-medium">
                <IoMdCart className="text-[#E85363]" />
                Add
              </button>
            </div>
          </div>
          <div className="bg-[#5DD2C0] py-[2px]"></div>
        </div>
        <div className="border shadow-xl">
          <Image src={flashImg3} alt="flashImg"></Image>
          <div className="p-5 px-10">
            <p className="text-[#E85363] font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="flex justify-between mt-3">
              <p>
                <a href="" className="text-[#3BB77E] text-lg font-medium">
                  $35
                </a>
              </p>
              <button className="flex items-center gap-2 bg-[#cefff8] px-5 py-1 rounded-md text-lg text-[#3BB77E] font-medium">
                <IoMdCart className="text-[#E85363]" />
                Add
              </button>
            </div>
          </div>
          <div className="bg-[#5DD2C0] py-[2px]"></div>
        </div>
        <div className="border shadow-xl">
          <Image src={flashImg4} alt="flashImg"></Image>
          <div className="p-5 px-10">
            <p className="text-[#E85363] font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="flex justify-between mt-3">
              <p>
                <a href="" className="text-[#3BB77E] text-lg font-medium">
                  $125
                </a>
              </p>
              <button className="flex items-center gap-2 bg-[#cefff8] px-5 py-1 rounded-md text-lg text-[#3BB77E] font-medium">
                <IoMdCart className="text-[#E85363]" />
                Add
              </button>
            </div>
          </div>
          <div className="bg-[#5DD2C0] py-[2px]"></div>
        </div>
      </div>
    </div>
  );
};

export default FlashSell;
