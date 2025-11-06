import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { XCircle, Menu, X, Bell } from "lucide-react";
import HeaderBidang from "./HeaderBidang";
import SidebarBidang from "./SidebarBidang";

const ReportForm = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
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
    perihal: "Perangkat Keras",
    prioritas: "Rendah",
    rincianMasalah:
      "Komputer di meja front office tidak dapat menyala meskipun sudah ditekan tambol power, padahal kabel listrik sudah dicek dan tersambung dengan benar. Lampu indikator pada CPU juga tidak menyala, sehingga pengguna tidak bisa mengakses aplikasi pelayanan maupun memproses dokumen masyarakat, dan layanan front office terhenti sementara.",
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
      formData.rincianMasalah.trim() !== ""
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
      if (!formData.rincianMasalah.trim())
        missingFields.push("Rincian Masalah");

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
    alert("Laporan berhasil dikirim!");
    setShowConfirmation(false);

    // Kembali ke dashboard setelah 1 detik
    setTimeout(() => {
      navigate("/dashboardbidang"); // Ganti dengan path dashboard yang sesuai
    }, 1000);
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
      navigate("/dashboard"); // Kembali ke dashboard saat batal
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleKonfirmasiKirim();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="bg-white p-4 flex items-center justify-between md:hidden shadow-sm">
        <button
          onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          className="p-2 rounded-lg bg-gray-100"
        >
          {isMobileSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <Bell size={16} className="text-gray-600" />
          </div>
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img
              src="/assets/Haechan.jpg"
              alt="Profil"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Sidebar - Hidden on mobile unless toggled */}
      <div
        className={`${
          isMobileSidebarOpen ? "block" : "hidden"
        } md:block fixed md:relative inset-0 z-50 md:z-auto bg-white md:bg-transparent w-72 md:w-auto`}
      >
        <div className="h-full">
          <SidebarBidang />
          <button
            onClick={() => setIsMobileSidebarOpen(false)}
            className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full md:hidden"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Overlay for mobile sidebar */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <HeaderBidang />

        {/* Main Content */}
        <div className="flex-1 relative overflow-hidden">
          {/* Custom SVG Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 1065 351"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="min-h-[200px] md:min-h-[350px]"
            >
              <mask
                id="mask0_135_1312"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="1065"
                height="351"
              >
                <rect
                  width="1065"
                  height="351"
                  transform="matrix(-1 0 0 1 1065 0)"
                  fill="#C4C4C4"
                />
              </mask>
              <g mask="url(#mask0_135_1312)">
                <g opacity="0.1">
                  <path
                    d="M-41.6782 68.2948C-41.6782 68.2948 -11.9803 97.8027 210.646 104.858C379.127 110.195 696.24 12.9597 888.09 19.2171C1085.55 25.5972 1064.34 90.1343 1064.34 46.8847V111.544C1064.34 111.544 998.397 50.7495 883.776 51.3017C715.224 52.2219 368.556 184.609 202.88 188.719C41.3033 192.707 -41.6782 111.544 -41.6782 111.544V68.2948Z"
                    fill="#226597"
                  />
                </g>
                <g opacity="0.2">
                  <path
                    d="M-4.97253 67.2116C376.62 306.122 638.244 -6.8645 841.318 0.115997C1050.41 7.34143 1065 129.454 1065 80.7744V153.58C1065 153.58 996.235 123.465 878.373 114.241C450.722 80.7744 425.791 380.116 227.03 348.135C28.2697 316.155 -110.155 1.35828 -4.97253 67.2116Z"
                    fill="#226597"
                  />
                </g>
              </g>
            </svg>
          </div>

          <div className="relative z-10 p-4 md:p-6">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md border border-gray-200">
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
                    <div className="flex-1 bg-gray-100 p-2 md:p-3 rounded border border-gray-300 text-center">
                      <span className="text-gray-800 text-sm md:text-base">
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
                      className={`flex-1 bg-white p-2 md:p-3 rounded border-2 text-center font-semibold text-gray-800 text-sm md:text-base ${
                        formData.prioritas === "Tinggi"
                          ? "border-green-500"
                          : formData.prioritas === "Sedang"
                          ? "border-yellow-500"
                          : "border-red-500"
                      }`}
                    >
                      <span>{formData.prioritas}</span>
                    </div>
                  </div>

                  {/* Perihal */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <label className="text-sm font-medium text-gray-700 sm:w-32 text-left whitespace-nowrap">
                      Status
                    </label>
                    <div className="flex-1 bg-gray-100 p-2 md:p-3 rounded border border-gray-300 text-center">
                      <span className="text-gray-800 text-sm md:text-base">
                        {formData.perihal}
                      </span>
                    </div>
                  </div>

                  {/* Rincian Masalah */}
                  <div className="space-y-2 text-left">
                    <label className="text-sm font-medium text-gray-700 block">
                      Rincian masalah
                    </label>
                    <div className="bg-gray-100 p-3 rounded border border-gray-300 min-h-[100px] md:min-h-[120px]">
                      <p className="text-gray-800 text-xs md:text-sm">
                        {formData.rincianMasalah}
                      </p>
                    </div>
                  </div>

                  {/* Informasi Tambahan */}
                  <div className="space-y-2 text-left">
                    <label className="text-sm font-medium text-gray-700 block">
                      Informasi tambahan
                    </label>
                    <div className="bg-gray-100 p-3 rounded border border-gray-300 min-h-[60px] md:min-h-[80px]">
                      {/* Konten checkbox akan ditempatkan di sini */}
                    </div>
                  </div>

                  <div className="space-y-2 text-left">
                    <div className="flex flex-col space-y-3 md:space-y-4">
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
                              width="14"
                              height="8"
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
                            <div className="bg-white border border-gray-200 rounded-lg p-3 md:p-4 shadow-md">
                              <textarea
                                placeholder="Ketik disini"
                                className="w-full p-2 md:p-3 rounded text-xs md:text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none min-h-[80px] md:min-h-[100px] bg-gray-50"
                                rows="3"
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
                              width="14"
                              height="8"
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
                            <div className="bg-white border border-gray-200 rounded-lg p-3 md:p-4 shadow-md">
                              <textarea
                                placeholder="Ketik disini"
                                className="w-full p-2 md:p-3 rounded text-xs md:text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none min-h-[80px] md:min-h-[100px] bg-gray-50"
                                rows="3"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Lampiran File */}
                  <div className="space-y-2 text-left">
                    <label className="text-sm font-medium text-gray-700 block">
                      Lampiran file
                    </label>

                    {/* Dokumen dari Pelapor */}
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <svg
                        width="20"
                        height="20"
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
                    <div className="mt-4 space-y-3">
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
                          <div className="space-y-2 max-h-32 md:max-h-40 overflow-y-auto">
                            {uploadedFiles.map((file) => (
                              <div
                                key={file.id}
                                className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-md p-2 md:p-3"
                              >
                                <div className="flex items-center space-x-2 md:space-x-3 min-w-0 flex-1">
                                  <span className="text-base md:text-lg flex-shrink-0">
                                    {getFileIcon(file.type)}
                                  </span>
                                  <div className="min-w-0 flex-1">
                                    <p className="text-xs md:text-sm font-medium text-gray-700 truncate">
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
                                  <XCircle
                                    size={14}
                                    className="md:w-4 md:h-4"
                                  />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row justify-between pt-4 gap-3 sm:gap-0">
                    <button
                      type="button"
                      onClick={handleBatalkan}
                      className="text-black border border-gray-300 bg-transparent px-3 py-2 md:px-4 md:py-2 rounded-md text-xs md:text-sm font-medium hover:bg-red-50 transition-colors text-center order-2 sm:order-1"
                    >
                      Batalkan
                    </button>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 order-1 sm:order-2">
                      <button
                        type="button"
                        onClick={handleSimpanDraft}
                        className="text-black bg-transparent px-0 py-0 text-xs md:text-sm font-medium hover:text-black underline transition-colors text-center sm:text-left"
                      >
                        Simpan draft
                      </button>
                      <button
                        type="submit"
                        className={`px-3 py-2 md:px-4 md:py-2 rounded-md text-xs md:text-sm font-medium transition-colors text-center ${
                          isFormValid()
                            ? "bg-[#226597] hover:bg-blue-700 text-white cursor-pointer"
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
      </div>

      {/* Popup Konfirmasi */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full mx-4 p-4 md:p-6">
            <div className="text-center">
              {/* Logo Peringatan */}
              <div className="flex justify-center mb-3 md:mb-4">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 120 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:w-16 md:h-16"
                >
                  <path
                    d="M60 19.3495C87.615 19.3495 110 41.7345 110 69.3495C110 96.9645 87.615 119.349 60 119.349C32.385 119.349 10 96.9645 10 69.3495C10 41.7345 32.385 19.3495 60 19.3495ZM60 29.3495C49.3913 29.3495 39.2172 33.5638 31.7157 41.0652C24.2143 48.5667 20 58.7408 20 69.3495C20 79.9581 24.2143 90.1323 31.7157 97.6338C39.2172 105.135 49.3913 109.349 60 109.349C70.6087 109.349 80.7828 105.135 88.2843 97.6338C95.7857 90.1323 100 79.9581 100 69.3495C100 58.7408 95.7857 48.5667 88.2843 41.0652C80.7828 33.5638 70.6087 29.3495 60 29.3495ZM60 84.3495C61.3261 84.3495 62.5979 84.8763 63.5355 85.814C64.4732 86.7516 65 88.0234 65 89.3495C65 90.6756 64.4732 91.9473 63.5355 92.885C62.5979 93.8227 61.3261 94.3495 60 94.3495C58.6739 94.3495 57.4021 93.8227 56.4645 92.885C55.5268 91.9473 55 90.6756 55 89.3495C55 88.0234 55.5268 86.7516 56.4645 85.814C57.4021 84.8763 58.6739 84.3495 60 84.3495ZM60 39.3495C61.3261 39.3495 62.5979 39.8763 63.5355 40.814C64.4732 41.7516 65 43.0234 65 44.3495V74.3495C65 75.6756 64.4732 76.9473 63.5355 77.885C62.5979 78.8227 61.3261 79.3495 60 79.3495C58.6739 79.3495 57.4021 78.8227 56.4645 77.885C55.5268 76.9473 55 75.6756 55 74.3495V44.3495C55 43.0234 55.5268 41.7516 56.4645 40.814C57.4021 39.8763 58.6739 39.3495 60 39.3495Z"
                    fill="#113F67"
                  />
                </svg>
              </div>

              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                Apakah Anda yakin ingin mengirim?
              </h3>
              <p className="text-xs md:text-sm text-gray-600 mb-4 md:mb-6">
                Cek kembali inputan Anda sebelum mengirim!
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
                <button
                  onClick={handleKirimPermohonan}
                  className="px-3 py-2 md:px-4 md:py-2 bg-[#226597] text-white rounded-md text-xs md:text-sm font-medium hover:bg-[#1a5078] transition-colors"
                >
                  Ya, saya yakin
                </button>
                <button
                  onClick={() => setShowConfirmation(false)}
                  className="px-3 py-2 md:px-4 md:py-2 bg-red-600 border border-red-600 text-white rounded-md text-xs md:text-sm font-medium hover:bg-red-700 transition-colors"
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
