import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { XCircle, Menu, X, Bell } from "lucide-react";
import HeaderOpd from "./HeaderOpd";
import SidebarOpd from "./SidebarOpd";

const DraftBaru = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const [formData, setFormData] = useState({
    penerimaDraft: {
      nama: "Admin Kota",
      gambar: "/assets/Jeno.jpg",
    },
    nama: "Friska Farinda",
    nip: "20002514213962047",
    opd: "Dinas Perpustakaan dan Kearsipan",
    layanan: "",
    judulArtikel: "",
    isiArtikel: "",
    lampiranFile: false,
    coverImage: null,
    deskripsi: "",
  });

  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const isFormValid = () => {
    return (
      formData.penerimaDraft.nama.trim() !== "" &&
      formData.nama.trim() !== "" &&
      formData.nip.trim() !== "" &&
      formData.opd.trim() !== "" &&
      formData.layanan.trim() !== "" &&
      formData.judulArtikel.trim() !== "" &&
      formData.deskripsi.trim() !== ""
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
      if (!formData.penerimaDraft.nama.trim())
        missingFields.push("Penerima Draft");
      if (!formData.nama.trim()) missingFields.push("Nama");
      if (!formData.nip.trim()) missingFields.push("NIP");
      if (!formData.opd.trim()) missingFields.push("OPD");
      if (!formData.layanan.trim()) missingFields.push("Kategori Artikel");
      if (!formData.judulArtikel.trim()) missingFields.push("Judul Artikel");
      if (!formData.deskripsi.trim()) missingFields.push("Deskripsi");

      alert(`Harap lengkapi field berikut:\n${missingFields.join("\n")}`);
    }
  };

  const handleKirimDraft = () => {
    const draftData = {
      ...formData,
      uploadedFiles: uploadedFiles.map((file) => ({
        name: file.name,
        size: file.size,
        type: file.type,
      })),
      tanggal: new Date().toISOString(),
      status: "dikirim",
    };

    console.log("Data draft:", draftData);

    // Tutup popup konfirmasi dan buka popup sukses
    setShowConfirmation(false);
    setShowSuccessPopup(true);

    // Simpan ke localStorage
    localStorage.setItem("draftArtikel", JSON.stringify(draftData));
  };

  const handleSuccessOk = () => {
    setShowSuccessPopup(false);
    // Kembali ke dashboard
    navigate("/dashboardopd");
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
    localStorage.setItem("draftArtikel", JSON.stringify(draftData));
    alert("Draft berhasil disimpan!");
  };

  const handleBatalkan = () => {
    navigate("/dashboardopd");
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
          <SidebarOpd />
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
        <HeaderOpd />

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
            {/* Judul Draft Knowledge Base */}
            <div className="max-w-3xl mx-auto mb-6">
              <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold text-[#226597] mb-3 md:mb-4 text-center">
                Draft Knowledge Base
              </h1>
            </div>

            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md border border-gray-200">
              <form onSubmit={handleSubmit}>
                <div className="p-4 md:p-6 space-y-4 md:space-y-6">
                  {/* Penerima Draft */}
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-start w-full gap-2 sm:gap-4">
                      <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
                        Kirim draft ke
                      </label>
                      <div className="bg-[#226597] text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 justify-center sm:justify-start">
                        <img
                          src={formData.penerimaDraft.gambar}
                          alt="Profile Penerima"
                          className="w-5 h-5 rounded-full object-cover"
                        />
                        <span className="text-sm">
                          {formData.penerimaDraft.nama}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Nama */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <label className="text-sm font-medium text-gray-700 sm:w-32 text-left whitespace-nowrap">
                      Nama
                    </label>
                    <div className="flex-1 bg-gray-100 p-2 md:p-3 rounded border border-gray-300 text-center">
                      <span className="text-gray-800 text-sm md:text-base">
                        {formData.nama}
                      </span>
                    </div>
                  </div>

                  {/* NIP */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <label className="text-sm font-medium text-gray-700 sm:w-32 text-left whitespace-nowrap">
                      NIP
                    </label>
                    <div className="flex-1 bg-gray-100 p-2 md:p-3 rounded border border-gray-300 text-center">
                      <span className="text-gray-800 text-sm md:text-base">
                        {formData.nip}
                      </span>
                    </div>
                  </div>

                  {/* OPD */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <label className="text-sm font-medium text-gray-700 sm:w-32 text-left whitespace-nowrap">
                      OPD
                    </label>
                    <div className="flex-1 bg-gray-100 p-2 md:p-3 rounded border border-gray-300 text-center">
                      <span className="text-gray-800 text-sm md:text-base">
                        {formData.opd}
                      </span>
                    </div>
                  </div>

                  {/* Kategori Artikel */}
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col">
                      <label className="text-sm font-medium text-gray-700 text-left block">
                        Kategori Artikel
                      </label>
                      <p className="text-xs text-gray-500 mt-1">
                        Pilih salah satu
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {/* Card Pelaporan dan Pelayanan */}
                      <div
                        className={`border rounded-lg p-2 cursor-pointer transition-all text-center flex items-center justify-center shadow-sm ${
                          formData.layanan === "Pelaporan dan Pelayanan"
                            ? "border-blue-500 bg-[#226597] text-white shadow-md"
                            : "border-gray-200 bg-white hover:border-blue-300 hover:bg-[#226597] hover:text-white"
                        }`}
                        onClick={() =>
                          handleInputChange(
                            "layanan",
                            "Pelaporan dan Pelayanan"
                          )
                        }
                      >
                        <span className="text-xs font-semibold px-2 py-1">
                          Pelaporan dan Pelayanan
                        </span>
                      </div>

                      {/* Card Akun dan SSO */}
                      <div
                        className={`border rounded-lg p-2 cursor-pointer transition-all text-center flex items-center justify-center shadow-sm ${
                          formData.layanan === "Akun dan SSO"
                            ? "border-blue-500 bg-[#226597] text-white shadow-md"
                            : "border-gray-200 bg-white hover:border-blue-300 hover:bg-[#226597] hover:text-white"
                        }`}
                        onClick={() =>
                          handleInputChange("layanan", "Akun dan SSO")
                        }
                      >
                        <span className="text-xs font-semibold px-2 py-1">
                          Akun dan SSO
                        </span>
                      </div>

                      {/* Card Layanan dan Formulir */}
                      <div
                        className={`border rounded-lg p-2 cursor-pointer transition-all text-center flex items-center justify-center shadow-sm ${
                          formData.layanan === "Layanan dan Formulir"
                            ? "border-blue-500 bg-[#226597] text-white shadow-md"
                            : "border-gray-200 bg-white hover:border-blue-300 hover:bg-[#226597] hover:text-white"
                        }`}
                        onClick={() =>
                          handleInputChange("layanan", "Layanan dan Formulir")
                        }
                      >
                        <span className="text-xs font-semibold px-2 py-1">
                          Layanan dan Formulir
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Isi Artikel */}
                  <div className="space-y-4 text-left">
                    {/* Isi Artikel */}
                    <div>
                      <label className="text-sm font-medium text-gray-700 block mb-2">
                        Isi Artikel
                      </label>
                    </div>

                    {/* Card Upload Cover & Judul */}
                    <div className="border border-gray-300 rounded-lg p-4">
                      {/* Bagian Judul */}
                      <div className="mb-4">
                        <label className="text-sm font-semibold text-gray-700 block mb-2">
                          Judul Artikel
                        </label>
                        <input
                          type="text"
                          value={formData.judulArtikel}
                          onChange={(e) =>
                            handleInputChange("judulArtikel", e.target.value)
                          }
                          placeholder="Masukkan judul artikel disini..."
                          className="w-full p-3 rounded border border-gray-300 text-sm md:text-base font-medium"
                        />
                      </div>

                      {/* Bagian Upload Cover */}
                      <div className="mb-4">
                        <label className="text-sm font-semibold text-gray-700 block mb-3">
                          Upload Cover
                        </label>

                        {/* Tampilan jika belum ada gambar yang diupload */}
                        {!formData.coverImage ? (
                          <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                  if (file.size > 5 * 1024 * 1024) {
                                    alert(
                                      "Ukuran file terlalu besar. Maksimal 5MB."
                                    );
                                    return;
                                  }
                                  const reader = new FileReader();
                                  reader.onload = (e) => {
                                    handleInputChange(
                                      "coverImage",
                                      e.target.result
                                    );
                                  };
                                  reader.readAsDataURL(file);
                                }
                              }}
                            />
                            <svg
                              width="47"
                              height="47"
                              viewBox="0 0 47 47"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M25.6667 12.8333C25.6667 19.9208 19.9208 25.6667 12.8333 25.6667C5.74583 25.6667 0 19.9208 0 12.8333C0 5.74583 5.74583 0 12.8333 0C19.9208 0 25.6667 5.74583 25.6667 12.8333ZM14 4.66667C14 4.35725 13.8771 4.0605 13.6583 3.84171C13.4395 3.62292 13.1428 3.5 12.8333 3.5C12.5239 3.5 12.2272 3.62292 12.0084 3.84171C11.7896 4.0605 11.6667 4.35725 11.6667 4.66667V11.6667H4.66667C4.35725 11.6667 4.0605 11.7896 3.84171 12.0084C3.62292 12.2272 3.5 12.5239 3.5 12.8333C3.5 13.1428 3.62292 13.4395 3.84171 13.6583C4.0605 13.8771 4.35725 14 4.66667 14H11.6667V21C11.6667 21.3094 11.7896 21.6062 12.0084 21.825C12.2272 22.0438 12.5239 22.1667 12.8333 22.1667C13.1428 22.1667 13.4395 22.0438 13.6583 21.825C13.8771 21.6062 14 21.3094 14 21V14H21C21.3094 14 21.6062 13.8771 21.825 13.6583C22.0438 13.4395 22.1667 13.1428 22.1667 12.8333C22.1667 12.5239 22.0438 12.2272 21.825 12.0084C21.6062 11.7896 21.3094 11.6667 21 11.6667H14V4.66667ZM12.8333 28C21.21 28 28 21.21 28 12.8333C28 9.82683 27.125 7.02333 25.6153 4.66667H39.375C41.3089 4.66667 43.1635 5.43489 44.531 6.80235C45.8984 8.1698 46.6667 10.0245 46.6667 11.9583V39.375C46.6667 40.957 46.1627 42.42 45.3075 43.6158L28.5542 26.8625C28.175 26.4833 27.7248 26.1825 27.2294 25.9772C26.7339 25.772 26.2029 25.6664 25.6667 25.6664C25.1304 25.6664 24.5994 25.772 24.1039 25.9772C23.6085 26.1825 23.1583 26.4833 22.7792 26.8625L6.02583 43.6158C5.1395 42.3796 4.66405 40.8961 4.66667 39.375V25.6153C7.10399 27.1767 9.93879 28.0045 12.8333 28ZM37.9167 18.0833C37.9167 16.8457 37.425 15.6587 36.5498 14.7835C35.6747 13.9083 34.4877 13.4167 33.25 13.4167C32.0123 13.4167 30.8253 13.9083 29.9502 14.7835C29.075 15.6587 28.5833 16.8457 28.5833 18.0833C28.5833 19.321 29.075 20.508 29.9502 21.3832C30.8253 22.2583 32.0123 22.75 33.25 22.75C34.4877 22.75 35.6747 22.2583 36.5498 21.3832C37.425 20.508 37.9167 19.321 37.9167 18.0833ZM43.169 45.6027L26.4915 28.9252C26.2727 28.7064 25.976 28.5836 25.6667 28.5836C25.3573 28.5836 25.0606 28.7064 24.8418 28.9252L8.16433 45.6027C9.30617 46.3016 10.6196 46.6699 11.9583 46.6667H39.375C40.7138 46.6699 42.0272 46.3016 43.169 45.6027Z"
                                fill="#113F67"
                              />
                            </svg>
                            <p className="text-sm text-gray-500 mb-2 mt-1">
                              Upload Cover
                            </p>
                          </label>
                        ) : (
                          /* Tampilan jika sudah ada gambar yang diupload */
                          <div className="relative border border-gray-300 rounded-lg p-4 bg-white">
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-sm font-medium text-gray-700">
                                Cover Preview
                              </span>
                              <button
                                type="button"
                                onClick={() =>
                                  handleInputChange("coverImage", null)
                                }
                                className="text-red-500 hover:text-red-700 text-sm font-medium"
                              >
                                Hapus
                              </button>
                            </div>
                            <div className="flex items-center gap-4">
                              <img
                                src={formData.coverImage}
                                alt="Cover Preview"
                                className="w-20 h-20 object-cover rounded-lg border border-gray-200"
                              />
                              <div className="flex-1">
                                <p className="text-sm text-gray-600 mb-1">
                                  Gambar cover berhasil diupload
                                </p>
                                <p className="text-xs text-gray-400">
                                  Klik hapus untuk mengganti gambar
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Bagian Deskripsi */}
                      <div>
                        <label className="text-sm font-medium text-gray-700 block mb-2">
                          Deskripsi
                        </label>
                        <textarea
                          value={formData.deskripsi}
                          onChange={(e) =>
                            handleInputChange("deskripsi", e.target.value)
                          }
                          placeholder="Ketik deskripsi disini..."
                          className="w-full p-3 rounded border border-gray-300 min-h-[100px] text-sm md:text-base"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row justify-between pt-4 gap-3">
                    <button
                      type="button"
                      onClick={handleBatalkan}
                      className="text-black border border-gray-300 bg-transparent px-4 py-2 rounded text-sm font-medium hover:bg-gray-50 transition-colors text-center order-2 sm:order-1"
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
                            ? "bg-[#226597] hover:bg-[#1a507a] text-white cursor-pointer"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                        disabled={!isFormValid()}
                      >
                        Ajukan Draft
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Konfirmasi Kirim */}
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
                  onClick={handleKirimDraft}
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
                  width="90"
                  height="90"
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
                Draft berhasil terkirim!
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
    </div>
  );
};

export default DraftBaru;
