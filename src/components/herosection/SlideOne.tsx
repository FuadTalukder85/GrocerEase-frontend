import React from "react";
import slideImg1 from "../../assets/slideImg1.jpg";
import Image from "next/image";

const SlideOne = () => {
  return (
    <div className="relative">
      {" "}
      <div>
        <Image src={slideImg1} alt="slideImg1"></Image>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <p className="font-semibold">Fresh Strawberies 1kg</p>
        <p>
          $60,23 <small className="line-through">$89,74</small>
        </p>
        <button className="mt-5 bg-[#5DD2C0] px-5 py-2 rounded-md  text-white font-medium">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default SlideOne;
