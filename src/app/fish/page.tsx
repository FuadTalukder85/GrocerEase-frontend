"use server";

import Fish from "@/components/category/Fish";

import { FieldValues } from "react-hook-form";

const fishServer = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/all-product`);
  const allProducts = await res.json();
  const fishItem = allProducts.filter(
    (item: FieldValues) => item?.category === "fish"
  );
  console.log(fishItem);
  return (
    <div>
      <Fish fishItem={fishItem}></Fish>
    </div>
  );
};

export default fishServer;
