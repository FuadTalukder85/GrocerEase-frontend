"use server";

import AlltrendintProducts from "@/components/trendingProduct/AlltrendintProducts/AlltrendintProducts";

const TrendingProducts = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/all-product`, {
    next: {
      revalidate: 30,
    },
  });
  const trendingProducts = await res.json();
  console.log(trendingProducts);

  const trendingProduct = [...trendingProducts].sort(
    (a, b) => b.rating - a.rating
  );
  console.log("trendingProduct", trendingProduct);
  return (
    <div>
      <AlltrendintProducts
        trendingProduct={trendingProduct}
      ></AlltrendintProducts>
    </div>
  );
};

export default TrendingProducts;
