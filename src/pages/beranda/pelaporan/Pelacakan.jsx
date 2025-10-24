import { useState } from "react";
import { Menu, X, Bell, Search, Eye, EyeOff } from "lucide-react";
import Header from "../../../components/Header";
import LeftSidebar from "../../../components/LeftSidebar";

const Pelacakan = () => {
  const [reportId, setReportId] = useState("");
  const [pin, setPin] = useState("");
  const [showPin, setShowPin] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [errors, setErrors] = useState({ reportId: "", pin: "" });

  const handleSearch = () => {
    // Reset errors
    const newErrors = { reportId: "", pin: "" };

    // Validasi
    if (!reportId) {
      newErrors.reportId = "Harap isi ID Laporan dengan benar";
    }
    if (!pin) {
      newErrors.pin = "Harap isi Pin dengan benar";
    }

    setErrors(newErrors);

    // Jika ada error, stop execution
    if (!reportId || !pin) {
      return;
    }

    console.log("Searching for report:", { reportId, pin });

    // Simulasi: data tidak ditemukan
    setShowErrorPopup(true);
  };

  const closeErrorPopup = () => {
    setShowErrorPopup(false);
  };

  // Clear error ketika user mulai mengetik
  const handleReportIdChange = (e) => {
    setReportId(e.target.value);
    if (errors.reportId) {
      setErrors((prev) => ({ ...prev, reportId: "" }));
    }
  };

  const handlePinChange = (e) => {
    setPin(e.target.value);
    if (errors.pin) {
      setErrors((prev) => ({ ...prev, pin: "" }));
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
              src="/diverse-group-profile.png"
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
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#226597] mb-3 md:py-4">
                Pelacakan Laporan
              </h1>
              <p className="text-gray-500 text-lg">Lacak status laporan Anda</p>
            </div>

            {/* Tracking Form */}
            <div className="max-w-xl mx-auto">
              {/* ID Laporan Section - Outside Card */}
              <div className="mb-6">
                <div className="flex items-center space-x-4 mb-2">
                  <label className="text-sm font-medium text-gray-700 whitespace-nowrap min-w-[120px]">
                    ID Laporan
                  </label>
                  <div className="flex-1">
                    <div
                      className={`bg-white rounded-2xl shadow-xl p-4 border ${
                        errors.reportId ? "border-red-300" : "border-blue-100"
                      }`}
                    >
                      <input
                        type="text"
                        value={reportId}
                        onChange={handleReportIdChange}
                        className="w-full px-3 py-2 border-0 focus:ring-0 focus:outline-none bg-transparent"
                      />
                    </div>
                  </div>
                </div>
                {errors.reportId && (
                  <div className="text-left ml-[136px]">
                    <p className="text-red-500 text-sm mt-1">
                      {errors.reportId}
                    </p>
                  </div>
                )}
              </div>

              {/* PIN Card */}
              <div className="mb-6">
                <div className="flex items-center space-x-4 mb-2">
                  <label className="text-sm font-medium text-gray-700 whitespace-nowrap min-w-[120px]">
                    PIN
                  </label>
                  <div className="flex-1">
                    <div
                      className={`bg-white rounded-2xl shadow-xl p-4 border ${
                        errors.pin ? "border-red-300" : "border-blue-100"
                      }`}
                    >
                      <div className="relative">
                        <input
                          type={showPin ? "text" : "password"}
                          value={pin}
                          onChange={handlePinChange}
                          className="w-full px-3 py-2 pr-12 border-0 focus:ring-0 focus:outline-none bg-transparent"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPin(!showPin)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#226597] hover:text-[#226597]"
                        >
                          {showPin ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {errors.pin && (
                  <div className="text-left ml-[136px]">
                    <p className="text-red-500 text-sm mt-1">{errors.pin}</p>
                  </div>
                )}
              </div>

              {/* Search Button */}
              <div className="flex justify-start mt-6 ml-36">
                <button
                  onClick={handleSearch}
                  className="bg-[#226597] hover:bg-[#1a507a] text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center gap-2"
                >
                  <Search size={20} />
                  Cari
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Error Popup */}
      {showErrorPopup && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            {/* Popup Content */}
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full mx-auto">
              <div className="text-center">
                {/* Warning Icon */}
                <div className="flex justify-center mb-4">
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M50 0C77.615 0 100 22.385 100 50C100 77.615 77.615 100 50 100C22.385 100 0 77.615 0 50C0 22.385 22.385 0 50 0ZM50 10C39.3913 10 29.2172 14.2143 21.7157 21.7157C14.2143 29.2172 10 39.3913 10 50C10 60.6087 14.2143 70.7828 21.7157 78.2843C29.2172 85.7857 39.3913 90 50 90C60.6087 90 70.7828 85.7857 78.2843 78.2843C85.7857 70.7828 90 60.6087 90 50C90 39.3913 85.7857 29.2172 78.2843 21.7157C70.7828 14.2143 60.6087 10 50 10ZM50 65C51.3261 65 52.5979 65.5268 53.5355 66.4645C54.4732 67.4021 55 68.6739 55 70C55 71.3261 54.4732 72.5979 53.5355 73.5355C52.5979 74.4732 51.3261 75 50 75C48.6739 75 47.4021 74.4732 46.4645 73.5355C45.5268 72.5979 45 71.3261 45 70C45 68.6739 45.5268 67.4021 46.4645 66.4645C47.4021 65.5268 48.6739 65 50 65ZM50 20C51.3261 20 52.5979 20.5268 53.5355 21.4645C54.4732 22.4021 55 23.6739 55 25V55C55 56.3261 54.4732 57.5979 53.5355 58.5355C52.5979 59.4732 51.3261 60 50 60C48.6739 60 47.4021 59.4732 46.4645 58.5355C45.5268 57.5979 45 56.3261 45 55V25C45 23.6739 45.5268 22.4021 46.4645 21.4645C47.4021 20.5268 48.6739 20 50 20Z"
                      fill="#113F67"
                    />
                  </svg>
                </div>

                {/* Error Message */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Data tidak ditemukan!
                </h3>
                <p className="text-gray-600 mb-6">Cek kembali inputan Anda</p>

                {/* OK Button - Smaller */}
                <div className="flex justify-center">
                  <button
                    onClick={closeErrorPopup}
                    className="bg-[#226597] hover:bg-[#1a507a] text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                  >
                    Oke
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Pelacakan;
