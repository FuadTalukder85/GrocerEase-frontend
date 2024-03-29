"use server";
import FishDetailsCard from "@/components/categoryCard/FishDetailsCard";
type FishId = {
  params: {
    fishId: string;
  };
};

const fishDetails = async ({ params }: FishId) => {
  const res = await fetch(
    `${process.env.BACKEND_URL}/all-product/${params.fishId}`,
    {
      cache: "no-store",
    }
  );
  const fishDetails = await res.json();

  return (
    <div>
      <FishDetailsCard fishDetails={fishDetails} />
    </div>
  );
};

export default fishDetails;
