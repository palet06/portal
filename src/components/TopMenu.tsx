import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";
import UserMenu from "./UserMenu";


const TopMenu = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-between   py-2 px-40">
      <div className="flex flex-3/12  gap-3 items-center w-full">
        <Image src="/logo.svg" alt="logo" width={50} height={50} />
        <h1 className="text-[#6B7D8F] font-bold">UİGM PORTAL</h1>
      </div>
      <div className="flex flex-6/12 items-center justify-center w-full">
        <Navbar />
     
      </div>
      <div className="flex flex-3/12 items-center w-full justify-end">
        <UserMenu />

      </div>
    </div>
  );
};

export default TopMenu;
