import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

export default function DetailRating() {
  const navigate = useNavigate();

  const ratingData = {
    pengirim: "Widiya Karim",
    idTiket: "LPR823838",
    ratingPelayanan: 5,
    komentar: "yayayayayap",
    selesai: true,
    aspek: {
      kemudahan: 5,
      kecepatan: 4,
      kualitas: 5,
    },
  };

  const renderStars = (count) =>
    Array.from({ length: 5 }).map((_, i) => (
      <StarIcon
        key={i}
        className={`h-5 w-5 ${
          i < count ? "text-[#0F2C59]" : "text-gray-300"
        }`}
      />
    ));

  return (
    <div className="min-h-screen bg-[#f8fafc] py-8 px-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-4xl mx-auto">
        {/* === Judul === */}
        <h1 className="text-3xl font-bold text-[#0F2C59] text-center mb-8">
          Rating
        </h1>

        {/* === Pengirim dan ID Tiket (value di kanan tapi tidak ke ujung kanan) === */}
        <div className="space-y-4 mb-8">
          {/* Pengirim */}
          <div className="flex items-center">
            <label className="text-gray-600 text-sm font-medium w-32">
              Pengirim
            </label>
            <div className="flex items-center gap-2">
              <img
                src="/assets/shizuku.jpg"
                alt={ratingData.pengirim}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="font-medium text-gray-800">
                {ratingData.pengirim}
              </span>
            </div>
          </div>

          {/* ID Tiket */}
          <div className="flex items-center">
            <label className="text-gray-600 text-sm font-medium w-32">
              ID Tiket
            </label>
            <div className="bg-gray-300 px-14 py-2 rounded-lg text-gray-700 font-medium w-fit">
              {ratingData.idTiket}
            </div>
          </div>
        </div>

        {/* === Rating Kepuasan === */}
        <div className="mb-6">
          <label className="text-gray-800 font-semibold block mb-2">
            Rating Kepuasan Pelayanan Kami
          </label>
          <div className="flex">{renderStars(ratingData.ratingPelayanan)}</div>
        </div>

        {/* === Komentar === */}
        <div className="mb-6">
          <label className="text-gray-800 font-semibold block mb-2">
            Komentar
          </label>
          <textarea
            className="w-full bg-gray-100 rounded-lg p-3 text-gray-700 text-sm resize-none h-24"
            value={ratingData.komentar}
            readOnly
          />
        </div>

        {/* === Apakah Masalah Selesai === */}
        <div className="flex items-center justify-between mb-6">
          <label className="text-gray-800 font-semibold">
            Apakah Masalah Anda Sudah Terselesaikan?
          </label>
          <button className="bg-[#0F2C59] text-white px-5 py-2 rounded-full text-sm font-medium shadow-sm">
            Ya
          </button>
        </div>

        {/* === Aspek Rating === */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-between">
            <label className="text-gray-700 font-medium w-64">
              Kemudahan Penggunaan
            </label>
            <div className="flex">{renderStars(ratingData.aspek.kemudahan)}</div>
          </div>

          <div className="flex items-center justify-between">
            <label className="text-gray-700 font-medium w-64">
              Kecepatan Penanganan
            </label>
            <div className="flex">{renderStars(ratingData.aspek.kecepatan)}</div>
          </div>

          <div className="flex items-center justify-between">
            <label className="text-gray-700 font-medium w-64">
              Kualitas Penyelesaian
            </label>
            <div className="flex">{renderStars(ratingData.aspek.kualitas)}</div>
          </div>
        </div>

        {/* === Tombol Batalkan === */}
        <div className="flex justify-start">
          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2 rounded-lg border border-gray-300 text-gray-600 font-medium hover:bg-gray-100 transition"
          >
            Batalkan
          </button>
        </div>
      </div>
    </div>
  );
}
