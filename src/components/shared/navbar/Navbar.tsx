"use client";
import { IoMdCart } from "react-icons/io";
import logo from "../../../assets/logo.png";
import Link from "next/link";

import Image from "next/image";
import LoginForm from "@/components/form/LoginForm";
import { useUser } from "@/providers/useContext";

const Navbar = () => {
  const { user, logout } = useUser();
  return (
    <div className=" text-[#333333] text-center">
      <div className="">
        <div className="md:grid grid-cols-10 gap-10 justify-center items-center">
          <div className="col-span-3">
            <div className="flex gap-7 items-center pt-3">
              <Link href="/" className="w-[150px]">
                <Image src={logo} alt="logo"></Image>
              </Link>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Search your grocery"
                  className="border py-2 ps-5 w-full rounded-full"
                />
              </div>
            </div>
            <div className="dropdown flex justify-start mt-5">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden pr-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
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
                className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-[#E85363] rounded-box w-32 mt-12"
              >
                <Link href="/" className="bg-[#5DD2C0] rounded text-white mt-1">
                  Home
                </Link>
                <Link
                  href="/category"
                  className="bg-[#5DD2C0] rounded text-white mt-1"
                >
                  Category
                </Link>
                <Link
                  href="/product"
                  className="bg-[#5DD2C0] rounded text-white mt-1"
                >
                  Product
                </Link>
                <Link
                  href="/flash-sale"
                  className="bg-[#5DD2C0] rounded text-white mt-1"
                >
                  Flash Sale
                </Link>
                <Link
                  href="/contactUs"
                  className="bg-[#5DD2C0] rounded text-white mt-1"
                >
                  Contact Us
                </Link>

                <Link
                  href="/aboutUs"
                  className="bg-[#5DD2C0] rounded text-white mt-1"
                >
                  About Us
                </Link>
              </ul>
              <ul className="flex gap-7 md:hidden justify-center items-center">
                <li className="flex items-center gap-3 text-lg font-medium">
                  <IoMdCart className="text-[#E85363]" />
                  <span>Wishlist</span>
                </li>
                <Link href="/dashboard" className="text-lg font-medium">
                  Dashboard
                </Link>
                <li className="text-lg font-medium">Login</li>
              </ul>
            </div>
          </div>
          <div className="col-span-5 hidden lg:flex justify-center">
            <ul className="menu menu-horizontal px-1 flex gap-10 text-lg">
              <Link href="/">Home</Link>
              <Link href="/category">Category</Link>
              <Link href="/product">Product</Link>
              <Link href="/flash-sale">Flash Sale</Link>
              <Link href="/contactUs">Contact Us</Link>
              <Link href="/aboutUs">About Us</Link>
            </ul>
          </div>
          <div className="col-span-2">
            <ul className="hidden md:flex gap-10 justify-center md:justify-end">
              <li className="flex items-center gap-3 text-lg font-medium">
                <IoMdCart className="text-[#E85363]" />
                <span>Wishlist</span>
              </li>
              <li className="flex items-center gap-3 text-lg font-medium">
                <Link href="/dashboard">Dashboard</Link>
              </li>

              {user ? <li onClick={logout}>logout</li> : <li>login</li>}

              <div className="dropdown w-[420px] relative">
                <div tabIndex={0} role="button">
                  <p>Login</p>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content mt-3 p-2 rounded-box z-10 absolute right-0"
                >
                  <li className="bg-white rounded-sm">
                    <LoginForm></LoginForm>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
