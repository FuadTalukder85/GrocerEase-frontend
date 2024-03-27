import FlashSell from "@/components/flashSell/FlashSell";
import HeroSection from "@/components/herosection/HeroSection";
import ProductCategory from "@/components/productCategory/ProductCategory";
import TrendingProduct from "@/components/trendingProduct/TrendingProduct";

const Home = async () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <FlashSell></FlashSell>
      <ProductCategory></ProductCategory>
      <TrendingProduct></TrendingProduct>
    </div>
  );
};

export default Home;
