import React, { useState } from "react";
import { FileText, RefreshCcw} from "lucide-react";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

export default function PenugasanSeksi() {
  const [tab, setTab] = useState("pelaporan");

  const data = [
    {
      nama: "Doni Ridho",
      perihal: "Perangkat Keras",
      tanggal: "18/09/2024",
      prioritas: "Rendah",
      foto: "/assets/Suika.jpg",
    },
    {
      nama: "Rio Widoro",
      perihal: "Jaringan & Konektivitas",
      tanggal: "18/09/2024",
      prioritas: "Tinggi",
      foto: "/assets/shizuku.jpg",
    },
    {
      nama: "Lia Yustia",
      perihal: "Perangkat Keras",
      tanggal: "17/09/2024",
      prioritas: "Rendah",
      foto: "/assets/Suika.jpg",
    },
    {
      nama: "Ridwan Yusuf",
      perihal: "Email & Komunikasi",
      tanggal: "17/09/2024",
      prioritas: "Rendah",
      foto: "/assets/shizuku.jpg",
    },
    {
      nama: "Ella Meisya",
      perihal: "Jaringan & Konektivitas",
      tanggal: "17/09/2024",
      prioritas: "Tinggi",
      foto: "/assets/Suika.jpg",
    },
    {
      nama: "Sri Wulandari",
      perihal: "Keamanan",
      tanggal: "16/09/2024",
      prioritas: "Rendah",
      foto: "/assets/shizuku.jpg",
    },
    {
      nama: "Supriatno",
      perihal: "Email & Komunikasi",
      tanggal: "16/09/2024",
      prioritas: "Rendah",
      foto: "/assets/Suika.jpg",
    },
    {
      nama: "Anya Rosalina",
      perihal: "Email & Komunikasi",
      tanggal: "16/09/2024",
      prioritas: "Rendah",
      foto: "/assets/shizuku.jpg",
    },
    {
      nama: "Widya Karim",
      perihal: "Keamanan",
      tanggal: "16/09/2024",
      prioritas: "Sedang",
      foto: "/assets/Suika.jpg",
    },
    {
      nama: "Rudiono",
      perihal: "Perangkat Keras",
      tanggal: "15/09/2024",
      prioritas: "Rendah",
      foto: "/assets/shizuku.jpg",
    },
  ];

  // === Warna badge prioritas ===
  const getPriorityColor = (level) => {
    switch (level) {
      case "Tinggi":
        return "bg-red-500";
      case "Sedang":
        return "bg-yellow-400";
      case "Rendah":
        return "bg-green-500";
      default:
        return "bg-gray-400";
    }
  };

  // === Jika gambar error, pakai default ===
  const handleImageError = (e) => {
    e.target.src = "/assets/default.jpg"; // pastikan kamu punya default.jpg di /public/assets/
  };
  
  return (
    <div className="bg-white shadow-lg rounded-2xl p-8 mt-4">
      {/* Header + Tombol Refresh */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Penugasan</h1>
        <button className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
          <RefreshCcw size={16} />
          Refresh
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 border-b border-gray-300 mb-6">
        <button
          onClick={() => setTab("pelaporan")}
          className={`pb-2 font-medium ${
            tab === "pelaporan"
              ? "text-blue-700 border-b-2 border-blue-700"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Pelaporan
        </button>
        <button
          onClick={() => setTab("pelayanan")}
          className={`pb-2 font-medium ${
            tab === "pelayanan"
              ? "text-blue-700 border-b-2 border-blue-700"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Pelayanan
        </button>
      </div>

      {/* Filter */}
      <div className="bg-gray-50 rounded-xl p-4 mb-6 shadow-sm">
        <div className="flex items-center gap-6">
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Perihal</label>
            <select className="border border-gray-300 rounded-md p-2 text-sm">
              <option>Semua</option>
              <option>Perangkat Keras</option>
              <option>Keamanan</option>
              <option>Jaringan & Konektivitas</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Prioritas</label>
            <select className="border border-gray-300 rounded-md p-2 text-sm">
                <option>Semua</option>
                <option>Rendah</option>
                <option>Sedang</option>
                <option>Tinggi</option>
            </select>
          </div>
        </div>
      </div>

      {/* === Tabel === */}
      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-y-2">
          <thead>
            <tr className="bg-blue-900 text-white text-sm">
              <th className="py-3 px-4 text-left rounded-l-lg">Pengirim</th>
              <th className="py-3 px-4 text-left">Perihal</th>
              <th className="py-3 px-4 text-left">Tanggal Masuk</th>
              <th className="py-3 px-4 text-left">Lampiran</th>
              <th className="py-3 px-4 text-left">Prioritas</th>
              <th className="py-3 px-4 text-left rounded-r-lg">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr
                key={i}
                className="bg-gray-50 hover:bg-gray-100 transition rounded-lg"
              >
                <td className="py-3 px-4 flex items-center gap-3">
                  <img
                    src={item.foto}
                    alt={item.nama}
                    onError={handleImageError}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-gray-800 text-sm font-medium">
                    {item.nama}
                  </span>
                </td>
                <td className="py-3 px-4 text-sm text-gray-700">
                  {item.perihal}
                </td>
                <td className="py-3 px-4 text-sm text-gray-700">
                  {item.tanggal}
                </td>
                <td className="py-3 px-4">
                  <FileText
                    size={18}
                    className="text-blue-600 cursor-pointer hover:text-blue-800 transition"
                  />
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`text-white text-xs px-3 py-1 rounded-full font-medium ${getPriorityColor(
                      item.prioritas
                    )}`}
                  >
                    {item.prioritas}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <PencilSquareIcon
                    size={16}
                    className="w-5 h-5 text-blue-600 hover:text-blue-600 cursor-pointer transition"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
        <p>Menampilkan 1 - 10 dari 50 data</p>
        <div className="flex items-center gap-2">
          <button className="px-2 py-1 rounded-md hover:bg-gray-200">&lt;</button>
          <button className="px-3 py-1 bg-blue-700 text-white rounded-md">1</button>
          <button className="px-2 py-1 rounded-md hover:bg-gray-200">2</button>
          <button className="px-2 py-1 rounded-md hover:bg-gray-200">3</button>
          <button className="px-2 py-1 rounded-md hover:bg-gray-200">&gt;</button>
        </div>
      </div>
    </div>
  );
}
