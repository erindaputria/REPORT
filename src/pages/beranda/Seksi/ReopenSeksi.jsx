import React from "react";
import {CalendarDaysIcon } from "@heroicons/react/24/outline";
import {FileText} from "lucide-react";

export default function FormReopen() {
  return (
    <div className="min-h-screen bg-[#f8fafc] py-8 px-6">
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">Detail Re-open Tiket</h1>

        {/* GRID 2 KOLOM */}
        <div className="grid grid-cols-[180px_350px] gap-x-6 gap-y-5 items-center mb-8">
          {/* Pengirim */}
          <label className="text-gray-700 font-medium">Pengirim</label>
          <div className="flex items-center gap-3">
            <img
              src="/assets/Bokuto.jpg"
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="font-semibold text-gray-800">Toni Ridho</span>
          </div>

          {/* ID Laporan */}
          <label className="text-gray-700 font-medium">ID Laporan</label>
          <input
            type="text"
            value="LPR318728"
            readOnly
            className="w-full bg-gray-200 text-gray-700 p-2 rounded-md text-center"
          />

          {/* Perihal */}
          <label className="text-gray-700 font-medium">Perihal</label>
          <input
            type="text"
            value="Email & Komunikasi"
            readOnly
            className="w-full bg-gray-200 text-gray-700 p-2 rounded-md text-center"
          />

          {/* Prioritas */}
          <label className="text-gray-700 font-medium">Prioritas</label>
          <input
            type="text"
            value="Rendah"
            readOnly
            className="w-full bg-gray-200 text-gray-700 p-2 rounded-md text-center"
          />

          {/* Status */}
          <label className="text-gray-700 font-medium">Status</label>
          <div className="bg-green-500 text-white text-center py-2 rounded-md font-medium">
            Selesai
          </div>

          {/* Teknisi */}
          <label className="text-gray-700 font-medium">Teknisi Pengerjaan</label>
          <div className="flex items-center gap-3 bg-gray-100 p-2 rounded-md">
            <img
              src="/assets/Suika.jpg"
              alt="Teknisi"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="font-semibold text-gray-800">Kanda Alfian</span>
          </div>

          {/* Pengerjaan Awal */}
          <label className="text-gray-700 font-medium">Pengerjaan Awal</label>
          <div className="flex items-center border rounded-md p-2 bg-gray-200">
            <input
              type="text"
              readOnly
              value="29/08/2024"
              className="w-full text-center bg-gray-200 text-gray-700 outline-none"
            />
            <CalendarDaysIcon className="w-5 h-5 text-gray-500 ml-2" />
          </div>

          {/* Tenggat */}
          <label className="text-gray-700 font-medium">Tenggat Pengerjaan</label>
          <div className="flex items-center border rounded-md p-2 bg-gray-200">
            <input
              type="text"
              readOnly
              value="06/09/2024"
              className="w-full text-center bg-gray-200 text-gray-700 outline-none"
            />
            <CalendarDaysIcon className="w-5 h-5 text-gray-500 ml-2" />
          </div>
        </div>

        {/* Informasi Pengerjaan */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">
            Informasi Terkait Pengerjaan
          </label>
          <textarea
            className="w-full border rounded-md p-3 text-sm bg-gray-100"
            rows="3"
            defaultValue="Layanan sistem sudah pulih normal, data berhasil dipulihkan dari backup, dan perangkat aman digunakan kembali."
            readOnly
          />
        </div>

        {/* Informasi Tambahan */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">
            Informasi Tambahan
          </label>
          <textarea
            className="w-full border rounded-md p-3 text-sm bg-gray-100"
            rows="3"
            defaultValue="-"
            readOnly
          />
        </div>

        {/* Alasan Re-open */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">
            Alasan Re-open Tiket
          </label>
          <textarea
            className="w-full border rounded-md p-3 text-sm"
            rows="3"
            placeholder="Ketik alasan..."
          />
        </div>

        {/* Lampiran */}
        <div className="flex items-center gap-2 mb-8">
          <FileText className="w-5 h-5 text-blue-600" />
          <a className="text-blue-600 hover:underline text-sm">
            bukti_tugas.pdf
          </a>
        </div>

        {/* Tombol */}
        <div className="flex justify-between items-center">
          <button className="px-4 py-2 rounded-lg border text-gray-700 hover:bg-gray-100">
            Batalkan
          </button>
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800">
              Simpan Draft
            </button>
            <button className="px-4 py-2 rounded-lg bg-blue-900 text-white hover:bg-blue-800">
              Ajukan Verifikasi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
