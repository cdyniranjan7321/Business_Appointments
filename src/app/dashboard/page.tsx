import React from "react";
import Header from "./header";

import {
  FiCalendar,
  FiShoppingBag,
  FiHelpCircle,
} from "react-icons/fi";

import { HiOutlineSpeakerphone } from "react-icons/hi";
import { SlHome } from "react-icons/sl";
import { FaAd } from "react-icons/fa";
import { PiFolderSimpleUserDuotone } from "react-icons/pi";
import { BiBarChartSquare } from "react-icons/bi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FcPlanner } from "react-icons/fc";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineUserCircle } from "react-icons/hi2";

const SidebarItem = ({ icon: Icon, label }) => (
  <div className="flex items-center space-x-2 p-3 rounded-l-3xl cursor-pointer bg-transparent hover:bg-[#f0f8ff] hover:ml-2 transition-all duration-300 group">
    {Icon && <Icon className="w-5 h-5 text-white group-hover:text-[#6FB434]" />}
    <span className="text-white text-sm font-medium group-hover:text-[#6FB434] group-hover:font-bold group-hover:text-[15px]">
      {label}
    </span>
  </div>
);


const Dashboard = () => {
  const menuItems = [
    { icon: SlHome, label: "Home" },
    { icon: FiCalendar, label: "Appointment" },
    { icon: FiShoppingBag, label: "Products" },
    { icon: HiOutlineSpeakerphone, label: "Marketing Suite" },
    { icon: FaAd, label: "Social & Ads" },
    { icon: PiFolderSimpleUserDuotone, label: "Manage" },
    { icon: BiBarChartSquare, label: "Reports" },
    { icon: FaMoneyBillTransfer, label: "Payments" },
    { icon: MdOutlineDashboardCustomize, label: "Custom Features" },
    { icon: FcPlanner, label: "Plan & Price" },
    { icon: IoSettingsOutline, label: "Settings" },
    { icon: FiHelpCircle, label: "Help" },
  ];

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-[#6FB434] shadow-md h-full flex flex-col">
          <div className="p-4 text-xl font-bold text-center text-white border-b border-[#5D9C2F]">
            Dashboard
          </div>
          <nav className="flex-grow space-y-1 overflow-auto">
            {menuItems.map((item, index) => (
              <SidebarItem key={index} icon={item.icon} label={item.label} />
            ))}
            {/* Separator Line */}
            <div className="border-b border-white mx-4 my-2"></div>
            {/* Bytesoft Nepal Item */}
            <SidebarItem icon={HiOutlineUserCircle} label="Bytesoft Nepal" />
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 bg-[#f0f8ff] p-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Welcome to the Dashboard
          </h1>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
