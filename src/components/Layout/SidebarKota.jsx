import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  HomeIcon,
  BookOpenIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

export default function SidebarKota() {
  const location = useLocation();

  // Deteksi jika user sedang di salah satu halaman statistik
  const isStatistikActive = location.pathname.startsWith("/StatistikKota");

  const menuItems = [
    { name: "Dashboard", icon: <HomeIcon className="w-5 h-5" />, path: "/dashboardkota" },
    { name: "Knowledge Base", icon: <BookOpenIcon className="w-5 h-5" />, path: "/knowledgebasekota" },
    { name: "Statistik", icon: <ChartBarIcon className="w-5 h-5" />, path: "/StatistikKotaKL", isActive: isStatistikActive,},
    { name: "Pengumuman", icon: <Cog6ToothIcon className="w-5 h-5" />, path: "/pengumumanadminkota" },
    { name: "Rating", icon: <StarIcon className="w-5 h-5" />, path: "/ratekota" },
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
              `flex items-center gap-3 px-5 py-3 mx-3 mb-2 text-sm font-medium transition-all ${
                isActive || item.isActive
                  ? "bg-[#0F2C59] text-white rounded-full shadow-sm"
                  : "text-gray-700 hover:bg-gray-100 rounded-full"
              }`
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
