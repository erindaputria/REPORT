import React from "react";
import { BellIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

export default function NavbarSeksi() {
  return (
    <header className="flex items-center justify-end px-6 py-3 bg-transparent">
      <div className="flex items-center gap-5">
        {/* Ikon Notifikasi */}
        <button className="relative bg-white p-2 rounded-full shadow-sm hover:shadow-md transition">
          <BellIcon className="w-6 h-6 text-blue-800" />
          <span className="absolute top-1.5 right-1.5 block w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Blok Profil */}
        <div className="flex items-center bg-white rounded-full px-3 py-1.5 shadow-sm hover:shadow-md transition cursor-pointer">
          {/* Foto */}
          <img
            src="/assets/Haechan.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
          />
          {/* Nama */}
          <span className="text-sm font-semibold text-blue-900 mx-2">
            Haikal Saputra
          </span>
          {/* Dropdown */}
          <ChevronDownIcon className="w-5 h-5 text-blue-900" />
        </div>
      </div>
    </header>
  );
}
