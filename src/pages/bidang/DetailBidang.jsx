import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { PaperClipIcon } from "@heroicons/react/24/outline";

export default function DetailBidang() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Ambil data dari state navigation
  const laporanFromState = location.state?.laporanData;

  // Dummy data fallback - SAMA PERSIS dengan MonitoringBidang
  const laporanData = [
    {
      id: "LPR831938",
      pengirim: "Sri Wulandari",
      status: "Diproses",
      prioritas: "Rendah",
      judul: "Router bermasalah",
      kategori: "Jaringan",
      jenis: "TI",
      bentuk: "Fisik",
      dataAset: "Router TP-Link",
      lokasi: "Dinas Pendidikan Kantor 2 Lantai 2",
      rincian:
        "Router sering mengalami lag atau kehilangan koneksi secara berkala, terutama saat banyak perangkat terhubung secara bersamaan.",
      lampiran: "bukti_laporan.pdf",
      penyelesaian:
        "Router dikonfigurasi dengan bandwidth management dan QoS (Quality of Service) agar prioritas koneksi untuk server dan aplikasi tetap stabil.",
      foto: "/assets/shizuku.jpg",
    },
    {
      id: "LPR931728",
      pengirim: "Sri Wulandari",
      status: "Selesai",
      prioritas: "Sedang",
      judul: "Server Down",
      kategori: "Jaringan",
      jenis: "TI",
      bentuk: "Fisik",
      dataAset: "Server Dell PowerEdge",
      lokasi: "Ruang Server Utama",
      rincian:
        "Server mengalami downtime selama 2 jam, mempengaruhi seluruh sistem operasi.",
      lampiran: "log_server.pdf",
      penyelesaian: "Restart server dan periksa koneksi jaringan.",
      foto: "/assets/shizuku.jpg",
    },
    {
      id: "LPR931720",
      pengirim: "Sri Wulandari",
      status: "Draft",
      prioritas: "Rendah",
      judul: "Update Software",
      kategori: "Aplikasi",
      jenis: "TI",
      bentuk: "Non-Fisik",
      dataAset: "Software Akuntansi",
      lokasi: "Departemen Keuangan",
      rincian: "Perlu update software ke versi terbaru untuk fitur tambahan.",
      lampiran: "manual_update.pdf",
      penyelesaian: "Update dilakukan diluar jam kerja.",
      foto: "/assets/shizuku.jpg",
    },
    {
      id: "LPR907276",
      pengirim: "Galang Wardi",
      status: "Diproses",
      prioritas: "Tinggi",
      judul: "Kabel LAN Putus",
      kategori: "Jaringan",
      jenis: "TI",
      bentuk: "Fisik",
      dataAset: "Kabel UTP Cat6",
      lokasi: "Kantor Lantai 3",
      rincian: "Kabel LAN terputus akibat pekerjaan renovasi.",
      lampiran: "foto_kerusakan.pdf",
      penyelesaian: "Ganti kabel LAN segera.",
      foto: "/assets/Bokuto.jpg",
    },
    {
      id: "LPR826792",
      pengirim: "Galang Wardi",
      status: "Selesai",
      prioritas: "Sedang",
      judul: "Access Point Mati",
      kategori: "Jaringan",
      jenis: "TI",
      bentuk: "Fisik",
      dataAset: "Access Point Cisco",
      lokasi: "Area Meeting Room",
      rincian: "Access Point tidak menyala, indikator lampu mati.",
      lampiran: "spesifikasi_ap.pdf",
      penyelesaian: "Ganti power adapter access point.",
      foto: "/assets/Bokuto.jpg",
    },
    {
      id: "LPR802476",
      pengirim: "Albert Madara",
      status: "Selesai",
      prioritas: "Rendah",
      judul: "Printer Error",
      kategori: "Perangkat Keras",
      jenis: "TI",
      bentuk: "Fisik",
      dataAset: "Printer HP LaserJet",
      lokasi: "Departemen HR",
      rincian: "Printer sering macet dan kertas tersangkut.",
      lampiran: "error_code.pdf",
      penyelesaian: "Bersihkan roller dan ganti cartridge.",
      foto: "/assets/Suika.jpg",
    },
    {
      id: "LPR937282",
      pengirim: "Albert Madara",
      status: "Diproses",
      prioritas: "Sedang",
      judul: "Monitor Rusak",
      kategori: "Perangkat Keras",
      jenis: "TI",
      bentuk: "Fisik",
      dataAset: "Monitor LG 24inch",
      lokasi: "Kantor Lantai 1",
      rincian: "Layar monitor berkedip dan garis-garis.",
      lampiran: "bukti_monitor.pdf",
      penyelesaian: "Ganti monitor dengan unit baru.",
      foto: "/assets/Suika.jpg",
    },
  ];

  // Prioritaskan data dari state, jika tidak ada cari dari dummy data
  const laporan = laporanFromState || laporanData.find((lap) => lap.id === id);

  if (!laporan) {
    return (
      <div className="p-8 text-center text-gray-600">
        <h2 className="text-xl font-semibold">Data laporan tidak ditemukan</h2>
        <p className="text-sm mt-2">ID: {id}</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
        >
          Kembali
        </button>
      </div>
    );
  }

  // Warna prioritas dinamis
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "Rendah":
        return "bg-green-500";
      case "Sedang":
        return "bg-yellow-400";
      case "Tinggi":
        return "bg-red-500";
      default:
        return "bg-gray-400";
    }
  };

  // Warna status dinamis
  const getStatusColor = (status) => {
    switch (status) {
      case "Selesai":
        return "bg-green-500";
      case "Diproses":
        return "bg-blue-500";
      case "Draft":
        return "bg-gray-400";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-[#0F2C59] mb-6">
          Detail Laporan
        </h1>

        <div className="bg-white rounded-2xl shadow border border-gray-200 p-6 space-y-6">
          {/* Pengirim */}
          <div className="flex items-center gap-4">
            <label className="w-36 font-medium text-gray-800">Pengirim</label>
            <div className="flex items-center gap-3">
              <img
                src={laporan.foto}
                alt="avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <span className="text-gray-800 font-medium block">
                  {laporan.pengirim}
                </span>
                <span className="text-gray-500 text-sm">Teknisi</span>
              </div>
            </div>
          </div>

          {/* ID & Status & Prioritas */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ID Laporan
              </label>
              <div className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium text-center">
                {laporan.id}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <div
                className={`px-4 py-2 text-white rounded-lg text-sm font-medium text-center ${getStatusColor(
                  laporan.status
                )}`}
              >
                {laporan.status}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Prioritas
              </label>
              <div
                className={`px-4 py-2 text-white rounded-lg text-sm font-medium text-center ${getPriorityColor(
                  laporan.prioritas
                )}`}
              >
                {laporan.prioritas}
              </div>
            </div>
          </div>

          {/* Judul Pelaporan */}
          <div className="pt-4 border-t border-gray-200">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Judul Pelaporan
            </label>
            <div className="bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-700">
              {laporan.judul}
            </div>
          </div>

          {/* Info Aset */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Kategori Aset
              </label>
              <div className="bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 text-gray-700">
                {laporan.kategori}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Jenis Aset
              </label>
              <div className="bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 text-gray-700">
                {laporan.jenis}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bentuk Aset
              </label>
              <div className="bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 text-gray-700">
                {laporan.bentuk}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Data Aset
              </label>
              <div className="bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 text-gray-700">
                {laporan.dataAset}
              </div>
            </div>
          </div>

          {/* Lokasi */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Lokasi Kejadian
            </label>
            <div className="bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 text-gray-700">
              {laporan.lokasi}
            </div>
          </div>

          {/* Rincian Masalah */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rincian Masalah
            </label>
            <div className="bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-700 min-h-[100px]">
              {laporan.rincian}
            </div>
          </div>

          {/* Lampiran */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Lampiran File
            </label>
            <div className="flex items-center gap-3 bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 w-fit">
              <PaperClipIcon className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700 font-medium">
                {laporan.lampiran}
              </span>
            </div>
          </div>

          {/* Penyelesaian */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Penyelesaian yang Diharapkan
            </label>
            <div className="bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-700 min-h-[80px]">
              {laporan.penyelesaian}
            </div>
          </div>

          {/* Tombol Aksi */}
          <div className="flex justify-start pt-6 border-t border-gray-200">
            <button
              onClick={() => navigate(-1)}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors"
            >
              Kembali
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
