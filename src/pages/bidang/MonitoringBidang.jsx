import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
} from "date-fns";
import { id } from "date-fns/locale";
import HeaderBidang from "./HeaderBidang";
import SidebarBidang from "./SidebarBidang";
import { Menu, X, Bell } from "lucide-react";

export default function MonitoringBidang() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filter, setFilter] = useState("Semua");
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Data monitoring bidang
  const dataBidang = [];

  // Format bulan
  const renderHeader = () => (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
      <h1 className="text-xl sm:text-2xl font-bold text-blue-900 flex items-center gap-2">
        <svg
          width="32"
          height="32"
          className="w-6 h-6 sm:w-8 sm:h-8"
          viewBox="0 0 49 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="48"
            height="48"
            rx="24"
            stroke="#8F95B2"
          />
          <path
            d="M15.5 15.5V31.5C15.5 32.0304 15.7107 32.5391 16.0858 32.9142C16.4609 33.2893 16.9696 33.5 17.5 33.5H33.5M19.5 28.5H27.5M19.5 23.5H31.5M19.5 18.5H22.5"
            stroke="#113F67"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Monitoring
      </h1>
      <div className="flex items-center gap-4">
        <ChevronLeftIcon
          onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
          className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 cursor-pointer hover:text-blue-900"
        />
        <span className="font-semibold text-gray-700 text-base sm:text-lg">
          {format(currentMonth, "MMMM yyyy", { locale: id })}
        </span>
        <ChevronRightIcon
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
          className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 cursor-pointer hover:text-blue-900"
        />
      </div>
    </div>
  );

  // Nama hari
  const renderDays = () => {
    const days = [];
    const date = [
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jumat",
      "Sabtu",
      "Minggu",
    ];
    for (let i = 0; i < 7; i++) {
      days.push(
        <div
          key={i}
          className="text-center font-bold text-blue-900 py-2 sm:py-3 text-xs sm:text-sm"
        >
          {date[i]}
        </div>
      );
    }
    return <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-2">{days}</div>;
  };

  // Grid tanggal dinamis
  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const formattedDate = format(day, "d");
        const cloneDay = day;
        const tasks = dataBidang.filter((t) => day >= t.start && day <= t.end);

        days.push(
          <div
            key={day}
            onClick={() => setSelectedDate(cloneDay)}
            className={`relative border rounded-lg min-h-[80px] sm:min-h-[100px] md:min-h-[120px] p-1 sm:p-2 transition-all ${
              !isSameMonth(day, monthStart)
                ? "bg-gray-50 text-gray-400"
                : "bg-white hover:bg-blue-50 hover:border-blue-300 cursor-pointer"
            } ${
              isSameDay(day, selectedDate)
                ? "ring-1 sm:ring-2 ring-blue-500 border-blue-500"
                : ""
            }`}
          >
            <span
              className={`text-xs sm:text-sm font-medium ${
                isSameDay(day, new Date())
                  ? "bg-blue-500 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs"
                  : "text-gray-700"
              }`}
            >
              {formattedDate}
            </span>

            <div className="mt-1 sm:mt-2 space-y-0.5 sm:space-y-1">
              {tasks.slice(0, 2).map((task, index) => (
                <div
                  key={index}
                  className={`${task.warna} text-white p-1 sm:p-2 rounded text-xs`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold truncate text-[10px] sm:text-xs">
                      {task.nama.split(" ")[0]}
                    </span>
                    <span className="text-[10px] sm:text-xs">{task.icon}</span>
                  </div>
                  <div className="w-full bg-white bg-opacity-30 rounded-full h-1 mt-0.5 sm:mt-1">
                    <div
                      className="bg-white h-1 rounded-full"
                      style={{ width: `${task.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
              {tasks.length > 2 && (
                <div className="text-[10px] sm:text-xs text-gray-500 text-center bg-gray-100 py-0.5 sm:py-1 rounded">
                  +{tasks.length - 2} lainnya
                </div>
              )}
            </div>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div key={day} className="grid grid-cols-7 gap-1 sm:gap-2 mb-1 sm:mb-2">
          {days}
        </div>
      );
      days = [];
    }

    return <div>{rows}</div>;
  };

  // Statistik bidang
  const renderStatistics = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
      {dataBidang.map((bidang, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-xl sm:text-2xl">{bidang.icon}</span>
              <h3 className="font-bold text-gray-800 text-sm sm:text-base">
                {bidang.nama}
              </h3>
            </div>
            <span
              className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-semibold ${
                bidang.progress === 100
                  ? "bg-green-100 text-green-800"
                  : bidang.progress >= 70
                  ? "bg-blue-100 text-blue-800"
                  : "bg-orange-100 text-orange-800"
              }`}
            >
              {bidang.progress}%
            </span>
          </div>

          <div className="space-y-2 sm:space-y-3">
            <div>
              <div className="flex justify-between text-xs sm:text-sm text-gray-600 mb-1">
                <span>Progress</span>
                <span>{bidang.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                <div
                  className={`h-1.5 sm:h-2 rounded-full ${bidang.warna}`}
                  style={{ width: `${bidang.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="flex justify-between text-xs sm:text-sm">
              <div className="text-center">
                <div className="font-bold text-gray-800">{bidang.teknisi}</div>
                <div className="text-gray-500 text-xs">Teknisi</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-gray-800">{bidang.tugas}</div>
                <div className="text-gray-500 text-xs">Tugas</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-gray-800 text-xs sm:text-sm">
                  {bidang.progress === 100 ? "Selesai" : "Berjalan"}
                </div>
                <div className="text-gray-500 text-xs">Status</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

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
          <SidebarBidang />
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
        <HeaderBidang />

        {/* Main Content */}
        <div className="flex-1 p-4 sm:p-6">
          <div className="max-w-7xl mx-auto">
            {renderHeader()}

            {/* Statistik */}
            {renderStatistics()}

            {/* Filter dan Kontrol */}
            <div className="bg-white shadow-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4 sm:mb-6">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:flex-wrap w-full sm:w-auto">
                  <div className="flex flex-col flex-1 sm:flex-initial">
                    <label className="text-black text-xs sm:text-sm mb-1 font-semibold">
                      Level Teknisi
                    </label>
                    <select className="border rounded-lg p-2 text-xs sm:text-sm min-w-0 sm:min-w-[150px]">
                      <option>Semua</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>

                  <div className="flex flex-col flex-1 sm:flex-initial">
                    <label className="text-black text-xs sm:text-sm mb-1 font-semibold">
                      Bidang Teknisi
                    </label>
                    <select className="border rounded-lg p-2 text-xs sm:text-sm min-w-0 sm:min-w-[150px]">
                      <option>Semua</option>
                      <option>Keamanan</option>
                      <option>Jaringan</option>
                      <option>Perangkat Keras</option>
                    </select>
                  </div>

                  <div className="flex flex-col flex-1 sm:flex-initial">
                    <label className="text-black text-xs sm:text-sm mb-1 font-semibold">
                      Lihat Pekerjaan
                    </label>
                    <select className="border rounded-lg p-2 text-xs sm:text-sm min-w-0 sm:min-w-[150px]">
                      <option>Semua</option>
                      <option>Ikbal Rasyid</option>
                      <option>Putra Anggono</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-2 w-full sm:w-auto justify-center sm:justify-start">
                  {["Semua", "Progress", "Selesai"].map((item) => (
                    <button
                      key={item}
                      onClick={() => setFilter(item)}
                      className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors flex-1 sm:flex-initial ${
                        filter === item
                          ? "bg-blue-900 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Kalender */}
              <div className="mt-4 sm:mt-6 overflow-x-auto">
                <div className="min-w-[600px] sm:min-w-0">
                  {renderDays()}
                  {renderCells()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
