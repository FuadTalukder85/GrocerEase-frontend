"use server";

import Fastfood from "@/components/category/Fastfood";
import { FieldValues } from "react-hook-form";

const fastfoodServer = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/all-product`);
  const allProducts = await res.json();
  const fastFoodItem = allProducts.filter(
    (item: FieldValues) => item?.category === "fastfood"
  );
  console.log(fastFoodItem);
  return (
    <div>
      <Fastfood fastFoodItem={fastFoodItem}></Fastfood>
    </div>
  );
};

export default fastfoodServer;