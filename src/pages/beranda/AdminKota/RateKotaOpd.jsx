import React, { useState } from "react";
import { Star, Eye, RefreshCcw } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";

export default function RateKotaOpd() {
  const [activeTab, setActiveTab] = useState("Pelaporan");
  const { opdName } = useParams(); // ambil nama dinas dari URL
  const navigate = useNavigate();

  // === Dummy Data ===
  const data = [
    {
      nama: "Budi Winarto",
      foto: "/assets/Bokuto.jpg",
      perihal: "Jaringan & Konektivitas",
      masuk: "02/09/2024",
      selesai: "10/09/2024",
      rating: 5,
    },
    {
      nama: "Eliy Serlia",
      foto: "/assets/Suika.jpg",
      perihal: "Jaringan & Konektivitas",
      masuk: "02/09/2024",
      selesai: "10/09/2024",
      rating: 4,
    },
    {
      nama: "Vina Brita",
      foto: "/assets/shizuku.jpg",
      perihal: "Perangkat Keras",
      masuk: "02/09/2024",
      selesai: "10/09/2024",
      rating: 5,
    },
    {
      nama: "Faradia April",
      foto: "/assets/Bokuto.jpg",
      perihal: "Printer & Peripherals",
      masuk: "02/09/2024",
      selesai: "10/09/2024",
      rating: 4,
    },
    {
      nama: "Wawan Mulyto",
      foto: "/assets/Suika.jpg",
      perihal: "Perangkat Keras",
      masuk: "02/09/2024",
      selesai: "10/09/2024",
      rating: 5,
    },
    {
      nama: "Galang Wadi",
      foto: "/assets/shizuku.jpg",
      perihal: "Keamanan",
      masuk: "01/09/2024",
      selesai: "09/09/2024",
      rating: 5,
    },
    {
      nama: "Joko Erwan",
      foto: "/assets/Bokuto.jpg",
      perihal: "Email & Komunikasi",
      masuk: "31/08/2024",
      selesai: "07/09/2024",
      rating: 4,
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* === Judul Halaman === */}
      <h1 className="text-3xl font-bold text-[#0F2C59]">Rating Kepuasan</h1>

      {/* === Monitoring OPD Dinamis === */}
      <div className="flex items-center gap-3">
        <p className="text-sm font-medium text-gray-700">Monitoring OPD</p>
        <button className="bg-[#0F2C59] text-white text-sm font-medium px-3 py-1.5 rounded-md">
          {decodeURIComponent(opdName || "Dinas Pendidikan")}
        </button>
      </div>

      {/* === Tabs Pelaporan/Pelayanan === */}
      <div className="flex border-b border-gray-300">
        {["Pelaporan", "Pelayanan"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-semibold transition-all ${
              activeTab === tab
                ? "text-[#0F2C59] border-b-4 border-[#0F2C59]"
                : "text-gray-400 hover:text-[#0F2C59]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* === Filter Section === */}
      <div className="bg-white shadow rounded-xl p-4 space-y-3">
        <div className="flex justify-between items-center">
          <h2 className="text-sm font-semibold text-gray-700">Filter Pencarian</h2>
          <button className="flex items-center gap-2 bg-[#0F2C59] text-white px-3 py-1.5 rounded-lg text-sm hover:bg-[#15397A]">
            <RefreshCcw size={14} />
            Refresh
          </button>
        </div>

        <div className="flex gap-3">
          <select className="border border-gray-300 rounded-lg p-2 text-sm w-1/2">
            <option>Semua</option>
            <option>Jaringan & Konektivitas</option>
            <option>Perangkat Keras</option>
            <option>Email & Komunikasi</option>
          </select>

          <select className="border border-gray-300 rounded-lg p-2 text-sm w-1/2">
            <option>Semua</option>
            <option>⭐⭐⭐⭐⭐</option>
            <option>⭐⭐⭐⭐</option>
            <option>⭐⭐⭐</option>
            <option>⭐⭐</option>
            <option>⭐</option>
          </select>
        </div>
      </div>

      {/* === Tabel Rating === */}
      <div className="bg-white shadow rounded-2xl overflow-hidden">
        <table className="w-full border-collapse text-sm">
          <thead className="bg-[#0F2C59] text-white">
            <tr>
              {[
                "Pengirim",
                "Perihal",
                "Tanggal Masuk",
                "Tanggal Selesai",
                "Rating",
                "Aksi",
              ].map((header) => (
                <th key={header} className="px-4 py-3 text-left font-semibold">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i} className="border-b hover:bg-gray-50 transition-all">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.foto}
                      alt={item.nama}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="text-gray-800 font-medium">{item.nama}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-gray-700">{item.perihal}</td>
                <td className="px-4 py-3 text-gray-700">{item.masuk}</td>
                <td className="px-4 py-3 text-gray-700">{item.selesai}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, idx) => (
                      <Star
                        key={idx}
                        size={16}
                        className={`${
                          idx < item.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <button className="text-[#0F2C59] hover:text-[#15397A]">
                    <Eye size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* === Tombol Kembali & Pagination === */}
        <div className="flex justify-between items-center p-4 border-t text-sm text-gray-600">
          <button
            onClick={() => navigate("/RateKota")}
            className="px-5 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-medium transition-all"
          >
            Kembali
          </button>

          <div className="flex items-center gap-6">
            <p>Menampilkan 1 - 10 dari 40 data</p>
            <div className="flex gap-2">
              <button className="px-3 py-1 border rounded-lg hover:bg-gray-100">
                &lt;
              </button>
              <button className="px-3 py-1 border rounded-lg bg-[#0F2C59] text-white">
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
    </div>
  );
}
