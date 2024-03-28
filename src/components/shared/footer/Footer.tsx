"use client";
import Image from "next/image";
import logo from "../../../assets/logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import "./Footer.css";
import FooterBottom from "./FooterBottom";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footerImg pt-10 mt-16">
      <div className="w-[90%] mx-auto grid grid-cols-6 mt-7 gap-16">
        <div className="">
          <Image src={logo} alt="logo"></Image>
          <p className="mt-3">
            It is a long established fact that a reader will be distracted by
            the readable content.
          </p>
          <div className="flex gap-5 text-2xl text-[#E85363] font-semibold mt-3">
            <FaFacebook /> <FaInstagramSquare /> <FaTwitter /> <FaPinterest />{" "}
            <FaYoutube />
          </div>
        </div>
        <div className="">
          <h1 className="text-2xl text-[#E85363] font-semibold">
            Your GrocerEase
          </h1>
          <p className="flex gap-3 items-center mt-5">
            <FaLocationDot className="text-3xl text-[#E85363] " /> 1487 Rocky
            Horse Carrefour Arlington, TX 16819.
          </p>
          <p className="mt-2">
            Monday - Friday: 9:00-20:00 Saturady: 11:00 - 15:00
          </p>
          <p className="mt-2">
            <a href="" className="link text-[#E85363] ">
              Show on map
            </a>
          </p>
        </div>
        <div className="">
          <h1 className="text-2xl text-[#E85363] font-semibold">Popular</h1>
          <ul className="">
            <li className="mt-5">
              <span>Trending Products</span>
            </li>
            <li className="mt-2">
              <span>Categories</span>
            </li>
            <li className="mt-5">
              <Link href="/aboutUs">About Us</Link>
            </li>
            <li className="mt-5">
              <Link href="/contactUs">Contact Us</Link>
            </li>

            <li className="mt-2">
              <span>Customer Care</span>
            </li>
          </ul>
        </div>
        <div className="">
          <h1 className="text-2xl text-[#E85363] font-semibold">Company</h1>
          <ul className="">
            <li className="mt-5">
              <span>Become a vendor</span>
            </li>
            <li className="mt-2">
              <span>Delivery Information</span>
            </li>
            <li className="mt-2">
              <span>Privacy Policy</span>
            </li>
            <li className="mt-2">
              <span>Terms & Conditions</span>
            </li>
            <li className="mt-2">
              <span>Support Center</span>
            </li>
          </ul>
        </div>
        <div className="">
          <h1 className="text-2xl text-[#E85363] font-semibold">Account</h1>
          <ul className="">
            <li className="mt-5">
              <span>Sign In</span>
            </li>
            <li className="mt-2">
              <span>My Wishlist</span>
            </li>
            <li className="mt-2">
              <span>Track My Order</span>
            </li>
            <li className="mt-2">
              <span>Help Ticket</span>
            </li>
            <li className="mt-2">
              <span>Shipping Details</span>
            </li>
          </ul>
        </div>
        <div className="">
          <h1 className="text-2xl text-[#E85363] font-semibold">Corporate</h1>
          <ul className="">
            <li className="mt-5">
              <span>Become a Vendor</span>
            </li>
            <li className="mt-2">
              <span>Affiliate Program</span>
            </li>
            <li className="mt-2">
              <span>Farm Business</span>
            </li>
            <li className="mt-2">
              <span>Our Suppliers</span>
            </li>
            <li className="mt-2">
              <span>Promotions</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[90%] mx-auto mt-7">
        <div className="bg-[#5DD2C0] py-[2px]"></div>
        <FooterBottom></FooterBottom>
        <div className="bg-[#5DD2C0] py-[2px] mt-7"></div>
      </div>
    </div>
  );
};

export default Footer;
