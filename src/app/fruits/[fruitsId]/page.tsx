"use server";

import FishDetailsCard from "@/components/categoryCard/FishDetailsCard";
import FruitsDetailsCard from "@/components/categoryCard/FruitsDetailsCard";

type FruitsId = {
  params: {
    fruitsId: string;
  };
};

const fruitsDetails = async ({ params }: FruitsId) => {
  console.log(params);
  const res = await fetch(
    `${process.env.BACKEND_URL}/all-product/${params.fruitsId}`
  );
  const fruitsDetails = await res.json();
  console.log(fruitsDetails);
  return (
    <div>
      <FruitsDetailsCard fruitsDetails={fruitsDetails}></FruitsDetailsCard>
    </div>
  );
};

export default fruitsDetails;
