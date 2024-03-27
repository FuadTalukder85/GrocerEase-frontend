"use server";

import VegetableCard from "@/components/categoryCard/VegetableDetailsCard";

type VegetableId = {
  params: {
    vegetableId: string;
  };
};

const meatDetails = async ({ params }: VegetableId) => {
  console.log(params);
  const res = await fetch(
    `${process.env.BACKEND_URL}/all-product/${params.vegetableId}`
  );
  const vegetableDetails = await res.json();
  console.log(meatDetails);
  return (
    <div>
      <VegetableCard vegetableDetails={vegetableDetails}></VegetableCard>
    </div>
  );
};

export default meatDetails;
