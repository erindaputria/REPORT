import React from "react";
import { Calendar, FileText } from "lucide-react";
import {useNavigate } from "react-router-dom";

export default function CekDetailKota() {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-white shadow rounded-xl p-10">
      <h1 className="text-3xl font-bold text-[#0F2C59] mb-8">
        Detail Laporan
      </h1>

      <div className="space-y-6">
        {/* Teknisi Pengerjaan */}
        <div className="flex items-center gap-8">
          <span className="font-semibold text-gray-800 w-48">
            Teknisi Pengerjaan
          </span>
          <div className="flex items-center gap-3">
            <img
              src="/assets/Bokuto.jpg"
              alt="Teknisi"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-gray-800 font-medium">Katrina Wulan</span>
          </div>
        </div>

        {/* Pengirim */}
        <div className="flex items-center gap-8">
          <span className="font-semibold text-gray-800 w-48">Pengirim</span>
          <div className="flex items-center gap-3">
            <img
              src="/assets/Suika.jpg"
              alt="Pengirim"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-gray-800 font-medium">Widiya Karim</span>
          </div>
        </div>

        {/* ID Laporan */}
        <div className="flex items-center gap-8">
          <span className="font-semibold text-gray-800 w-48">ID Laporan</span>
          <input
            type="text"
            value="LPR-98278"
            readOnly
            className="bg-gray-100 border border-gray-200 rounded-lg px-4 py-2 w-[400px]"
          />
        </div>

        {/* Perihal */}
        <div className="flex items-center gap-8">
          <span className="font-semibold text-gray-800 w-48">Perihal</span>
          <input
            type="text"
            value="Keamanan"
            readOnly
            className="bg-gray-100 border border-gray-200 rounded-lg px-4 py-2 w-[400px]"
          />
        </div>

        {/* Prioritas */}
        <div className="flex items-center gap-8">
          <span className="font-semibold text-gray-800 w-48">Prioritas</span>
          <span className="bg-green-100 text-green-700 px-4 py-1 rounded-lg font-semibold">
            Rendah
          </span>
        </div>

        {/* Status */}
        <div className="flex items-center gap-8">
          <span className="font-semibold text-gray-800 w-48">Status</span>
          <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-lg font-semibold">
            Diproses
          </span>
        </div>

        {/* Pengerjaan Awal */}
        <div className="flex items-center gap-8">
          <span className="font-semibold text-gray-800 w-48">
            Pengerjaan Awal
          </span>
          <div className="flex items-center bg-gray-100 border border-gray-200 rounded-lg px-4 py-2 w-[400px]">
            <Calendar size={18} className="text-gray-600 mr-2" />
            <span>15/01/2025</span>
          </div>
        </div>

        {/* Tenggat Pengerjaan */}
        <div className="flex items-center gap-8">
          <span className="font-semibold text-gray-800 w-48">
            Tenggat Pengerjaan
          </span>
          <div className="flex items-center bg-gray-100 border border-gray-200 rounded-lg px-4 py-2 w-[400px]">
            <Calendar size={18} className="text-gray-600 mr-2" />
            <span>17/01/2025</span>
          </div>
        </div>

        {/* Rincian Masalah */}
        <div className="flex items-start gap-8">
          <span className="font-semibold text-gray-800 w-48">
            Rincian Masalah
          </span>
          <textarea
            readOnly
            value="Pada komputer di unit pelayanan muncul pesan error yang memerlukan pembaruan bawaan sistem tertentu agar data bisa disuplai ulang. Beberapa file penting tidak dapat diakses termasuk template jadwal. Aktivitas browsing gagal mengunduh informasi. Dugaan kuat pengaruh isolasi jaringan internal."
            className="bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 w-[600px] h-28 resize-none"
          />
        </div>

        {/* Informasi Tambahan */}
        <div className="flex items-start gap-8">
          <span className="font-semibold text-gray-800 w-48">
            Informasi Tambahan
          </span>
          <textarea
            readOnly
            value="Segera lakukan pengecekan jaringan dan update sistem keamanan pada perangkat client. Pastikan koneksi stabil dan data aman."
            className="bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 w-[600px] h-20 resize-none"
          />
        </div>

        {/* Garis Pembatas */}
        <hr className="my-6 border-gray-300" />

        {/* Lampiran File */}
        <div className="space-y-3">
          <span className="font-semibold text-gray-800 block">
            Lampiran File
          </span>
          <div className="flex items-center gap-3 pl-4">
            <FileText size={22} className="text-[#0F2C59]" />
            <span className="text-gray-700 font-medium underline cursor-pointer hover:text-blue-600 transition">
              bukti_laporan.pdf
            </span>
          </div>
        </div>

        {/* Tombol Kembali */}
        <div className="pt-1">
          <button 
          onClick={() => navigate("/DashboardKota")}
          className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-medium shadow-sm transition">
          Kembali
          </button>
        </div>
      </div>
    </div>
  );
}
