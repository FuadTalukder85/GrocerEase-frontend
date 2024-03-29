"use server";
import Noodles from "@/components/category/Noodles";
import { FieldValues } from "react-hook-form";

const noodlesServer = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/all-product`, {
    method: "GET",
    cache: "no-store",
  });
  const allProducts = await res.json();
  const noodlesItem = allProducts.filter(
    (item: FieldValues) => item?.category === "noodles"
  );

  return (
    <div>
      <Noodles noodlesItem={noodlesItem}></Noodles>
    </div>
  );
};

export default noodlesServer;
