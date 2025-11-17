import { useNavigate } from "react-router-dom";
import LayoutMasyarakat from "../../components/Layout/LayoutMasyarakat";

export default function NotifUmum() {
  const navigate = useNavigate();

  return (
    <LayoutMasyarakat>
      <div className="min-h-screen bg-gray-50">
        {/* Main Content - Simple structure */}
        <div className="pt-4 pb-8">
          {/* Header dan Button Kembali */}
          <div className="px-4 mb-6">
            <div className="max-w-6xl mx-auto">
              <button
                onClick={() => navigate("/kotakmasukmasyarakat")}
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
                {/* Header Pengumuman */}
                <div className="mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                  <div>
                    <h1 className="text-xl font-semibold text-[#000000] mb-4">
                      Pengumuman
                    </h1>
                    <div className="bg-[#226597] text-white px-4 py-1 rounded-2xl inline-block">
                      <span className="text-sm font-medium">Umum</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">5 bulan yang lalu</div>
                </div>

                {/* Gambar Pengumuman */}
                <div className="flex justify-center items-center py-6 md:py-8 mb-6">
                  <img
                    src="/assets/Pengumuman.png"
                    alt="Pengumuman"
                    className="max-w-full h-auto rounded-lg shadow-md"
                  />
                </div>

                {/* Konten Pengumuman */}
                <div className="space-y-6 text-left">
                  <div className="text-gray-800">
                    <p className="font-semibold text-lg">
                      🎉 Peringatan Hari Jadi Kota Surabaya ke-727
                    </p>
                    <div className="mt-4 text-sm space-y-4">
                      <p>
                        Dalam rangka memperingati Hari Jadi Kota Surabaya yang
                        ke-727, kami mengajak seluruh pegawai, mitra, dan
                        masyarakat Surabaya untuk bersama-sama memeriahkan
                        momentum istimewa ini dengan semangat "Surabaya Hebat,
                        Tangguh, dan Berdaya Saing".
                      </p>

                      <div className="space-y-3">
                        <p>
                          Berbagai kegiatan akan diselenggarakan sepanjang bulan
                          Mei, antara lain:
                        </p>
                        <div className="space-y-2">
                          <p className="flex items-start gap-2">
                            <span>🏛️</span>
                            <span>
                              Upacara peringatan Hari Jadi Kota Surabaya di
                              Balai Kota.
                            </span>
                          </p>
                          <p className="flex items-start gap-2">
                            <span>🎭</span>
                            <span>
                              Festival budaya dan pameran UMKM Surabaya.
                            </span>
                          </p>
                          <p className="flex items-start gap-2">
                            <span>🌳</span>
                            <span>
                              Gerakan bersih lingkungan serentak di 31
                              kecamatan.
                            </span>
                          </p>
                          <p className="flex items-start gap-2">
                            <span>🎉</span>
                            <span>
                              Malam puncak perayaan dengan konser rakyat di
                              Taman Surya.
                            </span>
                          </p>
                        </div>
                      </div>

                      <p>
                        Kami mengimbau seluruh OPD dan masyarakat untuk turut
                        serta menjaga ketertiban, kebersihan, dan semangat
                        gotong royong selama rangkaian kegiatan berlangsung.
                      </p>

                      <p className="font-semibold">
                        Selamat Hari Jadi Kota Surabaya ke-727!
                      </p>

                      <p>
                        Mari terus bersama membangun kota yang lebih maju,
                        ramah, dan berdaya saing global. 💚
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutMasyarakat>
  );
}
