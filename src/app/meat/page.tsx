"use server";
import Meat from "@/components/category/Meat";
import { FieldValues } from "react-hook-form";

const meatServer = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/all-product`, {
    method: "GET",
    cache: "no-store",
  });
  const allProducts = await res.json();
  const meatItem = allProducts.filter(
    (item: FieldValues) => item?.category === "meat"
  );

  return (
    <div>
      <Meat meatItem={meatItem} />
    </div>
  );
};

export default meatServer;
