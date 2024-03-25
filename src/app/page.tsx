import FlashSell from "@/components/flashSell/FlashSell";
import HeroSection from "@/components/herosection/HeroSection";
import ProductCategory from "@/components/productCategory/ProductCategory";
import Footer from "@/components/shared/footer/Footer";
import TrendingProduct from "@/components/trendingProduct/TrendingProduct";

export default function Home() {
  return (
    <div>
      <h1 className="text-7xl">This is main page</h1>
      <HeroSection></HeroSection>
      <FlashSell></FlashSell>
      <ProductCategory></ProductCategory>
      <TrendingProduct></TrendingProduct>
      <Footer></Footer>
    </div>
  );
}
