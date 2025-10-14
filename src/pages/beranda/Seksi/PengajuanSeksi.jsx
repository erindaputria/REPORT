import React, { useState } from "react";
import { FileText } from "lucide-react";

export default function PengajuanSeksi() {
  const [priority, setPriority] = useState("");

  return (
    <div className="bg-white shadow-lg rounded-2xl p-8 mt-4">
      <h1 className="text-2xl font-semibold mb-6">Detail Pengajuan Laporan</h1>

      {/* === Header Info === */}
      <div className="space-y-3 mb-6">
        {/* Pengirim */}
        <div className="flex items-center">
          <label className="w-1/4 text-gray-700 font-medium">Pengirim</label>
          <div className="flex items-center gap-3 w-3/4">
            <img
              src="/assets/Haechan.jpg" // ganti sesuai path gambar kamu
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-gray-800 font-semibold">MimukkCarryUs</span>
          </div>
        </div>

        {/* ID Laporan */}
        <div className="flex items-center">
          <label className="w-1/4 text-gray-700 font-medium">ID Laporan</label>
          <input
            type="text"
            value="LPR318728"
            readOnly
            className="w-[260px] h-9 text-center rounded-md bg-gray-200 text-gray-700 text-sm font-medium"
          />
        </div>

        {/* Perihal */}
        <div className="flex items-center">
          <label className="w-1/4 text-gray-700 font-medium">Perihal</label>
          <select className="w-[260px] h-9 text-center border border-gray-300 rounded-md text-sm font-medium">
            <option>Keamanan</option>
            <option>Jaringan</option>
            <option>Aplikasi</option>
          </select>
        </div>

        {/* Status */}
        <div className="flex items-center">
          <label className="w-1/4 text-gray-700 font-medium">Status</label>
          <input
            type="text"
            value="Draft"
            readOnly
            className="w-[260px] h-9 text-center rounded-md bg-gray-300 text-gray-800 text-sm font-semibold"
          />
        </div>
      </div>

      {/* === Level Prioritas === */}
      <div className="mt-6">
        <label className="block text-gray-700 font-medium mb-2">
          Level Prioritas Laporan
        </label>
        <div className="flex gap-4">
          {/* Rendah */}
          <button
            onClick={() => setPriority("rendah")}
            className={`px-5 py-1.5 rounded-full border font-medium transition text-sm
              ${
                priority === "rendah"
                  ? "bg-green-500 text-white border-green-500"
                  : "border-green-500 text-green-600 hover:bg-green-50"
              }`}
          >
            Rendah
          </button>

          {/* Sedang */}
          <button
            onClick={() => setPriority("sedang")}
            className={`px-5 py-1.5 rounded-full border font-medium transition text-sm
              ${
                priority === "sedang"
                  ? "bg-yellow-400 text-white border-yellow-400"
                  : "border-yellow-400 text-yellow-500 hover:bg-yellow-50"
              }`}
          >
            Sedang
          </button>

          {/* Tinggi */}
          <button
            onClick={() => setPriority("tinggi")}
            className={`px-5 py-1.5 rounded-full border font-medium transition text-sm
              ${
                priority === "tinggi"
                  ? "bg-red-500 text-white border-red-500"
                  : "border-red-500 text-red-500 hover:bg-red-50"
              }`}
          >
            Tinggi
          </button>
        </div>
      </div>

      {/* === Rincian Masalah === */}
      <div className="mt-6">
        <label className="block text-gray-700 font-medium mb-2">
          Rincian Masalah
        </label>
        <textarea
          className="w-full p-3 rounded-lg bg-gray-100 text-gray-700 text-sm resize-none"
          type ="text"
          readOnly
          rows={4}
          defaultValue="BANYAK BANGET MASALAH DALAM HIDUP INI"
        />
      </div>

      {/* === Informasi Tambahan === */}
      <div className="mt-4">
        <label className="block text-gray-700 font-medium mb-2">
          Informasi Tambahan
        </label>
        <textarea
          className="w-full p-3 rounded-lg bg-gray-100 text-gray-700 text-sm resize-none"
          rows={3}
          defaultValue="-"
        />
      </div>

      {/* === Lampiran === */}
      <div className="mt-4">
        <label className="block text-gray-700 font-medium mb-2">
          Lampiran File
         </label>
  <div>
    <div className="flex items-center gap-2 ml-2">
      <FileText size={18} className="text-blue-500" />
      <span className="text-gray-700 text-sm">bukti_laporan.pdf</span>
    </div>
  </div>
  </div>

      {/* === Tombol Aksi === */}
      <div className="flex justify-between mt-8">
        <button className="px-5 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 text-gray-700 font-medium">
          Batalkan
        </button>
        <div className="flex gap-3">
          <button className="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium">
            Simpan Draft
          </button>
          <button className="px-5 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-medium">
            Ajukan Verifikasi
          </button>
        </div>
      </div>
    </div>
  );
}
