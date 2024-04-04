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
  const product = await res.json();

  const productSort = [...product].sort((a, b) => b.rating - a.rating);

  return (
    <div>
      <HeroSection></HeroSection>
      <FlashSell flashSell={product}></FlashSell>
      <ProductCategory></ProductCategory>
      <TrendingProduct trendingProduct={productSort} />
    </div>
  );
};

export default Home;
