import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function EditFormRFC() {
  const navigate = useNavigate();

  // Data awal (auto terisi)
  const [form, setForm] = useState({
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
    estimasiBiaya: "2000000",
    dampakPerubahan: "Perlu downtime jaringan selama 2 jam.",
    dampakTidakBerubah: "Koneksi akan tetap lambat dan sering putus.",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const formatRupiah = (value) => {
    const angka = value.replace(/[^\d]/g, "");
    return angka ? `Rp ${angka.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}` : "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Simpan Perubahan?",
      text: "Pastikan data sudah benar sebelum disimpan.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0F2C59",
      cancelButtonColor: "#d33",
      confirmButtonText: "Simpan",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Berhasil!",
          text: "Data RFC telah diperbarui.",
          icon: "success",
          confirmButtonColor: "#0F2C59",
        }).then(() => navigate("/rfcteknisi"));
      }
    });
  };

  // Fungsi untuk tombol Kirim
  const handleKirim = () => {
    Swal.fire({
      title: "Kirim Pengajuan?",
      text: "Pastikan semua data sudah benar sebelum dikirim.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0F2C59",
      cancelButtonColor: "#d33",
      confirmButtonText: "Kirim",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Berhasil!",
          text: "Pengajuan RFC berhasil dikirim.",
          icon: "success",
          confirmButtonColor: "#0F2C59",
        }).then(() => navigate("/rfcteknisi"));
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] py-8 px-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-[#0F2C59] mb-8">
          Edit Form RFC
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Judul Pengajuan */}
          <div>
            <label className="text-gray-700 text-sm">Judul Pengajuan</label>
            <input
              type="text"
              name="judul"
              value={form.judul}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm shadow-sm mt-1"
            />
          </div>

          {/* Nama Pemohon dan Nomor HP */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-gray-700 text-sm">Nama Pemohon</label>
              <input
                type="text"
                name="namaPemohon"
                value={form.namaPemohon}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm shadow-sm mt-1"
              />
            </div>
            <div>
              <label className="text-gray-700 text-sm">Nomor HP</label>
              <input
                type="text"
                name="noHP"
                value={form.noHP}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm shadow-sm mt-1"
              />
            </div>
          </div>

          {/* Kategori Aset dan Nama Aset */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-gray-700 text-sm">Kategori Aset</label>
              <select
                name="kategori"
                value={form.kategori}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm shadow-sm mt-1"
              >
                <option>Jaringan</option>
                <option>Keamanan</option>
                <option>Perangkat Keras</option>
                <option>Aplikasi</option>
              </select>
            </div>
            <div>
              <label className="text-gray-700 text-sm">Nama Aset</label>
              <input
                type="text"
                name="namaAset"
                value={form.namaAset}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm shadow-sm mt-1"
              />
            </div>
          </div>

          {/* Deskripsi */}
          <div>
            <label className="text-gray-700 text-sm">Deskripsi</label>
            <textarea
              name="deskripsi"
              value={form.deskripsi}
              onChange={handleChange}
              rows="3"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm shadow-sm mt-1 resize-none"
            />
          </div>

          {/* Alasan Perubahan */}
          <div>
            <label className="text-gray-700 text-sm">Alasan Perubahan</label>
            <textarea
              name="alasan"
              value={form.alasan}
              onChange={handleChange}
              rows="3"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm shadow-sm mt-1 resize-none"
            />
          </div>

          {/* Pengerjaan Awal - Sampai */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-gray-700 text-sm">Pengerjaan Awal</label>
              <div className="relative">
                <input
                  type="date"
                  name="tglAwal"
                  value={form.tglAwal}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm shadow-sm mt-1"
                />
              </div>
            </div>
            <div>
              <label className="text-gray-700 text-sm">Sampai</label>
              <div className="relative">
                <input
                  type="date"
                  name="tglAkhir"
                  value={form.tglAkhir}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm shadow-sm mt-1"
                />
              </div>
            </div>
          </div>

          {/* Aset Terdampak dan Estimasi Biaya */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-gray-700 text-sm">Aset Terdampak</label>
              <input
                type="text"
                name="asetTerdampak"
                value={form.asetTerdampak}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm shadow-sm mt-1"
              />
            </div>
            <div>
              <label className="text-gray-700 text-sm">Estimasi Biaya</label>
              <input
                type="text"
                name="estimasiBiaya"
                value={formatRupiah(form.estimasiBiaya)}
                onChange={(e) => {
                  const angka = e.target.value.replace(/[^\d]/g, "");
                  setForm({ ...form, estimasiBiaya: angka });
                }}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm shadow-sm mt-1"
              />
            </div>
          </div>

          {/* Dampak Perubahan */}
          <div>
            <label className="text-gray-700 text-sm">Dampak Perubahan</label>
            <textarea
              name="dampakPerubahan"
              value={form.dampakPerubahan}
              onChange={handleChange}
              rows="3"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm shadow-sm mt-1 resize-none"
            />
          </div>

          {/* Dampak Jika Tidak Dilakukan */}
          <div>
            <label className="text-gray-700 text-sm">
              Dampak Jika Tidak Dilakukan Perubahan
            </label>
            <textarea
              name="dampakTidakBerubah"
              value={form.dampakTidakBerubah}
              onChange={handleChange}
              rows="3"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm shadow-sm mt-1 resize-none"
            />
          </div>

          {/* Tombol Aksi */}
          <div className="flex justify-between items-center mt-6">
            <button
              type="button"
              onClick={() => navigate("/rfcteknisi")}
              className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-100 shadow-sm"
            >
              Batalkan
            </button>

            <div className="flex gap-3">
              <button
                type="submit"
                className="px-5 py-2 bg-[#0F2C59] text-white text-sm font-medium rounded-lg shadow-sm hover:bg-[#15397A]"
              >
                Simpan Perubahan
              </button>
              <button
                type="button"
                onClick={handleKirim}
                className="px-5 py-2 bg-[#0F2C59] text-white text-sm font-medium rounded-lg shadow-sm hover:bg-[#15397A]"
              >
                Kirim
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
