import React from "react";
import { Link, useLocation } from "react-router-dom";

const SidebarOpd = () => {
  const location = useLocation();

  const navItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: "/assets/Logo Beranda.png",
      path: "/dashboardopd",
    },
    {
      id: "knowledgebase",
      label: "Knowledge Base",
      icon: "/assets/Logo Knowledge Base.png",
      path: "/knowledgebasedraft",
    },
    {
      id: "statistik",
      label: "Statistik",
      icon: "/assets/Logo Statistik.png",
      path: "/statistikopd",
    },
    {
      id: "rating",
      label: "Rating",
      icon: "/assets/Logo Rating.png",
      path: "/ratingkepuasanopd",
    },
  ];

  return (
    <aside className="w-64 min-h-screen bg-white/90 shadow-lg p-6 sticky top-0">
      {/* Logo Section */}
      <div className="flex items-center gap-3 mb-6 px-2">
        <img
          src="/assets/Logo Report.png"
          alt="Logo"
          className="w-10 h-10 object-contain"
        />
        <h1 className="text-xl font-extrabold bg-gradient-to-r from-[#d92e2e] to-[#6a0dad] bg-clip-text text-transparent tracking-wide">
          REPORT
        </h1>
      </div>

      {/* Navigation Menu */}
      <nav className="space-y-2">
        {navItems.map((item) => {
          const active = location.pathname.startsWith(item.path);
          return (
            <Link
              key={item.id}
              to={item.path}
              className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                active
                  ? "bg-[#226597] text-white shadow-md"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              {/* Icon dengan filter putih saat aktif */}
              <img
                src={item.icon}
                alt={item.label}
                className={`w-5 h-5 object-contain transition-all ${
                  active ? "brightness-0 invert" : ""
                }`}
              />
              <span className="font-medium text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default SidebarOpd;
