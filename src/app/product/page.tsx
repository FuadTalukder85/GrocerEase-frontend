"use server";

import AllProductPage from "@/components/allProductPage/AllProductPage";

const Server = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/all-product`);
  const allProducts = await res.json();
  console.log(allProducts);

  return (
    <>
      {" "}
      <AllProductPage allProducts={allProducts}></AllProductPage>
    </>
  );
};

export default Server;
