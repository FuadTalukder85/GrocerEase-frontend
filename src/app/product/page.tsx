"use server";

import AllProductPage from "@/components/allProductPage/AllProductPage";

const ProductServer = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/all-product`, {
    method: "GET",
    cache: "no-store",
    next: {
      revalidate: 30,
    },
  });
  const allProducts = await res.json();

  return (
    <>
      {" "}
      <AllProductPage allProducts={allProducts} />
    </>
  );
};

export default ProductServer;
