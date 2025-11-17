import { useNavigate, useLocation } from "react-router-dom";
import LayoutPegawai from "../../components/Layout/LayoutPegawai";

export default function NotifDiproses() {
  const navigate = useNavigate();
  const location = useLocation();

  // Ambil data dari form pengajuan melalui state navigasi
  const pengajuanData = location.state?.pengajuanData || {};

  // Data tiket dengan jenis permohonan dari form
  const ticketData = {
    noTiket: "LYN215491",
    pin: "228973",
    jenisLayanan: "Pengajuan Pelayanan",
    jenisPermohonan: pengajuanData.jenisPermohonan || "Reset Password", // Ambil dari form
  };

  return (
    <LayoutPegawai>
      <div className="min-h-screen bg-gray-50">
        {/* Main Content - Simple structure */}
        <div className="pt-4 pb-8">
          {/* Header dan Button Kembali */}
          <div className="px-4 mb-6">
            <div className="max-w-6xl mx-auto">
              <button
                onClick={() => navigate("/kotakmasuk")}
                className="inline-flex items-center gap-2 text-[#113F67] hover:text-blue-800 px-4 py-2 text-sm font-medium transition-colors border border-gray-300 rounded-lg hover:bg-gray-50 bg-white shadow-sm hover:shadow-md mb-6"
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
          </div>

          {/* Content Section */}
          <div className="px-4">
            <div className="max-w-6xl mx-auto">
              {/* Outer Card */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-300 p-6 md:p-8">
                {/* Header Tiket Dibuat */}
                <div className="mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                  <div>
                    <h1 className="text-xl font-semibold text-[#000000] mb-4">
                      Status Tiket Diperbarui
                    </h1>
                    <div className="bg-[#226597] text-white px-4 py-1 rounded-2xl inline-block">
                      <span className="text-sm font-medium">Status</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">2 hari yang lalu</div>
                </div>

                {/* Inner Card */}
                <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200 mb-8">
                  {/* Header Card */}
                  <div className="p-6">
                    <div className="flex items-center justify-center mx-auto mb-4">
                      <img
                        src="/assets/Logo Report.png"
                        alt="Report Logo"
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                    <h1 className="text-2xl font-semibold text-[#000000] text-center">
                      Status Tiket Diperbarui
                    </h1>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-6">
                    {/* Pengaduan Anda Section */}
                    <div className="text-left">
                      <h3 className="text-sm font-medium text-gray-600 mb-4">
                        Pengaduan Anda:
                      </h3>

                      {/* No. Tiket dan Status */}
                      <div className="space-y-3">
                        {/* No. Tiket */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <span className="text-sm font-medium text-gray-600 whitespace-nowrap w-16">
                            No. Tiket
                          </span>
                          <div className="bg-[#226597] text-white px-6 py-2 rounded-lg inline-flex min-w-[200px] justify-center">
                            <span className="text-sm font-medium">
                              {ticketData.noTiket}
                            </span>
                          </div>
                        </div>

                        {/* Status */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <span className="text-sm font-medium text-gray-600 whitespace-nowrap w-16">
                            Status
                          </span>
                          <div className="bg-yellow-500 text-white px-6 py-2 rounded-lg inline-flex min-w-[200px] justify-center">
                            <span className="text-sm font-medium">Pending</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Jenis Layanan dan OPD Tujuan */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      {/* Jenis Layanan */}
                      <div>
                        <div className="flex items-center gap-2">
                          <svg
                            width="70"
                            height="70"
                            viewBox="0 0 72 72"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g filter="url(#filter0_d_1104_3295)">
                              <rect
                                x="20"
                                y="20"
                                width="32"
                                height="32"
                                rx="16"
                                fill="white"
                                shapeRendering="crispEdges"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M31.989 27.3311C31.7485 27.8831 31.6246 28.4789 31.625 29.0811C31.625 29.5452 31.8094 29.9903 32.1376 30.3185C32.4658 30.6467 32.9109 30.8311 33.375 30.8311H38.625C39.0891 30.8311 39.5342 30.6467 39.8624 30.3185C40.1906 29.9903 40.375 29.5452 40.375 29.0811C40.375 28.4589 40.2455 27.8666 40.011 27.3311H41.25C41.7141 27.3311 42.1592 27.5154 42.4874 27.8436C42.8156 28.1718 43 28.6169 43 29.0811V42.2061C43 42.6702 42.8156 43.1153 42.4874 43.4435C42.1592 43.7717 41.7141 43.9561 41.25 43.9561H30.75C30.2859 43.9561 29.8408 43.7717 29.5126 43.4435C29.1844 43.1153 29 42.6702 29 42.2061V29.0811C29 28.6169 29.1844 28.1718 29.5126 27.8436C29.8408 27.5154 30.2859 27.3311 30.75 27.3311H31.989ZM36 36.9561H33.375C33.1429 36.9561 32.9204 37.0482 32.7563 37.2123C32.5922 37.3764 32.5 37.599 32.5 37.8311C32.5 38.0631 32.5922 38.2857 32.7563 38.4498C32.9204 38.6139 33.1429 38.7061 33.375 38.7061H36C36.2321 38.7061 36.4546 38.6139 36.6187 38.4498C36.7828 38.2857 36.875 38.0631 36.875 37.8311C36.875 37.599 36.7828 37.3764 36.6187 37.2123C36.4546 37.0482 36.2321 36.9561 36 36.9561ZM38.625 33.4561H33.375C33.152 33.4563 32.9375 33.5417 32.7753 33.6948C32.6131 33.8479 32.5155 34.0571 32.5025 34.2798C32.4894 34.5024 32.5618 34.7216 32.705 34.8927C32.8481 35.0637 33.0512 35.1736 33.2726 35.1999L33.375 35.2061H38.625C38.8571 35.2061 39.0796 35.1139 39.2437 34.9498C39.4078 34.7857 39.5 34.5631 39.5 34.3311C39.5 34.099 39.4078 33.8764 39.2437 33.7123C39.0796 33.5482 38.8571 33.4561 38.625 33.4561ZM36 26.4561C36.3693 26.4561 36.7345 26.534 37.0716 26.6848C37.4088 26.8356 37.7103 27.0558 37.9565 27.3311C38.331 27.7493 38.5725 28.2874 38.6171 28.8816L38.625 29.0811H33.375C33.375 28.4467 33.5999 27.8648 33.9744 27.4116L34.0435 27.3311C34.5247 26.7938 35.223 26.4561 36 26.4561Z"
                                fill="#113F67"
                              />
                            </g>
                            <defs>
                              <filter
                                id="filter0_d_1104_3295"
                                x="0"
                                y="0"
                                width="72"
                                height="72"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                              >
                                <feFlood
                                  floodOpacity="0"
                                  result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                  in="SourceAlpha"
                                  type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                  result="hardAlpha"
                                />
                                <feOffset />
                                <feGaussianBlur stdDeviation="10" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                  type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                />
                                <feBlend
                                  mode="normal"
                                  in2="BackgroundImageFix"
                                  result="effect1_dropShadow_1104_3295"
                                />
                                <feBlend
                                  mode="normal"
                                  in="SourceGraphic"
                                  in2="effect1_dropShadow_1104_3295"
                                  result="shape"
                                />
                              </filter>
                            </defs>
                          </svg>
                          <label className="text-sm font-medium text-gray-600">
                            Jenis Layanan:
                          </label>
                        </div>
                        <div className="text-sm text-gray-800 bg-gray-50 px-3 py-2 rounded-md ml-16 -mt-1">
                          {ticketData.jenisLayanan}
                        </div>
                      </div>

                      {/* OPD Tujuan */}
                      <div>
                        <div className="flex items-center gap-2">
                          <svg
                            width="70"
                            height="70"
                            viewBox="0 0 72 72"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g filter="url(#filter0_d_2515_5514)">
                              <rect
                                x="20"
                                y="20"
                                width="32"
                                height="32"
                                rx="16"
                                fill="white"
                                shapeRendering="crispEdges"
                              />
                              <path
                                d="M43.7358 27.1136L27.4391 36.5125C26.8028 36.878 26.8836 37.7638 27.5165 38.0309L31.254 39.5985L41.3555 30.6988C41.5489 30.5265 41.8231 30.7902 41.6579 30.9905L33.1878 41.3068V44.1363C33.1878 44.9658 34.1899 45.2927 34.6821 44.6917L36.9148 41.9746L41.2957 43.8094C41.795 44.0203 42.3646 43.7075 42.456 43.1697L44.9875 27.9853C45.1071 27.2752 44.3441 26.7621 43.7358 27.1136Z"
                                fill="#113F67"
                              />
                            </g>
                            <defs>
                              <filter
                                id="filter0_d_2515_5514"
                                x="0"
                                y="0"
                                width="72"
                                height="72"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                              >
                                <feFlood
                                  floodOpacity="0"
                                  result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                  in="SourceAlpha"
                                  type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                  result="hardAlpha"
                                />
                                <feOffset />
                                <feGaussianBlur stdDeviation="10" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                  type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                />
                                <feBlend
                                  mode="normal"
                                  in2="BackgroundImageFix"
                                  result="effect1_dropShadow_2515_5514"
                                />
                                <feBlend
                                  mode="normal"
                                  in="SourceGraphic"
                                  in2="effect1_dropShadow_2515_5514"
                                  result="shape"
                                />
                              </filter>
                            </defs>
                          </svg>
                          <label className="text-sm font-medium text-gray-600">
                            OPD Tujuan:
                          </label>
                        </div>
                        <div className="text-sm text-gray-800 bg-gray-50 px-3 py-2 rounded-md ml-16 -mt-1">
                          {ticketData.jenisPermohonan}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Informasi Tambahan */}
                <div className="space-y-6 text-left">
                  <div className="text-gray-800">
                    <p className="font-semibold text-lg">
                      🛠️ Laporan Anda sedang kami tangani!
                    </p>
                    <div className="mt-2 text-sm">
                      <p>
                        Tiket{" "}
                        <span className="font-bold text-[#226597]">
                          #{ticketData.noTiket}
                        </span>{" "}
                        kini sedang diproses oleh tim teknis.
                      </p>
                      <p className="mt-2">
                        Kami akan segera memberi kabar setelah ada pembaruan
                        status berikutnya.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="text-sm">Jenis Layanan:</span> Pelaporan
                      Online
                    </p>
                    <p>
                      <span className="text-sm">OPD Tujuan:</span> Dinas
                      Pendidikan
                    </p>
                  </div>

                  <div className="text-gray-800">
                    <p className="text-sm">
                      Anda dapat memantau progres tiket di menu{" "}
                      <button
                        onClick={() => navigate("/pelacakan")}
                        className="text-blue-600 underline hover:text-blue-800 transition-colors"
                      >
                        Cek Status Layanan
                      </button>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPegawai>
  );
}
