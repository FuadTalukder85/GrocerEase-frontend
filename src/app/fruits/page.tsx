"use server";
import Fruits from "@/components/category/Fruits";

import { FieldValues } from "react-hook-form";

const fishServer = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/all-product`, {
    method: "GET",
    cache: "no-store",
  });
  const allProducts = await res.json();
  const fruitsItem = allProducts.filter(
    (item: FieldValues) => item?.category === "fruits"
  );

  return (
    <div>
      <Fruits fruitsItem={fruitsItem} />
    </div>
  );
};

export default fishServer;
