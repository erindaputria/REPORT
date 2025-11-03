import React from "react";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function RateKota() {
  const navigate = useNavigate();

  const dataRating = [
    { nama: "Dinas Pendidikan", rating: 4.7, icon: "/assets/Dinas Pendidikan.png" },
    { nama: "Dinas Kesehatan", rating: 4.9, icon: "/assets/Dinas Kesehatan.png" },
    { nama: "Dinas Perhubungan", rating: 4.4, icon: "/assets/Dinas Perhubungan.png" },
    { nama: "Dinas Sosial", rating: 4.5, icon: "/assets/Dinas Sosial.png" },
    { nama: "Dinas Sumber Daya Air dan Bina Marga", rating: 4.7, icon: "/assets/Dinas Sumber Daya Air dan Bina Marga.png" },
    { nama: "Dinas Perumahan Rakyat dan Kawasan Permukiman serta Pertanahan", rating: 4.8, icon: "/assets/Dinas Perumahan Rakyat dan Kawasan Permukiman serta Pertanahan.png" },
    { nama: "Dinas Pemadam Kebakaran dan Penyelamatan", rating: 4.3, icon: "/assets/Dinas Pemadam Kebakaran dan Penyelamatan.png" },
    { nama: "Dinas Perindustrian dan Tenaga Kerja", rating: 4.6, icon: "/assets/Dinas Perindustrian dan Tenaga Kerja.png" },
    { nama: "Dinas Ketahanan Pangan dan Pertanian", rating: 4.2, icon: "/assets/Dinas Ketahanan Pangan dan Pertanian.png" },
    { nama: "Dinas Perpustakaan dan Kearsipan", rating: 4.7, icon: "/assets/Dinas Perpustakaan dan Kearsipan.png" },
    { nama: "Dinas Komunikasi dan Informatika", rating: 4.8, icon: "/assets/Dinas Komunikasi dan Informatika.png" },
    { nama: "Dinas Lingkungan Hidup", rating: 4.5, icon: "/assets/Dinas Lingkungan Hidup.png" },
    { nama: "Dinas Kependudukan dan Pencatatan Sipil", rating: 4.8, icon: "/assets/Dinas Kependudukan dan Pencatatan Sipil.png" },
    { nama: "Dinas Koperasi Usaha Kecil dan Menengah dan Perdagangan", rating: 4.9, icon: "/assets/Dinas Koperasi Usaha Kecil dan Menengah dan Perdagangan.png" },
    { nama: "Dinas Kebudayaan, Kepemudaan dan Olah Raga serta Pariwisata", rating: 4.6, icon: "/assets/Dinas Kebudayaan, Kepemudaan dan Olah Raga serta Pariwisata.png" },
    { nama: "Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu", rating: 4.8, icon: "/assets/Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu.png" },
    { nama: "Satuan Polisi Pamong Praja", rating: 4.3, icon: "/assets/Satuan Polisi Pamong Praja.png" },
    { nama: "Dinas Pemberdayaan Perempuan dan Perlindungan Anak", rating: 4.5, icon: "/assets/Dinas Pemberdayaan Perempuan dan Perlindungan Anak.png" },
  ];

  return (
    <div className="p-6">
      {/* Judul Halaman */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[#0F2C59]">
          Rating Kepuasan Pengguna
        </h1>
        <p className="text-gray-500">
          Cek rating berdasarkan survei penyelesaian tiket
        </p>
      </div>

      {/* Grid 2 Kolom */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {dataRating.map((item, index) => (
          <button
            key={index}
            onClick={() => navigate(`/RateKotaOpd/${encodeURIComponent(item.nama)}`)}
            className="flex items-center justify-between bg-[#0F2C59] text-white px-5 py-3 rounded-xl shadow hover:shadow-lg transition-all duration-200 hover:scale-[1.01]"
          >
            <div className="flex items-center gap-3 text-left">
              <img
                src={item.icon}
                alt={item.nama}
                className="w-10 h-10 rounded-full object-cover border border-white"
              />
              <span className="font-medium text-sm md:text-base leading-snug">
                {item.nama}
              </span>
            </div>

            <div className="flex items-center gap-1 bg-white text-[#0F2C59] px-3 py-1 rounded-lg font-semibold text-sm">
              <Star size={16} fill="#FFD700" color="#FFD700" />
              {item.rating.toFixed(1)}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
