import React, { useState } from "react";
import LeftSidebar from "../../components/Layout/LeftSidebar";
import Header from "../../components/Header";
import { useNavigate, useLocation } from "react-router-dom";
import { Star } from "lucide-react";

export default function BeriRating() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const laporan = state?.item || {};

  // === State rating ===
  const [mainRating, setMainRating] = useState(0);
  const [easeRating, setEaseRating] = useState(0);
  const [speedRating, setSpeedRating] = useState(0);
  const [qualityRating, setQualityRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    const data = {
      idTiket: laporan.id || "LPR321336",
      mainRating,
      easeRating,
      speedRating,
      qualityRating,
      comment,
    };
    console.log("Data dikirim:", data);
    alert("Rating berhasil dikirim!");
    navigate("/riwayat");
  };

  return (
    <div className="flex min-h-screen bg-[#F9FAFB]">
      <LeftSidebar />
      <div className="flex-1 flex flex-col">
        <Header />

        <div className="p-6">
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 relative overflow-hidden max-w-5xl mx-auto">
            {/* Background wave */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-[url('/assets/wave.svg')] bg-cover opacity-10 pointer-events-none"></div>

            {/* Judul tengah */}
            <h2 className="text-2xl font-bold text-[#0F2C59] text-center mb-8 border-b pb-4">
              Rating
            </h2>

            {/* Pengirim dan ID Tiket */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <p className="font-semibold text-gray-600 w-40">Pengirim</p>
                <div className="flex items-center gap-3">
                  <img
                    src="/assets/Anya.jpg"
                    alt="pengirim"
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <p className="text-gray-800 font-medium">Sri Wulandari</p>
                </div>
              </div>
              <div className="flex items-center">
                <p className="font-semibold text-gray-600 w-40">ID Tiket</p>
                <div className="bg-gray-100 text-gray-800 rounded-lg px-3 py-2 text-sm font-medium">
                  {laporan.id || "LPR321336"}
                </div>
              </div>
            </div>

            {/* Rating utama */}
            <div className="mb-8">
              <p className="font-semibold text-gray-600 mb-2">
                Rating Kepuasan Pelayanan Kami
              </p>
              <div className="flex gap-1 text-[#0F2C59]">
                {[1, 2, 3, 4, 5].map((num) => (
                  <Star
                    key={num}
                    size={24}
                    className="cursor-pointer transition"
                    fill={num <= mainRating ? "#0F2C59" : "none"}
                    stroke="#0F2C59"
                    onClick={() => setMainRating(num)}
                  />
                ))}
              </div>
            </div>

            {/* Komentar */}
            <div className="mb-8">
              <p className="font-semibold text-gray-600 mb-1">Komentar</p>
              <textarea
                placeholder="Ketik di sini..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full bg-gray-100 rounded-lg p-3 text-gray-800 text-sm resize-none h-24 leading-relaxed focus:outline-none focus:ring-2 focus:ring-[#0F2C59]"
              />
            </div>

            {/* Rating tambahan */}
            <div className="space-y-4 mb-8">
              {/* Kemudahan Penggunaan */}
              <div className="flex items-center justify-between">
                <p className="font-semibold text-gray-600">
                  Kemudahan Penggunaan
                </p>
                <div className="flex gap-1 text-[#0F2C59]">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <Star
                      key={num}
                      size={20}
                      className="cursor-pointer transition"
                      fill={num <= easeRating ? "#0F2C59" : "none"}
                      stroke="#0F2C59"
                      onClick={() => setEaseRating(num)}
                    />
                  ))}
                </div>
              </div>

              {/* Kecepatan Penanganan */}
              <div className="flex items-center justify-between">
                <p className="font-semibold text-gray-600">
                  Kecepatan Penanganan
                </p>
                <div className="flex gap-1 text-[#0F2C59]">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <Star
                      key={num}
                      size={20}
                      className="cursor-pointer transition"
                      fill={num <= speedRating ? "#0F2C59" : "none"}
                      stroke="#0F2C59"
                      onClick={() => setSpeedRating(num)}
                    />
                  ))}
                </div>
              </div>

              {/* Kualitas Penyelesaian */}
              <div className="flex items-center justify-between">
                <p className="font-semibold text-gray-600">
                  Kualitas Penyelesaian
                </p>
                <div className="flex gap-1 text-[#0F2C59]">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <Star
                      key={num}
                      size={20}
                      className="cursor-pointer transition"
                      fill={num <= qualityRating ? "#0F2C59" : "none"}
                      stroke="#0F2C59"
                      onClick={() => setQualityRating(num)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Tombol aksi */}
            <div className="flex justify-start gap-3">
              <button
                onClick={() => navigate(-1)}
                className="border border-gray-400 text-gray-700 px-5 py-2 rounded-lg text-sm hover:bg-gray-100 transition"
              >
                Batal
              </button>
              <button
                onClick={handleSubmit}
                className="bg-[#0F2C59] text-white px-5 py-2 rounded-lg text-sm hover:bg-[#15397A] transition"
              >
                Kirim
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
