import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div class="flex flex-col items-center md:flex-row md:flex-wrap md:overflow-hidden md:-mx-5 ">
        <div class="my-5 md:px-5 overflow-hidden md:w-1/6">
          <Sidebar></Sidebar>
        </div>

        <div class="my-5 px-5 w-full overflow-hidden md:w-5/6 ">
          <Outlet></Outlet>
        </div>


        
      </div>
    </div>
  );
};

export default Main;
