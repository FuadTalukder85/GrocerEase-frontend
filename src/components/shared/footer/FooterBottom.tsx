import React from "react";
import { FaCcStripe } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcDiscover } from "react-icons/fa";

const FooterBottom = () => {
  return (
    <div>
      <div className=" md:hidden justify-between mt-7">
        <ul className="grid grid-cols-5 gap-7 text-3xl text-[#E85363]">
          <li>
            <FaCcStripe />
          </li>
          <li>
            <FaCcMastercard />
          </li>
          <li>
            <FaCcVisa />
          </li>
          <li>
            <FaCcPaypal />
          </li>
          <li>
            <FaCcDiscover />
          </li>
        </ul>
        <div>
          <p className="text-center mt-5 mb-10">
            © 2024, GrocerEase. All Rights Reserved{" "}
          </p>
        </div>
      </div>
      <div className="hidden md:flex  justify-between mt-7">
        <div>
          <p>© 2024, GrocerEase. All Rights Reserved </p>
        </div>
        <ul className="grid grid-cols-5 gap-7 text-3xl text-[#E85363]">
          <li>
            <FaCcStripe />
          </li>
          <li>
            <FaCcMastercard />
          </li>
          <li>
            <FaCcVisa />
          </li>
          <li>
            <FaCcPaypal />
          </li>
          <li>
            <FaCcDiscover />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterBottom;
