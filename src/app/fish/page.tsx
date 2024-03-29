import Fish from "@/components/category/Fish";

import { FieldValues } from "react-hook-form";

const fishServer = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/all-product`, {
    method: "GET",
    cache: "no-store",
  });
  const allProducts = await res.json();
  const fishItem = allProducts.filter(
    (item: FieldValues) => item?.category === "fish"
  );

  return (
    <div>
      <Fish fishItem={fishItem} />
    </div>
  );
};

export default fishServer;
