import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { XCircle } from "lucide-react";
import LayoutBidang from "../../components/Layout/LayoutBidang";

const ReportForm = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [formData, setFormData] = useState({
    seksiPengirim: {
      nama: "Ikbal Rasyid",
      gambar: "/assets/Ikbal Rasyid.png",
    },
    pelapor: {
      nama: "Haikal Saputra",
      gambar: "/assets/Haechan.jpg",
    },
    idLaporan: "LPR78926",
    perihal: "Draft",
    prioritas: "Rendah",
    judulPelaporan: "Router bermasalah",
    kategoriAset: "Jaringan",
    jenisAset: "TI",
    dataAset: "Router TP-Link",
    lokasiKejadian: "Dinas Pendidikan Kantor B Lantai 2",
    rincianMasalah:
      "Router sering mengalami lag atau kehilangan koneksi secara berkala, terutama saat banyak perangkat terhubung secara bersamaan.",
    penyelesaianDiharapkan:
      "Router dikonfigurasi dengan bandwidth management dan QoS (Quality of Service) agar prioritas koneksi untuk server dan aplikasi tetap stabil.",
    revisi: false,
    tolak: false,
    lampiranFile: false,
    revisiTipe: "",
    tolakAlasan: "",
    tolakTipe: "",
  });

  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const isFormValid = () => {
    return (
      formData.seksiPengirim.nama.trim() !== "" &&
      formData.pelapor.nama.trim() !== "" &&
      formData.idLaporan.trim() !== "" &&
      formData.perihal.trim() !== "" &&
      formData.prioritas.trim() !== "" &&
      formData.judulPelaporan.trim() !== "" &&
      formData.kategoriAset.trim() !== "" &&
      formData.jenisAset.trim() !== "" &&
      formData.dataAset.trim() !== "" &&
      formData.lokasiKejadian.trim() !== "" &&
      formData.rincianMasalah.trim() !== "" &&
      formData.penyelesaianDiharapkan.trim() !== ""
    );
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);

    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/gif",
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "text/plain",
    ];

    const maxSize = 5 * 1024 * 1024;

    const validFiles = files.filter((file) => {
      if (!allowedTypes.includes(file.type)) {
        alert(
          `File ${file.name} tidak didukung. Hanya file gambar, PDF, Word, dan text yang diperbolehkan.`
        );
        return false;
      }

      if (file.size > maxSize) {
        alert(
          `File ${file.name} terlalu besar. Maksimal ukuran file adalah 5MB.`
        );
        return false;
      }

      return true;
    });

    setUploadedFiles((prev) => [
      ...prev,
      ...validFiles.map((file) => ({
        file,
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        size: file.size,
        type: file.type,
      })),
    ]);

    event.target.value = "";
  };

  const handleRemoveFile = (fileId) => {
    setUploadedFiles((prev) => prev.filter((file) => file.id !== fileId));
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const getFileIcon = (fileType) => {
    if (fileType.startsWith("image/")) {
      return "🖼️";
    } else if (fileType === "application/pdf") {
      return "📄";
    } else if (fileType.includes("word") || fileType.includes("document")) {
      return "📝";
    } else if (fileType === "text/plain") {
      return "📃";
    } else {
      return "📎";
    }
  };

  const handleKonfirmasiKirim = () => {
    if (isFormValid()) {
      setShowConfirmation(true);
    } else {
      const missingFields = [];
      if (!formData.seksiPengirim.nama.trim())
        missingFields.push("Seksi Pengirim");
      if (!formData.pelapor.nama.trim()) missingFields.push("Pelapor");
      if (!formData.idLaporan.trim()) missingFields.push("ID Laporan");
      if (!formData.perihal.trim()) missingFields.push("Perihal");
      if (!formData.prioritas.trim()) missingFields.push("Prioritas");
      if (!formData.judulPelaporan.trim())
        missingFields.push("Judul Pelaporan");
      if (!formData.kategoriAset.trim()) missingFields.push("Kategori Aset");
      if (!formData.jenisAset.trim()) missingFields.push("Jenis Aset");
      if (!formData.dataAset.trim()) missingFields.push("Data Aset");
      if (!formData.lokasiKejadian.trim())
        missingFields.push("Lokasi Kejadian");
      if (!formData.rincianMasalah.trim())
        missingFields.push("Rincian Masalah");
      if (!formData.penyelesaianDiharapkan.trim())
        missingFields.push("Penyelesaian yang Diharapkan");

      alert(`Harap lengkapi field berikut:\n${missingFields.join("\n")}`);
    }
  };

  const handleKirimPermohonan = () => {
    const laporanData = {
      ...formData,
      uploadedFiles: uploadedFiles.map((file) => ({
        name: file.name,
        size: file.size,
        type: file.type,
      })),
      tanggal: new Date().toISOString(),
      status: "dikirim",
    };

    console.log("Data laporan:", laporanData);

    // Tutup popup konfirmasi dan buka popup sukses
    setShowConfirmation(false);
    setShowSuccessPopup(true);
  };

  const handleSuccessOk = () => {
    alert("Laporan berhasil dikirim!");
    setShowSuccessPopup(false);

    setTimeout(() => {
      navigate("/dashboardbidang");
    }, 1000);
  };

  const handleBatalkan = () => {
    if (
      window.confirm(
        "Apakah Anda yakin ingin membatalkan? Data yang belum disimpan akan hilang."
      )
    ) {
      navigate("/dashboard");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleKonfirmasiKirim();
  };

  return (
    <LayoutBidang>
      <div className="min-h-screen bg-gray-50">
        {/* Main Content - Simple structure tanpa complex positioning */}
        <div className="pt-4 pb-8">
          {/* Content Section */}
          <div className="px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-md border border-gray-200">
                <form onSubmit={handleSubmit}>
                  <div className="p-4 md:p-6 space-y-4 md:space-y-6">
                    {/* Seksi Pengirim */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <label className="text-sm font-medium text-gray-700 sm:w-32 text-left whitespace-nowrap">
                        Pengirim
                      </label>
                      <div className="flex-1 flex items-center gap-3 text-left">
                        <img
                          src={formData.seksiPengirim.gambar}
                          alt="Profile Pengirim"
                          className="w-6 h-6 md:w-8 md:h-8 rounded-full object-cover"
                        />
                        <span className="text-gray-800 font-semibold text-sm md:text-base">
                          {formData.seksiPengirim.nama}
                        </span>
                      </div>
                    </div>

                    {/* ID Laporan */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <label className="text-sm font-medium text-gray-700 sm:w-32 text-left whitespace-nowrap">
                        ID laporan
                      </label>
                      <div className="flex-1 px-3 py-2 rounded border border-gray-300 text-center">
                        <span className="text-gray-800 text-sm">
                          {formData.idLaporan}
                        </span>
                      </div>
                    </div>

                    {/* Prioritas */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <label className="text-sm font-medium text-gray-700 sm:w-32 text-left whitespace-nowrap">
                        Prioritas
                      </label>
                      <div
                        className={`flex-1 px-3 py-2 rounded text-center font-semibold text-sm ${
                          formData.prioritas === "Tinggi"
                            ? "bg-red-500 text-white"
                            : formData.prioritas === "Sedang"
                            ? "bg-yellow-500 text-white"
                            : "bg-green-500 text-white"
                        }`}
                      >
                        <span>{formData.prioritas}</span>
                      </div>
                    </div>

                    {/* Judul Pelaporan */}
                    <div className="space-y-2 text-left">
                      <label className="text-sm font-medium text-gray-700 block">
                        Judul Pelaporan
                      </label>
                      <div className="px-3 py-2 rounded border border-gray-300 text-center">
                        <span className="text-gray-800 text-sm">
                          {formData.judulPelaporan}
                        </span>
                      </div>
                    </div>

                    {/* Kategori Aset, Jenis Aset, dan Data Aset */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Kategori Aset */}
                      <div className="space-y-2 text-left">
                        <label className="text-sm font-medium text-gray-700 block">
                          Kategori Aset
                        </label>
                        <div className="px-3 py-2 rounded border border-gray-300 text-center">
                          <span className="text-gray-800 text-sm">
                            {formData.kategoriAset}
                          </span>
                        </div>
                      </div>

                      {/* Jenis Aset */}
                      <div className="space-y-2 text-left">
                        <label className="text-sm font-medium text-gray-700 block">
                          Jenis Aset
                        </label>
                        <div className="px-3 py-2 rounded border border-gray-300 text-center">
                          <span className="text-gray-800 text-sm">
                            {formData.jenisAset}
                          </span>
                        </div>
                      </div>

                      {/* Data Aset */}
                      <div className="space-y-2 text-left">
                        <label className="text-sm font-medium text-gray-700 block">
                          Data Aset
                        </label>
                        <div className="px-3 py-2 rounded border border-gray-300 text-center">
                          <span className="text-gray-800 text-sm">
                            {formData.dataAset}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Lokasi Kejadian */}
                    <div className="space-y-2 text-left">
                      <label className="text-sm font-medium text-gray-700 block">
                        Lokasi Kejadian
                      </label>
                      <div className="px-3 py-2 rounded border border-gray-300 text-center">
                        <span className="text-gray-800 text-sm">
                          {formData.lokasiKejadian}
                        </span>
                      </div>
                    </div>

                    {/* Rincian Masalah */}
                    <div className="space-y-2 text-left">
                      <label className="text-sm font-medium text-gray-700 block">
                        Rincian masalah
                      </label>
                      <div className="p-3 rounded border border-gray-300 min-h-[80px]">
                        <p className="text-gray-800 text-sm">
                          {formData.rincianMasalah}
                        </p>
                      </div>
                    </div>

                    {/* Lampiran File */}
                    <div className="space-y-2 text-left">
                      <label className="text-sm font-medium text-gray-700 block">
                        Lampiran file
                      </label>

                      {/* Dokumen dari Pelapor */}
                      <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded border border-gray-200">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20.68 7.01449C20.4579 6.55044 20.1451 6.13561 19.76 5.79449L16.76 3.07449C16.0997 2.46924 15.2613 2.09388 14.37 2.00449H8.21C7.54756 1.9764 6.88615 2.08034 6.26425 2.31027C5.64236 2.5402 5.07241 2.89152 4.58757 3.34379C4.10273 3.79606 3.71269 4.34024 3.44014 4.94467C3.16758 5.5491 3.01797 6.2017 3 6.86449V17.1645C3.03538 18.164 3.36969 19.13 3.95975 19.9375C4.54981 20.745 5.36849 21.3571 6.31 21.6945C6.92211 21.9272 7.57609 22.0293 8.23 21.9945H15.79C16.4524 22.0226 17.1139 21.9186 17.7357 21.6887C18.3576 21.4588 18.9276 21.1075 19.4124 20.6552C19.8973 20.2029 20.2873 19.6587 20.5599 19.0543C20.8324 18.4499 20.982 17.7973 21 17.1345V8.56449C21.0048 8.03094 20.8957 7.50251 20.68 7.01449ZM7.68 6.61449H10.94C11.2052 6.61449 11.4596 6.71985 11.6471 6.90738C11.8346 7.09492 11.94 7.34927 11.94 7.61449C11.94 7.87971 11.8346 8.13406 11.6471 8.3216C11.4596 8.50913 11.2052 8.61449 10.94 8.61449H7.68C7.41478 8.61449 7.16043 8.50913 6.97289 8.3216C6.78536 8.13406 6.68 7.87971 6.68 7.61449C6.68 7.34927 6.78536 7.09492 6.97289 6.90738C7.16043 6.71985 7.41478 6.61449 7.68 6.61449ZM16.38 17.3245H7.68C7.41478 17.3245 7.16043 17.2191 6.97289 17.0316C6.78536 16.8441 6.68 16.5897 6.68 16.3245C6.68 16.0593 6.78536 15.8049 6.97289 15.6174C7.16043 15.4298 7.41478 15.3245 7.68 15.3245H16.38C16.6184 15.3585 16.8365 15.4773 16.9943 15.6592C17.1521 15.841 17.2389 16.0737 17.2389 16.3145C17.2389 16.5553 17.1521 16.788 16.9943 16.9698C16.8365 17.1517 16.6184 17.2705 16.38 17.3045V17.3245ZM16.38 12.9745H7.68C7.41478 12.9745 7.16043 12.8691 6.97289 12.6816C6.78536 12.4941 6.68 12.2397 6.68 11.9745C6.68 11.7093 6.78536 11.4549 6.97289 11.2674C7.16043 11.0798 7.41478 10.9745 7.68 10.9745H16.38C16.6452 10.9745 16.8996 11.0798 17.0871 11.2674C17.2746 11.4549 17.38 11.7093 17.38 11.9745C17.38 12.2397 17.2746 12.4941 17.0871 12.6816C16.8996 12.8691 16.6452 12.9745 16.38 12.9745ZM16.06 7.40449C15.9173 7.40581 15.7758 7.37885 15.6436 7.32517C15.5114 7.27148 15.3912 7.19214 15.2899 7.09172C15.1885 6.9913 15.1081 6.8718 15.0532 6.74011C14.9983 6.60842 14.97 6.46716 14.97 6.32449V3.67449C15.63 3.83449 18.2 6.47449 18.76 6.91449C18.9256 7.05401 19.0674 7.2195 19.18 7.40449H16.06Z"
                            fill="#113F67"
                          />
                        </svg>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-700 truncate">
                            bukti_laporan.pdf
                          </p>
                          <p className="text-xs text-gray-500">2.4 MB</p>
                        </div>
                      </div>

                      {/* File Upload Section */}
                      <div className="mt-3 space-y-2">
                        <input
                          type="file"
                          ref={fileInputRef}
                          onChange={handleFileUpload}
                          multiple
                          accept=".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx,.txt"
                          className="hidden"
                        />

                        {uploadedFiles.length > 0 && (
                          <div className="space-y-2">
                            <p className="text-sm font-medium text-gray-700">
                              File tambahan ({uploadedFiles.length}):
                            </p>
                            <div className="space-y-2 max-h-24 overflow-y-auto">
                              {uploadedFiles.map((file) => (
                                <div
                                  key={file.id}
                                  className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded p-2"
                                >
                                  <div className="flex items-center space-x-2 min-w-0 flex-1">
                                    <span className="text-sm flex-shrink-0">
                                      {getFileIcon(file.type)}
                                    </span>
                                    <div className="min-w-0 flex-1">
                                      <p className="text-xs font-medium text-gray-700 truncate">
                                        {file.name}
                                      </p>
                                      <p className="text-xs text-gray-500">
                                        {formatFileSize(file.size)}
                                      </p>
                                    </div>
                                  </div>
                                  <button
                                    type="button"
                                    onClick={() => handleRemoveFile(file.id)}
                                    className="text-red-500 hover:text-red-700 transition-colors flex-shrink-0 ml-2"
                                  >
                                    <XCircle size={12} />
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Penyelesaian yang Diharapkan */}
                    <div className="space-y-2 text-left">
                      <label className="text-sm font-medium text-gray-700 block">
                        Penyelesaian yang Diharapkan
                      </label>
                      <div className="p-3 rounded border border-gray-300 min-h-[60px]">
                        <p className="text-gray-800 text-sm">
                          {formData.penyelesaianDiharapkan}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 text-left">
                      <div className="flex flex-col space-y-3">
                        {/* Revisi dengan Dropdown Toggle */}
                        <div className="space-y-2">
                          <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                id="revision"
                                checked={formData.revisi}
                                onChange={() =>
                                  handleInputChange("revisi", !formData.revisi)
                                }
                                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                              />
                              <label
                                htmlFor="revision"
                                className="ml-2 text-xs font-semibold text-gray-700"
                              >
                                Revisi
                              </label>
                            </div>
                            <button
                              type="button"
                              onClick={() =>
                                handleInputChange(
                                  "revisiTipe",
                                  formData.revisiTipe ? "" : "open"
                                )
                              }
                              className="text-gray-500 hover:text-gray-700 focus:outline-none"
                              disabled={!formData.revisi}
                            >
                              <svg
                                width="12"
                                height="6"
                                viewBox="0 0 14 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className={`transform ${
                                  formData.revisiTipe ? "rotate-180" : ""
                                }`}
                              >
                                <path
                                  d="M13 1L7 7L1 1H13Z"
                                  fill="#333333"
                                  stroke="#333333"
                                  strokeWidth="2"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </button>
                          </div>

                          {/* Card besar untuk mengisi teks - Muncul ketika dropdown diklik */}
                          {formData.revisi && formData.revisiTipe && (
                            <div className="space-y-2">
                              <p className="text-sm font-medium text-gray-700">
                                Saran Revisi
                              </p>
                              <div className="bg-white border border-gray-200 rounded p-3 shadow-sm">
                                <textarea
                                  placeholder="Ketik disini"
                                  className="w-full p-2 rounded text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none min-h-[60px] bg-gray-50"
                                  rows="2"
                                />
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Tolak dengan Dropdown */}
                        <div className="space-y-2">
                          <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                id="tolak"
                                checked={formData.tolak}
                                onChange={() =>
                                  handleInputChange("tolak", !formData.tolak)
                                }
                                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                              />
                              <label
                                htmlFor="tolak"
                                className="ml-2 text-xs font-semibold text-gray-700"
                              >
                                Tolak
                              </label>
                            </div>
                            <button
                              type="button"
                              onClick={() =>
                                handleInputChange(
                                  "tolakTipe",
                                  formData.tolakTipe ? "" : "open"
                                )
                              }
                              className="text-gray-500 hover:text-gray-700 focus:outline-none"
                              disabled={!formData.tolak}
                            >
                              <svg
                                width="12"
                                height="6"
                                viewBox="0 0 14 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className={`transform ${
                                  formData.tolakTipe ? "rotate-180" : ""
                                }`}
                              >
                                <path
                                  d="M13 1L7 7L1 1H13Z"
                                  fill="#333333"
                                  stroke="#333333"
                                  strokeWidth="2"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </button>
                          </div>

                          {/* Card besar untuk mengisi teks - Muncul ketika dropdown diklik */}
                          {formData.tolak && formData.tolakTipe && (
                            <div className="space-y-2">
                              <p className="text-sm font-medium text-gray-700">
                                Alasan ditolak
                              </p>
                              <div className="bg-white border border-gray-200 rounded p-3 shadow-sm">
                                <textarea
                                  placeholder="Ketik disini"
                                  className="w-full p-2 rounded text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none min-h-[60px] bg-gray-50"
                                  rows="2"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row justify-between pt-4 gap-3">
                      <button
                        type="button"
                        onClick={handleBatalkan}
                        className="text-black border border-gray-300 bg-transparent px-3 py-2 rounded text-xs font-medium hover:bg-red-50 transition-colors text-center order-2 sm:order-1"
                      >
                        Batalkan
                      </button>
                      <div className="flex flex-col sm:flex-row gap-2 order-1 sm:order-2">
                        <button
                          type="submit"
                          className={`px-3 py-2 rounded text-xs font-medium transition-colors text-center ${
                            isFormValid()
                              ? "bg-[#226597] hover:bg-blue-700 text-white cursor-pointer"
                              : "bg-gray-300 text-gray-500 cursor-not-allowed"
                          }`}
                          disabled={!isFormValid()}
                        >
                          Verifikasi
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Konfirmasi */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full mx-4 p-6">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M50 0C77.615 0 100 22.385 100 50C100 77.615 77.615 100 50 100C22.385 100 0 77.615 0 50C0 22.385 22.385 0 50 0ZM50 10C39.3913 10 29.2172 14.2143 21.7157 21.7157C14.2143 29.2172 10 39.3913 10 50C10 60.6087 14.2143 70.7828 21.7157 78.2843C29.2172 85.7857 39.3913 90 50 90C60.6087 90 70.7828 85.7857 78.2843 78.2843C85.7857 70.7828 90 60.6087 90 50C90 39.3913 85.7857 29.2172 78.2843 21.7157C70.7828 14.2143 60.6087 10 50 10ZM50 65C51.3261 65 52.5979 65.5268 53.5355 66.4645C54.4732 67.4021 55 68.6739 55 70C55 71.3261 54.4732 72.5979 53.5355 73.5355C52.5979 74.4732 51.3261 75 50 75C48.6739 75 47.4021 74.4732 46.4645 73.5355C45.5268 72.5979 45 71.3261 45 70C45 68.6739 45.5268 67.4021 46.4645 66.4645C47.4021 65.5268 48.6739 65 50 65ZM50 20C51.3261 20 52.5979 20.5268 53.5355 21.4645C54.4732 22.4021 55 23.6739 55 25V55C55 56.3261 54.4732 57.5979 53.5355 58.5355C52.5979 59.4732 51.3261 60 50 60C48.6739 60 47.4021 59.4732 46.4645 58.5355C45.5268 57.5979 45 56.3261 45 55V25C45 23.6739 45.5268 22.4021 46.4645 21.4645C47.4021 20.5268 48.6739 20 50 20Z"
                    fill="#FF5F57"
                  />
                </svg>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Apakah Anda yakin ingin mengirim?
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Cek kembali inputan Anda sebelum mengirim!
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button
                  onClick={handleKirimPermohonan}
                  className="px-4 py-2 bg-[#226597] text-white rounded-md text-sm font-medium hover:bg-[#1a5078] transition-colors"
                >
                  Ya, saya yakin
                </button>
                <button
                  onClick={() => setShowConfirmation(false)}
                  className="px-4 py-2 bg-red-600 border border-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700 transition-colors"
                >
                  Batalkan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Popup Berhasil Dikirim */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full mx-4 p-6">
            <div className="text-center">
              {/* Logo Success */}
              <div className="flex justify-center mb-4">
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 90 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44.6667 86.3333C56.1725 86.3333 66.5892 81.6696 74.1294 74.1294C81.6696 66.5892 86.3333 56.1725 86.3333 44.6667C86.3333 33.1608 81.6696 22.7442 74.1294 15.2039C66.5892 7.66371 56.1725 3 44.6667 3C33.1608 3 22.7442 7.66371 15.2039 15.2039C7.66371 22.7442 3 33.1608 3 44.6667C3 56.1725 7.66371 66.5892 15.2039 74.1294C22.7442 81.6696 33.1608 86.3333 44.6667 86.3333Z"
                    fill="white"
                    stroke="#27C840"
                    strokeWidth="6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M28 46.3333L39.6667 58L62 35.6667"
                    stroke="#27C840"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Laporan berhasil terkirim!
              </h3>

              <div className="flex justify-center">
                <button
                  onClick={handleSuccessOk}
                  className="px-6 py-2 bg-[#226597] text-white rounded-md text-sm font-medium hover:bg-[#1a5078] transition-colors mt-6"
                >
                  Oke
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </LayoutBidang>
  );
};

export default ReportForm;
