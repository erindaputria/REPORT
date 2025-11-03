import React, { useState } from "react";
import { Plus, Trash2, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function KBEditorKota() {
  const navigate = useNavigate();
  const [deleteMode, setDeleteMode] = useState(false);
  const [selected, setSelected] = useState([]);

  const data = [
    { judul: "Cara Login ke Sistem Menggunakan Akun SSO", kategori: "Akun dan SSO" },
    { judul: "Panduan Aktivasi Akun Email Dinas Baru", kategori: "Akun dan SSO" },
    { judul: "Cara Reset Password untuk Akun SSO", kategori: "Akun dan SSO" },
    { judul: "Cara Membuat Tiket Laporan Baru di Sistem", kategori: "Pelaporan dan Pelayanan" },
    { judul: "Langkah-langkah Melihat Status Tiket", kategori: "Pelaporan dan Pelayanan" },
    { judul: "Cara Melihat Riwayat Laporan Tiket Sebelumnya", kategori: "Pelaporan dan Pelayanan" },
    { judul: "Arti Warna dan Status Tiket", kategori: "Pelaporan dan Pelayanan" },
    { judul: "Langkah-langkah untuk Permohonan Pelayanan", kategori: "Pelaporan dan Pelayanan" },
    { judul: "Cara Melaporkan Tiket yang Salah Kategori", kategori: "Pelaporan dan Pelayanan" },
    { judul: "Tambah Dokumen Pendukung Permintaan", kategori: "Layanan dan Formulir" },
    { judul: "Cara Mengisi Formulir Pelaporan", kategori: "Layanan dan Formulir" },
    { judul: "Cara Mengisi Formulir Pelayanan", kategori: "Layanan dan Formulir" },
  ];

  const handleDeleteMode = () => {
    // Jika deleteMode sedang aktif, tampilkan SweetAlert konfirmasi hapus
    if (deleteMode && selected.length > 0) {
      Swal.fire({
        title: "Apakah Anda yakin ingin menghapus?",
        html: `
          <p>Artikel yang akan dihapus:</p>
          <ul style="text-align:left;margin-top:10px">
            ${selected.map((s) => `<li>• ${s}</li>`).join("")}
          </ul>
        `,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Ya, hapus",
        cancelButtonText: "Batal",
        confirmButtonColor: "#0F2C59",
        cancelButtonColor: "#d33",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            icon: "success",
            title: "Berhasil!",
            text: `${selected.length} artikel berhasil dihapus.`,
            confirmButtonColor: "#0F2C59",
          });
          setSelected([]);
          setDeleteMode(false);
        }
      });
    } else if (deleteMode && selected.length === 0) {
      Swal.fire({
        icon: "info",
        title: "Belum ada yang dipilih",
        text: "Pilih artikel yang ingin dihapus terlebih dahulu.",
        confirmButtonColor: "#0F2C59",
      });
    } else {
      // Aktifkan mode hapus
      setDeleteMode(true);
    }
  };

  const toggleSelect = (judul) => {
    setSelected((prev) =>
      prev.includes(judul)
        ? prev.filter((item) => item !== judul)
        : [...prev, judul]
    );
  };

  return (
    <div className="p-6 space-y-6">
      {/* Tombol Tambah dan Hapus */}
      <div className="flex gap-3">
        <button
          className="flex items-center gap-2 bg-[#0F2C59] text-white px-4 py-2 rounded-xl shadow hover:bg-[#15397A] transition-all"
        >
          <Plus size={16} />
          Tambah
        </button>

        <button
          onClick={handleDeleteMode}
          className={`flex items-center gap-2 ${
            deleteMode
              ? "bg-gray-400 hover:bg-gray-500"
              : "bg-red-500 hover:bg-red-600"
          } text-white px-4 py-2 rounded-xl shadow transition-all`}
        >
          <Trash2 size={16} />
          {deleteMode ? "Selesai" : "Hapus"}
        </button>
      </div>

      {/* Grid Artikel */}
      <div className="grid grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className={`relative bg-white border border-gray-200 rounded-2xl shadow-md p-4 flex flex-col justify-between hover:shadow-lg transition-all ${
              selected.includes(item.judul) ? "ring-2 ring-red-400" : ""
            }`}
          >
            {/* Checkbox hanya muncul saat delete mode */}
            {deleteMode && (
              <input
                type="checkbox"
                checked={selected.includes(item.judul)}
                onChange={() => toggleSelect(item.judul)}
                className="absolute top-3 left-3 w-4 h-4 accent-red-500 cursor-pointer"
              />
            )}

            <div className={`${deleteMode ? "pl-6" : ""}`}>
              <h3 className="font-semibold text-gray-800 mb-2">{item.judul}</h3>
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-lg bg-[#0F2C59] text-white">
                {item.kategori}
              </span>
            </div>

            <div className="flex justify-end mt-4">
              <button
                onClick={() => navigate("/lihatartikelkota")}
                disabled={deleteMode}
                className={`flex items-center text-[#0F2C59] hover:text-[#15397A] transition-all ${
                  deleteMode ? "opacity-30 cursor-not-allowed" : ""
                }`}
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
