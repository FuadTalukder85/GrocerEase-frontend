import { IoMdCart } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { AllProductValues } from "@/components/types.tsx/types";

const Category = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/all-product`, {
    next: {
      revalidate: 30,
    },
  });
  const product = await res.json();
  return (
    <div className="mt-16">
      <div className="grid grid-cols-12">
        <div className="col-span-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 items-center justify-center">
            {product.map((flashProduct: AllProductValues) => (
              <Link
                href={`/product/${flashProduct?._id}`}
                key={flashProduct._id}
              >
                <div className="border shadow-xl">
                  <div className="flex md:w-full">
                    <div className="relative md:w-[50%] overflow-hidden">
                      <Image
                        className="hover:scale-110 transition-all"
                        src={flashProduct.image}
                        alt="categoryImg"
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

export default Category;
