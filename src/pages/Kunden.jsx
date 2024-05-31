import React from "react";
import DashboardHeader from "../components/DashboardHeader";
import SideBar from "../components/SideBar";
import DashboardContent from "../components/DashboardContent";

const Kunden = () => {
  return (
    <>
      <div className="max-w-[1920px] mx-auto flex min-h-screen overflow-hidden">
        <SideBar />
        <div className="min-h-screen relative lg:w-[calc(100%-256px)] w-full ml-auto bg-white">
          <div className="h-[104px] bg-white">
            <DashboardHeader />
          </div>
          <div className="min-h-[calc(100vh-104px)] content w-full overflow-auto">
            <DashboardContent />
          </div>
        </div>
      </div>
    </>
  );
};

export default Kunden;
