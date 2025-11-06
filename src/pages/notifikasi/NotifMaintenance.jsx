import { Menu, X, Bell, Download, ArrowLeft } from "lucide-react";
import Header from "../../components/Header";
import LeftSidebar from "../../components/LeftSidebar";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function NotifMaintenance() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

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
            {/* Button Kembali */}
            <div className="max-w-6xl mx-auto mb-6">
              <button
                onClick={() => navigate("/beranda")}
                className="inline-flex items-center gap-2 text-[#113F67] hover:text-blue-800 px-4 py-2 text-sm font-medium transition-colors border border-gray-300 rounded-lg hover:bg-gray-50 bg-white shadow-sm hover:shadow-md"
              >
                <svg
                  width="10"
                  height="17"
                  viewBox="0 0 10 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.41379 8.485L9.48479 15.556L8.07079 16.97L0.292786 9.192C0.105315 9.00447 0 8.75016 0 8.485C0 8.21984 0.105315 7.96553 0.292786 7.778L8.07079 0L9.48479 1.414L2.41379 8.485Z"
                    fill="#113F67"
                  />
                </svg>
                Kembali
              </button>
            </div>

            {/* Outer Card */}
            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-300 p-8">
              {/* Header Pengumuman */}
              <div className="mb-6 flex justify-between items-center">
                <div>
                  <h1 className="text-xl font-semibold text-[#000000] mb-4">
                    Pengumuman
                  </h1>
                  <div className="bg-[#226597] text-white px-4 py-1 rounded-2xl inline-block">
                    <span className="text-sm font-medium">Maintenance</span>
                  </div>
                </div>
                <div className="text-sm text-gray-500">4 hari yang lalu</div>
              </div>

              {/* Ganti inner card dengan gambar maintenance.png */}
              <div className="flex justify-center items-center py-8">
                <img
                  src="/assets/maintenance.png"
                  alt="Maintenance Information"
                  className="max-w-full h-auto rounded-lg shadow-md"
                />
              </div>

              {/* Teks tambahan di bawah gambar */}
              <div className="mt-8 space-y-6 text-left">
                <div className="text-gray-800">
                  <p className="font-semibold text-lg">
                    📢 Pengumuman Maintenance Terjadwal
                  </p>
                  <div className="mt-2 text-sm space-y-3">
                    <p>
                      Dalam rangka meningkatkan kinerja dan keamanan sistem,
                      Service Desk akan menjalani pemeliharaan (maintenance)
                      pada:
                    </p>

                    <div className="space-y-2">
                      <p className="flex items-start gap-2">
                        <span>🗓️</span>
                        <span>Tanggal: 5 November 2025</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span>⏰</span>
                        <span>Waktu: 08.00 - 16.00 WIB</span>
                      </p>
                    </div>

                    <p className="mb-1">
                      Selama waktu tersebut, akses ke sistem Service Desk
                      mungkin terbatas.
                    </p>
                    <p>
                      Disarankan untuk menyelesaikan aktivitas sebelum jadwal
                      tersebut.
                    </p>
                    <p>Terima kasih atas pengertian Anda.</p>
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
