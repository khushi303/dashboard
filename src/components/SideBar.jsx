import React from "react";
import logo from "../assets/images/png/logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { sideTabs } from "./common/Helper";
import { MessageIcon, Plus } from "./common/Icons";

const SideBar = () => {
  let location = useLocation();
  return (
    <div>
      {" "}
      <div
        className={` z-50 content lg:w-[253px] sm:w-[190px] w-[90px] transition-all duration-300 ease-linear h-screen overflow-y-scroll bg-white`}
      >
        <Link to={"/"} className="py-6 pl-6 pr-[29px] sm:block hidden">
          <img
            src={logo}
            alt="logo"
            width={200}
            height={101}
            className="w-full max-h-[101px]"
          />
        </Link>
        <div className="flex flex-col items-start justify-between w-full lg:h-[calc(100vh-149px)] sm:h-[calc(100vh-111px)] h-screen md:pt-0 pt-5">
          <div className="flex flex-col w-full h-full gap-4">
            {sideTabs.map((value, index) => (
              <Link
                key={index}
                to={value.link}
                className={`${
                  location.pathname === `${value.link}` &&
                  "bg-opacity-100 after:top-0 after:!h-full !text-Christine bg-[#FEF8F3] after:duration-300 duration-300 "
                } bg-opacity-0 relative after:right-0 after:rounded-md flex gap-2 py-3 pl-8 transition-all ease-linear duration-300 after:absolute group hover:after:h-full hover:after:top-0 hover:text-Christine after:h-0 after:duration-300 after:w-1 after:bg-Christine bg-white text-sm text-black font-medium items-center hover:bg-[#FEF8F3]`}

              >
                {value.icon}
                
                <span className="hidden sm:block">{value.title}</span>
              </Link>
            ))}
          </div>
          <div className="xl:px-[33px] px-2 mx-auto xl:pb-10 pb-5">
            <div className="md:py-[30px] py-4 px-[11px] bg-[#F5F5F5] border border-dashed border-[#DEDEDE] rounded-xl">
              <div className="w-[39px] h-[39px] rounded-full bg-[#EC6707] mx-auto flex items-center justify-center">
                <Plus />
              </div>
              <p className="text-[13px] sm:block hidden font-semibold text-black text-center mt-1">
                Daten importieren
              </p>
              <p className="text-[9px] sm:block hidden text-[#ADADAE]">
                <u className="text-[#EC6707]">Datei aussuchen</u> oder hierher
                ziehen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
