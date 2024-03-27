"use server";

import Fruits from "@/components/category/Fruits";

import { FieldValues } from "react-hook-form";

const fishServer = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/all-product`);
  const allProducts = await res.json();
  const fruitsItem = allProducts.filter(
    (item: FieldValues) => item?.category === "fruits"
  );
  console.log(fruitsItem);
  return (
    <div>
      <Fruits fruitsItem={fruitsItem}></Fruits>
    </div>
  );
};

export default fishServer;
