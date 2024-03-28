"use server";

import MeatDetailsCard from "@/components/categoryCard/MeatDetailsCard";

type MeatId = {
  params: {
    meatId: string;
  };
};

const meatDetails = async ({ params }: MeatId) => {
  console.log(params);
  const res = await fetch(
    `${process.env.BACKEND_URL}/all-product/${params.meatId}`
  );
  const meatDetails = await res.json();
  console.log(meatDetails);
  return (
    <div>
      <MeatDetailsCard meatDetails={meatDetails}></MeatDetailsCard>
    </div>
  );
};

export default meatDetails;
