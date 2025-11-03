import React, { useState } from "react";
import { Wrench, PencilIcon} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function KnowledgeBaseKota() {
  const [activeTab, setActiveTab] = useState("Review");
  const navigate = useNavigate();

  // === Dummy Data ===
  const reviewData = [
    { dokumen: "Panduan Cek Knowledge Base", tanggal: "25/09/2024", status: "Review" },
    { dokumen: "Cara Menghubungi Service Desk", tanggal: "19/09/2024", status: "Review" },
    { dokumen: "Panduan Cek Status", tanggal: "17/09/2024", status: "Draft" },
    { dokumen: "Panduan Cek Kalender", tanggal: "17/09/2024", status: "Review" },
  ];

  const approveData = [
    { dokumen: "Cara Reset Password", tanggal: "19/09/2024", status: "Approve" },
    { dokumen: "Panduan Logout", tanggal: "17/09/2024", status: "Tolak" },
  ];

  const displayedData = activeTab === "Review" ? reviewData : approveData;

  const handleEdit = () => navigate("/aksikbkota");
  const handleWrenchClick = () => navigate("/kbeditorkota");

  return (
    <div className="p-6 space-y-6">
      {/* Judul */}
      <h1 className="text-3xl font-bold text-[#0F2C59]">Knowledge Base</h1>

      {/* Box icon edit */}
      <div
        onClick={handleWrenchClick}
        className="flex flex-col items-start cursor-pointer transition-all"
      >
        <div className="w-28 h-40 bg-white border border-gray-200 rounded-2xl flex justify-center items-center shadow-md hover:shadow-lg transition-all">
          <Wrench size={48} className="text-[#0F2C59]" />
        </div>
        <h2 className="mt-3 ml-10 text-lg font-semibold text-[#0F2C59]">Edit</h2>
      </div>

      {/* Wrapper utama */}
      <div className="bg-white rounded-2xl shadow-lg p-5">
        {/* Tabs */}
        <div className="flex border-b border-gray-300 mb-4">
          {["Review", "Approve"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-semibold transition-all ${
                activeTab === tab
                  ? "text-[#0F2C59] border-b-4 border-[#0F2C59]"
                  : "text-gray-400 hover:text-[#0F2C59]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tabel data */}
        <div className="overflow-hidden rounded-xl border border-gray-200">
          <table className="w-full text-sm border-collapse">
            <thead className="bg-[#0F2C59] text-white">
              <tr>
                <th className="p-3 text-left">Dokumen</th>
                <th className="p-3 text-left">Tanggal Masuk</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {displayedData.map((item, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition-all text-gray-700"
                >
                  <td className="p-3">{item.dokumen}</td>
                  <td className="p-3">{item.tanggal}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.status === "Review"
                          ? "bg-yellow-200 text-yellow-700"
                          : item.status === "Draft"
                          ? "bg-gray-300 text-gray-700"
                          : item.status === "Approve"
                          ? "bg-green-200 text-green-700"
                          : "bg-red-200 text-red-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="p-3 text-center">
                    <button
                      onClick={handleEdit}
                      className="text-[#0F2C59] hover:text-[#15397A]"
                    >
                      {activeTab === "Review" ? (
                        <PencilIcon size={16} />
                      ) : (
                        <PencilIcon size={16} />
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-between items-center text-sm text-gray-600 p-3 border-t">
            <span>
              Menampilkan data 1 sampai {displayedData.length} dari {displayedData.length} data
            </span>
            <div className="flex gap-2">
              <button className="px-3 py-1 border rounded-lg hover:bg-gray-100">
                &lt;
              </button>
              <button className="px-3 py-1 border rounded-lg bg-[#0F2C59] text-white">
                1
              </button>
              <button className="px-3 py-1 border rounded-lg hover:bg-gray-100">
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
