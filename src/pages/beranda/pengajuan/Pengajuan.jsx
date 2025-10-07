import { useState } from "react";
import { Menu, X, Bell, Lock, Users, Smartphone } from "lucide-react";
import Header from "../../../components/Header";
import LeftSidebar from "../../../components/LeftSidebar";

const ServiceApplication = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const services = [
    {
      icon: Lock,
      title: "Reset Password",
      titleDisplay: (
        <>
          Reset
          <br />
          Password
        </>
      ),
      color: "from-green-400 to-green-600",
      bgColor: "bg-[#226597]",
    },
    {
      icon: Users,
      title: "Akses Sistem",
      titleDisplay: (
        <>
          Akses
          <br />
          Sistem
        </>
      ),
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-[#226597]",
    },
    {
      icon: Smartphone,
      title: "Permintaan Perangkat",
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-[#226597]",
    },
  ];

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
              src="/professional-woman-avatar.png"
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
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-[#226597] mb-4">
                Pengajuan Pelayanan
              </h1>
              <p className="text-gray-500 text-lg">
                Pilih permohonan yang Anda butuhkan
              </p>
            </div>

            {/* Service Cards */}
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-4xl mx-auto">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div
                    className={`${service.bgColor} rounded-2xl p-8 text-center text-white shadow-lg min-h-[200px] w-64 flex flex-col items-center justify-center`}
                  >
                    <div className="mb-6">
                      <div className="w-16 h-16 mx-auto bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-center">
                      {service.titleDisplay || service.title}
                    </h3>
                    <p className="text-sm opacity-90 text-center">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceApplication;
