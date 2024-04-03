"use server";
import AllProductsTable from "@/components/allProductsTable/AllProductsTable";
const AllProducts = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/all-product`, {
    method: "GET",
    next: {
      revalidate: 30,
    },
  });
  const allProductsTable = await res.json();
  //
  const allStates = await fetch(`${process.env.BACKEND_URL}/all-stats`, {
    method: "GET",
    next: {
      revalidate: 30,
    },
  });
  const allState = await allStates.json();
  return (
    <div className="md:p-5">
      <AllProductsTable
        allProductsTable={allProductsTable}
        allState={allState}
      />
    </div>
  );
};
export default AllProducts;
