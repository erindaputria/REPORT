import { Plus, Menu, X, Bell, Calendar } from "lucide-react";
import { Calender } from "../../components/beranda/Calender";
import SidebarMasyarakat from "./SidebarMasyarakat";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HelpdeskPopup from "../../components/HelpdeskPopup";

export function BerandaMasyarakat() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Menutup dropdown ketika klik di luar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleItemClick = (item) => {
    console.log(`Menu diklik: ${item}`);
    setIsDropdownOpen(false);

    if (item === "Profil Saya") {
      navigate("/profilmasyarakat");
    } else if (item === "Tampilan") {
      navigate("/tampilan");
    } else if (item === "Keluar") {
      navigate("/login");
    }
  };

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const today = currentDate.getDate();

  // Generate calendar days
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const monthNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const calendarDays = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  // Fungsi untuk navigasi ke halaman Pelaporan Online
  const handlePelaporanOnline = () => {
    navigate("/PelaporanOnline");
  };

  // Fungsi untuk navigasi ke halaman Pengajuan
  const handlePengajuan = () => {
    navigate("/Pengajuan");
  };

  // Fungsi untuk navigasi ke halaman Knowledge Base
  const handleKnowledgeBase = () => {
    navigate("/KnowledgeBase");
  };

  // Fungsi untuk navigasi ke halaman Pelacakan
  const handlePelacakan = () => {
    navigate("/Pelacakan");
  };

  

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Mobile Header - Fixed */}
      <div className="bg-white p-4 flex items-center justify-between md:hidden shadow-sm border-b fixed top-0 left-0 right-0 z-40">
        <button
          onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          className="p-2 rounded-lg bg-gray-100"
        >
          {isMobileSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div className="flex items-center gap-3">
          {/* Toggle untuk sidebar kanan di mobile */}
          <button
            onClick={() => setIsRightSidebarOpen(!isRightSidebarOpen)}
            className="p-2 rounded-lg bg-gray-100 flex items-center gap-1"
          >
            <Calendar size={16} className="text-gray-600" />
            <span className="text-xs font-medium">Info</span>
          </button>

          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <Bell size={16} className="text-gray-600" />
          </div>

          {/* Profile Dropdown Mobile */}
          <div ref={dropdownRef} className="relative">
            <div
              className="w-8 h-8 rounded-full overflow-hidden cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <img
                src="/assets/lomon.jpeg"
                alt="Profil"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Dropdown Menu Mobile */}
            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                {/* Item 1: Profil Saya */}
                <div
                  className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-100"
                  onClick={() => handleItemClick("Profil Saya")}
                >
                  <div className="flex items-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 14C16.42 14 20 15.79 20 18V20H4V18C4 15.79 7.58 14 12 14Z"
                        fill="#226597"
                      />
                    </svg>
                    <span className="text-sm font-medium text-gray-800 ml-1.5">
                      Profil Saya
                    </span>
                  </div>
                </div>

                {/* Item 2: Tampilan */}
                <div
                  className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-100"
                  onClick={() => handleItemClick("Tampilan")}
                >
                  <div className="flex items-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.847 21.934C5.867 21.362 2 17.133 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.157 18.717 16.733 15.914 16.37C14.296 16.161 12.839 15.973 12.262 16.888C11.867 17.514 12.294 18.294 12.817 18.817C12.9724 18.9724 13.0956 19.1568 13.1797 19.3598C13.2637 19.5627 13.307 19.7803 13.307 20C13.307 20.2197 13.2637 20.4373 13.1797 20.6402C13.0956 20.8432 12.9724 21.0276 12.817 21.183C12.294 21.706 11.582 22.019 10.847 21.934ZM11.085 7C11.085 7.39782 10.927 7.77936 10.6457 8.06066C10.3644 8.34196 9.98282 8.5 9.585 8.5C9.18718 8.5 8.80564 8.34196 8.52434 8.06066C8.24304 7.77936 8.085 7.39782 8.085 7C8.085 6.60218 8.24304 6.22064 8.52434 5.93934C8.80564 5.65804 9.18718 5.5 9.585 5.5C9.98282 5.5 10.3644 5.65804 10.6457 5.93934C10.927 6.22064 11.085 6.60218 11.085 7ZM6.5 13C6.89782 13 7.27936 12.842 7.56066 12.5607C7.84196 12.2794 8 11.8978 8 11.5C8 11.1022 7.84196 10.7206 7.56066 10.4393C7.27936 10.158 6.89782 10 6.5 10C6.10218 10 5.72064 10.158 5.43934 10.4393C5.15804 10.7206 5 11.1022 5 11.5C5 11.8978 5.15804 12.2794 5.43934 12.5607C5.72064 12.842 6.10218 13 6.5 13ZM17.5 13C17.8978 13 18.2794 12.842 18.5607 12.5607C18.842 12.2794 19 11.8978 19 11.5C19 11.1022 18.842 10.7206 18.5607 10.4393C18.2794 10.158 17.8978 10 17.5 10C17.1022 10 16.7206 10.158 16.4393 10.4393C16.158 10.7206 16 11.1022 16 11.5C16 11.8978 16.158 12.2794 16.4393 12.5607C16.7206 12.842 17.1022 13 17.5 13ZM14.5 8.5C14.697 8.5 14.892 8.4612 15.074 8.38582C15.256 8.31044 15.4214 8.19995 15.5607 8.06066C15.6999 7.92137 15.8104 7.75601 15.8858 7.57403C15.9612 7.39204 16 7.19698 16 7C16 6.80302 15.9612 6.60796 15.8858 6.42597C15.8104 6.24399 15.6999 6.07863 15.5607 5.93934C15.4214 5.80005 15.256 5.68956 15.074 5.61418C14.892 5.5388 14.697 5.5 14.5 5.5C14.1022 5.5 13.7206 5.65804 13.4393 5.93934C13.158 6.22064 13 6.60218 13 7C13 7.39782 13.158 7.77936 13.4393 8.06066C13.7206 8.34196 14.1022 8.5 14.5 8.5Z"
                        fill="#226597"
                      />
                    </svg>
                    <span className="text-sm font-medium text-gray-800 ml-1.5">
                      Tampilan
                    </span>
                  </div>
                </div>

                {/* Item 3: Keluar */}
                <div
                  className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => handleItemClick("Keluar")}
                >
                  <div className="flex items-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.138 1.81498C10.5859 1.68062 11.059 1.65282 11.5196 1.73382C11.9802 1.81481 12.4154 1.99735 12.7906 2.28146C13.1658 2.56058 13.4706 2.92354 13.6805 3.34138C13.8905 3.75921 13.9999 4.22035 14 4.68798V19.312C13.9999 19.7796 13.8905 20.2408 13.6805 20.6586C13.4706 21.0764 13.1658 21.4394 12.7906 21.7185C12.4154 21.9976 11.9802 22.1852 11.5196 22.2662C11.059 22.3471 10.5859 22.3194 10.138 22.185L4.138 20.385C3.5201 20.1996 2.97841 19.82 2.59328 19.3025C2.20815 18.785 2.00011 18.1571 2 17.512V6.48798C2.00011 5.84288 2.20815 5.215 2.59328 4.69747C2.97841 4.17994 3.5201 3.80034 4.138 3.61498L10.138 1.81498ZM15 3.99998C15 3.73477 15.1054 3.48041 15.2929 3.29288C15.4804 3.10534 15.7348 2.99998 16 2.99998H19C19.7956 2.99998 20.5587 3.31606 21.1213 3.87866C21.6839 4.44127 22 5.20434 22 5.99998V6.99998C22 7.2652 21.8946 7.51956 21.7071 7.70709C21.5196 7.89463 21.2652 7.99998 21 7.99998C20.7348 7.99998 20.4804 7.89463 20.2929 7.70709C20.1054 7.51956 20 7.2652 20 6.99998V5.99998C20 5.73477 19.8946 5.48041 19.7071 5.29288C19.5196 5.10534 19.2652 4.99998 19 4.99998H16C15.7348 4.99998 15.4804 4.89463 15.2929 4.70709C15.1054 4.51955 15 4.2652 15 3.99998ZM21 16C21.2652 16 21.5196 16.1053 21.7071 16.2929C21.8946 16.4804 22 16.7348 22 17V18C22 18.7956 21.6839 19.5587 21.1213 20.1213C20.5587 20.6839 19.7956 21 19 21H16C15.7348 21 15.4804 20.8946 15.2929 20.7071C15.1054 20.5196 15 20.2652 15 20C15 19.7348 15.1054 19.4804 15.2929 19.2929C15.4804 19.1053 15.7348 19 16 19H19C19.2652 19 19.5196 18.8946 19.7071 18.7071C19.8946 18.5196 20 18.2652 20 18V17C20 16.7348 20.1054 16.4804 20.2929 16.2929C20.4804 16.1053 20.7348 16 21 16ZM9 11C8.73478 11 8.48043 11.1053 8.29289 11.2929C8.10536 11.4804 8 11.7348 8 12C8 12.2652 8.10536 12.5196 8.29289 12.7071C8.48043 12.8946 8.73478 13 9 13H9.001C9.26622 13 9.52057 12.8946 9.70811 12.7071C9.89564 12.5196 10.001 12.2652 10.001 12C10.001 11.7348 9.89564 11.4804 9.70811 11.2929C9.52057 11.1053 9.26622 11 9.001 11H9Z"
                        fill="#226597"
                      />
                      <path
                        d="M16 12H21M21 12L19 10M21 12L19 14"
                        stroke="#226597"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-sm font-medium text-gray-800 ml-1.5">
                      Keluar
                    </span>
                  </div>
                </div>
              </div>
            )}
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
          <SidebarMasyarakat />
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

      {/* Center Content - Tambahkan padding top untuk mobile header */}
      <div className="flex-1 p-4 md:p-6 mt-16 md:mt-0">
        {/* Main Cards */}
        <div className="grid grid-cols-1 gap-4 mb-6 md:mb-8 justify-center">
          {/* Card Pelaporan */}
          <div className="relative bg-[#226597] text-white rounded-2xl md:rounded-[2rem] shadow p-6 md:p-8 min-h-[240px] md:min-h-[280px] flex flex-col justify-between text-left overflow-hidden">
            {/* SVG Background */}
            <svg
              className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
              viewBox="0 0 749 208"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M722.619 41.9351C444.934 190.999 254.55 -4.28339 106.773 0.0719757C-45.381 4.58015 -56 80.7703 -56 50.3973V95.823C-56 95.823 -5.95972 77.0332 79.8086 71.2784C391.01 50.3973 409.152 237.166 553.79 217.212C698.428 197.259 799.16 0.847076 722.619 41.9351Z"
                fill="white"
                fillOpacity="0.1"
              />
            </svg>

            {/* Konten Card */}
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-2">
                Pelaporan Online
              </h2>
              <p className="text-white/80 text-sm md:text-base mt-4 md:mt-6">
                Laporkan persoalan dan permasalahan Anda disini!
              </p>
            </div>

            {/* Tombol dengan navigasi */}
            <button
              onClick={handlePelaporanOnline}
              className="relative z-10 self-start px-6 py-3 border border-white rounded-full font-bold hover:bg-white hover:text-[#226597] transition text-sm md:text-base"
            >
              Buat Laporan <Plus size={16} className="inline ml-2" />
            </button>
          </div>
        </div>

        {/* Layanan Section */}
        <div className="mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-left">
            Layanan
          </h2>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {/* Card 1 - Knowledge Base */}
            <div className="flex flex-col items-center">
              <div
                onClick={handleKnowledgeBase}
                className="w-32 h-32 md:w-40 md:h-40 bg-[#226597] rounded-2xl flex items-center justify-center hover:shadow cursor-pointer transition-transform hover:scale-105"
              >
                <svg
                  width="50"
                  height="56"
                  viewBox="0 0 60 66"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 md:w-14 md:h-14"
                >
                  <path
                    d="M46.8059 0.916626H7.08378C5.39795 0.916626 4.03003 2.28454 4.03003 3.97329V62.0266C4.03003 63.7154 5.39795 65.0833 7.08378 65.0833H46.8088C48.4946 65.0833 49.8625 63.7154 49.8625 62.0266V3.97329C49.8625 2.28454 48.4946 0.916626 46.8059 0.916626Z"
                    fill="#C77F67"
                  />
                  <path
                    d="M37.6389 23.8329C37.6389 24.2382 37.4778 24.6269 37.1912 24.9136C36.9046 25.2002 36.5159 25.3612 36.1105 25.3612H20.833C20.4277 25.3612 20.0389 25.2002 19.7523 24.9136C19.4657 24.6269 19.3047 24.2382 19.3047 23.8329V14.6658C19.3047 14.2604 19.4657 13.8717 19.7523 13.5851C20.0389 13.2985 20.4277 13.1375 20.833 13.1375H36.1105C36.5159 13.1375 36.9046 13.2985 37.1912 13.5851C37.4778 13.8717 37.6389 14.2604 37.6389 14.6658V23.8329Z"
                    fill="white"
                  />
                  <path
                    d="M0.970459 10.0837H10.1375M0.970459 25.3583H10.1375M0.970459 40.6417H10.1375M0.970459 55.9162H10.1375"
                    stroke="#191919"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M59.0296 10.0837V19.2507H49.8625V7.02991H55.973C56.7827 7.03145 57.5588 7.35358 58.1316 7.92585C58.7044 8.49813 59.0273 9.27396 59.0296 10.0837Z"
                    fill="#66E1FF"
                  />
                  <path
                    d="M59.0296 19.2507H49.8625V31.4716H59.0296V19.2507Z"
                    fill="#FFEF5E"
                  />
                  <path
                    d="M59.0296 31.4717H49.8625V43.6925H59.0296V31.4717Z"
                    fill="#FF808C"
                  />
                  <path
                    d="M59.0296 43.6953V52.8624C59.0273 53.6721 58.7044 54.4479 58.1316 55.0202C57.5588 55.5925 56.7827 55.9146 55.973 55.9161H49.8625V43.6953H59.0296Z"
                    fill="#B2FFC0"
                  />
                  <path
                    d="M46.8059 0.916626H7.08378C5.39795 0.916626 4.03003 2.28454 4.03003 3.97329V62.0266C4.03003 63.7154 5.39795 65.0833 7.08378 65.0833H46.8088C48.4946 65.0833 49.8625 63.7154 49.8625 62.0266V3.97329C49.8625 2.28454 48.4946 0.916626 46.8059 0.916626Z"
                    stroke="#191919"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M59.0297 19.2507V10.0837C59.0274 9.27396 58.7045 8.49813 58.1317 7.92585C57.5589 7.35358 56.7827 7.03145 55.973 7.02991H49.8626V19.2507M59.0297 19.2507H49.8626M59.0297 19.2507V31.4716M49.8626 19.2507V31.4716M49.8626 31.4716H59.0297M49.8626 31.4716V43.6924M59.0297 31.4716V43.6924M49.8626 43.6924H59.0297M49.8626 43.6924V55.9162H55.973C56.7827 55.9146 57.5589 55.5925 58.1317 55.0202C58.7045 54.4479 59.0274 53.6721 59.0297 52.8624V43.6924M37.6389 23.8328C37.6389 24.2382 37.4778 24.6269 37.1912 24.9135C36.9046 25.2001 36.5159 25.3612 36.1105 25.3612H20.833C20.4277 25.3612 20.0389 25.2001 19.7523 24.9135C19.4657 24.6269 19.3047 24.2382 19.3047 23.8328V14.6657C19.3047 14.2604 19.4657 13.8717 19.7523 13.585C20.0389 13.2984 20.4277 13.1374 20.833 13.1374H36.1105C36.5159 13.1374 36.9046 13.2984 37.1912 13.585C37.4778 13.8717 37.6389 14.2604 37.6389 14.6657V23.8328Z"
                    stroke="#191919"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="font-semibold text-sm md:text-base leading-snug mt-3 text-center">
                Knowledge <br /> Base
              </span>
            </div>

            {/* Card 2 - Cek Status Laporan */}
            <div className="flex flex-col items-center">
              <div
                onClick={handlePelacakan}
                className="w-32 h-32 md:w-40 md:h-40 bg-[#226597] rounded-2xl flex items-center justify-center hover:shadow cursor-pointer transition-transform hover:scale-105"
              >
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 md:w-14 md:h-14"
                >
                  <path
                    d="M49.002 27.501C49.3654 27.5151 49.7106 27.6656 49.9678 27.9229C50.225 28.1801 50.3756 28.5252 50.3896 28.8887C50.4035 29.2482 50.2814 29.599 50.0498 29.874L30.8809 49.0439L20.834 38.9971C20.604 38.7204 20.4856 38.3675 20.502 38.0078C20.5186 37.6444 20.6716 37.3003 20.9307 37.0449C21.1897 36.7897 21.5359 36.6413 21.8994 36.6299C22.2573 36.6187 22.6062 36.7413 22.8789 36.9727L30.8809 44.9746L48.0156 27.8398C48.2906 27.6082 48.6424 27.4871 49.002 27.501Z"
                    fill="#E3E3E3"
                    stroke="black"
                  />
                  <path
                    d="M34.9904 4.37366C36.6063 4.37367 38.1767 4.91112 39.4532 5.90198C40.7297 6.89283 41.6393 8.2809 42.0402 9.84631L42.1368 10.2223H43.3243C43.2768 10.7017 43.2516 11.1837 43.2501 11.6656V11.6686C43.2516 12.1504 43.2768 12.6317 43.3243 13.111H39.3888V11.6666C39.3888 10.5027 38.9267 9.38617 38.1036 8.56311C37.2806 7.74006 36.1641 7.27798 35.0001 7.27795C33.8362 7.27795 32.7197 7.74009 31.8966 8.56311C31.0735 9.38617 30.6115 10.5026 30.6115 11.6666V13.111H23.9747C23.8249 13.111 23.6766 13.1406 23.5382 13.1979C23.3997 13.2553 23.2741 13.3399 23.1681 13.4459C23.0621 13.5519 22.9774 13.6775 22.92 13.816C22.8628 13.9544 22.8332 14.1028 22.8331 14.2526V17.9996H44.6554C45.1331 19.0267 45.7234 19.9959 46.4171 20.8893H19.9445V14.2545C19.9491 13.1865 20.3758 12.164 21.131 11.4088C21.8391 10.7007 22.7822 10.2815 23.7775 10.2281L23.9767 10.2223H27.8439L27.9396 9.84631C28.3404 8.28084 29.2509 6.89285 30.5275 5.90198C31.804 4.91111 33.3744 4.37366 34.9904 4.37366Z"
                    fill="white"
                    stroke="black"
                  />
                  <path
                    d="M12.3248 10.2994C12.7193 10.1864 13.1334 10.1587 13.5396 10.2174L13.5748 10.2223H16.9996V58.4996H53.9996V26.8053C54.1865 26.8037 54.3871 26.8028 54.5953 26.8004C56.0927 26.783 58.0101 26.7487 58.3316 26.7496H58.3345C58.8166 26.7482 59.2984 26.723 59.7779 26.6754V62.8248C59.7754 63.1922 59.7007 63.5555 59.5582 63.8942C59.4152 64.2337 59.2069 64.5424 58.9449 64.8014C58.6829 65.0603 58.372 65.2649 58.0308 65.4039C57.6896 65.5429 57.3241 65.6131 56.9556 65.611H13.0445C12.6761 65.6131 12.3105 65.5429 11.9693 65.4039C11.6281 65.2649 11.3173 65.0604 11.0552 64.8014C10.7932 64.5424 10.5849 64.2337 10.442 63.8942C10.3348 63.6396 10.2665 63.371 10.2379 63.0973L10.2222 62.8219V13.0201C10.2321 12.6099 10.3292 12.2067 10.5064 11.8365C10.6837 11.4664 10.937 11.1376 11.2505 10.8727C11.564 10.6078 11.9302 10.4125 12.3248 10.2994Z"
                    fill="#C77F67"
                    stroke="black"
                  />
                  <path
                    d="M58.3337 2.44446C63.4268 2.44469 67.5554 6.57397 67.5554 11.6671C67.5552 16.7601 63.4267 20.8886 58.3337 20.8888C53.2406 20.8888 49.1113 16.7602 49.1111 11.6671C49.1111 6.57382 53.2404 2.44446 58.3337 2.44446Z"
                    fill="#E3E3E3"
                    stroke="black"
                  />
                </svg>
              </div>
              <span className="font-semibold text-sm md:text-base leading-snug mt-3 text-center">
                Cek Status <br /> Laporan
              </span>
            </div>
          </div>
        </div>

        {/* Riwayat Laporan */}
        <div className="mt-6 md:mt-8">
          <hr className="border-gray-300 mb-4" />

          {/* Header Section */}
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-xl md:text-2xl font-semibold text-left">
              Riwayat Laporan
            </h2>
            <button
              onClick={() => navigate("/riwayatmasyarakat")}
              className="text-[#226597] text-sm font-semibold hover:underline"
            >
              Tampilkan semua
            </button>
          </div>

          {/* Data Riwayat */}
          {(() => {
            const riwayatData = [
              // contoh: isi atau kosongkan array ini untuk tes
              { id: "LPR321336", nama: "Gangguan Router", tanggal: "17-07-2025" },
              { id: "LYN651289", nama: "Permintaan Printer", tanggal: "17-07-2025" },
            ];

            if (riwayatData.length === 0) {
              return (
                <div className="bg-white rounded-xl md:rounded-2xl p-4 flex items-center shadow-sm border border-gray-200">
                  <div className="w-6 h-6 flex items-center justify-center border-2 border-gray-400 rounded-full mr-3 font-bold text-gray-600 text-sm">
                    !
                  </div>
                  <p className="text-gray-600 text-sm md:text-base">
                    Tidak ada riwayat laporan untuk ditampilkan
                  </p>
                </div>
              );
            }

            return (
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                {riwayatData.map((item, index, arr) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center px-5 py-4 ${
                      index !== arr.length - 1 ? "border-b border-gray-200" : ""
                    }`}
                  >
                    {/* Isi Data */}
                    <div className="flex-1 grid grid-cols-3 text-sm md:text-base">
                      <div>
                        <p className="text-gray-500 font-medium">ID:</p>
                        <p className="text-gray-800 font-semibold">{item.id}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 font-medium">Nama:</p>
                        <p className="text-gray-800 font-semibold">{item.nama}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 font-medium">Tanggal Selesai:</p>
                        <p className="text-gray-800 font-semibold">{item.tanggal}</p>
                      </div>
                    </div>

                    {/* Icon Mata */}
                    <button
                      onClick={() =>
                        navigate("/lihatlaporanmasyarakat", { state: { item } })
                      }
                      className="ml-3 p-2 hover:bg-gray-100 rounded-full transition"
                      title="Lihat Detail"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            );
          })()}
        </div>



      </div>

      {/* Right Sidebar - Responsif untuk semua perangkat */}
      <div
        className={`${
          isRightSidebarOpen ? "block" : "hidden"
        } lg:block fixed lg:relative inset-0 z-50 lg:z-auto bg-white lg:bg-[#226597] w-full lg:w-80 p-4 lg:p-6 space-y-4 overflow-y-auto`}
      >
        {/* Tombol tutup untuk mobile */}
        <div className="flex justify-between items-center lg:hidden mb-4">
          <h2 className="text-xl font-bold text-gray-800">Informasi</h2>
          <button
            onClick={() => setIsRightSidebarOpen(false)}
            className="p-2 bg-gray-100 rounded-full"
          >
            <X size={20} />
          </button>
        </div>

        {/* Notifikasi + Profil dengan Dropdown */}
        <div className="flex items-center justify-between gap-2">
          {/* Card Notifikasi */}
          <div className="w-10 h-10 bg-white lg:bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200">
            <svg
              width="22"
              height="25"
              viewBox="0 0 25 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.96289 23.2275C10.4627 23.1218 13.5075 23.1219 14.0088 23.2275C14.4361 23.3262 14.8983 23.5572 14.8984 24.0605C14.8736 24.54 14.5927 24.9654 14.2041 25.2354C13.7002 25.6281 13.1084 25.8772 12.4902 25.9668C12.1485 26.0111 11.8123 26.0121 11.4824 25.9668C10.8634 25.8771 10.2723 25.628 9.76953 25.2344C9.37994 24.9655 9.09809 24.54 9.07324 24.0605C9.07342 23.5572 9.53566 23.3262 9.96289 23.2275ZM12.0449 6C14.1251 6 16.2505 6.98735 17.5127 8.625C18.3314 9.67935 18.707 10.7327 18.707 12.3701V12.7959C18.707 14.0518 19.0391 14.7925 19.7695 15.6455C20.3231 16.274 20.5 17.0808 20.5 17.9561C20.5 18.8302 20.213 19.6602 19.6377 20.334C18.8844 21.1417 17.8216 21.6574 16.7373 21.7471C15.1662 21.881 13.594 21.9941 12.001 21.9941C10.4068 21.9941 8.83497 21.9263 7.26367 21.7471C6.1784 21.6574 5.11562 21.1417 4.36328 20.334C3.78793 19.6602 3.50001 18.8302 3.5 17.9561C3.5 17.0808 3.67788 16.274 4.23047 15.6455C4.98379 14.7925 5.29395 14.0518 5.29395 12.7959V12.3701C5.29398 10.6883 5.71351 9.58834 6.57715 8.51172C7.86123 6.94165 9.9197 6 11.9561 6H12.0449Z"
                fill="#226597"
              />
              <path
                d="M21 8C23.2091 8 25 6.20914 25 4C25 1.79086 23.2091 0 21 0C18.7909 0 17 1.79086 17 4C17 6.20914 18.7909 8 21 8Z"
                fill="#EE1D52"
              />
            </svg>
          </div>

          {/* Card Profil dengan Dropdown */}
          <div ref={dropdownRef} className="flex-1 relative">
            <div
              className="bg-white lg:bg-white rounded-full flex items-center justify-between px-2 py-1.5 shadow-sm border border-gray-200 cursor-pointer transition-colors"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <div className="flex items-center gap-2 overflow-hidden">
                {/* Avatar Profil */}
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src="/assets/Lomon.png"
                    alt="Profil"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Nama */}
                <p className="text-gray-700 text-xs font-medium truncate">
                  Lomon Kahiel
                </p>
              </div>
              {/* Icon Dropdown */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`-ml-1 h-4 w-4 text-gray-500 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                {/* Item 1: Profil Saya */}
                <div
                  className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-100"
                  onClick={() => handleItemClick("Profil Saya")}
                >
                  <div className="flex items-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 14C16.42 14 20 15.79 20 18V20H4V18C4 15.79 7.58 14 12 14Z"
                        fill="#226597"
                      />
                    </svg>
                    <span className="text-sm font-medium text-gray-800 ml-1.5">
                      Profil Saya
                    </span>
                  </div>
                </div>

                {/* Item 2: Tampilan */}
                <div
                  className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-100"
                  onClick={() => handleItemClick("Tampilan")}
                >
                  <div className="flex items-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.847 21.934C5.867 21.362 2 17.133 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.157 18.717 16.733 15.914 16.37C14.296 16.161 12.839 15.973 12.262 16.888C11.867 17.514 12.294 18.294 12.817 18.817C12.9724 18.9724 13.0956 19.1568 13.1797 19.3598C13.2637 19.5627 13.307 19.7803 13.307 20C13.307 20.2197 13.2637 20.4373 13.1797 20.6402C13.0956 20.8432 12.9724 21.0276 12.817 21.183C12.294 21.706 11.582 22.019 10.847 21.934ZM11.085 7C11.085 7.39782 10.927 7.77936 10.6457 8.06066C10.3644 8.34196 9.98282 8.5 9.585 8.5C9.18718 8.5 8.80564 8.34196 8.52434 8.06066C8.24304 7.77936 8.085 7.39782 8.085 7C8.085 6.60218 8.24304 6.22064 8.52434 5.93934C8.80564 5.65804 9.18718 5.5 9.585 5.5C9.98282 5.5 10.3644 5.65804 10.6457 5.93934C10.927 6.22064 11.085 6.60218 11.085 7ZM6.5 13C6.89782 13 7.27936 12.842 7.56066 12.5607C7.84196 12.2794 8 11.8978 8 11.5C8 11.1022 7.84196 10.7206 7.56066 10.4393C7.27936 10.158 6.89782 10 6.5 10C6.10218 10 5.72064 10.158 5.43934 10.4393C5.15804 10.7206 5 11.1022 5 11.5C5 11.8978 5.15804 12.2794 5.43934 12.5607C5.72064 12.842 6.10218 13 6.5 13ZM17.5 13C17.8978 13 18.2794 12.842 18.5607 12.5607C18.842 12.2794 19 11.8978 19 11.5C19 11.1022 18.842 10.7206 18.5607 10.4393C18.2794 10.158 17.8978 10 17.5 10C17.1022 10 16.7206 10.158 16.4393 10.4393C16.158 10.7206 16 11.1022 16 11.5C16 11.8978 16.158 12.2794 16.4393 12.5607C16.7206 12.842 17.1022 13 17.5 13ZM14.5 8.5C14.697 8.5 14.892 8.4612 15.074 8.38582C15.256 8.31044 15.4214 8.19995 15.5607 8.06066C15.6999 7.92137 15.8104 7.75601 15.8858 7.57403C15.9612 7.39204 16 7.19698 16 7C16 6.80302 15.9612 6.60796 15.8858 6.42597C15.8104 6.24399 15.6999 6.07863 15.5607 5.93934C15.4214 5.80005 15.256 5.68956 15.074 5.61418C14.892 5.5388 14.697 5.5 14.5 5.5C14.1022 5.5 13.7206 5.65804 13.4393 5.93934C13.158 6.22064 13 6.60218 13 7C13 7.39782 13.158 7.77936 13.4393 8.06066C13.7206 8.34196 14.1022 8.5 14.5 8.5Z"
                        fill="#226597"
                      />
                    </svg>
                    <span className="text-sm font-medium text-gray-800 ml-1.5">
                      Tampilan
                    </span>
                  </div>
                </div>

                {/* Item 3: Keluar */}
                <div
                  className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => handleItemClick("Keluar")}
                >
                  <div className="flex items-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.138 1.81498C10.5859 1.68062 11.059 1.65282 11.5196 1.73382C11.9802 1.81481 12.4154 1.99735 12.7906 2.28146C13.1658 2.56058 13.4706 2.92354 13.6805 3.34138C13.8905 3.75921 13.9999 4.22035 14 4.68798V19.312C13.9999 19.7796 13.8905 20.2408 13.6805 20.6586C13.4706 21.0764 13.1658 21.4394 12.7906 21.7185C12.4154 21.9976 11.9802 22.1852 11.5196 22.2662C11.059 22.3471 10.5859 22.3194 10.138 22.185L4.138 20.385C3.5201 20.1996 2.97841 19.82 2.59328 19.3025C2.20815 18.785 2.00011 18.1571 2 17.512V6.48798C2.00011 5.84288 2.20815 5.215 2.59328 4.69747C2.97841 4.17994 3.5201 3.80034 4.138 3.61498L10.138 1.81498ZM15 3.99998C15 3.73477 15.1054 3.48041 15.2929 3.29288C15.4804 3.10534 15.7348 2.99998 16 2.99998H19C19.7956 2.99998 20.5587 3.31606 21.1213 3.87866C21.6839 4.44127 22 5.20434 22 5.99998V6.99998C22 7.2652 21.8946 7.51956 21.7071 7.70709C21.5196 7.89463 21.2652 7.99998 21 7.99998C20.7348 7.99998 20.4804 7.89463 20.2929 7.70709C20.1054 7.51956 20 7.2652 20 6.99998V5.99998C20 5.73477 19.8946 5.48041 19.7071 5.29288C19.5196 5.10534 19.2652 4.99998 19 4.99998H16C15.7348 4.99998 15.4804 4.89463 15.2929 4.70709C15.1054 4.51955 15 4.2652 15 3.99998ZM21 16C21.2652 16 21.5196 16.1053 21.7071 16.2929C21.8946 16.4804 22 16.7348 22 17V18C22 18.7956 21.6839 19.5587 21.1213 20.1213C20.5587 20.6839 19.7956 21 19 21H16C15.7348 21 15.4804 20.8946 15.2929 20.7071C15.1054 20.5196 15 20.2652 15 20C15 19.7348 15.1054 19.4804 15.2929 19.2929C15.4804 19.1053 15.7348 19 16 19H19C19.2652 19 19.5196 18.8946 19.7071 18.7071C19.8946 18.5196 20 18.2652 20 18V17C20 16.7348 20.1054 16.4804 20.2929 16.2929C20.4804 16.1053 20.7348 16 21 16ZM9 11C8.73478 11 8.48043 11.1053 8.29289 11.2929C8.10536 11.4804 8 11.7348 8 12C8 12.2652 8.10536 12.5196 8.29289 12.7071C8.48043 12.8946 8.73478 13 9 13H9.001C9.26622 13 9.52057 12.8946 9.70811 12.7071C9.89564 12.5196 10.001 12.2652 10.001 12C10.001 11.7348 9.89564 11.4804 9.70811 11.2929C9.52057 11.1053 9.26622 11 9.001 11H9Z"
                        fill="#226597"
                      />
                      <path
                        d="M16 12H21M21 12L19 10M21 12L19 14"
                        stroke="#226597"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-sm font-medium text-gray-800 ml-1.5">
                      Keluar
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Calendar */}
        <div className="bg-white lg:bg-transparent rounded-xl p-4 lg:p-0">
          <Calender />
        </div>

        
      </div>

      {/* Overlay for right sidebar di mobile */}
      {isRightSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsRightSidebarOpen(false)}
        ></div>
      )}
      <HelpdeskPopup />
    </div>
  );
}
