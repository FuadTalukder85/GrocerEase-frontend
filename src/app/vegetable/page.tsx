"use server";
import Vegetable from "@/components/category/Vegetable";
import { FieldValues } from "react-hook-form";

const vegetableServer = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/all-product`, {
    method: "GET",
    cache: "no-store",
  });
  const allProducts = await res.json();
  const vegetableItem = allProducts.filter(
    (item: FieldValues) => item?.category === "vegetable"
  );

  return (
    <div>
      <Vegetable vegetableItem={vegetableItem} />
    </div>
  );
};

export default vegetableServer;
