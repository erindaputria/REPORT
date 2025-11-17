import React, { useState, useRef, useEffect } from "react";
import { ArrowRight, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function KnowledgeBase() {
  const navigate = useNavigate();
  const [deleteMode, setDeleteMode] = useState(false);
  const [selected, setSelected] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showArticlePopup, setShowArticlePopup] = useState(false);
  const searchRef = useRef(null);

  const data = [
    {
      judul: "Cara Login ke Sistem Menggunakan Akun SSO",
      kategori: "Akun dan SSO",
    },
    {
      judul: "Panduan Aktivasi Akun Email Dinas Baru",
      kategori: "Akun dan SSO",
    },
    {
      judul: "Cara Reset Password untuk Akun SSO",
      kategori: "Akun dan SSO",
    },
    {
      judul: "Cara Membuat Tiket Laporan Baru di Sistem",
      kategori: "Pelaporan dan Pelayanan",
    },
    {
      judul: "Langkah-Langkah Melihat Status Tiket",
      kategori: "Pelaporan dan Pelayanan",
    },
    {
      judul: "Cara Melihat Riwayat Laporan Tiket Sebelumnya",
      kategori: "Pelaporan dan Pelayanan",
    },
    {
      judul: "Arti Warna dan Status Tiket",
      kategori: "Pelaporan dan Pelayanan",
    },
    {
      judul: "Langkah-Langkah untuk Permohonan Pelayanan",
      kategori: "Pelaporan dan Pelayanan",
    },
    {
      judul: "Cara Melaporkan Tiket yang Salah Kategori",
      kategori: "Pelaporan dan Pelayanan",
    },
    {
      judul: "Tambah Dokumen Pendukung Permintaan",
      kategori: "Layanan dan Formulir",
    },
    {
      judul: "Cara Mengisi Formulir Pelaporan",
      kategori: "Layanan dan Formulir",
    },
    {
      judul: "Cara Mengisi Formulir Pelayanan",
      kategori: "Layanan dan Formulir",
    },
  ];

  const categories = [
    "Semua",
    "Pelaporan dan Pelayanan",
    "Akun dan SSO",
    "Layanan dan Formulir",
  ];

  // Filter suggestions berdasarkan pencarian
  const filteredSuggestions = data.filter((item) => {
    const judulText =
      typeof item.judul === "string"
        ? item.judul
        : item.judul.props.children.join(" ");
    return judulText.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const filteredData =
    activeCategory === "Semua"
      ? data
      : data.filter((item) => item.kategori === activeCategory);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setShowSuggestions(e.target.value.length > 0);
  };

  const handleSuggestionClick = (judul) => {
    const judulText =
      typeof judul === "string" ? judul : judul.props.children.join(" ");
    setSearchQuery(judulText);
    setShowSuggestions(false);
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDeleteMode = () => {};

  const toggleSelect = (judul) => {
    setSelected((prev) =>
      prev.includes(judul)
        ? prev.filter((item) => item !== judul)
        : [...prev, judul]
    );
  };

  const handleArrowClick = () => {
    setShowArticlePopup(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="py-4 md:py-8">
        {/* Container utama  */}
        <div className="w-full px-4">
          {/* Container putih utama */}
          <div className="bg-white rounded-xl md:rounded-2xl shadow-lg py-4 md:py-6 lg:py-8 px-4 md:px-6 lg:px-8 w-full">
            {/* Header dengan judul dan deskripsi */}
            <div className="text-center space-y-2 md:space-y-3 mb-6 md:mb-8">
              <h1 className="text-2xl md:text-3xl font-bold text-[#226597]">
                Knowledge Base
              </h1>
              <p className="text-gray-600 text-sm md:text-lg">
                Pelajari dan cari solusi yang Anda butuhkan
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-3xl mx-auto mb-6 md:mb-8">
              <div className="relative" ref={searchRef}>
                <input
                  type="text"
                  placeholder="Cari di sini"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() => setShowSuggestions(searchQuery.length > 0)}
                  className="w-full text-left px-4 md:px-6 py-3 md:py-4 bg-white border border-gray-300 rounded-2xl md:rounded-3xl shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#226597] transition-all text-sm md:text-lg pr-12 md:pr-16"
                />
                <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1639_3478)">
                      <path
                        d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                        stroke="#113F67"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.9999 18.9999L14.6499 14.6499"
                        stroke="#113F67"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1639_3478">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                {/* Suggestions Dropdown */}
                {showSuggestions && filteredSuggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-xl md:rounded-2xl shadow-lg mt-2 z-50 max-h-60 overflow-y-auto">
                    {filteredSuggestions.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(item.judul)}
                        className="w-full text-left px-4 md:px-6 py-2 md:py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                      >
                        <div className="font-medium text-gray-800 text-sm md:text-base">
                          {item.judul}
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Kategori Filter */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6 md:mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 py-2 md:px-6 md:py-3 rounded-lg transition-all font-medium text-xs md:text-sm ${
                    activeCategory === category
                      ? "bg-[#226597] text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Grid Artikel */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
              {filteredData.map((item, index) => (
                <div
                  key={index}
                  className={`relative bg-white border border-gray-200 rounded-xl md:rounded-2xl shadow-md p-4 md:p-6 flex flex-col justify-between hover:shadow-lg transition-all min-h-[140px] md:min-h-[160px] ${
                    selected.includes(item.judul) ? "ring-2 ring-red-400" : ""
                  }`}
                >
                  {/* Checkbox hanya muncul saat delete mode */}
                  {deleteMode && (
                    <input
                      type="checkbox"
                      checked={selected.includes(item.judul)}
                      onChange={() => toggleSelect(item.judul)}
                      className="absolute top-3 left-3 md:top-4 md:left-4 w-4 h-4 md:w-5 md:h-5 accent-red-500 cursor-pointer"
                    />
                  )}

                  <div className={`${deleteMode ? "pl-6 md:pl-8" : ""}`}>
                    <h3 className="font-semibold text-gray-800 mb-2 md:mb-3 text-sm md:text-base leading-tight line-clamp-2">
                      {item.judul}
                    </h3>
                    <span className="inline-block px-2 py-1 md:px-3 md:py-1 text-xs font-medium rounded-lg bg-[#226597] text-white">
                      {item.kategori}
                    </span>
                  </div>

                  <div className="flex justify-end mt-3 md:mt-4">
                    <button
                      onClick={handleArrowClick}
                      disabled={deleteMode}
                      className={`flex items-center text-[#226597] hover:text-[#15397A] transition-all ${
                        deleteMode ? "opacity-30 cursor-not-allowed" : ""
                      }`}
                    >
                      <ArrowRight size={18} className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Article Popup */}
      {showArticlePopup && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            {/* Popup Content */}
            <div className="bg-white rounded-xl md:rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
              {/* Header */}
              <div className="bg-white text-[#226597] p-4 md:p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h2 className="text-lg md:text-2xl font-bold">
                      Panduan Cek Knowledge Base
                    </h2>
                    <div className="mt-1 md:mt-2 text-xs md:text-sm text-black opacity-90">
                      <p>Dari: Friska Farinda</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 ml-4">
                    {/* Button X di atas, card Akun dan SSO di bawah */}
                    <button
                      onClick={() => setShowArticlePopup(false)}
                      className="text-black hover:bg-black hover:bg-opacity-10 rounded-full p-1 md:p-2 transition-all"
                    >
                      <X size={20} className="w-4 h-4 md:w-6 md:h-6" />
                    </button>
                    <span className="bg-[#226597] text-white px-2 py-1 md:px-3 md:py-1 rounded-lg text-xs md:text-sm font-medium">
                      Akun dan SSO
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-6 max-h-[60vh] overflow-y-auto">
                <div className="prose max-w-none">
                  {/* Gambar ilustrasi */}
                  <img
                    src="/assets/konten.png"
                    alt="Konten ilustrasi"
                    className="w-full rounded-xl mb-4 md:mb-6 object-cover"
                  />

                  {/* Paragraf isi konten */}
                  <p className="mb-3 md:mb-4 text-sm md:text-base leading-relaxed text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc nec nibh faucibus, vehicula justo vel, eleifend lentor.
                    Donec molestie tortor justo, ut posuere tortor efficitur i
                    sed. Suspendisse velit magna, commodo id enim sed, elementum
                    ultricies erat. Duis feugiat ligula o volutpat molestie.
                    Donec non elit ac est viverra tincidunt in eget lorem. Eliam
                    condimentum ante o consequat cursus. Sed efficitur maximus
                    pharetra. Curabitur dui metus, koreet in consectetur quis,
                    blandit sed velit. Nunc sapien tellus, semper id est ut,
                    egestra depulsa lacus. Nunc pretium vehicula efficitur.
                    Mordi sed orci ultramcorper, poran mi eu, volutpat crasi.
                    Cras non finibus nisi. Donec et urma or punta accumsan
                    molestie.
                  </p>

                  <p className="mb-3 md:mb-4 text-sm md:text-base leading-relaxed text-gray-700">
                    Pellentesque suscipit nunc vel orci rutrum vulputate. Sed
                    sit amet ex congue augue vestibulum disquent. Pellentesque
                    hebdom mordi tristique senectus et netus et malesuado forma
                    eci turpis egestas. Nam et dulce quem finibus rhoncus quis
                    et enim. Nullam vel viverra felis, sed vehicula vitae. Duis
                    pretium ipsum dolor, imperdiet velit quis gravida massa.
                    Nunc quis ex ac metus eleifend imperdiet eu ut est. Nullam
                    eleifend vehicula metus ac egestas. Sed sit amet risus
                    lectus. Sed vehicula, risus vulputate convollis blandit,
                    sapien lacus sollicitudin libero, o disquam enim justo oc
                    orne.
                  </p>

                  <p className="mb-4 md:mb-6 text-sm md:text-base leading-relaxed text-gray-700">
                    Pellentesque hebdom mordi tristique senectus et netus et
                    malesuado forma eci turpis egestas. Nunc finibus uma eget
                    faucibus imperdiet. Proseluis lectus odio, disquet vitae ex
                    vel, consectetur eleifend ipsam. Proseluis euismod ligula eu
                    efficitur laicus. Sed pretium tempor nullis. Aenean non
                    bibendum velit. Donec viverra tortor a tristique maximus.
                    Mouris non metus metus. Integer ex dolor, locula in leo et,
                    facilisis ornero tellus. Sed et purus velit. Proseluis
                    efficita venenatis felis, a semper quem cursus a ham
                    lobortis ultricies est vitae locerot. Afiquam non magna
                    vitae odio vehicula venenatis. Fusce tiringilla dolor quis
                    risus mattis, sit amet egestas sem dignissim.
                  </p>

                  <hr className="my-4 md:my-6 border-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
