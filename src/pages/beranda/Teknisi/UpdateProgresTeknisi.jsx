import React, { useState } from "react";
import { FileText } from "lucide-react";
import Swal from "sweetalert2";

export default function UpdateProgressTeknisi() {
  const [status, setStatus] = useState("Diproses");


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
    <div className="space-y-6">
      {/* Container utama */}
      <div className="bg-white shadow-md rounded-xl p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Update Progress
        </h1>

        {/* Pengirim */}
        <div className="flex items-center mb-4">
          <p className="w-40 font-semibold text-gray-700">Pengirim</p>
          <div className="flex items-center gap-3">
            <img
              src="/assets/shizuku.jpg"
              alt="Profil"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-medium text-gray-800">Widya Karim</span>
          </div>
        </div>

        {/* ID Laporan */}
        <div className="flex items-center mb-4">
          <p className="w-40 font-semibold text-gray-700">ID Laporan</p>
          <div className="bg-gray-200 px-4 py-2 rounded-lg text-gray-700 w-64">
            LPR318728
          </div>
        </div>

        {/* Perihal */}
        <div className="flex items-center mb-4">
          <p className="w-40 font-semibold text-gray-700">Perihal</p>
          <div className="bg-gray-200 px-4 py-2 rounded-lg text-gray-700 w-64">
            Keamanan
          </div>
        </div>

        {/* Prioritas */}
        <div className="flex items-center mb-4">
          <p className="w-40 font-semibold text-gray-700">Prioritas</p>
          <div className="border border-green-500 px-4 py-2 rounded-lg text-green-700 w-64 text-center font-semibold">
            Rendah
          </div>
        </div>

        {/* Perbarui Progress */}
        <div className="mb-6">
          <p className="font-semibold text-gray-700 mb-2">Perbarui Progress</p>
          <div className="flex gap-4">
            <button
              onClick={() => setStatus("Draft")}
              className={`px-6 py-2 rounded-lg border font-medium ${
                status === "Draft"
                  ? "bg-gray-300 text-gray-800"
                  : "border-gray-400 text-gray-600 hover:bg-gray-100"
              }`}
            >
              Draft
            </button>
            <button
              onClick={() => setStatus("Diproses")}
              className={`px-6 py-2 rounded-lg border font-medium ${
                status === "Diproses"
                  ? "bg-yellow-100 border-yellow-400 text-yellow-700"
                  : "border-yellow-400 text-yellow-600 hover:bg-yellow-50"
              }`}
            >
              Diproses
            </button>
            <button
              onClick={() => setStatus("Selesai")}
              className={`px-6 py-2 rounded-lg border font-medium ${
                status === "Selesai"
                  ? "bg-green-100 border-green-500 text-green-700"
                  : "border-green-500 text-green-600 hover:bg-green-50"
              }`}
            >
              Selesai
            </button>
          </div>
        </div>

        {/* Pengerjaan */}
        <div className="flex items-center mb-4">
          <p className="w-40 font-semibold text-gray-700">Pengerjaan Awal</p>
          <input
            type="date"
            value="2024-09-15"
            disabled
            className="border rounded-lg px-3 py-2 text-sm w-52 bg-gray-100 cursor-not-allowed"
          />
          <p className="mx-4 text-gray-600 font-medium">Sampai</p>
          <input
            type="date"
            value="2024-09-18"
            disabled
            className="border rounded-lg px-3 py-2 text-sm w-52 bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Rincian Masalah */}
        <div className="mb-4">
          <p className="font-semibold text-gray-700 mb-2">Rincian Masalah</p>
          <textarea
            className="w-full bg-gray-100 p-3 rounded-lg text-gray-700"
            rows="3"
            readOnly
            value="Pada komputer di unit pelayanan, muncul pesan error yang meminta perpanjangan lisensi agar data bisa diinputkan. Beberapa file penting tidak bisa diakses karena lisensi expired."
          ></textarea>
        </div>

        {/* Informasi Tambahan */}
        <div className="mb-8">
          <p className="font-semibold text-gray-700 mb-2">Informasi Tambahan</p>
          <textarea
            className="w-full bg-gray-100 p-3 rounded-lg text-gray-700"
            rows="3"
            readOnly
          ></textarea>
        </div>

        {/* Lampiran File */}
        <div className="mb-6">
          <p className="font-semibold text-gray-700 mb-2">Lampiran File</p>
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg w-fit">
            <FileText className="text-blue-600 w-5 h-5" />
            <span className="text-gray-700 text-sm font-medium">
              bukti laporan.pdf
            </span>
          </div>
        </div>

        {/* Tombol Aksi */}
        <div className="flex justify-between items-center mt-6">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-5 py-2 rounded-lg font-medium shadow-sm">
            Batalkan
          </button>
          <div className="flex gap-3 items-center">
            <button className="text-gray-700 font-medium">Simpan draft</button>
            <button onClick={handleSubmit} className="bg-blue-900 hover:bg-blue-800 text-white px-5 py-2 rounded-lg font-medium shadow-md">
              Simpan Perubahan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
