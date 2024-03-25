"use client";
import Image from "next/image";
import logo from "../../../assets/logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-between mt-7">
      <div>
        <p>Your store</p>
        <p>
          <FaLocationDot /> 1487 Rocky Horse Carrefour Arlington, TX 16819.
        </p>
        <p>Monday - Friday: 9:00-20:00 Saturady: 11:00 - 15:00</p>
        <a href="" className="link">
          Show on map
        </a>
      </div>
      <div>
        <Image src={logo} alt="logo"></Image>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <div className="flex gap-5 text-2xl text-[#E85363] font-semibold">
          <FaFacebook /> <FaInstagramSquare /> <FaTwitter /> <FaPinterest />{" "}
          <FaYoutube />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
