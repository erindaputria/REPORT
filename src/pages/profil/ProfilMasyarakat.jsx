import React, { useState } from "react";
import { Home, Heart, Folder, Settings, FileText, X } from "lucide-react";
import LeftSidebar from "../../components/LeftSidebar";
import HeaderMasyarakat from "../../components/HeaderMasyarakat";

const ProfilePage = () => {
  const [activeItem, setActiveItem] = useState("beranda");
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const navItems = [
    {
      id: "beranda",
      label: "Beranda",
      icon: <Home size={20} />,
    },
    {
      id: "statistik",
      label: "Statistik",
      icon: <div className="w-5 h-5 bg-current rounded-full opacity-60" />,
    },
    {
      id: "item1",
      label: "blablabla",
      icon: <Heart size={20} />,
    },
    {
      id: "item2",
      label: "blablabla",
      icon: <Folder size={20} />,
    },
    {
      id: "item3",
      label: "blablabla",
      icon: <Settings size={20} />,
    },
    {
      id: "item4",
      label: "blablabla",
      icon: <FileText size={20} />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Left Sidebar - Hidden on mobile unless toggled */}
      <div
        className={`${
          isMobileSidebarOpen ? "block" : "hidden"
        } md:block fixed md:relative inset-0 z-50 md:z-auto bg-white md:bg-transparent w-72 md:w-auto`}
      >
        <div className="h-full">
          <LeftSidebar />
          <button
            onClick={() => setIsMobileSidebarOpen(false)}
            className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full md:hidden"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Overlay for mobile sidebar */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content Area */}
      <div className="flex-1">
        <HeaderMasyarakat />
        {/* Main Content */}
        <div className="px-4 md:px-6 py-4 md:py-8">
          {/* Profile Header */}
          <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mb-4 md:mb-6 w-full">
            <div className="flex justify-start mb-4 md:mb-6">
              <h1 className="text-xl md:text-2xl font-semibold text-[#226597]">
                Profil Saya
              </h1>
            </div>

            {/* Profile Card */}
            <div className="bg-white rounded-lg p-4 md:p-5 mb-4 md:mb-6 w-full">
              <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-3 sm:space-y-0">
                <img
                  src="/assets/Lomon.png"
                  alt="Haikal Saputra"
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
                />
                <div className="text-center sm:text-left">
                  <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                    Lomon Kahiel
                  </h2>
                  <span className="inline-block bg-[#226597] text-white text-sm font-normal px-3 py-1 rounded-full mt-4">
                    Publik
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Info Section */}
          <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mb-4 md:mb-6 w-full">
            {/* Header + garis tipis */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-3 border-b border-gray-300 gap-2 sm:gap-0">
              <h3 className="text-lg font-semibold text-[#226597]">
                Info Pribadi
              </h3>
              <button className="bg-[#226597] hover:bg-blue-900 text-white text-xs md:text-sm font-medium px-3 py-1.5 md:px-4 md:py-2 rounded-lg flex items-center space-x-1 self-end sm:self-auto">
                <span>Ubah</span>
                <svg
                  className="w-3 h-3 md:w-4 md:h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 text-left mt-4 md:mt-6">
              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Nama Depan
                </label>
                <p className="text-gray-500 text-sm md:text-base">Lomon</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Nama Belakang
                </label>
                <p className="text-gray-500 text-sm md:text-base">Kahiel</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Tanggal Lahir
                </label>
                <p className="text-gray-500 text-sm md:text-base">24-01-1991</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Email
                </label>
                <p className="text-gray-500 text-sm md:text-base break-all">
                  lomonkahiel@gmail.com
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Nomor Telepon
                </label>
                <p className="text-gray-500 text-sm md:text-base">
                  0878-2831-1228
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Alamat
                </label>
                <p className="text-gray-500 text-sm md:text-base">
                  Krembangan, Surabaya
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
