"use server";

import VegetableDetailsCard from "@/components/categoryCard/VegetableDetailsCard";

type VegetableId = {
  params: {
    vegetableId: string;
  };
};

const vegetableDetails = async ({ params }: VegetableId) => {
  console.log(params);
  const res = await fetch(
    `${process.env.BACKEND_URL}/all-product/${params.vegetableId}`
  );
  const vegetableDetails = await res.json();
  console.log(vegetableDetails);
  return (
    <div>
      <VegetableDetailsCard
        vegetableDetails={vegetableDetails}
      ></VegetableDetailsCard>
    </div>
  );
};

export default vegetableDetails;
