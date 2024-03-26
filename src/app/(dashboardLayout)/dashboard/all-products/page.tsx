import AllProductsTable from "@/components/allProductsTable/AllProductsTable";
import React from "react";

const AllProducts = () => {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-semibold text-[#333333]">
        All Products : 703
      </h1>
      <AllProductsTable></AllProductsTable>
    </div>
  );
};

export default AllProducts;
