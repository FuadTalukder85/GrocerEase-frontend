"use server";

import Meat from "@/components/category/Meat";
import { FieldValues } from "react-hook-form";

const meatServer = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/all-product`);
  const allProducts = await res.json();
  const meatItem = allProducts.filter(
    (item: FieldValues) => item?.category === "meat"
  );

  return (
    <div>
      <Meat meatItem={meatItem}></Meat>
    </div>
  );
};

export default meatServer;
