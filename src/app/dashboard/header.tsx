'use client';

import React from "react";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { PiChatsCircle } from "react-icons/pi";
import { IoNotificationsOutline, IoHelpCircleOutline } from "react-icons/io5";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-[#f0f8ff] shadow-md p-2 flex justify-between items-center border-b-2 border-[#d4eefd]">
      {/* Left Section: Sidebar Toggle & Dashboard */}
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleSidebar}
          className="p-2 bg-[#6FB434] text-white rounded-lg hover:bg-green-700 transition-all duration-300"
        >
          <FiMenu className="w-5 h-5" />
        </button>
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
      </div>

      {/* Middle Section: Search Bar, Chat, Notification, Help Icons */}
      <div className="flex items-center space-x-2 ml-10">
        <div className="relative w-[200px]">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6FB434]"
          />
        </div>
        <button className="p-2 rounded-full hover:bg-gray-200 transition-all duration-300">
          <PiChatsCircle className="w-6 h-6 text-gray-600" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-200 transition-all duration-300 relative">
          <IoNotificationsOutline className="w-6 h-6 text-gray-600" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">3</span>
        </button>
        <button className="p-2 rounded-full hover:bg-gray-200 transition-all duration-300">
          <IoHelpCircleOutline className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Section: Logo */}
      <div className="flex-1 flex justify-center items-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
        <Image src="/logo.png" alt="Logo" width={60} height={40} style={{ marginBottom: "16px" }} />
      </div>
    </header>
  );
};

export default Header;