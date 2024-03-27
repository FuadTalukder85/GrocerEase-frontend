"use client";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AllProductValues } from "../types.tsx/types";

const ProductDetailsCard = ({
  productDetails,
}: {
  productDetails: AllProductValues;
}) => {
  console.log(productDetails);
  return (
    <div>
      <div>image</div>
      <div>
        <h1>{productDetails.title}</h1>
        <p>{productDetails.price}</p>
        <button className="mt-5 bg-[#5DD2C0] px-5 py-2 rounded-md  text-white font-medium">
          Shop Now
        </button>
        <button className="mt-5 bg-[#5DD2C0] px-5 py-2 rounded-md  text-white font-medium">
          Buy Now
        </button>
        <p>
          Please <a href="#">Contact Us</a> If You Are Interested In This
          Product.
        </p>
        <h3>Product Details</h3>
        <p>{productDetails.description}</p>
        <div className="flex gap-5 text-2xl text-[#E85363] font-semibold mt-3">
          <FaFacebook /> <FaInstagramSquare /> <FaTwitter /> <FaPinterest />{" "}
          <FaYoutube />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
