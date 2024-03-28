"use client";
import Image from "next/image";
import Link from "next/link";
import categor1 from "../../assets/category/meat1.png";
import categor2 from "../../assets/category/fish2.png";
import categor3 from "../../assets/category/vagetable3.png";
import categor4 from "../../assets/category/fruits4.png";
import categor5 from "../../assets/category/noodles5.png";
import categor6 from "../../assets/category/fastfood6.png";

const Categories = () => {
  return (
    <div className="mt-7">
      <h1 className="text-3xl font-semibold text-[#333333]">
        Shop by Categories
      </h1>
      <div className="grid grid-cols-6 gap-5 mt-5">
        <Link href="/meat">
          <div className="bg-[#cefff86e] py-16 text-center">
            <Image src={categor1} className="mx-auto" alt="categoryImg"></Image>
            <p className="text-xl font-semibold mt-3">Meat</p>
            <p>7 items</p>
          </div>
        </Link>
        <Link href="/fish">
          <div className="bg-[#cefff86e] py-16 text-center">
            <Image src={categor2} className="mx-auto" alt="categoryImg"></Image>
            <p className="text-xl font-semibold mt-3">Fish</p>
            <p>7 items</p>
          </div>
        </Link>
        <Link href="/vegetable">
          <div className="bg-[#cefff86e] py-16 text-center">
            <Image src={categor3} className="mx-auto" alt="categoryImg"></Image>
            <p className="text-xl font-semibold mt-3">Vegatable</p>
            <p>7 items</p>
          </div>
        </Link>
        <Link href="/fruits">
          <div className="bg-[#cefff86e] py-16 text-center">
            <Image src={categor4} className="mx-auto" alt="categoryImg"></Image>
            <p className="text-xl font-semibold mt-3">Fruits</p>
            <p>7 items</p>
          </div>
        </Link>
        <Link href="/noodles">
          <div className="bg-[#cefff86e] py-16 text-center">
            <Image src={categor5} className="mx-auto" alt="categoryImg"></Image>
            <p className="text-xl font-semibold mt-3">Noodles</p>
            <p>7 items</p>
          </div>
        </Link>
        <Link href="/fastfood">
          <div className="bg-[#cefff86e] py-16 text-center">
            <Image src={categor6} className="mx-auto" alt="categoryImg"></Image>
            <p className="text-xl font-semibold mt-3">FastFood</p>
            <p>7 items</p>
          </div>
        </Link>
        <Link href="/vegetable">
          <div className="bg-[#cefff86e] py-16 text-center">
            <Image src={categor3} className="mx-auto" alt="categoryImg"></Image>
            <p className="text-xl font-semibold mt-3">Salad</p>
            <p>7 items</p>
          </div>
        </Link>
        <Link href="/noodles">
          <div className="bg-[#cefff86e] py-16 text-center">
            <Image src={categor5} className="mx-auto" alt="categoryImg"></Image>
            <p className="text-xl font-semibold mt-3">Noodles</p>
            <p>7 items</p>
          </div>
        </Link>
        <Link href="/fish">
          <div className="bg-[#cefff86e] py-16 text-center">
            <Image src={categor2} className="mx-auto" alt="categoryImg"></Image>
            <p className="text-xl font-semibold mt-3">Sea Fish</p>
            <p>7 items</p>
          </div>
        </Link>
        <Link href="/fastfood">
          <div className="bg-[#cefff86e] py-16 text-center">
            <Image src={categor6} className="mx-auto" alt="categoryImg"></Image>
            <p className="text-xl font-semibold mt-3">FastFood</p>
            <p>7 items</p>
          </div>
        </Link>
        <Link href="/meat">
          <div className="bg-[#cefff86e] py-16 text-center">
            <Image src={categor1} className="mx-auto" alt="categoryImg"></Image>
            <p className="text-xl font-semibold mt-3">Beef</p>
            <p>7 items</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
