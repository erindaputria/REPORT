import { useState } from "react";
import Header from "../../components/Header";
import LeftSidebar from "../../components/LeftSidebar";
import { Menu, X, Bell } from "lucide-react";

const KnowledgeBase = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const faqItems = [
    {
      id: 1,
      question: "Bagaimana cara membuat tiket baru?",
    },
    {
      id: 2,
      question: "Bagaimana cara mengecek status tiket saya?",
    },
    {
      id: 3,
      question: "Bagaimana panduan untuk menghubungi support langsung?",
    },
    {
      id: 4,
      question: "Bagaimana panduan untuk reset password?",
    },
    {
      id: 5,
      question: "Berapa lama tiket biasanya ditanggani?",
    },
    {
      id: 6,
      question: "Apa yang harus dilakukan jika tiket belum mendapat respon?",
    },
  ];

  const handleFaqClick = (id) => {
    console.log(`FAQ item ${id} clicked`);
    // Add your logic here to expand/show answer
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
            <div className="text-center mb-6 md:mb-8">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#226597] mb-3 md:mb-4">
                Knowledge Base
              </h1>
              <p className="text-gray-500 text-sm md:text-base lg:text-lg">
                Pelajari dan cari solusi yang Anda butuhkan
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-md md:max-w-2xl mx-auto mb-6 md:mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari di sini"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 md:px-6 py-2 md:py-3 lg:py-4 bg-white rounded-full shadow-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400 text-sm md:text-base"
                />
                <button className="absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2 p-1 md:p-2 text-gray-400 hover:text-[#226597] transition-colors">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* FAQ Grid */}
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
                {faqItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg md:rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-3 md:p-4 lg:p-6 cursor-pointer group"
                    onClick={() => handleFaqClick(item.id)}
                  >
                    <div className="flex items-start justify-between">
                      {/* Teks pertanyaan dibuat fleksibel biar full kiri */}
                      <div className="flex-1">
                        <p className="text-gray-700 text-xs md:text-sm lg:text-base leading-relaxed group-hover:text-gray-900 transition-colors text-left">
                          {item.question}
                        </p>
                      </div>

                      {/* Tombol plus */}
                      <button className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors ml-2">
                        <svg
                          className="w-2.5 h-2.5 md:w-3 md:h-3 lg:w-4 lg:h-4 text-gray-600 group-hover:text-blue-600 transition-colors"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBase;