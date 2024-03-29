"use server";

import VegetableDetailsCard from "@/components/categoryCard/VegetableDetailsCard";

type VegetableId = {
  params: {
    vegetableId: string;
  };
};

const vegetableDetails = async ({ params }: VegetableId) => {
  const res = await fetch(
    `${process.env.BACKEND_URL}/all-product/${params.vegetableId}`,
    {
      cache: "no-store",
    }
  );
  const vegetableDetails = await res.json();

  return (
    <div>
      <VegetableDetailsCard
        vegetableDetails={vegetableDetails}
      ></VegetableDetailsCard>
    </div>
  );
};

export default vegetableDetails;
