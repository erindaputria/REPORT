import { useState } from "react";
import { Menu, X, Bell, FileText } from "lucide-react";
import Header from "../../../components/Header";
import LeftSidebar from "../../../components/LeftSidebar";

export default function Permintaan() {
  const [selectedReasons, setSelectedReasons] = useState([]);
  const [priority, setPriority] = useState("");
  const [formData, setFormData] = useState({
    nama: "",
    nip: "",
    divisi: "",
    masalah: "",
    informasiTambahan: "",
  });

  const reasons = [,
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
  

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      <div className="flex">
        {/* Sidebar - Diubah posisinya */}
        <div className="fixed top-0 left-0 h-full z-50">
          {" "}
          {/* z-50 untuk memastikan sidebar di atas header */}
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
              <div className="p-6  border-gray-200 text-center">
                <h2 className="text-2xl font-bold text-[#226597]">
                  Permohonan Permintaan Perangkat
                </h2>
              </div>

              <div className="p-6 space-y-6">
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

                {/* Jenis Perangkat */}
                <div className="flex items-center space-x-4">
                  <label className="text-sm font-medium text-gray-700 w-44">
                    Jenis Perangkat
                  </label>
                  <div className="flex-1 relative">
                    <select
                      value={formData.perangkat}
                      onChange={(e) =>
                        handleInputChange("perangkat", e.target.value)
                      }
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm appearance-none"
                    >
                      <option value="">Pilih jenis perangkat</option>
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

                {/* Jumlah Perangkat */}
                <div className="flex items-center space-x-4">
                  <label className="text-sm font-medium text-gray-700 w-44">
                    Jumlah Perangkat
                  </label>
                  <div className="flex-1">
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={formData.perangkat}
                      onChange={(e) =>
                        handleInputChange("perangkat", e.target.value)
                      }
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      placeholder="0"
                    />
                  </div>
                </div>

                {/* Alasan Laporan */}
                <div className="space-y-2 text-left">
                  <label className="text-sm font-medium text-gray-700 block">
                    Apa alasan Anda mengajukan permohonan permintaan perangkat?
                  </label>
                  <p className="text-xs text-gray-500">
                    Jelaskan dengan rinci terkait hal ini agar kami dapat
                    menindaklanjuti sesuai prosedur kami!
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
                    Level prioritas laporan
                  </label>
                  <p className="text-xs text-gray-500">
                    Pilih tingkat urgensi permohonan Anda agar kami dapat
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
                    Lampirkan surat persetujuan atau dokumen pendukung terkait
                    untuk membantu kami menindaklanjuti pengajuan Anda sesuai
                    prosedur kami!
                  </p>
                  <button className="bg-[#226597] hover:bg-[#226597] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-start">
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
                  <button className="text-black border border-gray-300 bg-transparent px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors text-left">
                    Batalkan
                  </button>
                  <div className="flex gap-2">
                    <button className="text-blackbg-transparent px-0 py-0 text-sm font-medium hover:text-black underline transition-colors text-left transform -translate-x-1">
                      Simpan draft
                    </button>
                    <button className="bg-[#226597] hover:bg-[#226597] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors text-left">
                      Ajukan Permohonan
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
