import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, Bell, FileText, XCircle } from "lucide-react";
import Header from "../../../components/Header";
import LeftSidebar from "../../../components/LeftSidebar";

export default function FormLaporan() {
  const [selectedReasons, setSelectedReasons] = useState([]);
  const [priority, setPriority] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [formData, setFormData] = useState({
    nama: "",
    nip: "",
    divisi: "",
    masalah: "",
    informasiTambahan: "",
  });
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const reasons = [
    "Perangkat Keras",
    "Perangkat Lunak & Aplikasi",
    "Jaringan & Konektivitas",
    "Email & Komunikasi",
    "Keamanan",
    "Permasalahan Lainnya",
  ];

  const priorities = [
    {
      label: "Tinggi",
      value: "tinggi",
      color: "bg-red-100 text-red-700 border-red-200",
    },
    {
      label: "Sedang",
      value: "sedang",
      color: "bg-yellow-100 text-yellow-700 border-yellow-200",
    },
    {
      label: "Rendah",
      value: "rendah",
      color: "bg-green-100 text-green-700 border-green-200",
    },
  ];

  // Fungsi untuk validasi form
  const isFormValid = () => {
    return (
      formData.nama.trim() !== "" &&
      formData.nip.trim() !== "" &&
      formData.divisi.trim() !== "" &&
      formData.masalah.trim() !== "" &&
      selectedReasons.length > 0 &&
      priority !== ""
    );
  };

  const toggleReason = (reason) => {
    setSelectedReasons((prev) =>
      prev.includes(reason)
        ? prev.filter((r) => r !== reason)
        : [...prev, reason]
    );
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Fungsi untuk handle upload file
  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);

    // Validasi tipe file
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

    // Validasi ukuran file (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB in bytes

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

    // Tambahkan file yang valid ke state
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

    // Reset input file
    event.target.value = "";
  };

  // Fungsi untuk menghapus file
  const handleRemoveFile = (fileId) => {
    setUploadedFiles((prev) => prev.filter((file) => file.id !== fileId));
  };

  // Fungsi untuk format ukuran file
  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  // Fungsi untuk get file icon berdasarkan type
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

  // Fungsi untuk handle kirim laporan
  const handleKirimLaporan = () => {
    if (isFormValid()) {
      // Simpan data laporan
      const laporanData = {
        ...formData,
        selectedReasons,
        priority,
        uploadedFiles: uploadedFiles.map((file) => ({
          name: file.name,
          size: file.size,
          type: file.type,
        })),
        tanggal: new Date().toISOString(),
        status: "dikirim",
      };

      console.log("Data laporan:", laporanData);

      // Navigasi ke halaman sukses
      navigate("/SuksesPelaporan", {
        state: {
          laporanData: laporanData,
        },
      });
    } else {
      alert("Harap lengkapi semua field yang wajib diisi!");
    }
  };

  // Fungsi untuk handle simpan draft
  const handleSimpanDraft = () => {
    const draftData = {
      ...formData,
      selectedReasons,
      priority,
      uploadedFiles: uploadedFiles.map((file) => ({
        name: file.name,
        size: file.size,
        type: file.type,
      })),
      tanggal: new Date().toISOString(),
      status: "draft",
    };

    console.log("Data draft:", draftData);
    // Simpan ke localStorage atau state management
    localStorage.setItem("draftLaporan", JSON.stringify(draftData));
    alert("Draft berhasil disimpan!");
  };

  // Fungsi untuk handle batalkan
  const handleBatalkan = () => {
    if (
      window.confirm(
        "Apakah Anda yakin ingin membatalkan? Data yang belum disimpan akan hilang."
      )
    ) {
      navigate(-1); // Kembali ke halaman sebelumnya
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      <div className="flex">
        {/* Sidebar - Diubah posisinya */}
        <div className="fixed top-0 left-0 h-full z-50">
          <LeftSidebar />
        </div>

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
            {/* Form Pelaporan dalam Card */}
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md border border-gray-200">
              <div className="p-6 border-gray-200 text-center">
                <h2 className="text-2xl font-bold text-[#226597]">
                  Pelaporan Online
                </h2>
              </div>

              <div className="p-6 space-y-6">
                {/* Kirim laporan ke */}
                <div className="space-y-2">
                  <div className="flex items-center justify-start w-full">
                    <label className="text-sm font-medium text-gray-700 mr-4">
                      Kirim laporan ke
                    </label>
                    <button className="bg-[#226597] hover:bg-[#226597] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2">
                      📧 Dinas Pendidikan
                    </button>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <label className="text-sm font-medium text-gray-700 w-20">
                      Nama 
                    </label>
                    <input
                      type="text"
                      placeholder="Nama pengirim"
                      value={formData.nama}
                      onChange={(e) =>
                        handleInputChange("nama", e.target.value)
                      }
                      className="flex-1 px-3 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>

                  <div className="flex items-center space-x-4">
                    <label className="text-sm font-medium text-gray-700 w-20">
                      NIP 
                    </label>
                    <input
                      type="text"
                      placeholder="Nomor Induk Pegawai"
                      value={formData.nip}
                      onChange={(e) => handleInputChange("nip", e.target.value)}
                      className="flex-1 px-3 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>

                  <div className="flex items-center space-x-4">
                    <label className="text-sm font-medium text-gray-700 w-20">
                      Divisi 
                    </label>
                    <input
                      type="text"
                      placeholder="Divisi tempat bekerja"
                      value={formData.divisi}
                      onChange={(e) =>
                        handleInputChange("divisi", e.target.value)
                      }
                      className="flex-1 px-3 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>
                </div>

                {/* Alasan Laporan */}
                <div className="space-y-3 text-left">
                  <label className="text-sm font-medium text-gray-700 block">
                    Apa alasan Anda membuat laporan? *
                  </label>
                  <p className="text-xs text-gray-500">Pilih salah satu</p>
                  <div className="flex flex-wrap gap-2 justify-start">
                    {reasons.map((reason) => (
                      <button
                        key={reason}
                        onClick={() => toggleReason(reason)}
                        className={`px-3 py-1 rounded-md text-xs font-medium border transition-colors text-left ${
                          selectedReasons.includes(reason)
                            ? "bg-[#226597] text-white border-[#226597]"
                            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        {reason}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Kejelasan Masalah */}
                <div className="space-y-2 text-left">
                  <label className="text-sm font-medium text-gray-700 block">
                    Bisakah Anda memberikan kejelasan terkait masalah ini? *
                  </label>
                  <p className="text-xs text-gray-500">
                    Jelaskan lebih rinci terkait masalah tersebut agar kami
                    dapat lebih memahami masalah ini!
                  </p>
                  <textarea
                    placeholder="Ketik disini..."
                    value={formData.masalah}
                    onChange={(e) =>
                      handleInputChange("masalah", e.target.value)
                    }
                    className="w-full px-3 py-2 min-h-[100px] bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-left"
                  />
                </div>

                {/* Level Prioritas */}
                <div className="space-y-3 text-left">
                  <label className="text-sm font-medium text-gray-700 block">
                    Level prioritas laporan *
                  </label>
                  <p className="text-xs text-gray-500">
                    Pilih tingkat urgensi laporan Anda agar kami dapat
                    memprioritaskan penanganan sesuai dampak masalah!
                  </p>
                  <div className="flex gap-2 justify-start">
                    {priorities.map((item) => (
                      <button
                        key={item.value}
                        onClick={() => setPriority(item.value)}
                        className={`px-3 py-1 rounded-md text-sm font-medium border transition-colors text-left ${
                          priority === item.value
                            ? item.color + " border-current"
                            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Upload File */}
                <div className="space-y-2 text-left">
                  <label className="text-sm font-medium text-gray-700 block">
                    Tambahkan file
                  </label>
                  <p className="text-xs text-gray-500">
                    Lampirkan screenshot, log, atau dokumen terkait untuk
                    membantu kami dalam memahami masalah Anda lebih cepat!
                    <br />
                  </p>

                  {/* Hidden file input */}
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    multiple
                    accept=".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx,.txt"
                    className="hidden"
                  />

                  {/* Upload button */}
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-[#226597] hover:bg-[#226597] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-start"
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
                    Pilih File
                  </button>

                  {/* Uploaded files list */}
                  {uploadedFiles.length > 0 && (
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
                            <div className="flex items-center space-x-3">
                              <span className="text-lg">
                                {getFileIcon(file.type)}
                              </span>
                              <div>
                                <p className="text-sm font-medium text-gray-700 truncate max-w-xs">
                                  {file.name}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {formatFileSize(file.size)}
                                </p>
                              </div>
                            </div>
                            <button
                              onClick={() => handleRemoveFile(file.id)}
                              className="text-red-500 hover:text-red-700 transition-colors"
                            >
                              <XCircle size={16} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
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
                    placeholder="Ketik disini..."
                    value={formData.informasiTambahan}
                    onChange={(e) =>
                      handleInputChange("informasiTambahan", e.target.value)
                    }
                    className="w-full px-3 py-2 min-h-[120px] bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-left"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between pt-4">
                  <button
                    onClick={handleBatalkan}
                    className="text-black border border-gray-300 bg-transparent px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors text-left"
                  >
                    Batalkan
                  </button>
                  <div className="flex gap-2">
                    <button
                      onClick={handleSimpanDraft}
                      className="text-black bg-transparent px-0 py-0 text-sm font-medium hover:text-black underline transition-colors text-left transform -translate-x-1"
                    >
                      Simpan draft
                    </button>
                    <button
                      onClick={handleKirimLaporan}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors text-left ${
                        isFormValid()
                          ? "bg-[#226597] hover:bg-[#226597] text-white cursor-pointer"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                      disabled={!isFormValid()}
                    >
                      Kirim Laporan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
