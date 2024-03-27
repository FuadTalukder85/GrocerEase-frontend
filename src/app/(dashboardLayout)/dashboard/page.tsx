import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="p-5">
      <h1>This is dashboard home</h1>
      <Link href="/dashboard/addProducts">
        <button className="mt-5 bg-[#5DD2C0] px-5 py-2 rounded-md  text-white font-medium">
          Add Products
        </button>
      </Link>
    </div>
  );
};

export default page;
