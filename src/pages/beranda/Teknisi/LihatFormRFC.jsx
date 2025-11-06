import React from "react";
import { useNavigate } from "react-router-dom";

export default function LihatFormRFC() {
  const navigate = useNavigate();

  // Data yang ditampilkan (readonly)
  const form = {
    judul: "Penggantian Router Utama",
    namaPemohon: "Arya Dimas Saputra",
    noHP: "081234567890",
    kategori: "Jaringan",
    namaAset: "Router TP-Link Lantai 3",
    deskripsi: "Router utama tidak stabil dan perlu diganti dengan unit baru.",
    alasan: "Router sudah melebihi masa pakai dan sering mengalami gangguan.",
    tglAwal: "2025-09-16",
    tglAkhir: "2025-09-18",
    asetTerdampak: "Jaringan WiFi Gedung B",
    estimasiBiaya: "Rp 2.000.000",
    dampakPerubahan: "Perlu downtime jaringan selama 2 jam.",
    dampakTidakBerubah: "Koneksi akan tetap lambat dan sering putus.",
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] py-8 px-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-[#0F2C59] mb-8">
          Lihat Form RFC
        </h1>

        <form className="space-y-6">
          {/* Judul Pengajuan */}
          <div>
            <label className="text-gray-700 text-sm">Judul Pengajuan</label>
            <input
              type="text"
              value={form.judul}
              readOnly
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm shadow-sm mt-1 bg-gray-100"
            />
          </div>

          {/* Nama Pemohon dan Nomor HP */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-gray-700 text-sm">Nama Pemohon</label>
              <input
                type="text"
                value={form.namaPemohon}
                readOnly
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm shadow-sm mt-1 bg-gray-100"
              />
            </div>
            <div>
              <label className="text-gray-700 text-sm">Nomor HP</label>
              <input
                type="text"
                value={form.noHP}
                readOnly
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm shadow-sm mt-1 bg-gray-100"
              />
            </div>
          </div>

          {/* Kategori Aset dan Nama Aset */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-gray-700 text-sm">Kategori Aset</label>
              <input
                type="text"
                value={form.kategori}
                readOnly
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm shadow-sm mt-1 bg-gray-100"
              />
            </div>
            <div>
              <label className="text-gray-700 text-sm">Nama Aset</label>
              <input
                type="text"
                value={form.namaAset}
                readOnly
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm shadow-sm mt-1 bg-gray-100"
              />
            </div>
          </div>

          {/* Deskripsi */}
          <div>
            <label className="text-gray-700 text-sm">Deskripsi</label>
            <textarea
              value={form.deskripsi}
              readOnly
              rows="3"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm shadow-sm mt-1 bg-gray-100 resize-none"
            />
          </div>

          {/* Alasan Perubahan */}
          <div>
            <label className="text-gray-700 text-sm">Alasan Perubahan</label>
            <textarea
              value={form.alasan}
              readOnly
              rows="3"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm shadow-sm mt-1 bg-gray-100 resize-none"
            />
          </div>

          {/* Pengerjaan Awal - Sampai */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-gray-700 text-sm">Pengerjaan Awal</label>
              <input
                type="date"
                value={form.tglAwal}
                readOnly
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm shadow-sm mt-1 bg-gray-100"
              />
            </div>
            <div>
              <label className="text-gray-700 text-sm">Sampai</label>
              <input
                type="date"
                value={form.tglAkhir}
                readOnly
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm shadow-sm mt-1 bg-gray-100"
              />
            </div>
          </div>

          {/* Aset Terdampak dan Estimasi Biaya */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-gray-700 text-sm">Aset Terdampak</label>
              <input
                type="text"
                value={form.asetTerdampak}
                readOnly
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm shadow-sm mt-1 bg-gray-100"
              />
            </div>
            <div>
              <label className="text-gray-700 text-sm">Estimasi Biaya</label>
              <input
                type="text"
                value={form.estimasiBiaya}
                readOnly
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm shadow-sm mt-1 bg-gray-100"
              />
            </div>
          </div>

          {/* Dampak Perubahan */}
          <div>
            <label className="text-gray-700 text-sm">Dampak Perubahan</label>
            <textarea
              value={form.dampakPerubahan}
              readOnly
              rows="3"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm shadow-sm mt-1 bg-gray-100 resize-none"
            />
          </div>

          {/* Dampak Jika Tidak Dilakukan */}
          <div>
            <label className="text-gray-700 text-sm">
              Dampak Jika Tidak Dilakukan Perubahan
            </label>
            <textarea
              value={form.dampakTidakBerubah}
              readOnly
              rows="3"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm shadow-sm mt-1 bg-gray-100 resize-none"
            />
          </div>

          {/* Tombol Aksi */}
          <div className="flex justify-start mt-6">
            <button
              type="button"
              onClick={() => navigate("/rfcteknisi")}
              className="px-5 py-2 bg-[#0F2C59] text-white text-sm font-medium rounded-lg shadow-sm hover:bg-[#15397A]"
            >
              Kembali
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
