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
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function SuksesPelayanan() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Ambil data dari FormLaporan melalui state navigasi
  const laporanData = location.state?.laporanData || {};

  // Data tiket dengan OPD tujuan dari form
  const ticketData = {
    noTiket: "LPR318728",
    pin: "228973",
    jenisLayanan: "Pelaporan Online",
    jenisPermohonan: laporanData.opdTujuan || "Dinas Pendidikan", // Ambil dari form
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
            {/* Card Success */}
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md border border-gray-200">
              {/* Header Card */}
              <div className="p-6">
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
                <h1 className="text-2xl font-semibold text-[#000000] text-center">
                  Laporan Anda Telah Berhasil Dikirim
                </h1>
                <p className="text-gray-600 text-sm text-center mt-3">
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

                    {/* Jenis Layanan */}
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-600">
                        Jenis Layanan
                      </span>
                      <span className="text-sm text-gray-800">
                        {ticketData.jenisLayanan}
                      </span>
                    </div>

                    {/* OPD Tujuan */}
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
                <div className="text-right">
                  <button className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 px-0 py-2 text-sm font-medium transition-colors underline">
                    <Download className="w-4 h-4" />
                    Unduh tiket
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="max-w-2xl mx-auto mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Cek Status Layanan */}
                <button
                  onClick={() => navigate("/pelacakan")}
                  className="bg-[#226597] hover:bg-[#1a507a] text-white py-3 rounded-md text-sm font-medium transition-colors text-center"
                >
                  Cek status layanan
                </button>

                {/* Buat Laporan Baru */}
                <button
                  onClick={() => navigate("/pelaporanonline")}
                  className="bg-[#226597] hover:bg-[#1a507a] text-white py-3 rounded-md text-sm font-medium transition-colors text-center"
                >
                  Buat laporan baru
                </button>

                {/* Kembali ke Beranda */}
                <button
                  onClick={() => navigate("/beranda")}
                  className="bg-[#226597] hover:bg-[#1a507a] text-white py-3 rounded-md text-sm font-medium transition-colors text-center"
                >
                  Kembali ke beranda
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
