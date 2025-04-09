import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";
import UserMenu from "./UserMenu";



const TopMenu = () => {
  return (
    <div className="bg-myprimary dark:bg-myprimary_dark flex items-center justify-between shadow-lg py-2 px-2 lg:px-40">
      <div className="flex flex-1/3 md:flex-3/12  gap-3 items-center w-full ">
        <Image src="/logo.svg" alt="logo" width={50} height={50} />
        <h1 className="text-white dark:text-mybodytext_dark  font-bold">UİGM PORTAL</h1>
      </div>
      <div className="flex-1/3 md:flex-7/12 items-center justify-center w-full hidden lg:flex">
        <Navbar />
     
      </div>
      <div className="flex flex-1/3 md:flex-2/12 items-center w-full justify-end">
        <UserMenu />

      </div>
    </div>
  );
};

export default TopMenu;
