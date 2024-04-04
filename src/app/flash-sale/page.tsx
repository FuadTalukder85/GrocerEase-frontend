import { IoMdCart } from "react-icons/io";
import Image from "next/image";

import Link from "next/link";
import FlashSaleCountDown from "@/components/FlashSaleCountDown/FlashSaleCountDown";
import { AllProductValues } from "@/components/types.tsx/types";

const FlashSell = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/all-product`, {
    next: {
      revalidate: 30,
    },
  });
  const product = await res.json();
  return (
    <div className="mt-16">
      <div className="flex justify-between">
        <h1 className="text-xl md:text-3xl font-semibold text-[#333333]">
          Today,s Flash Sale
        </h1>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-4">
          <div className="text-center px-16">
            <p className="text-4xl font-semibold text-[#333333] mt-16">
              Offer will expire
            </p>
            <FlashSaleCountDown></FlashSaleCountDown>
            <p className="mt-10 text-4xl font-semibold text-[#E85363]">
              UP TO 30%
            </p>
          </div>
        </div>
        <div className="col-span-8">
          <div className="grid md:grid-cols-2 gap-5 mt-5">
            {product.slice(0, 6).map((flashProduct: AllProductValues) => (
              <Link
                href={`/product/${flashProduct?._id}`}
                key={flashProduct._id}
              >
                <div className="border shadow-xl">
                  <div className="flex w-full">
                    <div className="relative w-[50%]">
                      <Image
                        src={flashProduct.image}
                        alt="flashImg"
                        width={300}
                        height={300}
                      ></Image>
                      <button className="text-lg absolute top-3 right-3 bg-[#cefff8] px-5 py-1 rounded-md text-[#3BB77E] font-medium">
                        -{flashProduct.discount}%
                      </button>
                    </div>
                    <div className="p-5 py-16 w-[50%]">
                      <p className="text-[#E85363] text-2xl font-semibold text-center">
                        {flashProduct.title}
                      </p>
                      <p className="mt-5 truncate">
                        {flashProduct.description}
                      </p>
                      <div className="mt-5 flex text-xl justify-between">
                        <p>Price : ${flashProduct.price} </p>
                        <button className="flex items-center gap-2 bg-[#cefff8] px-5 py-1 rounded-md text-lg text-[#3BB77E] font-medium">
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
