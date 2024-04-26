import React from "react";
import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="flex justify-between h-[100%]">
      <section className="flex flex-1 justify-center items-center flex-col py-10">
        <Outlet />
      </section>

      <div className="flex-1 justify-center items-center ">
        <img
          src="https://avatars.githubusercontent.com/u/105858896?v=4"
          alt="no quality"
          className="hidden xl:block h-screen w-full object-cover bg-no-repeat"
        />
        {/* <div className="w-full h-full bg-blue-400"></div> */}
      </div>
    </div>
  );
};
