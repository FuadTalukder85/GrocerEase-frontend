import React from "react";

const TopNav = () => {
  return (
    <div>
      <div className="md:hidden text-white">
        <h1 className="text-center">Welcome to our grocery store</h1>
        <div className="flex justify-between mt-2">
          <h1>15% off for new users</h1>
          <h1>
            Call us <span>01756-000000</span>
          </h1>
        </div>
      </div>
      <div className="hidden md:flex justify-between text-white">
        <h1 className="text-center">Welcome to our grocery store</h1>
        <h1>15% off for new users</h1>
        <h1>
          Call us <span>01756-000000</span>
        </h1>
      </div>
    </div>
  );
};

export default TopNav;
