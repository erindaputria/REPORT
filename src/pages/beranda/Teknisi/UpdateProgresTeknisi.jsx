import React, { useState } from "react";
import { FileText } from "lucide-react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function UpdateProgressTeknisi() {
  const navigate = useNavigate();
  const [status, setStatus] = useState("");

  const handleSubmit = () => {
    Swal.fire({
      title: "Apakah Anda yakin ingin menyimpan?",
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
        htmlContainer: "text-gray-600 text-sm",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Progress Diperbarui!",
          text: "Data berhasil disimpan ke sistem.",
          icon: "success",
          confirmButtonColor: "#1e3a8a",
        });
      }
    });
  };

  return (
    <div className="space-y-6">
      {/* Container utama */}
      <div className="bg-white shadow-md rounded-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Update Progress
        </h1>

        {/* Pengirim */}
        <div className="flex items-center mb-5">
          <label className="w-48 font-semibold text-gray-700">Pengirim</label>
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
        <div className="flex items-center mb-5">
          <label className="w-48 font-semibold text-gray-700">ID Laporan</label>
          <div className="bg-gray-200 px-4 py-2 rounded-lg text-gray-700 w-64 text-center">
            LPR318728
          </div>
        </div>

        {/* Prioritas */}
        <div className="flex items-center mb-5">
          <label className="w-48 font-semibold text-gray-700">Prioritas</label>
          <div className="border border-green-500 bg-green-100 px-4 py-2 rounded-lg text-green-700 w-64 text-center font-semibold">
            Rendah
          </div>
        </div>

        {/* Perbarui Status */}
        <div className="flex items-center mb-8">
          <label className="w-48 font-semibold text-gray-700">
            Perbarui Status
          </label>
          <div className="flex gap-3">
            <button
              onClick={() => setStatus("Draft")}
              className={`px-5 py-2 rounded-lg border font-medium ${
                status === "Draft"
                  ? "bg-gray-200 text-gray-800"
                  : "border-gray-400 text-gray-600 hover:bg-gray-100"
              }`}
            >
              Draft
            </button>
            <button
              onClick={() => setStatus("Diproses")}
              className={`px-5 py-2 rounded-lg border font-medium ${
                status === "Diproses"
                  ? "bg-yellow-200 border-yellow-400 text-yellow-700"
                  : "border-yellow-400 text-yellow-600 hover:bg-yellow-50"
              }`}
            >
              Diproses
            </button>
            <button
              onClick={() => setStatus("Selesai")}
              className={`px-5 py-2 rounded-lg border font-medium ${
                status === "Selesai"
                  ? "bg-green-300 border-green-500 text-green-700"
                  : "border-green-500 text-green-600 hover:bg-green-50"
              }`}
            >
              Selesai
            </button>
          </div>
        </div>

        {/* Judul Pelaporan */}
        <div className="flex items-center mb-5">
          <label className="w-48 font-semibold text-gray-700">
            Judul Pelaporan
          </label>
          <input
            type="text"
            value="Router Bermasalah"
            readOnly
            className="border rounded-lg px-3 py-2 text-gray-700 bg-gray-100 w-full"
          />
        </div>

        {/* Dua kolom */}
        <div className="grid grid-cols-2 gap-6 mb-5">
          <div className="flex items-center">
            <label className="w-48 font-semibold text-gray-700">
              Kategori Aset
            </label>
            <div className="bg-gray-200 px-4 py-2 rounded-lg text-gray-700 w-full">
              Jaringan
            </div>
          </div>
          <div className="flex items-center">
            <label className="w-48 font-semibold text-gray-700">Jenis Aset</label>
            <div className="bg-gray-200 px-4 py-2 rounded-lg text-gray-700 w-full">
              IT
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-5">
          <div className="flex items-center">
            <label className="w-48 font-semibold text-gray-700">
              Bentuk Aset
            </label>
            <div className="bg-gray-200 px-4 py-2 rounded-lg text-gray-700 w-full">
              Fisik
            </div>
          </div>
          <div className="flex items-center">
            <label className="w-48 font-semibold text-gray-700">Data Aset</label>
            <div className="bg-gray-200 px-4 py-2 rounded-lg text-gray-700 w-full">
              Router TP-Link
            </div>
          </div>
        </div>

        {/* Lokasi */}
        <div className="flex items-center mb-5">
          <label className="w-48 font-semibold text-gray-700">
            Lokasi Kejadian
          </label>
          <div className="bg-gray-200 px-4 py-2 rounded-lg text-gray-700 w-full">
            Dinas Pendidikan Korwil 2 Surati 3
          </div>
        </div>

        {/* Pengerjaan Awal - Akhir */}
        <div className="flex items-center mb-6">
          <label className="w-48 font-semibold text-gray-700">
            Pengerjaan Awal
          </label>
          <input
            type="date"
            defaultValue="2024-09-19"
            className="border rounded-lg px-3 py-2 text-sm w-52 bg-gray-100 cursor-not-allowed"
            disabled
          />
          <p className="mx-4 text-gray-600 font-medium">Sampai</p>
          <input
            type="date"
            defaultValue="2024-09-20"
            className="border rounded-lg px-3 py-2 text-sm w-52 bg-gray-100 cursor-not-allowed"
            disabled
          />
        </div>

        {/* Rincian Masalah */}
        <div className="mb-5">
          <p className="font-semibold text-gray-700 mb-2">Rincian Masalah</p>
          <textarea
            readOnly
            className="w-full bg-gray-100 p-3 rounded-lg text-gray-700"
            rows="3"
            value="Router di ruang arsip tidak dapat memancarkan sinyal Wi-Fi meskipun lampu indikator menyala normal."
          ></textarea>
        </div>

        {/* Lampiran */}
        <div className="mb-5">
          <p className="font-semibold text-gray-700 mb-2">Lampiran File</p>
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg w-fit">
            <FileText className="text-blue-600 w-5 h-5" />
            <span className="text-gray-700 text-sm font-medium">
              bukti-laporan.pdf
            </span>
          </div>
        </div>

        {/* Penyelesaian */}
        <div className="mb-8">
          <p className="font-semibold text-gray-700 mb-2">
            Penyelesaian yang Diharapkan
          </p>
          <textarea
            className="w-full bg-gray-100 p-3 rounded-lg text-gray-700"
            rows="3"
            readOnly
            value="Perbaikan router agar dapat memancarkan sinyal Wi-Fi kembali dan memastikan semua perangkat terkoneksi dengan baik."
          ></textarea>
        </div>

        {/* Tombol aksi */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => navigate("/dashboardteknisi")}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-5 py-2 rounded-lg font-medium shadow-sm"
          >
            Batalkan
          </button>
          <div className="flex gap-3 items-center">
            <button
            onClick={() => navigate("/dashboardteknisi")}
            className="text-gray-700 font-medium">Simpan Draft</button>
            <button
              onClick={handleSubmit}
              className="bg-blue-900 hover:bg-blue-800 text-white px-5 py-2 rounded-lg font-medium shadow-md"
            >
              Simpan Perubahan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
