"use server";

import ProductDetailsCard from "@/components/productDetailsCard/ProductDetailsCard";

type ProductId = {
  params: {
    productId: string;
  };
};

const ProductDetails = async ({ params }: ProductId) => {
  console.log(params);
  const res = await fetch(
    `${process.env.BACKEND_URL}/all-product/${params.productId}`
  );
  const productDetails = await res.json();
  console.log(productDetails);
  return (
    <div>
      <ProductDetailsCard productDetails={productDetails}></ProductDetailsCard>
    </div>
  );
};

export default ProductDetails;
