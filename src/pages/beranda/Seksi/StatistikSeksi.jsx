import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";

export default function StatistikSeksi() {
  const [activeTab, setActiveTab] = useState("Pelaporan");
  const [bulanIndex, setBulanIndex] = useState(7); // 7 = Agustus

  const bulanList = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];

  const data = [
    { name: "Perangkat Keras", value: 20, color: "#5A9CF3" },
    { name: "Perangkat Lunak & Aplikasi", value: 15, color: "#5AD8A1" },
    { name: "Jaringan & Konektivitas", value: 15, color: "#F9C74F" },
    { name: "Email & Komunikasi", value: 25, color: "#F9844A" },
    { name: "Keamanan", value: 40, color: "#D056E5" },
    { name: "Permasalahan Lainnya", value: 5, color: "#9D9D9D" },
  ];

  // Fungsi navigasi bulan
  const gantiBulan = (arah) => {
    setBulanIndex((prev) => {
      if (arah === "kiri") return prev === 0 ? 11 : prev - 1;
      else return prev === 11 ? 0 : prev + 1;
    });
  };

  // Fungsi label persentase
  const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={12}
        fontWeight="600"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] py-8 px-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-[#0B2653] mb-6">Statistik</h1>

        {/* TAB */}
        <div className="flex border-b mb-4">
          {["Pelaporan", "Pelayanan"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`mr-4 pb-2 px-2 font-medium ${
                activeTab === tab
                  ? "text-[#0B2653] border-b-2 border-[#0B2653]"
                  : "text-gray-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* PILIHAN KATEGORI */}
        <div className="flex gap-3 mb-6">
          <button className="bg-[#0B2653] text-white px-4 py-1 rounded-lg shadow">
            Kategori Laporan
          </button>
          <button className="bg-gray-100 px-4 py-1 rounded-lg">
            Level Prioritas
          </button>
          <button className="bg-gray-100 px-4 py-1 rounded-lg">
            Tiket Tahunan
          </button>
        </div>

        {/* ISI CHART + TABEL */}
        <div className="bg-gray-50 rounded-xl p-6 flex justify-between items-center">
          {/* CHART */}
          <div className="w-1/2 flex flex-col items-center">
            <h2 className="text-sm text-gray-600 mb-2">Chart Laporan</h2>

            <div className="flex items-center gap-4 mb-4">
              <button
                onClick={() => gantiBulan("kiri")}
                className="p-2 bg-[#0B2653] text-white rounded-full hover:bg-[#15397A]"
              >
                <ChevronLeft size={16} />
              </button>
              <span className="font-semibold text-[#0B2653]">
                {bulanList[bulanIndex]}
              </span>
              <button
                onClick={() => gantiBulan("kanan")}
                className="p-2 bg-[#0B2653] text-white rounded-full hover:bg-[#15397A]"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            {/* DONUT CHART */}
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={150}
                  paddingAngle={4}
                  labelLine={false}
                  label={renderCustomizedLabel}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* TABEL */}
          <div className="w-1/2">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-semibold text-gray-700">
                Statistik laporan berdasarkan kategori laporan
              </h3>
              <button className="flex items-center gap-2 bg-[#0B2653] text-white px-3 py-1 rounded-md text-sm hover:bg-[#15397A]">
                <Download size={14} />
                Unduh .xls
              </button>
            </div>

            <table className="w-full text-sm border border-gray-300 rounded-md overflow-hidden">
              <thead>
                <tr className="bg-gray-200 text-gray-800">
                  <th className="p-2 text-left">Kategori Laporan</th>
                  <th className="p-2 text-right">Jumlah</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.name} className="border-t">
                    <td className="p-2">{item.name}</td>
                    <td className="p-2 text-right">{item.value}</td>
                  </tr>
                ))}
                <tr className="font-semibold border-t bg-gray-100">
                  <td className="p-2">Total Laporan</td>
                  <td className="p-2 text-right">
                    {data.reduce((a, b) => a + b.value, 0)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
