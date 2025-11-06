import React, { useState } from "react";
import { PaperClipIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // 🧩 import SweetAlert2

export default function PengajuanBidang() {
  const navigate = useNavigate();
  const [priority, setPriority] = useState("");

  // Handler tombol kirim
  const handleKirim = () => {
    Swal.fire({
      title: "Kirim Laporan?",
      text: "Pastikan semua data sudah benar sebelum dikirim.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#0F2C59",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, Kirim",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Berhasil!",
          text: "Laporan telah dikirim ke bagian terkait.",
          icon: "success",
          confirmButtonColor: "#0F2C59",
        }).then(() => navigate(-1)); // setelah klik OK balik ke halaman sebelumnya
      }
    });
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-[#0F2C59] mb-4">
        Detail Pengajuan
      </h1>

      <div className="bg-white rounded-2xl shadow border border-gray-100 p-6 space-y-6">
        {/* Bagian Info Pengirim */}
        <div className="space-y-4">
          {/* Pengirim */}
          <div className="flex items-center gap-4">
            <label className="w-36 font-medium text-gray-800">Pengirim</label>
            <div className="flex items-center gap-2">
              <img
                src="/assets/shizuku.jpg"
                alt="avatar"
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-gray-800 font-medium">Widiya Karim</span>
            </div>
          </div>

          {/* ID laporan */}
          <div className="flex items-center gap-4">
            <label className="w-36 font-medium text-gray-800">ID laporan</label>
            <div className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium w-80 text-center">
              LPR831938
            </div>
          </div>

          {/* Status */}
          <div className="flex items-center gap-4">
            <label className="w-36 font-medium text-gray-800">Status</label>
            <div className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium w-80 text-center">
              Draft
            </div>
          </div>

          {/* Level Prioritas */}
          <div className="flex flex-col">
            <label className="font-medium text-gray-800 mb-2">
              Level prioritas laporan
            </label>
            <div className="flex gap-6 ml-2">
              {["Rendah", "Sedang", "Tinggi"].map((level) => {
  // Warna dasar
  let color =
    level === "Rendah"
      ? "green"
      : level === "Sedang"
      ? "yellow"
      : "red";
  const active = priority === level;

  // Kalau sedang → pakai shade 600 biar kuningnya lebih gelap
  const bgColor =
    active && level === "Sedang"
      ? "bg-yellow-600 border-yellow-600 text-white"
      : active
      ? `bg-${color}-500 border-${color}-500 text-white`
      : `border-${color}-500 text-${color}-600 hover:bg-${color}-50`;

  return (
    <button
      key={level}
      onClick={() => setPriority(level)}
      className={`px-4 py-1 rounded-full border text-sm font-medium transition ${bgColor}`}
    >
      {level}
    </button>
  );
})}


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
            defaultValue="Router bermasalah"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700"
          />
        </div>

        {/* Kategori & Jenis */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Kategori Aset
            </label>
            <div className="bg-gray-200 text-gray-700 px-3 py-2 rounded-md text-sm">
              Jaringan
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Jenis Aset
            </label>
            <div className="bg-gray-200 text-gray-700 px-3 py-2 rounded-md text-sm">
              TI
            </div>
          </div>
        </div>

        {/* Bentuk & Data */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Bentuk Aset
            </label>
            <div className="bg-gray-200 text-gray-700 px-3 py-2 rounded-md text-sm">
              Fisik
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Data Aset
            </label>
            <div className="bg-gray-200 text-gray-700 px-3 py-2 rounded-md text-sm">
              Router TP-Link
            </div>
          </div>
        </div>

        {/* Lokasi */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">
            Lokasi Kejadian
          </label>
          <div className="bg-gray-200 text-gray-700 px-3 py-2 rounded-md text-sm">
            Dinas Pendidikan Kantor 2 Lantai 2
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
            defaultValue="ROUTER DI RUANG ANA RUSAK AMBG"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 bg-gray-100"
          ></textarea>
        </div>

        {/* Lampiran */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">
            Lampiran File
          </label>
          <div className="flex items-center gap-2 rounded-md px-3 py-2 w-fit">
            <PaperClipIcon className="w-4 h-4 text-gray-600" />
            <span className="text-sm text-gray-700">bukti-laporan.pdf</span>
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
            defaultValue="MOHON SEGERA DILAYANI"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 bg-gray-100"
          ></textarea>
        </div>

        {/* Tombol Aksi */}
        <div className="flex justify-between items-center mt-6 pt-4 border-t">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100 text-sm font-medium"
          >
            Batalkan
          </button>

          <div className="flex gap-5 items-center">
            <button
              onClick={() => Swal.fire("Draft disimpan!", "", "info")}
              className="text-[#0F2C59] underline text-sm hover:text-[#15397A] font-medium"
            >
              Simpan Draft
            </button>
            <button
              onClick={handleKirim}
              className="px-5 py-2 bg-[#0F2C59] hover:bg-[#15397A] text-white rounded-lg text-sm font-medium"
            >
              Kirim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
