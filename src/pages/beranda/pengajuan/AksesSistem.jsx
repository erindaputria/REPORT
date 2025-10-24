import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, Bell, XCircle } from "lucide-react";
import Header from "../../../components/Header";
import LeftSidebar from "../../../components/LeftSidebar";

export default function AksesSistem() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({
    nama: "",
    nip: "",
    divisi: "",
    aksesSistem: "",
    jenisAkses: "",
    masalah: "",
    informasiTambahan: "",
  });
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  // Ambil data profil dari localStorage saat komponen mount
  useEffect(() => {
    const userProfile = localStorage.getItem("userProfile");
    if (userProfile) {
      const profileData = JSON.parse(userProfile);
      setFormData((prev) => ({
        ...prev,
        nama: profileData.nama || "",
        nip: profileData.nip || "",
        divisi: profileData.divisi || "",
      }));
    }
  }, []);

  const isFormValid = () => {
    return (
      formData.nama.trim() !== "" &&
      formData.nip.trim() !== "" &&
      formData.divisi.trim() !== "" &&
      formData.aksesSistem.trim() !== "" &&
      formData.jenisAkses.trim() !== "" &&
      formData.masalah.trim() !== "" &&
      uploadedFiles.length > 0
    );
  };

  const handleInputChange = (field, value) => {
    // Hanya izin perubahan untuk field yang bukan nama, nip, divisi
    if (field !== "nama" && field !== "nip" && field !== "divisi") {
      setFormData((prev) => ({ ...prev, [field]: value }));
    }
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
      if (!formData.nama.trim()) missingFields.push("Nama");
      if (!formData.nip.trim()) missingFields.push("NIP");
      if (!formData.divisi.trim()) missingFields.push("Divisi");
      if (!formData.aksesSistem.trim()) missingFields.push("Akses Sistem");
      if (!formData.jenisAkses.trim()) missingFields.push("Jenis Akses");
      if (!formData.masalah.trim()) missingFields.push("Alasan Permohonan");
      if (uploadedFiles.length === 0) missingFields.push("Lampiran File");

      alert(`Harap lengkapi field berikut:\n${missingFields.join("\n")}`);
    }
  };

  const handleKirimPermohonan = () => {
    const permohonanData = {
      ...formData,
      uploadedFiles: uploadedFiles.map((file) => ({
        name: file.name,
        size: file.size,
        type: file.type,
      })),
      tanggal: new Date().toISOString(),
      status: "dikirim",
    };

    console.log("Data permohonan:", permohonanData);

    navigate("/SuksesPelayanan", {
      state: {
        permohonanData: permohonanData,
      },
    });
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
    localStorage.setItem("draftPermohonan", JSON.stringify(draftData));
    alert("Draft berhasil disimpan!");
  };

  const handleBatalkan = () => {
    if (
      window.confirm(
        "Apakah Anda yakin ingin membatalkan? Data yang belum disimpan akan hilang."
      )
    ) {
      navigate(-1);
    }
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

      {/* Left Sidebar - Hidden on mobile unless toggled */}
      <div
        className={`${
          isMobileSidebarOpen ? "block" : "hidden"
        } md:block fixed md:relative inset-0 z-50 md:z-auto bg-white md:bg-transparent w-72 md:w-auto`}
      >
        <div className="h-full">
          <LeftSidebar />
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
        <Header />

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

          <div className="relative z-10 container mx-auto px-4 py-6 md:py-8">
            {/* Form Permohonan dalam Card */}
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md border border-gray-200">
              <div className="p-6 border-gray-200 text-center">
                <h2 className="text-2xl font-bold text-[#226597]">
                  Permohonan Akses Sistem
                </h2>
              </div>

              <div className="p-6 space-y-6">
                {/* Form Fields - Semua sejajar */}
                <div className="space-y-4">
                  {/* Nama */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <label className="text-sm font-medium text-gray-700 sm:w-32 text-left whitespace-nowrap">
                      Nama
                    </label>
                    <input
                      type="text"
                      placeholder="Nama pengirim"
                      value={formData.nama}
                      readOnly
                      className="flex-1 px-3 py-2 bg-gray-200 border border-gray-300 rounded-md text-sm cursor-not-allowed"
                    />
                  </div>

                  {/* NIP */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <label className="text-sm font-medium text-gray-700 sm:w-32 text-left whitespace-nowrap">
                      NIP
                    </label>
                    <input
                      type="text"
                      placeholder="Nomor Induk Pegawai"
                      value={formData.nip}
                      readOnly
                      className="flex-1 px-3 py-2 bg-gray-200 border border-gray-300 rounded-md text-sm cursor-not-allowed"
                    />
                  </div>

                  {/* Divisi */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <label className="text-sm font-medium text-gray-700 sm:w-32 text-left whitespace-nowrap">
                      Divisi
                    </label>
                    <input
                      type="text"
                      placeholder="Divisi tempat bekerja"
                      value={formData.divisi}
                      readOnly
                      className="flex-1 px-3 py-2 bg-gray-200 border border-gray-300 rounded-md text-sm cursor-not-allowed"
                    />
                  </div>

                  {/* Akses yang mana */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <label className="text-sm font-medium text-gray-700 sm:w-32 text-left whitespace-nowrap">
                      Akses yang mana
                    </label>
                    <div className="flex-1 relative">
                      <select
                        value={formData.aksesSistem}
                        onChange={(e) =>
                          handleInputChange("aksesSistem", e.target.value)
                        }
                        className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm appearance-none"
                      >
                        <option value="" disabled>
                          Pilih akses
                        </option>
                        <option value="aplikasi">Aplikasi</option>
                        <option value="file penting">File Penting</option>
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

                  {/* Jenis akses */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <label className="text-sm font-medium text-gray-700 sm:w-32 text-left whitespace-nowrap">
                      Jenis akses
                    </label>
                    <div className="flex-1 relative">
                      <select
                        value={formData.jenisAkses}
                        onChange={(e) =>
                          handleInputChange("jenisAkses", e.target.value)
                        }
                        className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm appearance-none"
                      >
                        <option value="" disabled>
                          Pilih jenis akses
                        </option>
                        <option value="akses lihat">View</option>
                        <option value="edit">Edit</option>
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

                {/* Alasan Permohonan */}
                <div className="space-y-2 text-left">
                  <label className="text-sm font-medium text-gray-700 block">
                    Apa alasan Anda mengajukan permohonan akses?
                  </label>
                  <p className="text-xs text-gray-500">
                    Jelaskan dengan rinci terkait hal ini agar kami dapat
                    menindaklanjuti sesuai prosedur keamanan!
                  </p>
                  <textarea
                    placeholder="Ketik disini..."
                    value={formData.masalah}
                    onChange={(e) =>
                      handleInputChange("masalah", e.target.value)
                    }
                    className="w-full px-3 py-2 min-h-[120px] bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-left text-sm"
                  />
                </div>

                {/* Upload File */}
                <div className="space-y-2 text-left">
                  <label className="text-sm font-medium text-gray-700 block">
                    Tambahkan file
                  </label>
                  <p className="text-xs text-gray-500">
                    Lampirkan surat persetujuan atau dokumen pendukung terkait
                    untuk membantu kami menindaklanjuti pengajuan Anda sesuai
                    prosedur keamanan!
                  </p>

                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    multiple
                    accept=".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx,.txt"
                    className="hidden"
                  />

                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-[#226597] hover:bg-[#1a507a] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-center sm:justify-start w-full sm:w-auto"
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
                    </p>
                  )}
                </div>

                {/* Informasi Tambahan */}
                <div className="space-y-2 text-left">
                  <label className="text-sm font-medium text-gray-700 block">
                    Informasi Tambahan
                  </label>
                  <p className="text-xs text-gray-500">
                    Tambahkan detail tambahan yang mungkin membantu kami dalam
                    memahami masalah atau permintaan Anda!
                  </p>
                  <textarea
                    placeholder="Ketik disini (opsional)..."
                    value={formData.informasiTambahan}
                    onChange={(e) =>
                      handleInputChange("informasiTambahan", e.target.value)
                    }
                    className="w-full px-3 py-2 min-h-[120px] bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-left text-sm"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row justify-between pt-4 gap-3 sm:gap-0">
                  <button
                    onClick={handleBatalkan}
                    className="text-black border border-gray-300 bg-transparent px-4 py-2 rounded-md text-sm font-medium hover:bg-red-50 transition-colors text-center order-2 sm:order-1"
                  >
                    Batalkan
                  </button>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 order-1 sm:order-2">
                    <button
                      onClick={handleSimpanDraft}
                      className="text-black bg-transparent px-0 py-0 text-sm font-medium hover:text-black underline transition-colors text-center sm:text-left"
                    >
                      Simpan draft
                    </button>
                    <button
                      onClick={handleKonfirmasiKirim}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors text-center ${
                        isFormValid()
                          ? "bg-[#226597] hover:bg-[#1a507a] text-white cursor-pointer"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                      disabled={!isFormValid()}
                    >
                      Ajukan Permohonan
                    </button>
                  </div>
                </div>
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
    </div>
  );
}
