import React from "react";
import { Plus, FileText, Pencil } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PengumumanKota() {
  const navigate = useNavigate();

  const data = [
    { dokumen: "Selamat Menunaikan Ibadah Puasa", tanggal: "23/09/2024" },
    { dokumen: "Maintenance Sistem", tanggal: "23/09/2024" },
    { dokumen: "Panduan Reset Password Tersedia!", tanggal: "23/09/2024" },
  ];

  const handleEdit = () => {};

  const handleAdd = () => {
    navigate("/buatpengumumankota"); // sama halnya untuk tambah baru
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header Section */}
      <div className="flex flex-col items-start">
        <div
          onClick={handleAdd}
          className="w-28 h-40 bg-white border border-gray-200 rounded-2xl flex justify-center items-center shadow-md hover:bg-gray-100 cursor-pointer"
        >
          <Plus size={40} className="text-[#0F2C59]" />
        </div>
        <h2 className="mt-3 ml-10 text-lg font-semibold text-[#0F2C59]">
          Buat Baru
        </h2>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-2xl shadow-lg p-5">
        <div className="overflow-hidden rounded-xl border border-gray-200">
          <table className="w-full text-sm border-collapse">
            <thead className="bg-[#0F2C59] text-white">
              <tr>
                <th className="p-3 text-left">Dokumen</th>
                <th className="p-3 text-left">Terakhir Diubah</th>
                <th className="p-3 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition-all text-gray-700"
                >
                  <td className="p-3 flex items-center gap-2">
                    <FileText size={16} className="text-[#0F2C59]" />
                    {item.dokumen}
                  </td>
                  <td className="p-3">{item.tanggal}</td>
                  <td className="p-3 text-center">
                    <button
                      onClick={handleEdit}
                      className="text-[#0F2C59] hover:text-[#15397A]"
                    >
                      <Pencil size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-between items-center text-sm text-gray-600 p-3 border-t">
            <span>Menampilkan data 1 sampai 3 dari 3 data</span>
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
