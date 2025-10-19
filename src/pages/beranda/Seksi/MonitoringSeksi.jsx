import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from "date-fns";
import { id } from "date-fns/locale";

export default function MonitoringSeksi() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filter, setFilter] = useState("Semua");

  // Dummy data teknisi
  const data = [
    {
      nama: "Sri Wulandari",
      bidang: "Keamanan",
      progress: 80,
      start: new Date(2025, 8, 2),
      end: new Date(2025, 8, 5),
      foto: "/assets/shizuku.jpg",
    },
    {
      nama: "Galang Wardi",
      bidang: "Keamanan",
      progress: 100,
      start: new Date(2025, 8, 15),
      end: new Date(2025, 8, 15),
      foto: "/assets/Bokuto.jpg",
    },
    {
      nama: "Albert Madara",
      bidang: "Jaringan",
      progress: 40,
      start: new Date(2025, 8, 25),
      end: new Date(2025, 8, 25),
      foto: "/assets/Suika.jpg",
    },
  ];

  // Format bulan
  const renderHeader = () => (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
        <span className="text-blue-900">📊</span> Monitoring
      </h1>
      <div className="flex items-center gap-4">
        <ChevronLeftIcon
          onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
          className="w-5 h-5 text-gray-600 cursor-pointer"
        />
        <span className="font-semibold text-gray-700">
          {format(currentMonth, "MMMM yyyy", { locale: id })}
        </span>
        <ChevronRightIcon
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
          className="w-5 h-5 text-gray-600 cursor-pointer"
        />
      </div>
    </div>
  );

  // Nama hari
  const renderDays = () => {
    const days = [];
    const date = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className="text-center font-semibold text-blue-900 py-2">
          {date[i]}
        </div>
      );
    }
    return <div className="grid grid-cols-7">{days}</div>;
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
        const task = data.find(
          (t) => day >= t.start && day <= t.end
            );


        days.push(
          <div
            key={day}
            onClick={() => setSelectedDate(cloneDay)}
            className={`relative border rounded-lg min-h-[100px] p-1 transition ${
              !isSameMonth(day, monthStart)
                ? "bg-gray-100 text-gray-400"
                : "bg-white hover:bg-gray-50"
            }`}
          >
            <span className="text-xs text-gray-500 absolute top-1 right-2">
              {formattedDate}
            </span>

            {task && (
              <div
                className={`mt-6 text-left text-white p-2 rounded-lg ${
                task.progress === 100 ? "bg-blue-900" : "bg-blue-700"
                }`}
              >
              <div className="flex items-center gap-2">
                <img
                  src={task.foto}
                  alt={task.nama}
                  className="w-6 h-6 rounded-full object-cover"
              />
              <div>
                <p className="text-xs font-semibold">{task.nama}</p>
                <p className="text-[11px] opacity-90">{task.bidang}</p>
                <p className="text-[10px] opacity-75 mt-1">
                {task.progress}% selesai
                </p>
              </div>
            </div>
          </div>
          )}

          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(<div key={day} className="grid grid-cols-7 gap-2">{days}</div>);
      days = [];
    }

    return <div>{rows}</div>;
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] py-8 px-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-6xl mx-auto">
        {renderHeader()}

        {/* Filter */}
        <div className="flex flex-wrap justify-between items-center mb-6">
          <div className="flex flex-wrap gap-6">
            <div className="flex flex-col">
              <label className="text-gray-600 text-sm mb-1">Level Teknisi</label>
              <select className="border rounded-lg p-2 text-sm min-w-[150px]">
                <option>Semua</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-600 text-sm mb-1">Bidang Teknisi</label>
              <select className="border rounded-lg p-2 text-sm min-w-[150px]">
                <option>Semua</option>
                <option>Keamanan</option>
                <option>Jaringan</option>
                <option>Perangkat Keras</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-600 text-sm mb-1">Lihat Pekerjaan</label>
              <select className="border rounded-lg p-2 text-sm min-w-[150px]">
                <option>Semua</option>
                <option>Sri Wulandari</option>
                <option>Galang Wardi</option>
              </select>
            </div>
          </div>

          <div className="flex gap-2">
            {["Semua", "Progress", "Selesai"].map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
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
        {renderDays()}
        {renderCells()}
      </div>
    </div>
  );
}
