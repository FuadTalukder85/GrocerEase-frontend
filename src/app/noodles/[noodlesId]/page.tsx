"use server";

import NoodlesDetailsCard from "@/components/categoryCard/NoodlesDetailsCard";

type NoodlesId = {
  params: {
    noodlesId: string;
  };
};

const noodlesDetails = async ({ params }: NoodlesId) => {
  console.log(params);
  const res = await fetch(
    `${process.env.BACKEND_URL}/all-product/${params.noodlesId}`
  );
  const noodlesDetails = await res.json();
  console.log(noodlesDetails);
  return (
    <div>
      <NoodlesDetailsCard noodlesDetails={noodlesDetails}></NoodlesDetailsCard>
    </div>
  );
};

export default noodlesDetails;
