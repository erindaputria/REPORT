import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function AksiKBKota() {
  const [content, setContent] = useState("");
  const [kategori, setKategori] = useState("Akun dan SSO");
  const [progress, setProgress] = useState("Review");
  const navigate = useNavigate();

  const handleUpdate = () => {
    Swal.fire({
      icon: "warning",
      title: "Apakah Anda yakin ingin menyimpan?",
      text: "Cek kembali inputan Anda sebelum mengirim!",
      showCancelButton: true,
      confirmButtonText: "Ya, saya yakin!",
      cancelButtonText: "Batalkan",
      reverseButtons: true,
      confirmButtonColor: "#0F2C59",
      cancelButtonColor: "#f87171",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Berhasil disimpan!",
          text: "Data artikel berhasil diperbarui.",
          confirmButtonColor: "#0F2C59",
        });
      }
    });
  };

  const handleCancel = () => {
    navigate("/knowledgebasekota");
  };

  return (
    <div className="p-8 space-y-8">
      {/* Judul */}
      <h1 className="text-3xl font-bold text-center text-[#0F2C59]">
        Draft Knowledge Base
      </h1>

      {/* Form Identitas */}
      <div className="space-y-4">
        <div className="flex items-center gap-6">
          <label className="w-28 font-semibold text-[#0F2C59]">Nama</label>
          <input
            type="text"
            value="Haikal Saputra"
            readOnly
            className="w-[400px] p-2 rounded-lg bg-gray-100 border border-gray-300"
          />
        </div>

        <div className="flex items-center gap-6">
          <label className="w-28 font-semibold text-[#0F2C59]">NIP</label>
          <input
            type="text"
            value="20030525102457"
            readOnly
            className="w-[400px] p-2 rounded-lg bg-gray-100 border border-gray-300"
          />
        </div>

        <div className="flex items-center gap-6">
          <label className="w-28 font-semibold text-[#0F2C59]">OPD</label>
          <input
            type="text"
            value="Dinas Perpustakaan dan Kearsipan"
            readOnly
            className="w-[400px] p-2 rounded-lg bg-gray-100 border border-gray-300"
          />
        </div>
      </div>

      {/* Kategori Artikel */}
      <div className="space-y-3">
        <h2 className="text-base font-semibold text-[#0F2C59]">
          Kategori Artikel
        </h2>
        <p className="text-sm text-gray-500">Pilih salah satu</p>
        <div className="flex gap-3 flex-wrap">
          {["Pelaporan dan Pelayanan", "Akun dan SSO", "Layanan dan Formulir"].map(
            (item) => (
              <button
                key={item}
                onClick={() => setKategori(item)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  kategori === item
                    ? "bg-[#0F2C59] text-white shadow"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {item}
              </button>
            )
          )}
        </div>
      </div>

      {/* Perbarui Progress */}
      <div className="space-y-3">
        <h2 className="text-base font-semibold text-[#0F2C59]">
          Perbarui Progress
        </h2>
        <div className="flex gap-3 flex-wrap">
          {["Draft", "Review", "Approve", "Tolak"].map((item) => {
            const style =
              item === "Review"
                ? "bg-yellow-400 text-white"
                : item === "Approve"
                ? "bg-green-500 text-white"
                : item === "Tolak"
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-700";

            return (
              <button
                key={item}
                onClick={() => setProgress(item)}
                className={`px-5 py-2 rounded-lg font-medium transition-all ${
                  progress === item ? style : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>

      {/* Editor Artikel */}
      <div>
        <label className="block text-sm font-semibold mb-2 text-[#0F2C59]">
          Isi Artikel
        </label>

        <Editor
          apiKey="knmbzw25dxygplnsx7hm54m7n2d6kwo15reci9vonjkq4csm"
          value={content}
          onEditorChange={(newValue) => setContent(newValue)}
          init={{
            height: 400,
            menubar: true,
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "preview",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "help",
              "wordcount",
            ],
            toolbar:
              "undo redo | blocks | bold italic underline forecolor | " +
              "alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | " +
              "image media link | removeformat | fullscreen preview | help",
            file_picker_types: "image",
            file_picker_callback: (callback) => {
              const input = document.createElement("input");
              input.type = "file";
              input.accept = "image/*";
              input.onchange = (e) => {
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.onload = () =>
                  callback(reader.result, { alt: file.name });
                reader.readAsDataURL(file);
              };
              input.click();
            },
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
      </div>

      {/* Tombol Aksi */}
      <div className="flex justify-end gap-4">
        <button
          onClick={() => navigate("/knowledgebasekota")}
          className="px-5 py-2 rounded-lg border border-gray-400 text-gray-700 hover:bg-gray-100 transition"
        >
          Batal
        </button>
        <button
          onClick={handleUpdate}
          className="px-5 py-2 rounded-lg bg-[#0F2C59] text-white hover:bg-[#15397A] transition"
        >
          Update
        </button>
      </div>
    </div>
  );
}
