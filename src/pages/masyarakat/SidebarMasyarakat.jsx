import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const SidebarMasyarakat = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeItem, setActiveItem] = useState("");

  // Deteksi item aktif berdasarkan path URL - FIXED
  useEffect(() => {
    const path = location.pathname;
    console.log("Current path:", path); // Debugging

    if (
      path === "/" ||
      path === "/BerandaMasyarakat" ||
      path === "/berandamasyarakat"
    ) {
      setActiveItem("berandamasyarakat");
    } else if (path === "/kotakmasuk") {
      setActiveItem("kotakmasuk");
    } else if (path === "/riwayat") {
      setActiveItem("riwayat");
    } else {
      setActiveItem("");
    }
  }, [location.pathname]);

  const navItems = [
    {
      id: "berandamasyarakat", // ID harus sama dengan yang di useEffect
      label: "Beranda",
      icon: "/assets/Logo Beranda.png",
      path: "/BerandaMasyarakat", // Path harus sama dengan route di App.js
    },
    {
      id: "kotakmasuk",
      label: "Kotak Masuk",
      icon: "/assets/Logo Kotak Masuk.png",
      path: "/kotakmasuk",
    },
    {
      id: "riwayat",
      label: "Riwayat",
      icon: "/assets/Logo Riwayat.png",
      path: "/riwayat",
    },
  ];

  const handleNavigation = (item) => {
    console.log("Navigating to:", item.path); // Debugging
    navigate(item.path);
    // Tidak perlu setActiveItem di sini, karena useEffect akan menanganinya
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar Navigation */}
      <div className="w-64 bg-white shadow-sm border-r p-6 fixed left-0 top-0 h-screen overflow-y-auto">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-8">
          <div className="flex justify-center mb-6">
            <img
              src="/assets/Logo Report.png"
              alt="Logo Report"
              className="w-16 h-16 object-contain shadow-md rounded-full"
            />
          </div>

          <div className="w-[80px] h-[20px] -translate-y-3">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 67 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.608 11.5L4.368 7.34H4.032V11.5H0.896V0.219999H5.84C6.74667 0.219999 7.51467 0.379999 8.144 0.7C8.77333 1.00933 9.248 1.44133 9.568 1.996C9.888 2.54 10.048 3.15333 10.048 3.836C10.048 4.604 9.83467 5.28133 9.408 5.868C8.992 6.444 8.37867 6.85467 7.568 7.1L10.112 11.5H6.608ZM4.032 5.196H5.584C6.01067 5.196 6.33067 5.09467 6.544 4.892C6.75733 4.68933 6.864 4.396 6.864 4.012C6.864 3.64933 6.752 3.36667 6.528 3.164C6.31467 2.95067 6 2.844 5.584 2.844H4.032V5.196ZM15.4101 2.732V4.572H19.0101V6.956H15.4101V8.988H19.4901V11.5H12.2741V0.219999H19.4901V2.732H15.4101Z"
                fill="url(#paint0_linear_49_3042)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_49_3042"
                  x1="0"
                  y1="5.5"
                  x2="80"
                  y2="5.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EE1D52" />
                  <stop offset="0.9999" stopColor="#507687" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Menu */}
        <nav className="flex-1 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item)}
              className={`w-full flex items-center gap-3 px-3 py-4 rounded-full transition-all duration-200 ${
                activeItem === item.id
                  ? "bg-[#226597] text-white"
                  : "bg-white text-[#226597] hover:bg-[#507687]/10"
              }`}
            >
              <img
                src={item.icon}
                alt={item.label}
                className={`w-5 h-5 object-contain transition-all ${
                  activeItem === item.id ? "brightness-0 invert" : ""
                }`}
              />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Spacer untuk konten utama */}
      <div className="flex-1 ml-64">
        {/* Konten router akan tampil di sini */}
      </div>
    </div>
  );
};

export default SidebarMasyarakat;
