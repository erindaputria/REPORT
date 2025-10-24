import React from "react";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  ArchiveBoxIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

export default function SidebarTeknisi() {
  const menuItems = [
    { name: "Dashboard", icon: <HomeIcon className="w-5 h-5" />, path: "/dashboardteknisi" },
    { name: "Arsip", icon: <ArchiveBoxIcon className="w-5 h-5" />, path:"/arsipteknisi" },
    { name: "Rating", icon: <StarIcon className="w-5 h-5" />, path: "/ratingteknisi" },
  ];

  return (
    <aside className="w-64 h-screen bg-white shadow-md flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-2 px-6 py-5 border-b">
        <img src="/assets/Logo Report.png" alt="Logo" className="w-8 h-8" />
        <h1 className="font-bold text-lg text-[#D32F2F]">REPORT</h1>
      </div>

      {/* Menu */}
      <nav className="flex-1 mt-4">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-6 py-3 text-sm font-medium transition-all ${
                isActive
                  ? "bg-[#0F2C59] text-white rounded-l-full"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
