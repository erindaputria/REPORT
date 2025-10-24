import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { XCircle } from "lucide-react";
import HeaderBidang from "./HeaderBidang";
import SidebarBidang from "./SidebarBidang";

const ReportForm = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    seksiPengirim: "Ikbal Rasyid",
    pelapor: "Doni Ridho",
    idLaporan: "LPR78926",
    perihal: "Perangkat Keras",
    prioritas: "Rendah",
    rincianMasalah:
      "Komputer di meja front office tidak dapat menyala meskipun sudah ditekan tambol power, padahal kabel listrik sudah dicek dan tersambung dengan benar. Lampu indikator pada CPU juga tidak menyala, sehingga pengguna tidak bisa mengakses aplikasi pelayanan maupun memproses dokumen masyarakat, dan layanan front office terhenti sementara.",
    revisi: false,
    tolak: false,
    lampiranFile: false,
    revisiTipe: "",
    tolakAlasan: "",
  });

  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const isFormValid = () => {
    return (
      formData.seksiPengirim.trim() !== "" &&
      formData.pelapor.trim() !== "" &&
      formData.idLaporan.trim() !== "" &&
      formData.perihal.trim() !== "" &&
      formData.prioritas.trim() !== "" &&
      formData.rincianMasalah.trim() !== "" &&
      uploadedFiles.length > 0
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
      if (!formData.seksiPengirim.trim()) missingFields.push("Seksi Pengirim");
      if (!formData.pelapor.trim()) missingFields.push("Pelapor");
      if (!formData.idLaporan.trim()) missingFields.push("ID Laporan");
      if (!formData.perihal.trim()) missingFields.push("Perihal");
      if (!formData.prioritas.trim()) missingFields.push("Prioritas");
      if (!formData.rincianMasalah.trim())
        missingFields.push("Rincian Masalah");
      if (uploadedFiles.length === 0) missingFields.push("Lampiran File");

      alert(`Harap lengkapi field berikut:\n${missingFields.join("\n")}`);
    }
  };

  const handleKirimLaporan = () => {
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
    alert("Laporan berhasil dikirim!");
    setShowConfirmation(false);
  };

  const handleSimpanDraft = () => {
    const draftData = {
      ...formData,
      uploadedFiles: uploadedFiles.map((file) => ({
        name: file.name,
        size: file.size,
        type: file.type,
      })),
      tanggal: new Date().toISOString(),
      status: "draft",
    };

    console.log("Data draft:", draftData);
    localStorage.setItem("draftLaporan", JSON.stringify(draftData));
    alert("Draft berhasil disimpan!");
  };

  const handleBatalkan = () => {
    if (
      window.confirm(
        "Apakah Anda yakin ingin membatalkan? Data yang belum disimpan akan hilang."
      )
    ) {
      console.log("Form dibatalkan");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleKonfirmasiKirim();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <SidebarBidang />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <HeaderBidang />

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md border border-gray-200">
            <form onSubmit={handleSubmit}>
              <div className="p-6 space-y-6">
                {/* Seksi Pengirim */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <label className="text-sm font-medium text-gray-700 sm:w-32 text-left whitespace-nowrap">
                    Seksi pengirim
                  </label>
                  <div className="flex-1 bg-gray-100 p-3 rounded border border-gray-300 text-left">
                    <span className="text-gray-800">
                      {formData.seksiPengirim}
                    </span>
                  </div>
                </div>

                {/* Pelapor */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <label className="text-sm font-medium text-gray-700 sm:w-32 text-left whitespace-nowrap">
                    Pelapor
                  </label>
                  <div className="flex-1 bg-gray-100 p-3 rounded border border-gray-300 text-left">
                    <span className="text-gray-800">{formData.pelapor}</span>
                  </div>
                </div>

                {/* ID Laporan */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <label className="text-sm font-medium text-gray-700 sm:w-32 text-left whitespace-nowrap">
                    ID laporan
                  </label>
                  <div className="flex-1 bg-gray-100 p-3 rounded border border-gray-300 text-left">
                    <span className="text-gray-800">{formData.idLaporan}</span>
                  </div>
                </div>

                {/* Perihal */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <label className="text-sm font-medium text-gray-700 sm:w-32 text-left whitespace-nowrap">
                    Perihal
                  </label>
                  <div className="flex-1 bg-gray-100 p-3 rounded border border-gray-300 text-left">
                    <span className="text-gray-800">{formData.perihal}</span>
                  </div>
                </div>

                {/* Prioritas */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <label className="text-sm font-medium text-gray-700 sm:w-32 text-left whitespace-nowrap">
                    Prioritas
                  </label>
                  <div className="flex-1 bg-gray-100 p-3 rounded border border-gray-300 text-left">
                    <span className="text-gray-800">{formData.prioritas}</span>
                  </div>
                </div>

                {/* Rincian Masalah */}
                <div className="space-y-2 text-left">
                  <label className="text-sm font-medium text-gray-700 block">
                    Rincian masalah
                  </label>
                  <div className="bg-gray-100 p-3 rounded border border-gray-300 min-h-[120px]">
                    <p className="text-gray-800 text-sm">
                      {formData.rincianMasalah}
                    </p>
                  </div>
                </div>

                {/* Informasi Tambahan */}
                <div className="space-y-2 text-left">
                  <label className="text-sm font-medium text-gray-700 block">
                    Informasi tambahan
                  </label>
                  <div className="bg-gray-100 p-3 rounded border border-gray-300 min-h-[80px]">
                    {/* Konten checkbox akan ditempatkan di sini */}
                  </div>
                </div>

                <div className="space-y-2 text-left">
                  <div className="flex flex-col space-y-4">
                    {/* Revisi dengan Dropdown */}
                    <div className="flex items-center justify-between">
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
                          className="ml-2 text-gray-700"
                        >
                          Revisi
                        </label>
                      </div>
                      <div className="relative w-32">
                        <select
                          value={formData.revisiTipe}
                          onChange={(e) =>
                            handleInputChange("revisiTipe", e.target.value)
                          }
                          className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm appearance-none"
                          disabled={!formData.revisi}
                        >
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Tolak dengan Dropdown */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="rejected"
                          checked={formData.tolak}
                          onChange={() =>
                            handleInputChange("tolak", !formData.tolak)
                          }
                          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label
                          htmlFor="rejected"
                          className="ml-2 text-gray-700"
                        >
                          Tolak
                        </label>
                      </div>
                      <div className="relative w-32">
                        <select
                          value={formData.tolakAlasan}
                          onChange={(e) =>
                            handleInputChange("tolakAlasan", e.target.value)
                          }
                          className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm appearance-none"
                          disabled={!formData.tolak}
                        >
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lampiran File */}
                <div className="space-y-2 text-left">
                  <label className="text-sm font-medium text-gray-700 block">
                    Lampiran file
                  </label>

                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    multiple
                    accept=".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx,.txt"
                    className="hidden"
                  />

                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-center sm:justify-start w-full sm:w-auto"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    Lampirkan File
                  </button>

                  {uploadedFiles.length > 0 ? (
                    <div className="mt-4 space-y-2">
                      <p className="text-sm font-medium text-gray-700">
                        File yang diupload ({uploadedFiles.length}):
                      </p>
                      <div className="space-y-2 max-h-40 overflow-y-auto">
                        {uploadedFiles.map((file) => (
                          <div
                            key={file.id}
                            className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-md p-3"
                          >
                            <div className="flex items-center space-x-3 min-w-0 flex-1">
                              <span className="text-lg flex-shrink-0">
                                {getFileIcon(file.type)}
                              </span>
                              <div className="min-w-0 flex-1">
                                <p className="text-sm font-medium text-gray-700 truncate">
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
                              <XCircle size={16} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <p className="text-xs text-red-500 mt-2">
                      Harap lampirkan file bukti laporan
                    </p>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row justify-between pt-4 gap-3 sm:gap-0">
                  <button
                    type="button"
                    onClick={handleBatalkan}
                    className="text-black border border-gray-300 bg-transparent px-4 py-2 rounded-md text-sm font-medium hover:bg-red-50 transition-colors text-center order-2 sm:order-1"
                  >
                    Batalkan
                  </button>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 order-1 sm:order-2">
                    <button
                      type="button"
                      onClick={handleSimpanDraft}
                      className="text-black bg-transparent px-0 py-0 text-sm font-medium hover:text-black underline transition-colors text-center sm:text-left"
                    >
                      Simpan draft
                    </button>
                    <button
                      type="submit"
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors text-center ${
                        isFormValid()
                          ? "bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                      disabled={!isFormValid()}
                    >
                      Kirim
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Popup Konfirmasi */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full mx-4 p-6">
            <div className="text-center">
              {/* Logo Peringatan */}
              <div className="flex justify-center mb-4">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 120 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M60 19.3495C87.615 19.3495 110 41.7345 110 69.3495C110 96.9645 87.615 119.349 60 119.349C32.385 119.349 10 96.9645 10 69.3495C10 41.7345 32.385 19.3495 60 19.3495ZM60 29.3495C49.3913 29.3495 39.2172 33.5638 31.7157 41.0652C24.2143 48.5667 20 58.7408 20 69.3495C20 79.9581 24.2143 90.1323 31.7157 97.6338C39.2172 105.135 49.3913 109.349 60 109.349C70.6087 109.349 80.7828 105.135 88.2843 97.6338C95.7857 90.1323 100 79.9581 100 69.3495C100 58.7408 95.7857 48.5667 88.2843 41.0652C80.7828 33.5638 70.6087 29.3495 60 29.3495ZM60 84.3495C61.3261 84.3495 62.5979 84.8763 63.5355 85.814C64.4732 86.7516 65 88.0234 65 89.3495C65 90.6756 64.4732 91.9473 63.5355 92.885C62.5979 93.8227 61.3261 94.3495 60 94.3495C58.6739 94.3495 57.4021 93.8227 56.4645 92.885C55.5268 91.9473 55 90.6756 55 89.3495C55 88.0234 55.5268 86.7516 56.4645 85.814C57.4021 84.8763 58.6739 84.3495 60 84.3495ZM60 39.3495C61.3261 39.3495 62.5979 39.8763 63.5355 40.814C64.4732 41.7516 65 43.0234 65 44.3495V74.3495C65 75.6756 64.4732 76.9473 63.5355 77.885C62.5979 78.8227 61.3261 79.3495 60 79.3495C58.6739 79.3495 57.4021 78.8227 56.4645 77.885C55.5268 76.9473 55 75.6756 55 74.3495V44.3495C55 43.0234 55.5268 41.7516 56.4645 40.814C57.4021 39.8763 58.6739 39.3495 60 39.3495Z"
                    fill="#113F67"
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
                  onClick={handleKirimLaporan}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
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
    </div>
  );
};

export default ReportForm;
