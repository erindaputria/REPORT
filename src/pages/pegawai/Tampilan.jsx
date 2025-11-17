import React, { useState } from "react";
import LayoutPegawai from "../../components/Layout/LayoutPegawai";

export default function Dashboard() {
  const [selectedTheme, setSelectedTheme] = useState("terang");
  const [selectedFontSize, setSelectedFontSize] = useState("medium");

  const themeOptions = [
    {
      id: "sistem",
      name: "Sistem",
      preview: (
        <div className="w-12 h-10 md:w-16 md:h-12 bg-gradient-to-br from-gray-200 to-gray-400 rounded border-2 border-gray-300 relative overflow-hidden">
          <div className="absolute top-1 left-1 w-1 h-4 md:h-6 bg-orange-400 rounded-full"></div>
          <div className="absolute top-1.5 md:top-2 right-1 space-y-0.5 md:space-y-1">
            <div className="w-6 md:w-8 h-0.5 md:h-1 bg-blue-500 rounded"></div>
            <div className="w-4 md:w-6 h-0.5 md:h-1 bg-gray-600 rounded"></div>
            <div className="w-5 md:w-7 h-0.5 md:h-1 bg-gray-600 rounded"></div>
          </div>
          <div className="absolute bottom-1 left-1 right-1 space-y-0.5">
            <div className="w-full h-0.5 md:h-1 bg-gray-600 rounded"></div>
            <div className="w-3/4 h-0.5 md:h-1 bg-gray-600 rounded"></div>
            <div className="w-1/2 h-0.5 md:h-1 bg-gray-600 rounded"></div>
          </div>
        </div>
      ),
    },
    {
      id: "terang",
      name: "Terang",
      preview: (
        <div className="w-12 h-10 md:w-16 md:h-12 bg-white rounded border-2 border-gray-300 relative overflow-hidden">
          <div className="absolute top-1 left-1 w-1 h-4 md:h-6 bg-orange-400 rounded-full"></div>
          <div className="absolute top-1.5 md:top-2 right-1 space-y-0.5 md:space-y-1">
            <div className="w-6 md:w-8 h-0.5 md:h-1 bg-blue-500 rounded"></div>
            <div className="w-4 md:w-6 h-0.5 md:h-1 bg-gray-400 rounded"></div>
            <div className="w-5 md:w-7 h-0.5 md:h-1 bg-gray-400 rounded"></div>
          </div>
          <div className="absolute bottom-1 left-1 right-1 space-y-0.5">
            <div className="w-full h-0.5 md:h-1 bg-gray-400 rounded"></div>
            <div className="w-3/4 h-0.5 md:h-1 bg-gray-400 rounded"></div>
            <div className="w-1/2 h-0.5 md:h-1 bg-gray-400 rounded"></div>
          </div>
          <div className="absolute bottom-1 left-2 w-1.5 md:w-2 h-1.5 md:h-2 bg-blue-500 rounded-full"></div>
        </div>
      ),
    },
    {
      id: "gelap",
      name: "Gelap",
      preview: (
        <div className="w-12 h-10 md:w-16 md:h-12 bg-gray-800 rounded border-2 border-gray-600 relative overflow-hidden">
          <div className="absolute top-1 left-1 w-1 h-4 md:h-6 bg-orange-400 rounded-full"></div>
          <div className="absolute top-1.5 md:top-2 right-1 space-y-0.5 md:space-y-1">
            <div className="w-6 md:w-8 h-0.5 md:h-1 bg-blue-400 rounded"></div>
            <div className="w-4 md:w-6 h-0.5 md:h-1 bg-gray-400 rounded"></div>
            <div className="w-5 md:w-7 h-0.5 md:h-1 bg-gray-400 rounded"></div>
          </div>
          <div className="absolute bottom-1 left-1 right-1 space-y-0.5">
            <div className="w-full h-0.5 md:h-1 bg-gray-400 rounded"></div>
            <div className="w-3/4 h-0.5 md:h-1 bg-gray-400 rounded"></div>
            <div className="w-1/2 h-0.5 md:h-1 bg-gray-400 rounded"></div>
          </div>
        </div>
      ),
    },
  ];

  const fontSizes = [
    { id: "kecil", label: "Aa", size: "text-xs md:text-sm" },
    { id: "sedang", label: "Aa", size: "text-base md:text-lg" },
    { id: "besar", label: "Aa", size: "text-xl md:text-2xl" },
  ];

  return (
    <LayoutPegawai>
      {/* Main Content */}
      <div className="min-h-screen bg-gray-50 pt-4">
        <div className="px-4 md:px-6 py-4 md:py-8">
          <div className="w-full max-w-8xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-semibold text-[#226597] mb-4 md:mb-6 text-left">
              Tampilan
            </h1>

            {/* Preferences Section */}
            <div className="bg-white rounded-xl md:rounded-2xl shadow-md p-4 md:p-6 lg:p-8 mb-6 md:mb-8 flex flex-col md:flex-row items-start justify-between gap-6 md:gap-8">
              {/* Kiri: Title + Deskripsi */}
              <div className="w-full md:w-1/3">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 md:mb-3 text-left">
                  Preferensi
                </h2>
                <p className="text-gray-600 text-sm text-left">
                  Pilih preferensi tampilan Anda
                </p>
              </div>

              {/* Kanan: Pilihan Tema */}
              <div className="w-full md:flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                {themeOptions.map((theme) => (
                  <div key={theme.id} className="text-left">
                    <button
                      onClick={() => setSelectedTheme(theme.id)}
                      className={`w-full mb-2 md:mb-3 p-4 md:p-6 rounded-lg md:rounded-xl border-2 transition-all duration-200 ${
                        selectedTheme === theme.id
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      {theme.preview}
                    </button>
                    <p className="text-sm font-medium text-gray-700">
                      {theme.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Font Size Section */}
            <div className="bg-white rounded-xl md:rounded-2xl shadow-md p-4 md:p-6 lg:p-8 mb-6 md:mb-8 flex flex-col md:flex-row items-start justify-between gap-6 md:gap-8">
              {/* Title + Deskripsi */}
              <div className="w-full md:w-1/3">
                <h2 className="text-xl font-semibold text-gray-800 mb-2 text-left">
                  Ukuran Font
                </h2>
                <p className="text-gray-600 text-sm text-left">
                  Pilih ukuran font yang Anda inginkan
                </p>
              </div>

              {/* Pilihan Font */}
              <div className="w-full md:flex-1 flex flex-col sm:flex-row items-center gap-4 md:gap-6 lg:gap-8">
                {fontSizes.map((font, index) => (
                  <div key={font.id} className="text-left">
                    <button
                      onClick={() => setSelectedFontSize(font.id)}
                      className={`w-12 h-12 md:w-16 md:h-16 mb-2 md:mb-3 flex items-center justify-center rounded-lg md:rounded-xl border-2 transition-all duration-200 ${
                        selectedFontSize === font.id
                          ? "border-blue-500 bg-blue-50 text-blue-600"
                          : "border-gray-200 hover:border-gray-300 text-gray-600"
                      }`}
                    >
                      <span
                        className={`font-medium ${font.size} ${
                          index === 0
                            ? "text-gray-400"
                            : index === 1
                            ? "text-gray-600"
                            : "text-gray-800"
                        }`}
                      >
                        {font.label}
                      </span>
                    </button>
                    <p className="text-xs md:text-sm text-gray-600 capitalize">
                      {font.id}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 md:mt-16 p-4 md:p-6 bg-white rounded-xl md:rounded-2xl shadow-sm flex flex-col-reverse sm:flex-row justify-end gap-3 md:gap-4">
              {/* Tombol Batalkan */}
              <button className="px-4 py-2.5 md:px-6 md:py-3 bg-white border border-gray-200 rounded-lg md:rounded-xl shadow-sm text-gray-600 hover:text-gray-800 hover:border-gray-300 font-medium transition-all duration-200 w-full sm:w-auto">
                Batalkan
              </button>

              {/* Tombol Simpan Perubahan */}
              <button className="px-4 py-2.5 md:px-6 md:py-3 bg-[#226597] text-white rounded-lg md:rounded-xl shadow-md hover:bg-[#1e5a87] font-medium transition-all duration-200 w-full sm:w-auto mb-3 sm:mb-0">
                Simpan perubahan
              </button>
            </div>
          </div>
        </div>
      </div>
    </LayoutPegawai>
  );
}
