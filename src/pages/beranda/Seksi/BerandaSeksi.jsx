import React, { useState } from "react";
import {
  PaperClipIcon,
  PencilSquareIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

export default function BerandaSeksi() {
  const [activeTab, setActiveTab] = useState("pelaporan");

  // === Data Dummy ===
  const dataPelaporan = [
    {
      id: 1,
      pengirim: "Doni Ridho",
      perihal: "Perangkat Keras",
      tanggal: "18/09/2024",
      status: "Revisi",
      foto: "/assets/Suika.jpg",
    },
    {
      id: 2,
      pengirim: "Sinta Wulandari",
      perihal: "Jaringan",
      tanggal: "19/09/2024",
      status: "Terverifikasi",
      foto: "/assets/shizuku.jpg",
    },
    {
      id: 3,
      pengirim: "Andi Pratama",
      perihal: "Sistem",
      tanggal: "20/09/2024",
      status: "Ditolak",
      foto: "/assets/Suika.jpg",
    },
    {
      id: 4,
      pengirim: "Lina Sari",
      perihal: "Aplikasi",
      tanggal: "21/09/2024",
      status: "Draft",
      foto: "/assets/shizuku.jpg",
    },
    {
      id: 5,
      pengirim: "Agus Wijaya",
      perihal: "Database",
      tanggal: "22/09/2024",
      status: "Terverifikasi",
      foto: "/assets/Suika.jpg",
    },
    {
      id: 6,
      pengirim: "Budi Santoso",
      perihal: "Hardware",
      tanggal: "23/09/2024",
      status: "Terverifikasi",
      foto: "/assets/shizuku.jpg",
    },
    {
      id: 7,
      pengirim: "Rina Oktavia",
      perihal: "Akses",
      tanggal: "23/09/2024",
      status: "Pending",
      foto: "/assets/Suika.jpg",
    },
    {
      id: 8,
      pengirim: "Teguh Ramadhan",
      perihal: "Bug Software",
      tanggal: "24/09/2024",
      status: "Terverifikasi",
      foto: "/assets/shizuku.jpg",
    },
    {
      id: 9,
      pengirim: "Indah Puspita",
      perihal: "Server",
      tanggal: "25/09/2024",
      status: "Draft",
      foto: "/assets/Suika.jpg",
    },
    {
      id: 10,
      pengirim: "Fajar Nugraha",
      perihal: "Keamanan",
      tanggal: "26/09/2024",
      status: "Terverifikasi",
      foto: "/assets/shizuku.jpg",
    },
  ];

  // === Pewarnaan status ===
  const statusColor = (status) => {
    switch (status) {
      case "Terverifikasi":
        return "bg-green-100 text-green-700";
      case "Revisi":
        return "bg-red-100 text-red-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Ditolak":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const handleImageError = (e) => {
    e.target.src = "/assets/default.jpg"; // fallback jika gambar gagal dimuat
  };

  return (
    <div className="space-y-6">
      {/* Judul dan Tombol Refresh */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
      </div>

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

      {/* Tabs + Refresh */}
      <div className="flex items-center justify-between border-b px-4 py-2 bg-white rounded-t-2xl">
        {/* Tabs */}
        <div className="flex gap-6">
          <button
            onClick={() => setActiveTab("pelaporan")}
            className={`text-sm font-semibold pb-2 border-b-2 transition ${
              activeTab === "pelaporan"
                ? "border-blue-700 text-blue-700"
                : "border-transparent text-gray-500 hover:text-blue-700"
            }`}
          >
            Pelaporan
          </button>
          <button
            onClick={() => setActiveTab("pelayanan")}
            className={`text-sm font-semibold pb-2 border-b-2 transition ${
              activeTab === "pelayanan"
                ? "border-blue-700 text-blue-700"
                : "border-transparent text-gray-500 hover:text-blue-700"
            }`}
          >
            Pelayanan
          </button>
        </div>

        {/* Tombol Refresh di kanan */}
        <button className="flex items-center gap-2 bg-[#133E73] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#0e315d] transition">
          <ArrowPathIcon className="w-4 h-4" />
          Refresh
        </button>
      </div>

      {/* Filter Section */}
      <div className="p-4 border-b bg-white flex flex-wrap gap-6 items-end rounded-b-2xl">
        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1"> Pilih Perihal</label>
          <select className="border rounded-lg p-2 text-sm w-40">
            <option>Semua</option>
            <option>Perangkat Keras</option>
            <option>Keamanan</option>
            <option>Jaringan</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1"> Pilih Status</label>
          <select className="border rounded-lg p-2 text-sm w-40">
            <option>Semua</option>
            <option>Terverifikasi</option>
            <option>Pending</option>
            <option>Revisi</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">Pilih Prioritas</label>
          <select className="border rounded-lg p-2 text-sm w-40">
            <option>Semua</option>
            <option>Rendah</option>
            <option>Sedang</option>
            <option>Tinggi</option>
          </select>
        </div>
      </div>

      {/* Tabel */}
      <div className="p-4 bg-white rounded-2xl shadow overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="bg-blue-900 text-white">
              <th className="p-3 rounded-l-lg">Pengirim</th>
              <th className="p-3">Perihal</th>
              <th className="p-3">Tanggal Masuk</th>
              <th className="p-3">Lampiran</th>
              <th className="p-3">Status</th>
              <th className="p-3 rounded-r-lg">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dataPelaporan.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50 transition"
              >
                {/* Kolom Pengirim */}
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={item.foto}
                    alt={item.pengirim}
                    onError={handleImageError}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span>{item.pengirim}</span>
                </td>
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
                  <PencilSquareIcon className="w-5 h-5 text-blue-600 cursor-pointer hover:text-blue-800 transition" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
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
