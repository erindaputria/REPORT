import React, { useState } from "react";
import { FileText, RefreshCcw } from "lucide-react";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

export default function DashboardTeknisi() {
  const [activeTab, setActiveTab] = useState("pelaporan");
  const navigate = useNavigate();

  const dataTiket = [
    { id: 1, pengirim: "Doni Ridho", kategori: "Sistem Operasi", jenis: "IT", bentuk: "Non-Fisik", status: "Diproses", foto: "/assets/shizuku.jpg" },
    { id: 2, pengirim: "Rio Widoro", kategori: "Jaringan", jenis: "IT", bentuk: "Non-Fisik", status: "Draft", foto: "/assets/Suika.jpg" },
    { id: 3, pengirim: "Lia Yustia", kategori: "Aplikasi", jenis: "Non-IT", bentuk: "Fisik", status: "Diproses", foto: "/assets/Bokuto.jpg" },
    { id: 4, pengirim: "Ridwan Yusuf", kategori: "Email", jenis: "IT", bentuk: "Fisik", status: "Draft", foto: "/assets/shizuku.jpg" },
    { id: 5, pengirim: "Ella Meisya", kategori: "Aplikasi", jenis: "IT", bentuk: "Fisik", status: "Draft", foto: "/assets/Suika.jpg" },
    { id: 6, pengirim: "Sri Wulandari", kategori: "Sistem Operasi", jenis: "IT", bentuk: "Fisik", status: "Diproses", foto: "/assets/Bokuto.jpg" },
    { id: 7, pengirim: "Supriatno", kategori: "Aplikasi", jenis: "Non-IT", bentuk: "Non-Fisik", status: "Draft", foto: "/assets/Suika.jpg" },
    { id: 8, pengirim: "Anya Rosalina", kategori: "Jaringan", jenis: "Non-IT", bentuk: "Non-Fisik", status: "Diproses", foto: "/assets/shizuku.jpg" },
    { id: 9, pengirim: "Widya Karim", kategori: "Email", jenis: "Non-IT", bentuk: "Fisik", status: "Draft", foto: "/assets/Bokuto.jpg" },
    { id: 10, pengirim: "Rudiono", kategori: "Sistem Operasi", jenis: "IT", bentuk: "Non-Fisik", status: "Draft", foto: "/assets/Suika.jpg" },
  ];

  const statusColor = (status) => {
    switch (status) {
      case "Diproses":
        return "bg-yellow-100 text-yellow-700";
      case "Draft":
        return "bg-gray-200 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const handleEdit = () => {
    navigate("/updateprogresteknisi");
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-[#0F2C59]">Dashboard</h1>

      {/* Kartu Ringkasan */}
      <div className="grid grid-cols-4 gap-5">
        {[
          { title: "Tiket Masuk", value: 15 },
          { title: "Proses", value: 10 },
          { title: "Deadline", value: 1 },
          { title: "Reopen", value: 0 },
        ].map((item, idx) => (
          <div key={idx} className="bg-white shadow rounded-xl p-4 text-center">
            <p className="text-gray-600 font-medium">{item.title}</p>
            <h2 className="text-3xl font-bold text-[#0F2C59] mt-2">{item.value}</h2>
          </div>
        ))}
      </div>

      {/* Tab dan Filter */}
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
        <div className="flex items-center justify-between border-b px-6">
          <div className="flex">
            {["pelaporan", "pelayanan"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-3 text-sm font-semibold border-b-2 ${
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

        {/* Filter Pencarian */}
        <div className="bg-gray-50 p-6 border-b">
          <h3 className="font-semibold text-gray-800 mb-4 text-lg">Filter Pencarian</h3>

          <div className="grid grid-cols-2 gap-x-12 gap-y-6">
            {/* Baris 1 kolom 1 */}
            <div className="flex items-center justify-between">
              <label className="font-semibold text-gray-700 w-1/4">Kategori</label>
              <select className="w-3/4 border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-[#0F2C59] focus:outline-none">
                <option>Semua</option>
                <option>Sistem Operasi</option>
                <option>Aplikasi</option>
                <option>Jaringan</option>
              </select>
            </div>

            {/* Baris 1 kolom 2 */}
            <div className="flex items-center justify-between">
              <label className="font-semibold text-gray-700 w-1/4">Jenis</label>
              <select className="w-3/4 border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-[#0F2C59] focus:outline-none">
                <option>Semua</option>
                <option>IT</option>
                <option>Non-IT</option>
              </select>
            </div>

            {/* Baris 2 kolom 1 */}
            <div className="flex items-center justify-between">
              <label className="font-semibold text-gray-700 w-1/4">Bentuk</label>
              <select className="w-3/4 border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-[#0F2C59] focus:outline-none">
                <option>Semua</option>
                <option>Fisik</option>
                <option>Non-Fisik</option>
              </select>
            </div>

            {/* Baris 2 kolom 2 */}
            <div className="flex items-center justify-between">
              <label className="font-semibold text-gray-700 w-1/4">Status</label>
              <select className="w-3/4 border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-[#0F2C59] focus:outline-none">
                <option>Semua</option>
                <option>Draft</option>
                <option>Diproses</option>
              </select>
            </div>
          </div>
        </div>

        {/* Tabel Data */}
        <div className="p-4 overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-[#0F2C59] text-white">
                <th className="p-3">Pengirim</th>
                <th className="p-3">Tanggal Masuk</th>
                <th className="p-3">Kategori</th>
                <th className="p-3">Jenis</th>
                <th className="p-3">Bentuk</th>
                <th className="p-3 text-center">Lampiran</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dataTiket.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50 transition">
                  <td className="p-3 flex items-center gap-2">
                    <img src={item.foto} alt={item.pengirim} className="w-8 h-8 rounded-full object-cover" />
                    {item.pengirim}
                  </td>
                  <td className="p-3">18/09/2024</td>
                  <td className="p-3">{item.kategori}</td>
                  <td className="p-3">{item.jenis}</td>
                  <td className="p-3">{item.bentuk}</td>
                  <td className="p-3 text-center text-[#0F2C59]">
                    <FileText className="inline w-5 h-5" />
                  </td>
                  <td className="p-3">
                    <span className={`px-3 py-1 rounded-lg text-xs font-semibold ${statusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="p-3 text-center">
                    <button onClick={handleEdit} className="text-[#0F2C59] hover:text-[#15397A] transition">
                      <PencilSquareIcon className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center p-4 border-t text-sm text-gray-600">
          <p>Menampilkan data 1 sampai 10 dari 15 data</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 border rounded-lg hover:bg-gray-100">&lt;</button>
            <button className="px-3 py-1 border rounded-lg bg-[#0F2C59] text-white">1</button>
            <button className="px-3 py-1 border rounded-lg hover:bg-gray-100">2</button>
            <button className="px-3 py-1 border rounded-lg hover:bg-gray-100">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}
