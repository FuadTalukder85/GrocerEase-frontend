"use client";
import Image from "next/image";
import Link from "next/link";
import categor1 from "../../assets/slideImg1.jpg";
import categor2 from "../../assets/Bananas-1.jpg";
import categor3 from "../../assets/vagetable.jpeg";
import categor4 from "../../assets/slideImg4.jpg";

import { MdKeyboardArrowRight } from "react-icons/md";

const category = () => {
  return (
    <div className="mt-16">
      <div className="flex justify-between">
        <h1 className="text-xl md:text-3xl font-semibold text-[#333333]">
          Shop by category
        </h1>
        <Link href="/category">
          <h1 className="font-semibold text-[#333333] flex items-center gap-1">
            See All <MdKeyboardArrowRight className="text-3xl" />
          </h1>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        <div>
          <Link href="/category">
            <div className="relative overflow-hidden">
              <Image
                src={categor1}
                className="mx-auto h-[520px] w-full hover:scale-110 transition-all"
                alt="categoryImg"
                height={500}
                width={500}
              ></Image>
              <p className="absolute top-[45%] left-[25%] text-xl md:text-3xl font-semibold text-white">
                Fresh Strawberry
              </p>
            </div>
          </Link>
        </div>
        <div className="">
          <Link href="/category">
            <div className="relative overflow-hidden">
              <Image
                src={categor2}
                className="mx-auto h-[250px] w-full hover:scale-110 transition-all"
                alt="categoryImg"
                height={500}
                width={500}
              ></Image>
              <p className="absolute top-[45%] left-[25%] text-xl md:text-3xl font-semibold text-white">
                Fresh Banana
              </p>
            </div>
          </Link>
          <Link href="/category">
            <div className="relative mt-5 overflow-hidden">
              <Image
                src={categor3}
                className="mx-auto h-[250px] w-full hover:scale-110 transition-all"
                alt="categoryImg"
                height={500}
                width={500}
              ></Image>
              <p className="absolute top-[45%] left-[25%] text-xl md:text-3xl font-semibold text-white">
                Fresh Capsicum
              </p>
            </div>
          </Link>
        </div>
        <div>
          <Link href="/category">
            <div className="relative overflow-hidden">
              <Image
                src={categor4}
                className="mx-auto h-[520px] w-full hover:scale-110 transition-all"
                alt="categoryImg"
                height={500}
                width={500}
              ></Image>
              <p className="absolute top-[45%] left-[25%] text-xl md:text-3xl font-semibold text-white">
                Fresh Peanuts
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default category;
