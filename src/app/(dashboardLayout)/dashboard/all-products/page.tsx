import AllProductsTable from "@/components/allProductsTable/AllProductsTable";
import React from "react";

const AllProducts = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/all-product`, {
    next: {
      revalidate: 30,
    },
  });
  const allProductsTable = await res.json();
  console.log(allProductsTable);
  //
  const allStates = await fetch(`${process.env.BACKEND_URL}/all-stats`, {
    next: {
      revalidate: 30,
    },
  });
  const allState = await allStates.json();
  console.log(allState);
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
