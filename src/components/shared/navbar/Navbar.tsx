"use client";
import { IoMdCart } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import logo from "../../../assets/logo.png";
import Link from "next/link";

import Image from "next/image";

const Navbar = () => {
  return (
    <div className=" text-[#333333] text-center pt-3">
      <div className="">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>Home</li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <Link href="/" className="pr-5">
              <Image src={logo} alt="logo"></Image>
            </Link>
            <div className="w-full">
              <input
                type="text"
                placeholder="Search your grocery"
                className="border py-3 ps-5 w-full rounded-full"
              />
            </div>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1 flex gap-10 text-lg font-medium">
              <li>Home</li>
              <li>Product</li>
              <li>Collection</li>
              <li>Mega Menu</li>
            </ul>
          </div>
          <div className="navbar-end">
            <ul className="flex gap-10 items-center justify-between">
              <li className="flex items-center gap-3 text-lg font-medium">
                <IoMdCart className="text-[#E85363]" />
                <span>Wishlist</span>
              </li>
              <li className="flex items-center gap-3 text-lg font-medium">
                <FaRegHeart className="text-[#E85363]" />
                <span>Cart</span>
              </li>
              <li className="text-lg font-medium">Login</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
