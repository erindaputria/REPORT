import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"; // navbar yang sama dipakai dari seksi
import SidebarTeknisi from "./SidebarTeknisi";

export default function LayoutTeknisi() {
  return (
    <div className="flex min-h-screen bg-slate-50">
          {/* Sidebar kiri — tetap di tempat */}
          <div className="fixed top-0 left-0 h-full w-64 bg-white shadow">
            <SidebarTeknisi />
          </div>
    
          {/* Bagian kanan */}
          <div className="flex-1 ml-64">
            {/* Navbar atas — tetap di tempat */}
            <div className="fixed top-0 left-64 right-0 bg-white shadow z-10">
              <Navbar />
            </div>
    
            {/* Konten utama — biar bisa di-scroll */}
            <main className="pt-20 p-6">
              <Outlet />
            </main>
          </div>
        </div>
  );
}
