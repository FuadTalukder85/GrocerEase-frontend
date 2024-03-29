"use client";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import img1 from "../../assets/customerCare/1.jpg";
import img2 from "../../assets/customerCare/2.jpg";
import img3 from "../../assets/customerCare/3.jpg";
import img4 from "../../assets/customerCare/4.jpg";

const CustomerCare = () => {
  return (
    <div className="max-w-[1200px] mx-auto mt-10">
      <h1 className="text-5xl text-center font-semibold text-[#333333]">
        Customer Service
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {/* 1 */}
        <div>
          <div>
            <Image src={img1} alt="img1"></Image>
          </div>
          <div className="px-10">
            <p className="text-2xl font-semibold mt-8">
              Online Customer Service
            </p>
            <p className="mt-3">Chat with our custom manager</p>
            <a href="" className="flex items-center gap-3 mt-3">
              Learn more{" "}
              <MdOutlineKeyboardArrowRight className="text-[#E85363] text-xl" />
            </a>
          </div>
        </div>
        {/* 2 */}
        <div>
          <div>
            <Image src={img2} alt="img2"></Image>
          </div>
          <div className="px-10">
            <p className="text-2xl font-semibold mt-8">Useful Contacts</p>
            <p className="mt-3">Know your contact you are looking for</p>
            <a href="" className="flex items-center gap-3 mt-3">
              Learn more{" "}
              <MdOutlineKeyboardArrowRight className="text-[#E85363] text-xl" />
            </a>
          </div>
        </div>
        {/* 3 */}
        <div>
          <div>
            <Image src={img3} alt="img3"></Image>
          </div>
          <div className="px-10">
            <p className="text-2xl font-semibold mt-8">Useful Information</p>
            <p className="mt-3">Check our useful information for you</p>
            <a href="" className="flex items-center gap-3 mt-3">
              Learn more{" "}
              <MdOutlineKeyboardArrowRight className="text-[#E85363] text-xl" />
            </a>
          </div>
        </div>
        {/* 4 */}
        <div>
          <div>
            <Image src={img4} alt="img4"></Image>
          </div>
          <div className="px-10">
            <p className="text-2xl font-semibold mt-8">Notic Board</p>
            <p className="mt-3">Know the latest notic of GorcerEase</p>
            <a href="" className="flex items-center gap-3 mt-3">
              Learn more{" "}
              <MdOutlineKeyboardArrowRight className="text-[#E85363] text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCare;
