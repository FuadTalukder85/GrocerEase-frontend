"use server";
import ProductDetailsCard from "@/components/productDetailsCard/ProductDetailsCard";
type ProductId = {
  params: {
    productId: string;
  };
};

const ProductDetails = async ({ params }: ProductId) => {
  const res = await fetch(
    `${process.env.BACKEND_URL}/all-product/${params.productId}`,
    {
      cache: "no-store",
    }
  );
  const productDetails = await res.json();

  return (
    <div>
      <ProductDetailsCard productDetails={productDetails} />
    </div>
  );
};

export default ProductDetails;
