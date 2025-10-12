import React, { useState } from "react";
import {
  PaperClipIcon,
  PencilSquareIcon,
  EyeIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

export default function BerandaSeksi() {
  const [activeTab, setActiveTab] = useState("pelaporan");

  // Data dummy
  const dataPelaporan = [
    { id: 1, pengirim: "Doni Ridho", perihal: "Perangkat Keras", tanggal: "18/09/2024", status: "Revisi" },
    { id: 2, pengirim: "Sinta Wulandari", perihal: "Jaringan", tanggal: "19/09/2024", status: "Pending" },
    { id: 3, pengirim: "Andi Pratama", perihal: "Sistem", tanggal: "20/09/2024", status: "Diterima" },
    { id: 4, pengirim: "Lina Sari", perihal: "Aplikasi", tanggal: "21/09/2024", status: "Diproses" },
    { id: 5, pengirim: "Agus Wijaya", perihal: "Database", tanggal: "22/09/2024", status: "Diterima" },
    { id: 6, pengirim: "Budi Santoso", perihal: "Hardware", tanggal: "23/09/2024", status: "Ditolak" },
    { id: 7, pengirim: "Rina Oktavia", perihal: "Akses", tanggal: "23/09/2024", status: "Pending" },
    { id: 8, pengirim: "Teguh Ramadhan", perihal: "Bug Software", tanggal: "24/09/2024", status: "Diproses" },
    { id: 9, pengirim: "Indah Puspita", perihal: "Server", tanggal: "25/09/2024", status: "Revisi" },
    { id: 10, pengirim: "Fajar Nugraha", perihal: "Keamanan", tanggal: "26/09/2024", status: "Diterima" },
  ];

  // fungsi pewarnaan status
  const statusColor = (status) => {
    switch (status) {
      case "Diterima":
        return "bg-green-100 text-green-700";
      case "Diproses":
        return "bg-blue-100 text-blue-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Revisi":
        return "bg-orange-100 text-orange-700";
      case "Ditolak":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="space-y-6">
      {/* Judul */}
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

      {/* Statistik */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Tiket Masuk", value: 33 },
          { label: "Pending", value: 10 },
          { label: "Diverifikasi", value: 15 },
          { label: "Ditolak", value: 1 },
        ].map((item) => (
          <div key={item.label} className="bg-white shadow rounded-2xl p-4">
            <p className="text-sm text-gray-500">{item.label}</p>
            <h2 className="text-2xl font-semibold mt-2">{item.value}</h2>
          </div>
        ))}
      </div>

      {/* Tab */}
      <div className="bg-white rounded-2xl shadow overflow-hidden">
        <div className="border-b flex">
          <button
            onClick={() => setActiveTab("pelaporan")}
            className={`flex-1 text-sm font-semibold py-3 border-b-2 ${
              activeTab === "pelaporan"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-blue-600"
            }`}
          >
            Pelaporan
          </button>
          <button
            onClick={() => setActiveTab("pelayanan")}
            className={`flex-1 text-sm font-semibold py-3 border-b-2 ${
              activeTab === "pelayanan"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-blue-600"
            }`}
          >
            Pelayanan
          </button>
        </div>

        {/* Filter */}
        <div className="p-4 border-b flex flex-wrap gap-4 items-center">
          <select className="border rounded-lg p-2 text-sm">
            <option>Pilih perihal</option>
          </select>
          <select className="border rounded-lg p-2 text-sm">
            <option>Pilih status</option>
          </select>
          <select className="border rounded-lg p-2 text-sm">
            <option>Pilih prioritas</option>
          </select>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
            Refresh
          </button>
        </div>

        {/* Tabel */}
        <div className="p-4 overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="bg-blue-900 text-white">
                <th className="p-3">Pengirim</th>
                <th className="p-3">Perihal</th>
                <th className="p-3">Tanggal Masuk</th>
                <th className="p-3">Lampiran</th>
                <th className="p-3">Status</th>
                <th className="p-3">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dataPelaporan.map((item) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-3">{item.pengirim}</td>
                  <td className="p-3">{item.perihal}</td>
                  <td className="p-3">{item.tanggal}</td>
                  <td className="p-3 text-blue-600 flex items-center gap-1 cursor-pointer">
                    <PaperClipIcon className="w-4 h-4" /> Lampiran
                  </td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-lg text-xs font-semibold ${statusColor(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="p-3 flex gap-3">
                    <EyeIcon className="w-5 h-5 text-blue-600 cursor-pointer" />
                    <PencilSquareIcon className="w-5 h-5 text-green-600 cursor-pointer" />
                    <TrashIcon className="w-5 h-5 text-red-600 cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center p-4 border-t text-sm text-gray-600">
          <p>Menampilkan 1 - 10 dari 50 data</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 border rounded-lg hover:bg-gray-100">
              &lt;
            </button>
            <button className="px-3 py-1 border rounded-lg bg-blue-600 text-white">
              1
            </button>
            <button className="px-3 py-1 border rounded-lg hover:bg-gray-100">
              2
            </button>
            <button className="px-3 py-1 border rounded-lg hover:bg-gray-100">
              3
            </button>
            <button className="px-3 py-1 border rounded-lg hover:bg-gray-100">
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
