import { useNavigate } from "react-router-dom";
import LayoutPegawai from "../../components/Layout/LayoutPegawai";

export default function NotifDarurat() {
  const navigate = useNavigate();

  return (
    <LayoutPegawai>
      <div className="min-h-screen bg-gray-50">
        {/* Main Content - Simple structure tanpa complex positioning */}
        <div className="pt-4 pb-8">
          {/* Header Section - Simple tanpa background complex */}
          <div className="px-4 mb-6">
            <div className="max-w-6xl mx-auto">
              <button
                onClick={() => navigate("/kotakmasuk")}
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
          </div>

          {/* Content Section */}
          <div className="px-4">
            <div className="max-w-6xl mx-auto">
              {/* Outer Card */}
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-300 p-8">
                {/* Header Pengumuman */}
                <div className="mb-6 flex justify-between items-center">
                  <div>
                    <h1 className="text-xl font-semibold text-[#000000] mb-4">
                      Pengumuman
                    </h1>
                    <div className="bg-[#226597] text-white px-4 py-1 rounded-2xl inline-block">
                      <span className="text-sm font-medium">Darurat</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">4 hari yang lalu</div>
                </div>

                {/* Ganti inner card dengan gambar Darurat.png */}
                <div className="flex justify-center items-center py-8">
                  <img
                    src="/assets/Darurat.png"
                    alt="Darurat"
                    className="max-w-full h-auto rounded-lg shadow-md"
                  />
                </div>

                {/* Teks tambahan di bawah gambar */}
                <div className="mt-8 space-y-6 text-left">
                  <div className="text-gray-800">
                    <p className="font-semibold text-lg">
                      ⚠️ Gangguan Jaringan Pusat
                    </p>
                    <div className="mt-2 text-sm space-y-4">
                      <p>
                        Kami informasikan bahwa saat ini terjadi gangguan
                        jaringan pada pusat data kota yang berdampak pada akses
                        layanan tiket dan sistem internal di seluruh OPD. Akibat
                        gangguan ini, perhitungan SLA (Service Level Agreement)
                        untuk seluruh tiket dihentikan sementara hingga sistem
                        kembali normal.
                      </p>

                      <p>
                        Tim teknis pusat saat ini sedang melakukan investigasi
                        dan pemulihan jaringan secara menyeluruh.
                      </p>

                      <p>
                        Perkiraan waktu pemulihan akan diinformasikan kembali
                        setelah proses perbaikan mencapai tahap stabil.
                      </p>

                      <p>
                        Kami mohon maaf atas ketidaknyamanan ini dan menghimbau
                        seluruh pengguna untuk tidak melakukan eskalasi tiket
                        baru sampai pengumuman pemulihan dikeluarkan.
                      </p>

                      <p>Terima kasih atas pengertian dan kerja samanya.</p>
                    </div>
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
