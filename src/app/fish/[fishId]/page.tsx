"use server";

import FishDetailsCard from "@/components/categoryCard/FishDetailsCard";

type FishId = {
  params: {
    fishId: string;
  };
};

const fishDetails = async ({ params }: FishId) => {
  console.log(params);
  const res = await fetch(
    `${process.env.BACKEND_URL}/all-product/${params.fishId}`
  );
  const fishDetails = await res.json();
  console.log(fishDetails);
  return (
    <div>
      <FishDetailsCard fishDetails={fishDetails}></FishDetailsCard>
    </div>
  );
};

export default fishDetails;
