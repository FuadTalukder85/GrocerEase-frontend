"use server";

import AllProductPage from "@/components/allProductPage/AllProductPage";

const ProductServer = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/all-product`, {
    next: {
      revalidate: 30,
    },
  });
  const allProducts = await res.json();
  console.log(allProducts);

  return (
    <>
      {" "}
      <AllProductPage allProducts={allProducts}></AllProductPage>
    </>
  );
};

export default ProductServer;