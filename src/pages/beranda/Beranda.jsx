import { Plus, Menu, X, Bell, Calendar } from "lucide-react";
import { Calender } from "../../components/beranda/Calender";
import LeftSidebar from "../../components/LeftSidebar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Beranda() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const navigate = useNavigate();

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
      {/* Mobile Header */}
      <div className="bg-white p-4 flex items-center justify-between md:hidden shadow-sm">
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

      {/* Center Content */}
      <div className="flex-1 p-4 md:p-6">
        {/* Main Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6 md:mb-8 justify-center">
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
                Pelaporan <br /> Online
              </h2>
              <p className="mb-4 text-white/80 text-sm md:text-base">
                Laporkan persoalan dan <br /> permasalahan Anda disini!
              </p>
            </div>

            {/* Tombol dengan navigasi */}
            <button
              onClick={handlePelaporanOnline}
              className="relative z-10 self-start px-4 py-2 border border-white rounded-full font-bold hover:bg-white hover:text-[#226597] transition text-sm md:text-base"
            >
              Buat Laporan <Plus size={16} className="inline ml-2" />
            </button>
          </div>

          {/* Card Pengajuan */}
          <div className="relative bg-[#226597] text-white rounded-2xl md:rounded-[2rem] shadow p-6 md:p-8 min-h-[240px] md:min-h-[280px] flex flex-col justify-between text-left overflow-hidden">
            {/* SVG Background */}
            <svg
              className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
              viewBox="0 0 402 186"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M375.619 41.9351C97.9339 190.999 -92.4496 -4.28339 -240.227 0.0719757C-392.381 4.58015 -403 80.7703 -403 50.3973V95.823C-403 95.823 -352.96 77.0332 -267.191 71.2784C44.0096 50.3973 62.1523 237.166 206.79 217.212C351.428 197.259 452.16 0.847076 375.619 41.9351Z"
                fill="white"
                fillOpacity="0.1"
              />
            </svg>

            {/* Konten Card */}
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-2">
                Pengajuan <br /> Pelayanan
              </h2>
              <p className="mb-4 text-white/80 text-sm md:text-base">
                Ajukan pelayanan yang Anda <br /> perlukan disini!
              </p>
            </div>

            {/* Tombol dengan navigasi ke Pengajuan */}
            <button
              onClick={handlePengajuan}
              className="relative z-10 self-start px-4 py-2 border border-white rounded-full font-bold hover:bg-white hover:text-[#226597] transition text-sm md:text-base"
            >
              Buat Pengajuan <Plus size={16} className="inline ml-2" />
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
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-left">
            Riwayat Laporan
          </h2>

          {/* Card peringatan */}
          <div className="bg-white rounded-xl md:rounded-2xl p-3 flex items-center mb-4 shadow-sm border border-gray-200">
            {/* Logo peringatan */}
            <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center border-2 border-gray-400 rounded-full mr-3 font-bold text-gray-600 text-xs md:text-sm">
              !
            </div>
            <p className="text-gray-600 text-xs md:text-sm text-left">
              Tidak ada riwayat laporan untuk ditampilkan
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl md:rounded-2xl p-3 text-center shadow-sm border border-gray-200"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-200 rounded-lg md:rounded-xl mx-auto mb-2 md:mb-3"></div>
                <p className="text-gray-500 text-xs md:text-sm">~ blablabla</p>
              </div>
            ))}
          </div>
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

        {/* Notifikasi + Profil */}
        <div className="flex items-center justify-between gap-2">
          {/* Card Notifikasi */}
          <div className="w-10 h-10 bg-white lg:bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200">
            {/* Ikon lonceng */}
            <svg
              width="25"
              height="28"
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

          {/* Card Profil */}
          <div className="flex-1 bg-white lg:bg-white rounded-full flex items-center justify-between px-2 py-1.5 shadow-sm border border-gray-200">
            <div className="flex items-center gap-2 overflow-hidden">
              {/* Avatar Profil */}
              <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src="/assets/Haechan.jpg"
                  alt="Profil"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Nama */}
              <p className="text-gray-700 text-xs font-medium truncate">
                Haikal Saputra
              </p>
            </div>
            {/* Icon Dropdown */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="-ml-1 h-4 w-4 text-gray-500"
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
        </div>

        {/* Calendar */}
        <div className="bg-white lg:bg-transparent rounded-xl p-4 lg:p-0">
          <Calender />
        </div>

        {/* Kotak Masuk */}
        <div className="mb-8">
          <h2 className="text-lg md:text-xl font-bold leading-tight mb-2 text-left text-gray-800 lg:text-white">
            Kotak Masuk
          </h2>
          <div className="bg-white rounded-lg md:rounded-xl shadow-md p-6 md:p-10"></div>
        </div>

        {/* ChatBot */}
        <div className="bg-white rounded-lg border p-3 flex items-center gap-2">
          {/* Logo custom */}
          <svg
            width="40"
            height="40"
            viewBox="0 0 58 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 md:w-10 md:h-10"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M52.0548 15.2007V38.2556C52.0548 39.7842 51.4476 41.2502 50.3667 42.3311C49.2858 43.412 47.8198 44.0193 46.2911 44.0193H31.8818L17.4726 55.5467V44.0193H11.7089C10.1802 44.0193 8.71422 43.412 7.63331 42.3311C6.55241 41.2502 5.94516 39.7842 5.94516 38.2556V15.2007C5.94516 13.6721 6.55241 12.2061 7.63331 11.1252C8.71422 10.0443 10.1802 9.43701 11.7089 9.43701H46.2911C47.8198 9.43701 49.2858 10.0443 50.3667 11.1252C51.4476 12.2061 52.0548 13.6721 52.0548 15.2007ZM20.3544 23.8463H14.5907V29.61H20.3544V23.8463ZM26.1181 23.8463H31.8818V29.61H26.1181V23.8463ZM43.4093 23.8463H37.6456V29.61H43.4093V23.8463Z"
              fill="#226597"
            />
          </svg>

          <span className="font-medium text-[#226597] text-sm md:text-base">
            Tanya Helpdesk
          </span>
        </div>
      </div>

      {/* Overlay for right sidebar di mobile */}
      {isRightSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsRightSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}
