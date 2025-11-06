import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PaperClipIcon } from "@heroicons/react/24/outline";

export default function MonitoringTiketSeksi() {
  const { id } = useParams(); // Ambil ID dari URL
  const navigate = useNavigate();

  // Dummy data laporan (nanti bisa dihubungkan ke API atau state global)
  const laporanData = [
    {
      id: "LPR831938",
      pengirim: "Widiya Karim",
      status: "Diproses",
      prioritas: "Rendah",
      judul: "Router bermasalah",
      kategori: "Jaringan",
      jenis: "TI",
      bentuk: "Fisik",
      dataAset: "Router TP-Link",
      lokasi: "Dinas Pendidikan Kantor 2 Lantai 2",
      rincian: "ROUTER DI RUANG ANU RADA ANU",
      lampiran: "bukti_laporan.pdf",
      penyelesaian: "POKOK KELAR LAH WWKK",
      foto: "/assets/shizuku.jpg",
    },
    {
      id: "LPR937282",
      pengirim: "Widiya Karim",
      status: "Diproses",
      prioritas: "Sedang",
      judul: "Komputer Tidak Menyala",
      kategori: "Perangkat Keras",
      jenis: "TI",
      bentuk: "Fisik",
      dataAset: "PC Lenovo ThinkCentre",
      lokasi: "Ruang Server Utama",
      rincian: "Kabel power putus dan PSU rusak",
      lampiran: "bukti_komputer.pdf",
      penyelesaian: "Mohon perbaikan segera",
      foto: "/assets/Suika.jpg",
    },
  ];

  // Cari laporan berdasarkan ID yang diklik
  const laporan = laporanData.find((lap) => lap.id === id);

  if (!laporan) {
    return (
      <div className="p-8 text-center text-gray-600">
        <h2 className="text-xl font-semibold">Data laporan tidak ditemukan</h2>
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

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-[#0F2C59] mb-4">
        Detail Laporan
      </h1>

      <div className="bg-white rounded-2xl shadow border border-gray-100 p-6 space-y-6">
        {/* Pengirim */}
        <div className="flex items-center gap-4">
          <label className="w-36 font-medium text-gray-800">Pengirim</label>
          <div className="flex items-center gap-2">
            <img
              src={laporan.foto}
              alt="avatar"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-gray-800 font-medium">{laporan.pengirim}</span>
          </div>
        </div>

        {/* ID & Status & Prioritas */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <label className="w-36 font-medium text-gray-800">ID Laporan</label>
            <div className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium w-40 text-center">
              {laporan.id}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <label className="w-36 font-medium text-gray-800">Status</label>
            <div className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium w-40 text-center">
              {laporan.status}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <label className="w-36 font-medium text-gray-800">
              Level Prioritas
            </label>
            <div
              className={`px-4 py-2 text-white rounded-md text-sm font-medium w-40 text-center ${getPriorityColor(
                laporan.prioritas
              )}`}
            >
              {laporan.prioritas}
            </div>
          </div>
        </div>

        {/* Judul Pelaporan */}
        <div className="pt-4 border-t">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Judul Pelaporan
          </label>
          <input
            readOnly
            type="text"
            value={laporan.judul}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700"
          />
        </div>

        {/* Info Aset */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Kategori Aset
            </label>
            <div className="bg-gray-200 text-gray-700 px-3 py-2 rounded-md text-sm">
              {laporan.kategori}
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Jenis Aset
            </label>
            <div className="bg-gray-200 text-gray-700 px-3 py-2 rounded-md text-sm">
              {laporan.jenis}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Bentuk Aset
            </label>
            <div className="bg-gray-200 text-gray-700 px-3 py-2 rounded-md text-sm">
              {laporan.bentuk}
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Data Aset</label>
            <div className="bg-gray-200 text-gray-700 px-3 py-2 rounded-md text-sm">
              {laporan.dataAset}
            </div>
          </div>
        </div>

        {/* Lokasi */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">
            Lokasi Kejadian
          </label>
          <div className="bg-gray-200 text-gray-700 px-3 py-2 rounded-md text-sm">
            {laporan.lokasi}
          </div>
        </div>

        {/* Rincian Masalah */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">
            Rincian Masalah
          </label>
          <textarea
            rows="3"
            readOnly
            value={laporan.rincian}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 bg-gray-100"
          ></textarea>
        </div>

        {/* Lampiran */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">
            Lampiran File
          </label>
          <div className="flex items-center gap-2 bg-gray-200 rounded-md px-3 py-2 w-fit">
            <PaperClipIcon className="w-4 h-4 text-gray-600" />
            <span className="text-sm text-gray-700">{laporan.lampiran}</span>
          </div>
        </div>

        {/* Penyelesaian */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">
            Penyelesaian yang Diharapkan
          </label>
          <textarea
            rows="2"
            readOnly
            value={laporan.penyelesaian}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 bg-gray-100"
          ></textarea>
        </div>

        {/* Tombol Aksi */}
        <div className="flex justify-start mt-6 pt-4 border-t">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100 text-sm font-medium"
          >
            Batalkan
          </button>
        </div>
      </div>
    </div>
  );
}
