import React from "react";
import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";

export const RootLayout = () => {
  return (
    <div className="flex flex-col w-full h-[100%]">
      <Navbar />
      <div className="flex-1 h-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
