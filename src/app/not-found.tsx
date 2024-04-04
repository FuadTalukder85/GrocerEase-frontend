"use client";

import Link from "next/link";

const ErrorPage = () => {
  return (
    <div>
      <h1 className="text-center text-2xl text-[#E85363] mt-10">
        Something went wrong...
      </h1>
      <button className="flex justify-center w-[1/5] mx-auto bg-[#E85363] px-4 py-1 rounded-lg text-xl mt-3">
        <Link href={"/"}>Retun home</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
