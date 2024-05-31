import React from "react";
import DashboardHeader from "../components/DashboardHeader";
import SideBar from "../components/SideBar";
import DashboardContent from "../components/DashboardContent";

const HomePage = () => {
  return (
    <>
      <div className="max-w-[1920px] mx-auto flex min-h-screen overflow-hidden">
        <SideBar />
        <div className="min-h-screen relative lg:w-[calc(100%-256px)] sm:w-[calc(100%-180px)] w-[calc(100%-60px)] ml-auto bg-white">
          <div className="lg:h-[85px] sm:h-[60px] h-[40px] bg-white">
            <DashboardHeader />
          </div>
          <div className="lg:min-h-[calc(100vh-104px)] content sm:max-h-[calc(100vh-60px)] max-h-[calc(100vh-40px)] w-full overflow-auto">
            <DashboardContent />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
