import React from "react";
import logo from "../assets/images/png/logo.png";
import { Link, NavLink } from "react-router-dom";
import { sideTabs } from "./common/Helper";

const SideBar = () => {
  return (
    <div>
      {" "}
      <div
        className={` z-50 content lg:w-[253px] sm:w-[180px] w-[60px] transition-all duration-300 ease-linear h-screen overflow-y-scroll bg-white`}
      >
        <NavLink to={"/"} className="py-6 pl-6 pr-[29px]">
          <img
            src={logo}
            alt="logo"
            width={200}
            height={101}
            className="w-full"
          />
        </NavLink>
        <div className="flex flex-col w-full gap-4">
          {sideTabs.map((value, index) => (
            <NavLink
              key={index}
              to={value.link}
              className={({ isActive }) =>
                `${
                  isActive &&
                  "bg-opacity-100 after:top-0 after:h-full !text-Christine bg-[#FEF8F3]"
                } bg-opacity-0 relative after:right-0 after:rounded-md flex gap-2 py-3 pl-8 transition-all ease-linear duration-300 after:absolute group hover:text-Christine after:h-0 after:duration-300 after:w-1 after:bg-Christine bg-white text-sm text-black font-medium hover:bg-[#FEF8F3]`
              }
            >
              <span>{value.icon}</span>
              {value.title}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
