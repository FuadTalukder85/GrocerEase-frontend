import React from "react";
import { FaCcStripe } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcDiscover } from "react-icons/fa";

const FooterBottom = () => {
  return (
    <div className="flex justify-between mt-7">
      <div>
        <p>© 2024, GrocerEase. All Rights Reserved </p>
      </div>
      <ul className="flex gap-7 text-3xl text-[#E85363]">
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
  );
};

export default FooterBottom;
