import React, { useState, useRef, useEffect } from "react";
import { BellIcon, ChevronDownIcon, UserIcon, SwatchIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

export default function NavbarSeksi() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Tutup dropdown jika klik di luar area
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="flex items-center justify-end px-6 py-3 bg-transparent relative">
      <div className="flex items-center gap-5">
        {/* === Notifikasi === */}
        <button className="relative bg-white p-2 rounded-full shadow-sm hover:shadow-md transition">
          <BellIcon className="w-6 h-6 text-blue-800" />
          <span className="absolute top-1.5 right-1.5 block w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* === Profil Dropdown === */}
        <div className="relative" ref={dropdownRef}>
          {/* Tombol utama (foto + nama + panah) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center bg-white rounded-full px-3 py-1.5 shadow-sm hover:shadow-md transition"
          >
            <img
              src="/assets/Haechan.jpg"
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm font-semibold text-blue-900 mx-2">
              Haikal Saputra
            </span>
            <ChevronDownIcon
              className={`w-5 h-5 text-blue-900 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-100 rounded-xl shadow-lg py-2 animate-fade-in">
              <button
                onClick={() => navigate("/profilsaya")}
                className="flex items-center w-full px-4 py-2 text-sm text-blue-900 hover:bg-gray-50 transition"
              >
                <UserIcon className="w-5 h-5 mr-2 text-blue-900" />
                Profil Saya
              </button>
              <button
                onClick={() => navigate("/tampilan")}
                className="flex items-center w-full px-4 py-2 text-sm text-blue-900 hover:bg-gray-50 transition"
              >
                <SwatchIcon className="w-5 h-5 mr-2 text-blue-900" />
                Tampilan
              </button>
              <button
                onClick={() => navigate("/login")}
                className="flex items-center w-full px-4 py-2 text-sm text-blue-900 hover:bg-gray-50 transition"
              >
                <ArrowRightOnRectangleIcon className="w-5 h-5 mr-2 text-blue-900" />
                Keluar
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
