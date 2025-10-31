import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { ChevronLeft, ChevronRight, RefreshCcw } from "lucide-react";

export default function DashboardAdminKota() {
  const [bulanIndex, setBulanIndex] = useState(7); // 7 = Agustus
  const bulanList = [
    "Januari", "Februari", "Maret", "April",
    "Mei", "Juni", "Juli", "Agustus",
    "September", "Oktober", "November", "Desember"
  ];

  const gantiBulan = (arah) => {
    setBulanIndex((prev) => {
      if (arah === "kiri") return prev === 0 ? 11 : prev - 1;
      else return prev === 11 ? 0 : prev + 1;
    });
  };

  const [chartTab, setChartTab] = useState("kategori");
  const [ticketTab, setTicketTab] = useState("tahunan");

  // === Dummy Data Donut ===
  const dataKategori = [
    { name: "Perangkat Keras", value: 20, color: "#5A9CF3" },
    { name: "Perangkat Lunak", value: 15, color: "#5AD8A1" },
    { name: "Jaringan & Konektivitas", value: 10, color: "#F9C74F" },
    { name: "Email & Komunikasi", value: 25, color: "#F9844A" },
    { name: "Keamanan", value: 30, color: "#D056E5" },
  ];

  const dataPrioritas = [
    { name: "Tinggi", value: 35, color: "#D32F2F" },
    { name: "Sedang", value: 45, color: "#FFB300" },
    { name: "Rendah", value: 20, color: "#388E3C" },
  ];

  // === Dummy Data Line ===
  const dataTahunan = [
    { name: "Jan", value: 110 },
    { name: "Feb", value: 90 },
    { name: "Mar", value: 130 },
    { name: "Apr", value: 120 },
    { name: "Mei", value: 100 },
    { name: "Jun", value: 160 },
    { name: "Jul", value: 145 },
    { name: "Agu", value: 135 },
    { name: "Sep", value: 128 },
    { name: "Okt", value: 120 },
    { name: "Nov", value: 118 },
    { name: "Des", value: 110 },
  ];

  const dataBulanan = [
    { name: "1", value: 30 },
    { name: "5", value: 45 },
    { name: "10", value: 60 },
    { name: "15", value: 55 },
    { name: "20", value: 80 },
    { name: "25", value: 75 },
    { name: "30", value: 90 },
  ];

  const dataTabel = [
    { nama: "Agung Winarto", perihal: "Email & Komunikasi", tanggal: "22/09/2024", sla: "Tepat waktu", prioritas: "Tinggi", status: "Selesai", foto: "/assets/shizuku.jpg" },
    { nama: "Fadil Ibrahim", perihal: "Perangkat Lunak", tanggal: "21/09/2024", sla: "Terlambat", prioritas: "Sedang", status: "Proses", foto: "/assets/Suika.jpg" },
    { nama: "Rama Putra", perihal: "Email", tanggal: "18/09/2024", sla: "Peringatan SLA", prioritas: "Tinggi", status: "Diproses", foto: "/assets/Bokuto.jpg" },
  { nama: "Dewi Anggraini", perihal: "Komunikasi", tanggal: "15/09/2024", sla: "Sesuai SLA", prioritas: "Sedang", status: "Selesai", foto: "/assets/Bokuto.jpg" },
  { nama: "Budi Santoso", perihal: "Perangkat Lunak", tanggal: "21/09/2024", sla: "Peringatan SLA", prioritas: "Tinggi", status: "Diproses", foto: "/assets/shizuku.jpg" },
  { nama: "Ayu Lestari", perihal: "Keamanan", tanggal: "19/09/2024", sla: "Sesuai SLA", prioritas: "Rendah", status: "Selesai", foto: "/assets/Suika.jpg" },
  { nama: "Dimas Adi", perihal: "Email", tanggal: "17/09/2024", sla: "Sesuai SLA", prioritas: "Sedang", status: "Diproses", foto: "/assets/Suika.jpg" },
  { nama: "Siti Marlina", perihal: "Komunikasi", tanggal: "22/09/2024", sla: "Peringatan SLA", prioritas: "Tinggi", status: "Selesai", foto: "/assets/shizuku.jpg" },
  { nama: "Andre Wijaya", perihal: "Perangkat Lunak", tanggal: "16/09/2024", sla: "Sesuai SLA", prioritas: "Rendah", status: "Selesai", foto: "/assets/Suika.jpg" },
  { nama: "Rani Oktavia", perihal: "Keamanan", tanggal: "23/09/2024", sla: "Peringatan SLA", prioritas: "Sedang", status: "Diproses", foto: "/assets/Bokuto.jpg" },

  ];

  const badgeColor = (status) => {
    switch (status) {
      case "Selesai": return "bg-green-100 text-green-700";
      case "Proses": return "bg-yellow-100 text-yellow-700";
      case "Tertunda": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  // === Label Persentase di Dalam Donut ===
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
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

  // === Pilih data donut berdasarkan tab ===
  const currentPieData = chartTab === "kategori" ? dataKategori : dataPrioritas;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

      {/* === GRID 2 KOLOM === */}
      <div className="grid grid-cols-2 gap-6">

        {/* === Donut Chart === */}
        <div className="bg-white shadow rounded-2xl p-6">
          {/* Tab Button */}
          <div className="flex gap-3 mb-4">
            <button
              onClick={() => setChartTab("kategori")}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                chartTab === "kategori"
                  ? "bg-[#0F2C59] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Kategori Laporan
            </button>
            <button
              onClick={() => setChartTab("prioritas")}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                chartTab === "prioritas"
                  ? "bg-[#0F2C59] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Level Prioritas
            </button>
          </div>

          {/* Chart Box */}
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold text-gray-800 text-lg">Chart Laporan</h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => gantiBulan("kiri")}
                  className="p-1 bg-[#0F2C59] text-white rounded-full hover:bg-[#15397A]"
                >
                  <ChevronLeft size={16} />
                </button>
                <span className="bg-[#0F2C59] text-white px-4 py-1 rounded-full text-sm font-medium">
                  {bulanList[bulanIndex]} 2025
                </span>
                <button
                  onClick={() => gantiBulan("kanan")}
                  className="p-1 bg-[#0F2C59] text-white rounded-full hover:bg-[#15397A]"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Donut Chart */}
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie
                  data={currentPieData}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={3}
                  labelLine={false}
                  label={renderCustomizedLabel}
                >
                  {currentPieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="#fff" strokeWidth={2} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>

            <p className="text-sm text-blue-600 cursor-pointer mt-2">
              Cek selengkapnya →
            </p>
          </div>
        </div>

        {/* === Line Chart === */}
        <div className="bg-white shadow rounded-2xl p-6">
          <div className="flex gap-3 mb-4">
            <button
              onClick={() => setTicketTab("tahunan")}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                ticketTab === "tahunan"
                  ? "bg-[#0F2C59] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Tiket Tahunan
            </button>
            <button
              onClick={() => setTicketTab("bulanan")}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                ticketTab === "bulanan"
                  ? "bg-[#0F2C59] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Tiket Bulanan
            </button>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={ticketTab === "tahunan" ? dataTahunan : dataBulanan}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} width={30} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                  }}
                  labelStyle={{ fontWeight: "600", color: "#0F2C59" }}
                  formatter={(value) => [`${value} tiket`, "Jumlah"]}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#6B63FF"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>

            <p className="text-sm text-blue-600 cursor-pointer mt-2">
              Cek selengkapnya →
            </p>
          </div>
        </div>
      </div>

      {/* === MONITORING OPD === */}
<div className="bg-white shadow rounded-2xl p-6">
  <div className="flex justify-between items-center mb-4">
    <h2 className="font-semibold text-gray-800 text-lg">Monitoring OPD</h2>

    {/* Dropdown Instansi */}
    <div className="flex items-center gap-3">
      <button className="flex items-center gap-2 bg-[#0F2C59] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#15397A] transition">
        <RefreshCcw size={16} /> Refresh
      </button>
    </div>
  </div>

  {/* Tab Pelaporan / Pelayanan */}
  <div className="flex gap-6 mb-3 border-b">
    <button className="pb-2 text-sm font-medium border-b-2 border-[#0F2C59] text-[#0F2C59]">
      Pelaporan
    </button>
    <button className="pb-2 text-sm font-medium text-gray-500 hover:text-[#0F2C59]">
      Pelayanan
    </button>
  </div>

  {/* === FILTER PENCARIAN === */}
  <div className="bg-gray-50 p-4 rounded-xl shadow-sm mb-6">
  <h3 className="font-semibold text-gray-700 mb-3">Filter pencarian</h3>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {/* Kolom 1 */}
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1">
        Perihal
      </label>
      <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option>Semua</option>
        <option>Jaringan</option>
        <option>Perangkat Lunak</option>
        <option>Keamanan</option>
      </select>
    </div>

    {/* Kolom 2 */}
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1">
        SLA
      </label>
      <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option>Semua</option>
        <option>Sesuai SLA</option>
        <option>Peringatan SLA</option>
      </select>
    </div>

    {/* Kolom 3 */}
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1">
        Prioritas
      </label>
      <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option>Semua</option>
        <option>Tinggi</option>
        <option>Sedang</option>
        <option>Rendah</option>
      </select>
    </div>

    {/* Kolom 4 */}
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1">
        Status
      </label>
      <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option>Semua</option>
        <option>Diproses</option>
        <option>Selesai</option>
        <option>Tertunda</option>
      </select>
    </div>
  </div>
</div>


  {/* === TABEL DATA === */}
  <div className="overflow-x-auto">
    <table className="w-full text-sm text-left border-collapse">
      <thead>
        <tr className="bg-[#0F2C59] text-white">
          <th className="p-3 font-semibold">Teknisi</th>
          <th className="p-3 font-semibold">Perihal</th>
          <th className="p-3 font-semibold">Tenggat</th>
          <th className="p-3 font-semibold">SLA</th>
          <th className="p-3 font-semibold">Prioritas</th>
          <th className="p-3 font-semibold">Status</th>
          <th className="p-3 font-semibold text-center">Aksi</th>
        </tr>
      </thead>
      <tbody>
        {dataTabel.map((item, index) => (
          <tr key={index} className="border-b hover:bg-gray-50">
            <td className="p-3 flex items-center gap-2">
              <img
                src={item.foto}
                alt={item.nama}
                className="w-8 h-8 rounded-full object-cover"
              />
              {item.nama}
            </td>
            <td className="p-3">{item.perihal}</td>
            <td className="p-3">{item.tanggal}</td>
            <td
              className={`p-3 font-semibold ${
                item.sla === "Terlambat" ? "text-red-600" : "text-green-600"
              }`}
            >
              {item.sla === "Terlambat" ? "Peringatan SLA" : "Sesuai SLA"}
            </td>
            <td className="p-3">
              <span
                className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                  item.prioritas === "Tinggi"
                    ? "bg-red-100 text-red-700"
                    : item.prioritas === "Sedang"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {item.prioritas}
              </span>
            </td>
            <td className="p-3">
              <span
                className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                  item.status === "Selesai"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {item.status}
              </span>
            </td>
            <td className="p-3 text-center">
              <button className="text-[#0F2C59] hover:text-blue-700 transition">
                👁️
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  {/* === PAGINATION SECTION === */}
<div className="flex items-center justify-between mt-4 text-sm text-gray-600">
  {/* Info jumlah data */}
  <p>Menampilkan data 1 sampai 10 dari 15 data</p>

  {/* Pagination Button */}
  <div className="flex items-center gap-2">
    <button className="p-1 rounded-full hover:bg-gray-200 transition">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <button className="px-2 py-1 bg-[#0F2C59] text-white rounded-md text-xs font-semibold">
      1
    </button>
    <button className="text-gray-600 text-xs font-medium hover:text-[#0F2C59]">
      2
    </button>

    <button className="p-1 rounded-full hover:bg-gray-200 transition">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</div>

</div>

    </div>
  );
}
