"use server";

import FastfoodDetailsCard from "@/components/categoryCard/FastfoodDetailsCard";

type FastFoodId = {
  params: {
    fastFoodId: string;
  };
};

const fishDetails = async ({ params }: FastFoodId) => {
  const res = await fetch(
    `${process.env.BACKEND_URL}/all-product/${params.fastFoodId}`
  );
  const fastFoodDetails = await res.json();

  return (
    <div>
      <FastfoodDetailsCard
        fastFoodDetails={fastFoodDetails}
      ></FastfoodDetailsCard>
    </div>
  );
};

export default fishDetails;
