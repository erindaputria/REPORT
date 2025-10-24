import React, { useState } from "react";
import { FileText } from "lucide-react";
import Swal from "sweetalert2";


export default function PenugasanSeksi() {
    const [teknisi, setTeknisi] = useState("");


    const handleSubmit = () => {
      Swal.fire({
      title: "Apakah Anda yakin ingin mengirim?",
      text: "Cek kembali inputan Anda sebelum mengirim!",
      icon: "warning",
      iconColor: "#1e3a8a",
      showCancelButton: true,
      confirmButtonColor: "#1e3a8a",
      cancelButtonColor: "#f87171",
      confirmButtonText: "Ya, saya yakin!",
      cancelButtonText: "Batalkan",
      reverseButtons: true,
      customClass: {
      title: "text-2xl font-bold",
      htmlContainer: "text-gray-600 text-sm",},
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
        title: "Laporan Dikirim!",
        text: "Data berhasil dikirim ke sistem.",
        icon: "success",
        confirmButtonColor: "#1e3a8a",
      });
    }
  });
};



  return (
    <div className="min-h-screen bg-[#f8fafc] py-8 px-6">
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">Detail Penugasan Laporan</h1>

        {/* GRID 2 KOLOM (LABEL & VALUE) */}
        <div className="grid grid-cols-[180px_350px] gap-x-6 gap-y-5 items-center mb-8">

          {/* Pengirim */}
          <label className="text-gray-700 font-medium">Pengirim</label>
          <div className="flex items-center gap-3">
            <img
              src="/assets/Bokuto.jpg"
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="font-semibold text-gray-800">arr labrador</span>
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
            value="Keamanan"
            readOnly
            className="w-full bg-gray-200 text-gray-700 p-2 rounded-md text-center"
          />

          {/* Prioritas */}
          <label className="text-gray-700 font-medium">Prioritas</label>
          <input
            type="text"
            value="Sedang"
            readOnly
            className="w-full bg-gray-200 text-gray-700 p-2 rounded-md text-center"
            />

          {/* Status */}
          <label className="text-gray-700 font-medium">Status</label>
          <input
            type="text"
            value="Draft"
            readOnly
            className="w-full bg-gray-200 text-gray-700 p-2 rounded-md text-center"
          />

          {/* Pilih Teknisi */}
            <label className="text-gray-700 font-medium">Pilih Teknisi</label>
            <select
                value={teknisi}
                onChange={(e) => setTeknisi(e.target.value)}
                className="w-full border rounded-md p-2 text-sm max-w-[350px]"
            >
                <option value="" disabled hidden></option>
                <option value="Eren Jaeger">Eren Jaeger</option>
                <option value="Bakugo Katsuki">Bakugo Katsuki</option>
                <option value="Meguru Bachira">Meguru Bachira</option>
            </select>

          {/* Pengerjaan Awal */}
          <label className="text-gray-700 font-medium">Pengerjaan Awal</label>
          <div className="flex items-center border rounded-md p-2">
            <input
              type="date"
              className="w-full text-sm text-gray-700 outline-none"
            />
          </div>

          {/* Tenggat Pengerjaan */}
          <label className="text-gray-700 font-medium">Tenggat Pengerjaan</label>
          <div className="flex items-center border rounded-md p-2">
            <input
              type="date"
              className="w-full text-sm text-gray-700 outline-none"
            />
          </div>
        </div>

        {/* Rincian Masalah */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">
            Rincian Masalah
          </label>
          <textarea
            className="w-full border rounded-md p-3 text-sm bg-gray-100"
            rows="4"
            readOnly
            defaultValue="Pada komputer di unit pelayanan, muncul pesan error yang meminta pembayaran tebusan dalam bentuk bitcoin agar data bisa dipulihkan..."
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
            placeholder="-"
          />
        </div>

        {/* === Lampiran === */}
      <div className="mt-4">
        <label className="block text-gray-700 font-medium mb-2">
          Lampiran File
         </label>
    </div>
        {/* Lampiran */}
        <div className="flex items-center gap-2 mb-8 ml-3">
          <FileText className="w-5 h-5 text-blue-600" />
          <a>
            bukti_laporan.pdf
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
            <button
              onClick={handleSubmit}
              className="px-4 py-2 rounded-lg bg-blue-900 text-white hover:bg-blue-800">
              Kirim
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
