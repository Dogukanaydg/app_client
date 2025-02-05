/*Navbar */

import React from 'react';
import { FaTasks } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="w-full shadow-lg">
      <div className="flex justify-between items-center shadow-md bg-white w-screen h-16 mb-32">

        {/* Logo and Title */}
        <div className="flex items-center mx-16">
          <FaTasks className="text-blue-700 mx-8" size={40} />
          <h1 className="text-2xl font-bold text-black">To-Do App</h1>
        </div>
        
        {/* Navigation Links */}
        <div className="flex text-xl font-medium space-x-8 text-gray-600 mx-32">
          <div className="relative group">
            <div className="cursor-pointer hover:text-blue-500 transition-colors duration-300">
              Home
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </div>
            <div className="relative group">
            <div className="cursor-pointer hover:text-blue-500 transition-colors duration-300">
              Deleted Tasks
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
