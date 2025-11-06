import React, { useState } from "react";
import { FileText } from "lucide-react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function FormPenugasanSeksi() {
  const navigate = useNavigate();

  // Data teknisi (avatar + nama). Sesuaikan path gambar yang kamu punya.
  const daftarTeknisi = [
    { nama: "Eren Jaeger", avatar: "/assets/Suika.jpg" },
    { nama: "Bakugo Katsuki", avatar: "/assets/shizuku.jpg" },
    { nama: "Meguru Bachira", avatar: "/assets/Bokuto.jpg" },
  ];

  const [selectedTeknisi, setSelectedTeknisi] = useState("");
  const teknisiObj = daftarTeknisi.find((t) => t.nama === selectedTeknisi);

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
        htmlContainer: "text-gray-600 text-sm",
      },
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
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-[#0F2C59] mb-4">Detail Penugasan</h1>

      <div className="bg-white rounded-2xl shadow border border-gray-100 p-6 space-y-6">
        {/* Info atas */}
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

          {/* ID Laporan */}
          <div className="flex items-center gap-4">
            <label className="w-36 font-medium text-gray-800">ID laporan</label>
            <div className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium w-60 text-center">
              LPR25838
            </div>
          </div>

          {/* Prioritas (readonly) */}
          <div className="flex items-center gap-4">
            <label className="w-36 font-medium text-gray-800">Prioritas</label>
            <div className="w-60 bg-green-500 text-white text-sm font-semibold text-center py-2 rounded-md shadow-sm">
              Rendah
            </div>
          </div>

          {/* Status (readonly) */}
          <div className="flex items-center gap-4">
            <label className="w-36 font-medium text-gray-800">Status</label>
            <div className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium w-60 text-center">
              Draft
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
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 bg-gray-100"
          />
        </div>

        {/* Kategori & Jenis */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Kategori Aset</label>
            <div className="bg-gray-200 text-gray-700 px-3 py-2 rounded-md text-sm">
              Jaringan
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Jenis Aset</label>
            <div className="bg-gray-200 text-gray-700 px-3 py-2 rounded-md text-sm">
              TI
            </div>
          </div>
        </div>

        {/* Bentuk & Data */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Bentuk Aset</label>
            <div className="bg-gray-200 text-gray-700 px-3 py-2 rounded-md text-sm">
              Fisik
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Data Aset</label>
            <div className="bg-gray-200 text-gray-700 px-3 py-2 rounded-md text-sm">
              Router TP-Link
            </div>
          </div>
        </div>

        {/* Lokasi */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">Lokasi Kejadian</label>
          <div className="w-1/2 bg-gray-200 text-gray-700 px-3 py-2 rounded-md text-sm">
            Dinas Pendidikan Kantor 2 Lantai 2
          </div>
        </div>

        {/* Pilih Teknisi + Avatar pratinjau */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">Pilih Teknisi</label>
          <div className="max-w-md">
            <select
              value={selectedTeknisi}
              onChange={(e) => setSelectedTeknisi(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:ring-1 focus:ring-[#0F2C59] focus:outline-none"
            >
              {/* Placeholder hanya tampil sebagai value awal — tidak muncul di list */}
              <option value="" disabled hidden>
                Pilih teknisi
              </option>
              {daftarTeknisi.map((t) => (
                <option key={t.nama} value={t.nama}>
                  {t.nama}
                </option>
              ))}
            </select>

            {teknisiObj && (
              <div className="flex items-center gap-2 mt-3 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 w-fit">
                <img
                  src={teknisiObj.avatar}
                  alt={teknisiObj.nama}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-gray-800 text-sm font-medium">
                  {teknisiObj.nama}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Jadwal pengerjaan */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pengerjaan Awal
            </label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sampai
            </label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700"
            />
          </div>
        </div>

        {/* Rincian Masalah */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">Rincian Masalah</label>
          <textarea
            readOnly
            rows="3"
            defaultValue="ROUTER DI RUANG ANA RUSAK AMBG"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 bg-gray-100"
          ></textarea>
        </div>

        {/* Lampiran */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">Lampiran File</label>
          <div className="flex items-center gap-2 bg-gray-200 rounded-md px-3 py-2 w-fit">
            <FileText className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-gray-700">bukti-laporan.pdf</span>
          </div>
        </div>

        {/* Penyelesaian */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">
            Penyelesaian yang Diharapkan
          </label>
          <textarea
            readOnly
            rows="2"
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
            <button className="text-[#0F2C59] underline text-sm hover:text-[#15397A] font-medium">
              Simpan Draft
            </button>
            <button
              onClick={handleSubmit}
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
