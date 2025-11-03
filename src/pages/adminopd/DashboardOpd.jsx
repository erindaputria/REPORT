import React, { useState } from "react";
import HeaderOpd from "./HeaderOpd";
import SidebarOpd from "./SidebarOpd";
import { Menu, X, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DashboardOpd = () => {
  const [activeTab, setActiveTab] = useState("pelaporan");
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const stats = [
  ];

  // Data tabel dengan path gambar profil
  const tableData = [
    {
      name: "Haikal Saputra",
      category: "Perangkat Keras",
      date: "18/09/2024",
      priority: "Rendah",
      status: "Draft",
      avatar: "/assets/Haechan.jpg",
    },
    {
      name: "Rio Widoro",
      category: "Jaringan & Konektivitas",
      date: "18/09/2024",
      priority: "Tinggi",
      status: "Terverifikasi",
      avatar: "/assets/Rio.jpeg",
    },
    {
      name: "Lia Yustia",
      category: "Perangkat Keras",
      date: "17/09/2024",
      priority: "Rendah",
      status: "Ditolak",
      avatar: "/assets/Lia.jpg",
    },
    {
      name: "Ridwan Yusuf",
      category: "Email & Komunikasi",
      date: "17/09/2024",
      priority: "Rendah",
      status: "Draft",
      avatar: "/assets/Jaemin.jpg",
    },
    {
      name: "Ella Meisya",
      category: "Jaringan & Konektivitas",
      date: "17/09/2024",
      priority: "Tinggi",
      status: "Terverifikasi",
      avatar: "/assets/Ella.jpg",
    },
    {
      name: "Sri Wulandari",
      category: "Keamanan",
      date: "16/09/2024",
      priority: "Rendah",
      status: "Draft",
      avatar: "/assets/Suzy.jpg",
    },
    {
      name: "Supriatno",
      category: "Email & Komunikasi",
      date: "16/09/2024",
      priority: "Sedang",
      status: "Draft",
      avatar: "/assets/Suprianto.jpg",
    },
    {
      name: "Anya Rosalina",
      category: "Email & Komunikasi",
      date: "16/09/2024",
      priority: "Rendah",
      status: "Terverifikasi",
      avatar: "/assets/Anya.jpg",
    },
    {
      name: "Widya Karim",
      category: "Keamanan",
      date: "15/09/2024",
      priority: "Rendah",
      status: "Draft",
      avatar: "/assets/Widya.jpeg",
    },
    {
      name: "Rudiono",
      category: "Perangkat Keras",
      date: "15/09/2024",
      priority: "Rendah",
      status: "Terverifikasi",
      avatar: "/assets/Rudiono.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="bg-white p-4 flex items-center justify-between md:hidden shadow-sm">
        <button
          onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          className="p-2 rounded-lg bg-gray-100"
        >
          {isMobileSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <Bell size={16} className="text-gray-600" />
          </div>
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img
              src="/assets/Haechan.jpg"
              alt="Profil"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Sidebar - Hidden on mobile unless toggled */}
      <div
        className={`${
          isMobileSidebarOpen ? "block" : "hidden"
        } md:block fixed md:relative inset-0 z-50 md:z-auto bg-white md:bg-transparent w-72 md:w-auto`}
      >
        <div className="h-full">
          <SidebarOpd />
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
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <HeaderOpd />

        {/* Dashboard Content */}
        <main className="flex-1 p-4 md:p-6">
          {/* Dashboard Header Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6 mb-6 md:mb-8">
            <h1 className="text-xl md:text-2xl font-bold text-[#226597] text-left">
              Dashboard
            </h1>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm p-4 md:p-6 border border-gray-200 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex flex-col">
                  <div className="flex items-start space-x-3 mb-3">
                    <img
                      src={stat.icon}
                      alt={stat.label}
                      className="w-6 h-6 md:w-8 md:h-8 object-contain"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm md:text-base font-semibold text-gray-800 text-left">
                        {stat.label}
                      </h3>
                    </div>
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-gray-900 mb-2 text-left">
                    {stat.number}
                  </div>
                  <p className="text-xs md:text-sm text-gray-500 text-left">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Card untuk Pelaporan dan Filter Pencarian */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6 mb-6 md:mb-8">
            {/* Tab Navigation */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              {/* Tab Navigation */}
              <div className="flex space-x-4 sm:space-x-8 border-b border-gray-200 pb-0.5 w-full sm:w-auto overflow-x-auto">
                <button
                  onClick={() => setActiveTab("pelaporan")}
                  className={`pb-3 px-1 font-medium text-sm whitespace-nowrap ${
                    activeTab === "pelaporan"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Pelaporan
                </button>
                <button
                  onClick={() => setActiveTab("pelayanan")}
                  className={`pb-3 px-1 font-medium text-sm whitespace-nowrap ${
                    activeTab === "pelayanan"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Pelayanan
                </button>
              </div>

              {/* Tombol Refresh */}
              <button className="flex items-center space-x-2 bg-[#226597] hover:bg-blue-600 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 w-full sm:w-auto justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0C4.11653 0 0.88012 2.7674 0.15332 6.43749H2.37403C3.05827 3.97008 5.31471 2.15625 8 2.15625C9.61425 2.15625 11.073 2.81219 12.1289 3.87109L9.56251 6.43749H16V0L13.6563 2.34375C12.2087 0.895747 10.2093 0 8 0ZM0 9.56251V16L2.34375 13.6563C3.79128 15.1043 5.79069 16 8 16C11.8835 16 15.1199 13.2326 15.8467 9.56251H13.626C12.9417 12.0299 10.6853 13.8437 8 13.8437C6.38575 13.8437 4.92701 13.1878 3.87109 12.1289L6.43749 9.56251H0Z"
                    fill="white"
                  />
                </svg>
                <span className="text-sm font-medium">Refresh</span>
              </button>
            </div>

            {/* Filter Pencarian Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6 mb-4 md:mb-6">
              <h2 className="text-base md:text-lg font-semibold text-[#226597] mb-4 text-left">
                Filter pencarian
              </h2>

              {/* Filter Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                <div className="text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <div className="text-sm font-medium text-gray-700 whitespace-nowrap">
                      Perihal
                    </div>
                    <div className="relative flex-1">
                      <button className="w-full text-left text-sm text-gray-500 p-2 bg-white rounded border border-gray-300 hover:bg-gray-50 flex items-center justify-between">
                        Pilih perihal
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <div className="text-sm font-medium text-gray-700 whitespace-nowrap">
                      Status
                    </div>
                    <div className="relative flex-1">
                      <button className="w-full text-left text-sm text-gray-500 p-2 bg-white rounded border border-gray-300 hover:bg-gray-50 flex items-center justify-between">
                        Pilih status
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <div className="text-sm font-medium text-gray-700 whitespace-nowrap">
                      Prioritas
                    </div>
                    <div className="relative flex-1">
                      <button className="w-full text-left text-sm text-gray-500 p-2 bg-white rounded border border-gray-300 hover:bg-gray-50 flex items-center justify-between">
                        Pilih prioritas
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Table Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              {/* Table Header */}
              <div className="bg-[#226597] p-3 md:p-4 grid grid-cols-2 md:grid-cols-7 gap-2 md:gap-4 text-xs md:text-sm font-medium text-white text-left hidden md:grid">
                <div className="min-w-[120px]">Pengirim</div>
                <div className="min-w-[150px]">Perihal</div>
                <div className="min-w-[100px]">Tanggal masuk</div>
                <div className="min-w-[100px]">Lampiran</div>
                <div className="min-w-[80px]">Prioritas</div>
                <div className="min-w-[100px]">Status</div>
                <div className="min-w-[60px]">Aksi</div>
              </div>

              {/* Mobile Table Header */}
              <div className="bg-[#226597] p-3 md:p-4 text-xs md:text-sm font-medium text-white text-left md:hidden">
                Daftar Pelaporan
              </div>

              {/* Table Data */}
              <div className="rounded-b-lg">
                {tableData.map((item, index) => (
                  <div
                    key={index}
                    className={`p-3 md:p-4 grid grid-cols-1 md:grid-cols-7 gap-3 md:gap-4 text-sm text-left items-center ${
                      index !== tableData.length - 1
                        ? "border-b border-gray-200"
                        : ""
                    }`}
                  >
                    {/* Mobile View */}
                    <div className="md:hidden space-y-3">
                      {/* Row 1: Pengirim dan Tanggal */}
                      <div className="flex justify-between items-center">
                        <div className="font-medium text-gray-800 flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                            {item.avatar ? (
                              <img
                                src={item.avatar}
                                alt={item.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-white text-xs font-bold">
                                  {item.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </span>
                              </div>
                            )}
                          </div>
                          <span className="truncate">{item.name}</span>
                        </div>
                        <div className="text-gray-600 text-sm">{item.date}</div>
                      </div>

                      {/* Row 2: Perihal dan Lampiran */}
                      <div className="flex justify-between items-center">
                        <div className="text-gray-600">{item.category}</div>
                        <div className="text-gray-600">
                          <div className="flex items-center space-x-1">
                            <svg
                              className="w-4 h-4 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                            <span className="text-xs">document.pdf</span>
                          </div>
                        </div>
                      </div>

                      {/* Row 3: Prioritas, Status, dan Aksi */}
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <span
                            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                              item.priority === "Tinggi"
                                ? "bg-green-100 text-green-800 border border-green-200"
                                : item.priority === "Sedang"
                                ? "bg-yellow-100 text-yellow-800 border border-yellow-200"
                                : "bg-red-100 text-red-800 border border-red-200"
                            }`}
                          >
                            {item.priority}
                          </span>
                          <span
                            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                              item.status === "Terverifikasi"
                                ? "bg-green-100 text-green-800 border border-green-200"
                                : item.status === "Draft"
                                ? "bg-gray-100 text-gray-800 border border-gray-200"
                                : "bg-red-100 text-red-800 border border-red-200"
                            }`}
                          >
                            {item.status}
                          </span>
                        </div>
                        <div>
                          <button className="text-[#226597] hover:text-[#113F67] transition-colors duration-200">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M16.757 2.99766L9.291 10.4637L9.299 14.7107L13.537 14.7027L21 7.24066V19.9987C21 20.2639 20.8946 20.5182 20.7071 20.7058C20.5196 20.8933 20.2652 20.9987 20 20.9987H4C3.73478 20.9987 3.48043 20.8933 3.29289 20.7058C3.10536 20.5182 3 20.2639 3 19.9987V3.99866C3 3.73344 3.10536 3.47909 3.29289 3.29155C3.48043 3.10401 3.73478 2.99866 4 2.99866L16.757 2.99766ZM20.485 2.09766L21.9 3.51166L12.707 12.7047L11.295 12.7067L11.293 11.2907L20.485 2.09766Z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Desktop View */}
                    {/* Pengirim dengan gambar profil */}
                    <div className="hidden md:flex font-medium text-gray-800 items-center space-x-3 min-w-[120px]">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                        {item.avatar ? (
                          <img
                            src={item.avatar}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-xs font-bold">
                              {item.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                        )}
                      </div>
                      <span className="truncate">{item.name}</span>
                    </div>

                    <div className="hidden md:block text-gray-600 min-w-[150px]">
                      {item.category}
                    </div>
                    <div className="hidden md:block text-gray-600 min-w-[100px]">
                      {item.date}
                    </div>

                    {/* Lampiran dokumen */}
                    <div className="hidden md:block text-gray-600 min-w-[100px]">
                      <div className="flex items-center space-x-1">
                        <svg
                          className="w-4 h-4 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        <span className="text-xs">document.pdf</span>
                      </div>
                    </div>

                    {/* Prioritas dengan badge warna */}
                    <div className="hidden md:block min-w-[80px]">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          item.priority === "Tinggi"
                            ? "bg-green-100 text-green-800 border border-green-200"
                            : item.priority === "Sedang"
                            ? "bg-yellow-100 text-yellow-800 border border-yellow-200"
                            : "bg-red-100 text-red-800 border border-red-200"
                        }`}
                      >
                        {item.priority}
                      </span>
                    </div>

                    {/* Status dengan badge warna */}
                    <div className="hidden md:block min-w-[100px]">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          item.status === "Terverifikasi"
                            ? "bg-green-100 text-green-800 border border-green-200"
                            : item.status === "Draft"
                            ? "bg-gray-100 text-gray-800 border border-gray-200"
                            : "bg-red-100 text-red-800 border border-red-200"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    {/* Aksi dengan logo SVG berwarna biru */}
                    <div className="hidden md:block min-w-[60px]">
                      <button
                        onClick={() => navigate("/aksibidang")}
                        className="text-[#226597] hover:text-[#113F67] transition-colors duration-200"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M16.757 2.99766L9.291 10.4637L9.299 14.7107L13.537 14.7027L21 7.24066V19.9987C21 20.2639 20.8946 20.5182 20.7071 20.7058C20.5196 20.8933 20.2652 20.9987 20 20.9987H4C3.73478 20.9987 3.48043 20.8933 3.29289 20.7058C3.10536 20.5182 3 20.2639 3 19.9987V3.99866C3 3.73344 3.10536 3.47909 3.29289 3.29155C3.48043 3.10401 3.73478 2.99866 4 2.99866L16.757 2.99766ZM20.485 2.09766L21.9 3.51166L12.707 12.7047L11.295 12.7067L11.293 11.2907L20.485 2.09766Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination Info */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-500 mt-4 p-3 md:p-4 border-t border-gray-200">
                <div className="text-left order-2 sm:order-1">
                  Menampilkan data 1 sampai 10 dari 33 data
                </div>

                {/* Pagination Navigation */}
                <div className="flex items-center space-x-3 md:space-x-4 order-1 sm:order-2 mb-3 sm:mb-0">
                  {/* Tombol Previous */}
                  <button className="text-[#226597] hover:text-[#113F67] transition-colors duration-200">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  {/* Nomor Halaman */}
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <span className="text-[#226597] font-medium">1</span>
                    <span className="text-gray-700 hover:text-[#226597] cursor-pointer transition-colors duration-200">
                      2
                    </span>
                    <span className="text-gray-700 hover:text-[#226597] cursor-pointer transition-colors duration-200">
                      3
                    </span>
                  </div>

                  {/* Tombol Next */}
                  <button className="text-[#226597] hover:text-[#113F67] transition-colors duration-200">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardOpd;
