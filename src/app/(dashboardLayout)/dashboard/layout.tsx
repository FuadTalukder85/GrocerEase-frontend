import Sidebar from "@/components/shared/sidebar/Sidebar";
import React from "react";

const layout = ({ children }: any) => {
  return (
    <div className="min-h-screen my-2">
      <div className="flex justify-between">
        <div className="w-[20%]">
          <Sidebar />
        </div>
        <div className="w-[80%] bg-base-200 rounded-box ml-2">{children}</div>
      </div>
    </div>
  );
};

export default layout;