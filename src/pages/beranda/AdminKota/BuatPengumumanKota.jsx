import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function BuatPengumumanKota() {
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  // === Handle Kirim ===
  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      icon: "question",
      title: "Apakah Anda yakin ingin mengirim pengumuman?",
      text: "Cek kembali isi pengumuman sebelum dikirim.",
      showCancelButton: true,
      confirmButtonText: "Ya, kirim sekarang!",
      cancelButtonText: "Batal",
      confirmButtonColor: "#0F2C59",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Pengumuman berhasil dikirim!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/pengumumankota");
      }
    });
  };

  return (
    <div className="p-8 space-y-6">
      {/* === JUDUL === */}
      <h1 className="text-2xl font-bold text-[#0F2C59] text-center">
        Buat Pengumuman
      </h1>

      <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
        {/* === FORM FIELD === */}
        <div className="space-y-4">
          {/* Dikirim ke */}
          <div className="flex items-center gap-6">
            <label className="w-32 text-sm font-semibold text-gray-700">
              Dikirim ke
            </label>
            <button className="bg-[#0F2C59] text-white text-sm px-4 py-2 rounded-md">
              Semua
            </button>
          </div>

          {/* Perihal */}
          <div className="flex items-center gap-6">
            <label className="w-32 text-sm font-semibold text-gray-700">
              Perihal
            </label>
            <select className="w-1/4 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F2C59]">
              <option>Umum</option>
              <option>Maintenance</option>
              <option>Darurat</option>
            </select>
          </div>
        </div>

        {/* === EDITOR === */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Isi Pengumuman
          </label>
          <Editor
            apiKey="knmbzw25dxygplnsx7hm54m7n2d6kwo15reci9vonjkq4csm"
            value={content}
            onEditorChange={(newValue) => setContent(newValue)}
            init={{
              height: 450,
              menubar: true,
              plugins: [
                "advlist", "autolink", "lists", "link", "image", "charmap", 
                "preview", "anchor", "searchreplace", "visualblocks",
                "code", "fullscreen", "insertdatetime", "media", 
                "table", "help", "wordcount"
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
                  reader.onload = () => {
                    const base64 = reader.result;
                    callback(base64, { alt: file.name });
                  };
                  reader.readAsDataURL(file);
                };
                input.click();
              },
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              placeholder: "Masukkan Judul dan Isi Pengumuman Disini...",
            }}
          />
        </div>

        {/* === TOMBOL AKSI === */}
        <div className="flex justify-between mt-6">
          <button
            onClick={() => navigate("/pengumumankota")}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg text-sm"
          >
            Batalkan
          </button>
          <button
            onClick={handleSubmit}
            className="px-5 py-2 bg-[#0F2C59] text-white rounded-lg hover:bg-[#15397A] text-sm"
          >
            Kirim
          </button>
        </div>
      </div>
    </div>
  );
}
