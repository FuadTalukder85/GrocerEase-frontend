import Image from "next/image";
import React from "react";
import img from "../../assets/product/product1.jpg";

const AllProductsTable = () => {
  return (
    <div className="mt-5">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-lg text-[#333333]">SL NO.</th>
              <th className="text-lg text-[#333333]">Product Items</th>
              <th className="text-lg text-[#333333]">Product ID</th>
              <th className="text-lg text-[#333333]">Price</th>
              <th className="text-lg text-[#333333]">Details</th>
              <th className="text-lg text-[#333333]">Update</th>
              <th className="text-lg text-[#333333]">Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>1</label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image src={img} alt="" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>Purple</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProductsTable;
