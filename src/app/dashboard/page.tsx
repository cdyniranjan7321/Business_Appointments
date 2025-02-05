'use client';


import React, { useState, useEffect } from "react";
import Header from "./Header";
import { FiCalendar, FiShoppingBag, FiHelpCircle } from "react-icons/fi";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { SlHome } from "react-icons/sl";
import { FaAd } from "react-icons/fa";
import { PiFolderSimpleUserDuotone } from "react-icons/pi";
import { BiBarChartSquare } from "react-icons/bi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FcPlanner } from "react-icons/fc";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineClear } from "react-icons/md";

const defaultItems = [
  { icon: SlHome, label: "Home" },
  { icon: IoSettingsOutline, label: "Settings" },
  { icon: FiHelpCircle, label: "Help" },
];

const optionalItems = [
  { icon: FiCalendar, label: "Appointment" },
  { icon: FiShoppingBag, label: "Products" },
  { icon: HiOutlineSpeakerphone, label: "Marketing Suite" },
  { icon: FaAd, label: "Social & Ads" },
  { icon: PiFolderSimpleUserDuotone, label: "Manage" },
  { icon: BiBarChartSquare, label: "Reports" },
  { icon: FaMoneyBillTransfer, label: "Payments" },
  { icon: MdOutlineDashboardCustomize, label: "Custom Features" },
  { icon: FcPlanner, label: "Plan & Price" },
];

const SidebarItem = ({ icon: Icon, label, isSelectable = true }) => (
  <div
    className={`flex items-center space-x-2 p-3 rounded-l-3xl cursor-pointer bg-transparent hover:bg-[#f0f8ff] hover:ml-2 transition-all duration-300 group ${
      !isSelectable && "opacity-50 cursor-not-allowed text-black"
    }`}
  >
    {Icon && <Icon className="w-5 h-5 text-white group-hover:text-[#6FB434]" />}
    <span
      className={`${
        !isSelectable ? "text-black" : "text-white"
      } text-sm font-medium group-hover:text-[#6FB434] group-hover:font-bold group-hover:text-[15px]`}
    >
      {label}
    </span>
  </div>
);

const Dashboard = () => {
  const [sidebarItems, setSidebarItems] = useState([...defaultItems]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedItems = JSON.parse(localStorage.getItem("sidebarItems")) || [];
      setSidebarItems([...defaultItems, ...savedItems]);

      // Hide notification after 5 seconds
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const saveSidebarSelection = () => {
    const selectedItems = Array.from(
      document.querySelectorAll(".sidebar-option:checked")
    ).map((checkbox) =>
      optionalItems.find(
        (item) => item.label === (checkbox as HTMLInputElement).value
      )
    );

    if (typeof window !== "undefined") {
      localStorage.setItem("sidebarItems", JSON.stringify(selectedItems));
      setSidebarItems([...defaultItems, ...selectedItems]);
    }
    togglePopup();
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="h-screen flex flex-col">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-1">
        {isSidebarVisible && (
          <aside className="w-64 bg-[#6FB434] shadow-md h-full flex flex-col">
            <div className="p-4 flex justify-between items-center text-xl font-bold text-white border-b border-[#5D9C2F]">
              <span>Tools</span>
              <button
                onClick={togglePopup}
                className="text-sm bg-white text-[#6FB434] px-3 py-1 rounded-lg hover:bg-gray-200"
              >
                Edit
              </button>
            </div>
            <nav className="flex-grow space-y-1 overflow-auto">
              {sidebarItems.map((item, index) => (
                <SidebarItem key={index} icon={item.icon} label={item.label} />
              ))}
            </nav>
          </aside>
        )}

        <main className="flex flex-1 justify-center items-center text-center bg-[#f0f8ff]">
          <h1 className="text-3xl font-semibold text-gray-800 mb-1">Welcome to the Dashboard</h1>
          <p className="text-lg text-gray-600">
            Explore our dashboard option for more details.
          </p>
        </main>
      </div>

      {showNotification && (
  <div className="fixed top-4 right-4 bg-white shadow-lg border border-red-500 rounded-lg p-4 flex items-center space-x-3 text-sm transition-all duration-300 text-red-500">
    <p>
      Use the <strong>Edit</strong> button to customize your sidebar components. 
      
    </p>
    <button onClick={() => setShowNotification(false)} className="text-red-500 hover:text-gray-700 transition-colors duration-300">
      <MdOutlineClear />
    </button>
  </div>

)}


      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#F0F8FF] p-6 rounded-lg shadow-lg w-[90%] md:w-150 max-w-lg mx-auto relative h-[60vh] flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={togglePopup}
                className="px-3 py-1 bg-gray-300 rounded-lg hover:bg-gray-400"
              >
                <MdOutlineClear />
              </button>
            </div>
            <h2 className="text-xl font-bold text-left mb-4">Edit Navigation</h2>
            <div className="flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
              {optionalItems.map((item, index) => (
                <label key={index} className="flex justify-between items-center p-2 border-b">
                  <div className="flex items-center space-x-2">
                    <item.icon className="w-5 h-5 text-gray-600" />
                    <span>{item.label}</span>
                  </div>
                  <input
                    type="checkbox"
                    value={item.label}
                    className="sidebar-option"
                    defaultChecked={sidebarItems.some((s) => s.label === item.label)}
                  />
                </label>
              ))}
              <div className="mt-4">
                <h3 className="text-lg font-bold">Default Items (Non-Selectable)</h3>
                {defaultItems.map((item, index) => (
                  <SidebarItem key={index} icon={item.icon} label={item.label} isSelectable={false} />
                ))}
              </div>
            </div>
            <div className="absolute top-4 right-4">
              <button
                onClick={saveSidebarSelection}
                className="px-3 py-1 bg-[#6FB434] text-white rounded-lg hover:bg-green-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
