"use server";

import MeatDetailsCard from "@/components/categoryCard/MeatDetailsCard";

type MeatId = {
  params: {
    meatId: string;
  };
};

const meatDetails = async ({ params }: MeatId) => {
  const res = await fetch(
    `${process.env.BACKEND_URL}/all-product/${params.meatId}`
  );
  const meatDetails = await res.json();

  return (
    <div>
      <MeatDetailsCard meatDetails={meatDetails}></MeatDetailsCard>
    </div>
  );
};

export default meatDetails;
