import React, { useState } from "react";
import { RefreshCcw, Eye } from "lucide-react";

export default function RatingTeknisi() {
  const [activeTab, setActiveTab] = useState("pelaporan");

  // === Dummy data lengkap (ada IT / Non-IT & Fisik / Non-Fisik)
  const dataRating = [
    { id: 1, nama: "Doni Ridho", masuk: "18/09/2024", selesai: "18/09/2024", kategori: "Sistem Operasi", jenis: "IT", bentuk: "Non-Fisik", rating: 4, foto: "/assets/shizuku.jpg" },
    { id: 2, nama: "Rio Widoro", masuk: "18/09/2024", selesai: "18/09/2024", kategori: "Jaringan", jenis: "IT", bentuk: "Non-Fisik", rating: 3, foto: "/assets/Suika.jpg" },
    { id: 3, nama: "Lia Yustia", masuk: "17/09/2024", selesai: "17/09/2024", kategori: "Aplikasi", jenis: "Non-IT", bentuk: "Fisik", rating: 5, foto: "/assets/Bokuto.jpg" },
    { id: 4, nama: "Ridwan Yusuf", masuk: "17/09/2024", selesai: "17/09/2024", kategori: "Email", jenis: "IT", bentuk: "Fisik", rating: 4, foto: "/assets/shizuku.jpg" },
    { id: 5, nama: "Ella Meisya", masuk: "17/09/2024", selesai: "17/09/2024", kategori: "Aplikasi", jenis: "IT", bentuk: "Fisik", rating: 5, foto: "/assets/Suika.jpg" },
    { id: 6, nama: "Sri Wulandari", masuk: "16/09/2024", selesai: "16/09/2024", kategori: "Sistem Operasi", jenis: "IT", bentuk: "Fisik", rating: 5, foto: "/assets/Bokuto.jpg" },
    { id: 7, nama: "Supriatno", masuk: "16/09/2024", selesai: "16/09/2024", kategori: "Aplikasi", jenis: "Non-IT", bentuk: "Non-Fisik", rating: 4, foto: "/assets/shizuku.jpg" },
    { id: 8, nama: "Anya Rosalina", masuk: "16/09/2024", selesai: "16/09/2024", kategori: "Jaringan", jenis: "Non-IT", bentuk: "Non-Fisik", rating: 5, foto: "/assets/Suika.jpg" },
    { id: 9, nama: "Widya Karim", masuk: "15/09/2024", selesai: "15/09/2024", kategori: "Email", jenis: "Non-IT", bentuk: "Fisik", rating: 4, foto: "/assets/Bokuto.jpg" },
    { id: 10, nama: "Rudiono", masuk: "15/09/2024", selesai: "15/09/2024", kategori: "Sistem Operasi", jenis: "IT", bentuk: "Non-Fisik", rating: 5, foto: "/assets/shizuku.jpg" },
  ];

  const renderStars = (count) => (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < count ? "text-yellow-400" : "text-gray-300"}>
          ★
        </span>
      ))}
    </div>
  );

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-[#0F2C59]">Rating Kepuasan</h1>

      <div className="bg-white rounded-2xl shadow overflow-hidden">
        {/* === Tab Pelaporan / Pelayanan === */}
        <div className="border-b flex items-center justify-between px-6">
          <div className="flex">
            {["pelaporan", "pelayanan"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-3 text-sm font-semibold border-b-2 transition-all ${
                  activeTab === tab
                    ? "border-[#0F2C59] text-[#0F2C59]"
                    : "border-transparent text-gray-500 hover:text-[#0F2C59]"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          <button className="flex items-center gap-2 bg-[#0F2C59] hover:bg-[#15397A] text-white px-4 py-2 rounded-lg text-sm font-medium transition">
            <RefreshCcw size={16} /> Refresh
          </button>
        </div>

        {/* === Filter 2x2 Grid === */}
        <div className="p-6 bg-gray-50 border-b grid grid-cols-2 gap-x-12 gap-y-4">
          <div className="flex items-center justify-between">
            <label className="w-1/3 text-sm font-semibold text-gray-700">Kategori</label>
            <select className="w-2/3 border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#0F2C59]">
              <option>Semua</option>
              <option>Jaringan</option>
              <option>Aplikasi</option>
              <option>Email</option>
              <option>Sistem Operasi</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <label className="w-1/3 text-sm font-semibold text-gray-700">Jenis</label>
            <select className="w-2/3 border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#0F2C59]">
              <option>Semua</option>
              <option>IT</option>
              <option>Non-IT</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <label className="w-1/3 text-sm font-semibold text-gray-700">Bentuk</label>
            <select className="w-2/3 border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#0F2C59]">
              <option>Semua</option>
              <option>Fisik</option>
              <option>Non-Fisik</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <label className="w-1/3 text-sm font-semibold text-gray-700">Rating</label>
            <select className="w-2/3 border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#0F2C59]">
              <option>PSemua</option>
              <option>⭐</option>
              <option>⭐⭐</option>
              <option>⭐⭐⭐</option>
              <option>⭐⭐⭐⭐</option>
              <option>⭐⭐⭐⭐⭐</option>
            </select>
          </div>
        </div>

        {/* === Tabel Data === */}
        <div className="p-4 overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="bg-[#0F2C59] text-white">
                <th className="p-3">Pengirim</th>
                <th className="p-3">Masuk</th>
                <th className="p-3">Selesai</th>
                <th className="p-3">Kategori</th>
                <th className="p-3">Jenis</th>
                <th className="p-3">Bentuk</th>
                <th className="p-3">Rating</th>
                <th className="p-3 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dataRating.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50 transition">
                  <td className="p-3 flex items-center gap-2">
                    <img src={item.foto} alt={item.nama} className="w-8 h-8 rounded-full object-cover" />
                    {item.nama}
                  </td>
                  <td className="p-3">{item.masuk}</td>
                  <td className="p-3">{item.selesai}</td>
                  <td className="p-3">{item.kategori}</td>
                  <td className="p-3">{item.jenis}</td>
                  <td className="p-3">{item.bentuk}</td>
                  <td className="p-3">{renderStars(item.rating)}</td>
                  <td className="p-3 text-center text-[#0F2C59] hover:text-[#15397A] cursor-pointer">
                    <Eye size={18} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* === Pagination === */}
        <div className="flex justify-between items-center p-4 border-t text-sm text-gray-600">
          <p>Menampilkan data 1 sampai 10 dari 33 data</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 border rounded-lg hover:bg-gray-100">&lt;</button>
            <button className="px-3 py-1 border rounded-lg bg-[#0F2C59] text-white">1</button>
            <button className="px-3 py-1 border rounded-lg hover:bg-gray-100">2</button>
            <button className="px-3 py-1 border rounded-lg hover:bg-gray-100">3</button>
            <button className="px-3 py-1 border rounded-lg hover:bg-gray-100">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}
