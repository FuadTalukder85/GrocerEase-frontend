"use client";
import Image from "next/image";
import { MdEditSquare } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { AllProductValues } from "../types.tsx/types";

const AllProductsTable = ({
  allProductsTable,
  allState,
}: {
  allProductsTable: AllProductValues[];
}) => {
  console.log("allProductsTable >", allProductsTable);
  return (
    <div className="mt-5">
      <h1 className="text-3xl font-semibold text-[#333333]">
        All Products :{" "}
        <span className="text-[#E85363]">{allState.totalProducts}</span>
      </h1>
      <div className="overflow-x-auto mt-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-lg text-[#333333]">SL NO.</th>
              <th className="text-lg text-[#333333]">Product Image</th>
              <th className="text-lg text-[#333333]">Product Title</th>
              <th className="text-lg text-[#333333]">Product ID</th>
              <th className="text-lg text-[#333333]">Price</th>
              <th className="text-lg text-[#333333] text-center">Update</th>
              <th className="text-lg text-[#333333] text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allProductsTable.map((product, index) => (
              <tr key={product._id}>
                <th>
                  <label className="text-[#E85363] font-bold">
                    {index + 1}
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle">
                        <Image
                          src={product.image}
                          alt="product"
                          width={40}
                          height={40}
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{product.title}</div>
                  </div>
                </td>
                <td className="font-bold">{product._id}</td>
                <td className="font-bold">${product.price}</td>
                <td className="flex items-center justify-center text-[#E85363] text-4xl">
                  <div className="flex items-center justify-center text-[#E85363] text-4xl">
                    <MdEditSquare />
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center text-[#E85363] text-4xl">
                    <AiFillDelete />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProductsTable;
