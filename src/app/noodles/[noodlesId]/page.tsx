"use server";

import NoodlesDetailsCard from "@/components/categoryCard/NoodlesDetailsCard";

type NoodlesId = {
  params: {
    noodlesId: string;
  };
};

const noodlesDetails = async ({ params }: NoodlesId) => {
  const res = await fetch(
    `${process.env.BACKEND_URL}/all-product/${params.noodlesId}`,
    {
      cache: "no-store",
    }
  );
  const noodlesDetails = await res.json();
  return (
    <div>
      <NoodlesDetailsCard noodlesDetails={noodlesDetails}></NoodlesDetailsCard>
    </div>
  );
};

export default noodlesDetails;
