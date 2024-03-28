"use server";

import ProductDetailsCard from "@/components/productDetailsCard/ProductDetailsCard";

type ProductId = {
  params: {
    productId: string;
  };
};

const ProductDetails = async ({ params }: ProductId) => {
  const res = await fetch(
    `${process.env.BACKEND_URL}/all-product/${params.productId}`
  );
  const productDetails = await res.json();

  return (
    <div>
      <ProductDetailsCard productDetails={productDetails}></ProductDetailsCard>
    </div>
  );
};

export default ProductDetails;
