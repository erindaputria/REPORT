import {
  Menu,
  X,
  Bell,
  FileText,
  Download,
  Home,
  ArrowLeft,
} from "lucide-react";
import Header from "../../../components/Header";
import LeftSidebar from "../../../components/LeftSidebar";
import { useNavigate } from "react-router-dom";

export default function SuksesPelayanan() {
  const navigate = useNavigate();

  // Data dummy untuk tiket dan PIN
  const ticketData = {
    noTiket: "LPR318728",
    pin: "228973",
    jenisLayanan: "Pelaporan Online",
    jenisPermohonan: "Dinas Pendidikan",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      <div className="flex">
        {/* Sidebar */}
        <div className="fixed top-0 left-0 h-full z-50">
          <LeftSidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 relative overflow-hidden ml-64">
          {" "}
          {/* ml-64 untuk memberi space untuk sidebar */}
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
            {/* Card Success */}
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md border border-gray-200">
              {/* Header Card */}
              <div className="p-6 border-b border-[#226597]">
                <div className="w-16 h-16 bg-[#226597] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h1 className="text-2xl font-semibold text-[#000000]">
                  Permohonan Anda Telah Berhasil Dikirim
                </h1>
                <p className="text-gray-600 text-sm">
                  Terima kasih atas laporan Anda. Laporan telah tercatat, kami
                  akan menindaklanjuti sesuai prosedur dalam waktu yang
                  ditentukan. Silakan pantau perkembangan laporan melalui menu
                  Cek Status Layanan.
                </p>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Info Tiket */}
                <div className="text-center">
                  <h2 className="text-lg font-semibold text-gray-800 mb-4 text-left">
                    Cek permohonan dengan ini:
                  </h2>

                  <div className="space-y-4 max-w-md mx-auto">
                    {/* No. Tiket */}
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-600">
                        No. Tiket
                      </span>
                      <span className="text-lg font-bold text-[#226597]">
                        {ticketData.noTiket}
                      </span>
                    </div>

                    {/* PIN */}
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-600">
                        PIN
                      </span>
                      <span className="text-lg font-bold text-[#226597]">
                        {ticketData.pin}
                      </span>
                    </div>

                    {/* Jenis Layanan */}
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-600">
                        Jenis Layanan
                      </span>
                      <span className="text-sm text-gray-800">
                        {ticketData.jenisLayanan}
                      </span>
                    </div>

                    {/* Jenis Permohonan */}
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-600">
                        OPD Tujuan
                      </span>
                      <span className="text-sm text-gray-800">
                        {ticketData.jenisPermohonan}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tombol Unduh Tiket */}
                <div className="text-center">
                  <button className="inline-flex items-center gap-2 bg-[#226597] hover:bg-[#1a507a] text-white px-6 py-2 rounded-md text-sm font-medium transition-colors">
                    <Download className="w-4 h-4" />
                    Unduh tiket
                  </button>
                </div>

                {/* Garis Pemisah */}
                <div className="border-t border-gray-200 my-6"></div>

                {/* Action Buttons */}
                <div className="space-y-4">
                  {/* Cek Status Layanan */}
                  <button
                    onClick={() => navigate("/cek-status")}
                    className="w-full bg-[#226597] hover:bg-[#1a507a] text-white py-3 rounded-md text-sm font-medium transition-colors"
                  >
                    Cek status layanan
                  </button>

                  {/* Buat Permohonan Baru */}
                  <button
                    onClick={() => navigate("/pelaporan-online")}
                    className="w-full border border-[#226597] text-[#226597] hover:bg-[#226597] hover:text-white py-3 rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Buat laporan baru
                  </button>

                  {/* Kembali ke Beranda */}
                  <button
                    onClick={() => navigate("/")}
                    className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <Home className="w-4 h-4" />
                    Kembali ke beranda
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
