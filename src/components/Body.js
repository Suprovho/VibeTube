import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className="flex flex-wrap m-2 p-4">
    <div
      className={`w-full sm:w-[20%] md:w-[15%] lg:w-[10%] transition-all duration-300 ease-in-out ${
        isMenuOpen ? "sm:block lg:block" : "sm:hidden lg:hidden" 
      }`} 
    >
      <SideBar />
    </div>
    <div className="w-full sm:w-[80%] md:w-[85%] lg:w-[90%]">
      <Outlet />
    </div>
  </div>
  
  );
};

export default Body;
