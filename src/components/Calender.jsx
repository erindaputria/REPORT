"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, AlertCircle } from "lucide-react";

const months = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

const daysOfWeek = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];

export function Calender() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const firstDayWeekday = firstDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();

  const previousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const days = [];

  // Empty cells before first day
  for (let i = 0; i < firstDayWeekday; i++) {
    days.push(<div key={`empty-${i}`} className="h-8"></div>);
  }

  // Days of month
  for (let day = 1; day <= daysInMonth; day++) {
    const isToday =
      day === new Date().getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear();
    days.push(
      <div
        key={day}
        className={`h-8 flex items-center justify-center text-sm cursor-pointer rounded ${
          isToday ? "bg-red-500 text-white" : "hover:bg-gray-100"
        }`}
      >
        {day}
      </div>
    );
  }

  return (
    <div className="space-y-2 p-4 border rounded-lg bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={previousMonth}
          className="p-1 rounded-md hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <h3 className="font-semibold text-sm">
          {months[month]} {year}
        </h3>
        <button
          onClick={nextMonth}
          className="p-1 rounded-md hover:bg-gray-100 transition-colors"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Days of minggu */}
      <div className="grid grid-cols-7 gap-1 text-xs text-gray-500">
        {daysOfWeek.map((day) => (
          <div
            key={day}
            className="h-8 flex items-center justify-center font-medium"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 gap-1">{days}</div>

      {/* Pesan Peringatan */}
      <div className="flex items-center gap-2 text-red-600 text-xs mt-2">
        <AlertCircle className="w-4 h-4 flex-shrink-0" />
        <p className="text-left">
          OPD libur, laporan yang Anda buat akan diproses di hari kerja
        </p>
      </div>
    </div>
  );
}
