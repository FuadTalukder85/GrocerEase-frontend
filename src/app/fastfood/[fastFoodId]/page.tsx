"use server";

import FastFoodDetailsCard from "@/components/categoryCard/FishDetailsCard";
import FishDetailsCard from "@/components/categoryCard/FishDetailsCard";

type FastFoodId = {
  params: {
    fastFoodId: string;
  };
};

const fishDetails = async ({ params }: FastFoodId) => {
  console.log(params);
  const res = await fetch(
    `${process.env.BACKEND_URL}/all-product/${params.fastFoodId}`
  );
  const fastFoodDetails = await res.json();
  console.log(fishDetails);
  return (
    <div>
      <FastFoodDetailsCard
        fastFoodDetails={fastFoodDetails}
      ></FastFoodDetailsCard>
    </div>
  );
};

export default fishDetails;
