import FlashSell from "@/components/flashSell/FlashSell";
import HeroSection from "@/components/herosection/HeroSection";
import ProductCategory from "@/components/productCategory/ProductCategory";
import TrendingProduct from "@/components/trendingProduct/TrendingProduct";

const Home = async () => {
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
      <HeroSection></HeroSection>
      <FlashSell></FlashSell>
      <ProductCategory></ProductCategory>
      <TrendingProduct trendingProduct={trendingProduct}></TrendingProduct>
    </div>
  );
};

export default Home;
