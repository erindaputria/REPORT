import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, Bell, FileText } from "lucide-react";
import Header from "../../../components/Header";
import LeftSidebar from "../../../components/LeftSidebar";

const PelaporanOnline = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [selectedOpd, setSelectedOpd] = useState(null);
  const navigate = useNavigate();

  const opdList = [
    { id: 1, name: "Dinas Kesehatan", logo: "/assets/Dinas Kesehatan.png" },
    { id: 2, name: "Dinas Perhubungan", logo: "/assets/Dinas Perhubungan.png" },
    { id: 3, name: "Dinas Pendidikan", logo: "/assets/Dinas Pendidikan.png" },
    {
      id: 4,
      name: "Dinas Pekerjaan Umum dan Penataan Ruang",
      logo: "/assets/Dinas Pekerjaan Umum dan Penataan Ruang.png",
    },
    {
      id: 5,
      name: "Dinas Sosial",
      logo: "/assets/Dinas Sosial.png",
    },
    {
      id: 6,
      name: "Dinas Lingkungan Hidup",
      logo: "/assets/Dinas Lingkungan Hidup.png",
    },
    {
      id: 7,
      name: "Dinas Komunikasi dan Informatika",
      logo: "/assets/Dinas Komunikasi dan Informatika.png",
    },
    {
      id: 8,
      name: "Dinas Pariwisata dan Ekonomi Kreatif",
      logo: "/assets/Dinas Pariwisata & Ekonomi Kreatif.png",
    },
    {
      id: 9,
      name: "Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu",
      logo: "/assets/Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu.png",
    },
    {
      id: 10,
      name: "Dinas Tenaga Kerja",
      logo: "/assets/Dinas Tenaga Kerja.png",
    },
    {
      id: 11,
      name: "Dinas Pertanian",
      logo: "/assets/Dinas Pertanian.png",
    },
    {
      id: 12,
      name: "Dinas Perindustrian dan Perdagangan",
      logo: "/assets/Dinas Perindustrian dan Perdagangan.png",
    },
    {
      id: 13,
      name: "Dinas Kependudukan dan Pencatatan Sipil",
      logo: "/assets/Dinas Kependudukan dan Pencatatan Sipil.png",
    },
    {
      id: 14,
      name: "Dinas Ketahanan Pangan",
      logo: "/assets/Dinas Ketahanan Pangan.png",
    },
    {
      id: 15,
      name: "Dinas Pemuda dan Olahraga",
      logo: "/assets/Dinas Pemuda dan Olahraga.png",
    },
    {
      id: 16,
      name: "Dinas Perumahan dan Kawasan Permukiman",
      logo: "/assets/Dinas Perumahan dan Kawasan Permukiman.png",
    },
    {
      id: 17,
      name: "Dinas Perpustakaan dan Kearsipan",
      logo: "/assets/Dinas Perpustakaan dan Kearsipan.png",
    },
    {
      id: 18,
      name: "Dinas Pengendalian Penduduk, Perlindungan Perempuan dan Anak",
      logo: "/assets/Dinas Pengendalian Penduduk, Perlindungan Perempuan dan Anak.png",
    },
    {
      id: 19,
      name: "Dinas Pertahanan atau Tata Ruang",
      logo: "/assets/Dinas Pertahanan atau Tata Ruang.png",
    },
    {
      id: 20,
      name: "Dinas Kepemudaan, Olahraga, dan Pariwisata",
      logo: "/assets/Dinas Kepemudaan, Olahraga, dan Pariwisata.png",
    },
  ];

  // Split OPD list into two columns (9 each)
  const leftColumnOpd = opdList.slice(0, 10);
  const rightColumnOpd = opdList.slice(10, 20);

  const handleOpdSelect = (opd) => {
    setSelectedOpd(opd);
    console.log(`OPD selected: ${opd.name}`);

    // Navigasi ke FormLaporan dengan membawa data OPD
    navigate("/FormLaporan", {
      state: {
        selectedOpd: opd,
      },
    });
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
            {/* Page Header */}
            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#226597] mb-3">
                Pelaporan Online
              </h1>
              <p className="text-gray-600 text-lg">Pilih OPD tujuan Anda</p>
            </div>

            {/* OPD Selection Grid - 2 Kolom dengan 9 OPD masing-masing */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                {/* Kolom Kiri */}
                <div className="space-y-3 md:space-y-4">
                  {leftColumnOpd.map((opd) => (
                    <div
                      key={opd.id}
                      className="group cursor-pointer"
                      onClick={() => handleOpdSelect(opd)}
                    >
                      <div className="bg-gradient-to-r from-[#226597] to-[#226597] rounded-lg p-3 md:p-4 border border-transparent group-hover:border-blue-300 group-hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors flex-shrink-0 overflow-hidden">
                              {opd.logo ? (
                                <img
                                  src={opd.logo}
                                  alt={`Logo ${opd.name}`}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <FileText className="text-[#226597] w-4 h-4 md:w-5 md:h-5" />
                              )}
                            </div>
                            <div className="min-w-0">
                              <h3 className="font-semibold text-white text-sm leading-tight">
                                {opd.name}
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Kolom Kanan */}
                <div className="space-y-3 md:space-y-4">
                  {rightColumnOpd.map((opd) => (
                    <div
                      key={opd.id}
                      className="group cursor-pointer"
                      onClick={() => handleOpdSelect(opd)}
                    >
                      <div className="bg-gradient-to-r from-[#226597] to-[#226597] rounded-lg p-3 md:p-4 border border-transparent group-hover:border-blue-300 group-hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors flex-shrink-0 overflow-hidden">
                              {opd.logo ? (
                                <img
                                  src={opd.logo}
                                  alt={`Logo ${opd.name}`}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <FileText className="text-[#226597] w-4 h-4 md:w-5 md:h-5" />
                              )}
                            </div>
                            <div className="min-w-0">
                              <h3 className="font-semibold text-white text-sm leading-tight">
                                {opd.name}
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PelaporanOnline;
