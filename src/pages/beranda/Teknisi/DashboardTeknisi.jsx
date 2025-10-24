import React, { useState } from "react";
import { FileText, RefreshCcw } from "lucide-react";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

export default function DashboardTeknisi() {
  const [activeTab, setActiveTab] = useState("pelaporan");

  const dataTiket = [
    { id: 1, pengirim: "Doni Ridho", perihal: "Perangkat Keras", awal: "18/09/2024", akhir: "20/02/2022", status: "Draft", foto: "/assets/Suika.jpg" },
    { id: 2, pengirim: "Sinta Wulandari", perihal: "Jaringan", awal: "18/09/2024", akhir: "20/02/2022", status: "Draft", foto: "/assets/shizuku.jpg" },
    { id: 3, pengirim: "Andi Pratama", perihal: "Sistem", awal: "18/09/2024", akhir: "20/02/2022", status: "Draft", foto: "/assets/Suika.jpg" },
    { id: 4, pengirim: "Lina Sari", perihal: "Aplikasi", awal: "18/09/2024", akhir: "20/02/2022", status: "Draft", foto: "/assets/shizuku.jpg" },
    { id: 5, pengirim: "Agus Wijaya", perihal: "Database", awal: "18/09/2024", akhir: "20/02/2022", status: "Diproses", foto: "/assets/Suika.jpg" },
    { id: 6, pengirim: "Budi Santoso", perihal: "Hardware", awal: "18/09/2024", akhir: "20/02/2022", status: "Diproses", foto: "/assets/shizuku.jpg" },
    { id: 7, pengirim: "Rina Oktavia", perihal: "Akses", awal: "18/09/2024", akhir: "20/02/2022", status: "Diproses", foto: "/assets/Suika.jpg" },
    { id: 8, pengirim: "Teguh Ramadhan", perihal: "Bug Software", awal: "18/09/2024", akhir: "20/02/2022", status: "Draft", foto: "/assets/shizuku.jpg" },
    { id: 9, pengirim: "Indah Puspita", perihal: "Server", awal: "18/09/2024", akhir: "20/02/2022", status: "Draft", foto: "/assets/Suika.jpg" },
    { id: 10, pengirim: "Fajar Nugraha", perihal: "Keamanan", awal: "18/09/2024", akhir: "20/02/2022", status: "Diproses", foto: "/assets/shizuku.jpg" },
  ];

  const statusColor = (status) => {
    switch (status) {
      case "Draft":
        return "bg-gray-200 text-gray-700";
      case "Diproses":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="space-y-6">
      {/* Judul */}
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

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
            <h2 className="text-3xl font-bold text-blue-900 mt-2">{item.value}</h2>
          </div>
        ))}
      </div>

      {/* Tab */}
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
        <div className="flex items-center justify-between border-b px-6">
          <div className="flex">
            {["pelaporan", "pelayanan"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-3 text-sm font-semibold border-b-2 ${
                  activeTab === tab
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-blue-600"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          <button className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
            <RefreshCcw size={16} /> Refresh
          </button>
        </div>

        {/* Filter */}
        <div className="p-4 border-b flex flex-wrap gap-4 items-center">
          {["Perihal", "Status", "Prioritas"].map((filter) => (
            <div key={filter} className="flex flex-col">
              <label className="text-gray-600 text-sm mb-1">Pilih {filter}</label>
              <select className="border rounded-lg p-2 text-sm min-w-[150px]">
                <option>Semua</option>
                {filter === "Status" ? (
                  <>
                    <option>Selesai</option>
                    <option>Progress</option>
                    <option>Draft</option>
                  </>
                ) : (
                  <>
                    <option>Rendah</option>
                    <option>Sedang</option>
                    <option>Tinggi</option>
                  </>
                )}
              </select>
            </div>
          ))}
        </div>

        {/* Tabel */}
        <div className="p-4 overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="bg-blue-900 text-white">
                <th className="p-3">Pengirim</th>
                <th className="p-3">Perihal</th>
                <th className="p-3">Awal Pengerjaan</th>
                <th className="p-3">Akhir Pengerjaan</th>
                <th className="p-3">Lampiran</th>
                <th className="p-3">Status</th>
                <th className="p-3">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dataTiket.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50 transition">
                  <td className="p-3 flex items-center gap-2">
                    <img src={item.foto} alt={item.pengirim} className="w-8 h-8 rounded-full object-cover" />
                    {item.pengirim}
                  </td>
                  <td className="p-3">{item.perihal}</td>
                  <td className="p-3">{item.awal}</td>
                  <td className="p-3">{item.akhir}</td>
                  <td className="p-3 text-blue-600 flex items-center gap-1 cursor-pointer">
                    <FileText className="w-4 h-4" />
                  </td>
                  <td className="p-3">
                    <span className={`px-3 py-1 rounded-lg text-xs font-semibold ${statusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="p-3 text-blue-600 cursor-pointer">
                    <PencilSquareIcon className="w-5 h-5" />
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
