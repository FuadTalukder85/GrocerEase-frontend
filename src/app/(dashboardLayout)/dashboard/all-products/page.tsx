import AllProductsTable from "@/components/allProductsTable/AllProductsTable";
import React from "react";

const AllProducts = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/all-product`, {
    method: "GET",
    cache: "no-store",
    next: {
      revalidate: 30,
    },
  });
  const allProductsTable = await res.json();

  //
  const allStates = await fetch(`${process.env.BACKEND_URL}/all-stats`, {
    method: "GET",
    cache: "no-store",
    next: {
      revalidate: 30,
    },
  });
  const allState = await allStates.json();

  return (
    <div className="p-5">
      <AllProductsTable
        allProductsTable={allProductsTable}
        allState={allState}
      ></AllProductsTable>
    </div>
  );
};

export default AllProducts;
