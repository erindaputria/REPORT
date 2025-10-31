import React, { useState } from "react";
import { RefreshCcw, Eye } from "lucide-react";

export default function RatingTeknisi() {
  const [activeTab, setActiveTab] = useState("pelaporan");

  // Dummy data baru
  const dataRating = [
    { id: 1, nama: "Budi Winarto", perihal: "Jaringan & Konektivitas", masuk: "02/09/2024", selesai: "11/09/2024", rating: 5, foto: "/assets/shizuku.jpg" },
    { id: 2, nama: "Elly Serila", perihal: "Jaringan & Konektivitas", masuk: "02/09/2024", selesai: "10/09/2024", rating: 4, foto: "/assets/Suika.jpg" },
    { id: 3, nama: "Vina Erlita", perihal: "Perangkat Keras", masuk: "02/09/2024", selesai: "10/09/2024", rating: 5, foto: "/assets/Bokuto.jpg" },
    { id: 4, nama: "Faralia April", perihal: "Printer & Peripherals", masuk: "02/09/2024", selesai: "09/09/2024", rating: 1, foto: "/assets/shizuku.jpg" },
    { id: 5, nama: "Wawan Mujito", perihal: "Perangkat Keras", masuk: "01/09/2024", selesai: "09/09/2024", rating: 4, foto: "/assets/Suika.jpg" },
    { id: 6, nama: "Galang Wadi", perihal: "Keamanan", masuk: "01/09/2024", selesai: "08/09/2024", rating: 3, foto: "/assets/shizuku.jpg" },
    { id: 7, nama: "Joko Erwan", perihal: "Email & Komunikasi", masuk: "31/08/2024", selesai: "08/09/2024", rating: 5, foto: "/assets/Suika.jpg" },
    { id: 8, nama: "Suklistiani", perihal: "Jaringan & Konektivitas", masuk: "31/08/2024", selesai: "07/09/2024", rating: 5, foto: "/assets/Bokuto.jpg" },
    { id: 9, nama: "Toni Ridho", perihal: "Email & Komunikasi", masuk: "29/08/2024", selesai: "07/09/2024", rating: 2, foto: "/assets/shizuku.jpg" },
    { id: 10, nama: "Yudi Deriga", perihal: "Perangkat Keras", masuk: "29/08/2024", selesai: "06/09/2024", rating: 5, foto: "/assets/Suika.jpg" },
  ];

  const renderStars = (count) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < count ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Judul */}
      <h1 className="text-3xl font-bold text-gray-800">Rating Kepuasan</h1>

      {/* Tab Pelaporan / Pelayanan */}
      <div className="bg-white rounded-2xl shadow overflow-hidden">
        <div className="border-b flex items-center justify-between px-6">
          <div className="flex">
            <button
              onClick={() => setActiveTab("pelaporan")}
              className={`px-5 py-3 text-sm font-semibold border-b-2 ${
                activeTab === "pelaporan"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-blue-600"
              }`}
            >
              Pelaporan
            </button>
            <button
              onClick={() => setActiveTab("pelayanan")}
              className={`px-5 py-3 text-sm font-semibold border-b-2 ${
                activeTab === "pelayanan"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-blue-600"
              }`}
            >
              Pelayanan
            </button>
          </div>
          <button className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
            <RefreshCcw size={16} /> Refresh
          </button>
        </div>

        {/* Filter */}
        <div className="p-4 border-b flex flex-wrap gap-4 items-center">
          <div className="flex flex-col">
            <label className="text-gray-600 text-sm mb-1">Pilih Perihal</label>
            <select className="border rounded-lg p-2 text-sm min-w-[150px]">
              <option>Semua</option>
              <option>Keamanan</option>
              <option>Jaringan</option>
              <option>Perangkat Keras</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-gray-600 text-sm mb-1">Pilih Rating</label>
            <select className="border rounded-lg p-2 text-sm min-w-[150px]">
              <option>Semua</option>
              <option>⭐</option>
              <option>⭐⭐</option>
              <option>⭐⭐⭐</option>
              <option>⭐⭐⭐⭐</option>
              <option>⭐⭐⭐⭐⭐</option>
            </select>
          </div>
        </div>

        {/* Tabel */}
        <div className="p-4 overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="bg-blue-900 text-white">
                <th className="p-3">Pengirim</th>
                <th className="p-3">Perihal</th>
                <th className="p-3">Tanggal Masuk</th>
                <th className="p-3">Tanggal Selesai</th>
                <th className="p-3">Rating</th>
                <th className="p-3">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dataRating.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50 transition">
                  <td className="p-3 flex items-center gap-2">
                    <img src={item.foto} alt={item.nama} className="w-8 h-8 rounded-full object-cover" />
                    {item.nama}
                  </td>
                  <td className="p-3">{item.perihal}</td>
                  <td className="p-3">{item.masuk}</td>
                  <td className="p-3">{item.selesai}</td>
                  <td className="p-3">{renderStars(item.rating)}</td>
                  <td className="p-3 text-blue-600 cursor-pointer">
                    <Eye className="w-5 h-5" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center p-4 border-t text-sm text-gray-600">
          <p>Menampilkan data 1 sampai 10 dari 25 data</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 border rounded-lg hover:bg-gray-100">&lt;</button>
            <button className="px-3 py-1 border rounded-lg bg-blue-600 text-white">1</button>
            <button className="px-3 py-1 border rounded-lg hover:bg-gray-100">2</button>
            <button className="px-3 py-1 border rounded-lg hover:bg-gray-100">3</button>
            <button className="px-3 py-1 border rounded-lg hover:bg-gray-100">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}
