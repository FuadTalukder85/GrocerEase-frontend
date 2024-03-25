import React from "react";
import Navbar from "./Navbar";
import TopNav from "./TopNav";

const NavLayout = () => {
  return (
    <div>
      <div className="bg-[#5DD2C0] py-5">
        <div className="w-[90%] mx-auto">
          <TopNav></TopNav>
          <Navbar></Navbar>
        </div>
      </div>
      <div className="bg-[#E85363] py-1"></div>
    </div>
  );
};

export default NavLayout;
