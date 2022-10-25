import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div class="flex flex-wrap -mx-5 overflow-hidden md:-mx-5 ">
        <div class="my-5 px-5 w-full overflow-hidden sm:w-1/2 md:w-1/6">
          <Sidebar></Sidebar>
        </div>

        <div class="my-5 px-5 w-full overflow-hidden sm:w-1/2 md:w-5/6 bg-red-400">
          <Outlet></Outlet>
        </div>


        
      </div>
    </div>
  );
};

export default Main;
