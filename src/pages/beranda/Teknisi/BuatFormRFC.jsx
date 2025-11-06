import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Buatformrfc() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    judul: "",
    namaPemohon: "",
    noHp: "",
    kategori: "",
    namaAset: "",
    deskripsi: "",
    alasan: "",
    tanggalMulai: "",
    tanggalSelesai: "",
    asetTerdampak: "",
    estimasi: "",
    dampakPerubahan: "",
    dampakJikaTidak: "",
  });

  // === Handle input umum ===
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // === Handle Estimasi hanya angka + auto format Rp ===
  const handleEstimasiChange = (e) => {
    const rawValue = e.target.value.replace(/\D/g, ""); // hapus non-angka
    const formattedValue = rawValue
      ? "Rp " + parseInt(rawValue).toLocaleString("id-ID")
      : "";
    setForm({ ...form, estimasi: formattedValue });
  };

  // === Submit Form ===
  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Kirim Pengajuan?",
      text: "Pastikan semua data sudah benar sebelum dikirim.",
      icon: "warning",
      iconColor: "red",
      showCancelButton: true,
      confirmButtonColor: "#0F2C59",
      cancelButtonColor: "#d33",
      confirmButtonText: "Kirim Sekarang",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Berhasil!",
          text: "Form pengajuan RFC telah dikirim.",
          icon: "success",
          confirmButtonColor: "#0F2C59",
        }).then(() => {
          navigate("/rfcteknisi"); // kembali ke halaman utama setelah sukses
        });
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] py-8 px-6 flex justify-center">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-6xl p-8">
        {/* === Judul === */}
        <h1 className="text-2xl font-bold text-[#0F2C59] mb-6">
          Form Pengajuan RFC
        </h1>

        {/* === Form === */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Judul Pengajuan */}
          <div>
            <label className="text-gray-700 text-sm">Judul Pengajuan</label>
            <input
              name="judul"
              placeholder="Ketik di sini"
              onChange={handleChange}
              value={form.judul}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 text-sm shadow-sm"
            />
          </div>

          {/* Nama Pemohon & No HP */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="text-gray-700 text-sm">Nama Pemohon</label>
              <input
                name="namaPemohon"
                placeholder="Ketik di sini"
                onChange={handleChange}
                value={form.namaPemohon}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 text-sm shadow-sm"
              />
            </div>
            <div>
              <label className="text-gray-700 text-sm">Nomor HP</label>
              <input
                name="noHp"
                placeholder="Ketik di sini"
                onChange={handleChange}
                value={form.noHp}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 text-sm shadow-sm"
              />
            </div>
          </div>

          {/* Kategori & Aset */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="text-gray-700 text-sm">Kategori Aset</label>
              <select
                name="kategori"
                onChange={handleChange}
                value={form.kategori}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 text-sm shadow-sm bg-white"
              >
                <option value="">Pilih Kategori</option>
                <option value="Jaringan">Jaringan</option>
                <option value="Aplikasi">Aplikasi</option>
                <option value="Perangkat Keras">Perangkat Keras</option>
              </select>
            </div>
            <div>
              <label className="text-gray-700 text-sm">Nama Aset</label>
              <select
                name="namaAset"
                onChange={handleChange}
                value={form.namaAset}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 text-sm shadow-sm bg-white"
              >
                <option value="">Pilih aset</option>
                <option>Router TP-Link</option>
                <option>Server UNESA</option>
                <option>Website TEP</option>
              </select>
            </div>
          </div>

          {/* Deskripsi */}
          <div>
            <label className="text-gray-700 text-sm">Deskripsi</label>
            <textarea
              name="deskripsi"
              placeholder="Ketik di sini"
              onChange={handleChange}
              value={form.deskripsi}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 text-sm shadow-sm min-h-[80px]"
            />
          </div>

          {/* Alasan */}
          <div>
            <label className="text-gray-700 text-sm">Alasan Perubahan</label>
            <textarea
              name="alasan"
              placeholder="Ketik di sini"
              onChange={handleChange}
              value={form.alasan}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 text-sm shadow-sm min-h-[100px]"
            />
          </div>

          {/* === Tanggal Pengerjaan (2 kolom sejajar) === */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-end">
            <div>
              <label className="text-gray-700 text-sm">Pengerjaan Awal</label>
              <div className="relative">
                <input
                  type="date"
                  name="tanggalMulai"
                  onChange={handleChange}
                  value={form.tanggalMulai}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 text-sm shadow-sm"
                />
              </div>
            </div>

            <div>
              <label className="text-gray-700 text-sm">Sampai</label>
              <div className="relative">
                <input
                  type="date"
                  name="tanggalSelesai"
                  onChange={handleChange}
                  value={form.tanggalSelesai}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 text-sm shadow-sm"
                />
              </div>
            </div>
          </div>

          {/* === Aset & Estimasi (2 kolom sejajar) === */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            <div>
              <label className="text-gray-700 text-sm">Aset Terdampak</label>
              <select
                name="asetTerdampak"
                onChange={handleChange}
                value={form.asetTerdampak}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 text-sm shadow-sm bg-white"
              >
                <option value="">Pilih aset</option>
                <option>Server Utama</option>
                <option>Jaringan Lantai 2</option>
                <option>Website Internal</option>
              </select>
            </div>

            <div>
              <label className="text-gray-700 text-sm">Estimasi Biaya</label>
              <input
                name="estimasi"
                placeholder="Rp."
                value={form.estimasi}
                onChange={handleEstimasiChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 text-sm shadow-sm"
              />
            </div>
          </div>

          {/* Dampak */}
          <div>
            <label className="text-gray-700 text-sm">Dampak Perubahan</label>
            <textarea
              name="dampakPerubahan"
              placeholder="Ketik di sini"
              onChange={handleChange}
              value={form.dampakPerubahan}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 text-sm shadow-sm min-h-[80px]"
            />
          </div>

          <div>
            <label className="text-gray-700 text-sm">
              Dampak Jika Tidak Dilakukan Perubahan
            </label>
            <textarea
              name="dampakJikaTidak"
              placeholder="Ketik di sini"
              onChange={handleChange}
              value={form.dampakJikaTidak}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 text-sm shadow-sm min-h-[80px]"
            />
          </div>

          {/* Tombol */}
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
  type="button"
  onClick={() => {
    Swal.fire({
      title: "Tersimpan!",
      text: "Draft berhasil disimpan.",
      icon: "success",
      confirmButtonColor: "#0F2C59",
    }).then(() => {
      navigate("/rfcteknisi"); // kembali ke halaman utama RFC Teknis
    });
  }}
  className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-100 shadow-sm"
            >
                Simpan Draft
            </button>

              <button
                type="submit"
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
