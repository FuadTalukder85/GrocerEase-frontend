"use server";
import { ProductValues } from "@/app/(dashboardLayout)/dashboard/addProducts/page";

export const addProducts = async (data: ProductValues) => {
  const res = await fetch(`${process.env.BACKEND_URL}/create-product`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const productInfo = await res.json();
  return productInfo;
};
