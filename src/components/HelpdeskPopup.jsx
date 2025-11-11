import React, { useState, useRef, useEffect } from "react";
import { X, Paperclip, Send, Camera, Plus } from "lucide-react";

export default function HelpdeskPopup() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isNewChat, setIsNewChat] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOPD, setSelectedOPD] = useState(null);


  
  // === Data dummy OPD Tujuan ===
  const opdList = [
    { name: "Dinas Pendidikan", icon: "/assets/Dinas Pendidikan.png" },
    { name: "Dinas Kesehatan", icon: "/assets/Dinas Kesehatan.png" },
    { name: "Dinas Perhubungan", icon: "/assets/Dinas Perhubungan.png" },
    { name: "Dinas Sosial", icon: "/assets/Dinas Sosial.png" },
    { name: "Dinas Sumber Daya Air dan Bina Marga", icon: "/assets/Dinas Sumber Daya Air dan Bina Marga.png" },
    { name: "Dinas Perumahan Rakyat dan Kawasan Permukiman serta Pertanahan", icon: "/assets/Dinas Perumahan Rakyat dan Kawasan Permukiman serta Pertanahan.png" },
    { name: "Dinas Pemadam Kebakaran dan Penyelamatan", icon: "/assets/Dinas Pemadam Kebakaran dan Penyelamatan.png" },
    { name: "Dinas Perindustrian dan Tenaga Kerja", icon: "/assets/Dinas Perindustrian dan Tenaga Kerja.png" },
    { name: "Dinas Ketahanan Pangan dan Pertanian", icon: "/assets/Dinas Ketahanan Pangan dan Pertanian.png" },
    { name: "Dinas Perpustakaan dan Kearsipan", icon: "/assets/Dinas Perpustakaan dan Kearsipan.png" },
    { name: "Dinas Komunikasi dan Informatika", icon: "/assets/Dinas Komunikasi dan Informatika.png" },
    { name: "Dinas Lingkungan Hidup", icon: "/assets/Dinas Lingkungan Hidup.png" },
    { name: "Dinas Kependudukan dan Pencatatan Sipil", icon: "/assets/Dinas Kependudukan dan Pencatatan Sipil.png" },
    { name: "Dinas Koperasi Usaha Kecil dan Menengah dan Perdagangan", icon: "/assets/Dinas Koperasi Usaha Kecil dan Menengah dan Perdagangan.png" },
    { name: "Dinas Kebudayaan, Kepemudaan dan Olah Raga serta Pariwisata", icon: "/assets/Dinas Kebudayaan, Kepemudaan dan Olah Raga serta Pariwisata.png" },
    { name: "Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu", icon: "/assets/Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu.png" },
    { name: "Satuan Polisi Pamong Praja", icon: "/assets/Satuan Polisi Pamong Praja.png" },
    { name: "Dinas Pemberdayaan Perempuan dan Perlindungan Anak", icon: "/assets/Dinas Pemberdayaan Perempuan dan Perlindungan Anak.png" },
        
  ];

  // === Data dummy Riwayat Chat ===
  const chatHistory = [
    {
      name: "Dinas Pendidikan",
      lastMessage: "Terima kasih, laporan Anda sudah kami proses.",
      icon: "/assets/Dinas Pendidikan.png",
    },
    {
      name: "Dinas Kesehatan",
      lastMessage: "Baik, kami akan menindaklanjuti laporan ini.",
      icon: "/assets/Dinas Kesehatan.png",
    },
    {
      name: "Dinas Sosial",
      lastMessage: "Mohon tunggu, admin akan segera membalas.",
      icon: "/assets/Dinas Sosial.png",
    },
  ];

  // === Drag system ===
  const popupRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [pos, setPos] = useState({ x: window.innerWidth - 350, y: window.innerHeight - 500 });

  const handleMouseDown = (e) => {
    if (popupRef.current && e.target.closest("#popup-header")) {
      setIsDragging(true);
      setOffset({
        x: e.clientX - popupRef.current.getBoundingClientRect().left,
        y: e.clientY - popupRef.current.getBoundingClientRect().top,
      });
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        setPos({ x: e.clientX - offset.x, y: e.clientY - offset.y });
      }
    };
    const handleMouseUp = () => setIsDragging(false);

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, offset]);

  const [messages, setMessages] = useState([]);
const [newMessage, setNewMessage] = useState("");

// Simulasi kirim pesan
const handleSendMessage = () => {
  if (!newMessage.trim()) return;

  // Tambahkan pesan baru ke list
  setMessages((prev) => [
    ...prev,
    { id: Date.now(), sender: "user", text: newMessage },
  ]);

  // Kosongkan input
  setNewMessage("");

  // Simulasi balasan otomatis (dummy)
  setTimeout(() => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: "admin",
        text: "Pesan Anda telah diterima oleh admin OPD.",
      },
    ]);
  }, 1000);
};


  return (
    <>
      {/* === Tombol Tanya Helpdesk === */}
      {!isChatOpen && (
        <button
          onClick={() => {
            setIsChatOpen(true);
            setIsNewChat(false);
            setSelectedOPD(null);
          }}
          className="fixed bottom-6 right-6 bg-white text-[#0F2C59] px-5 py-3 rounded-xl shadow-lg flex items-center gap-2 font-semibold hover:bg-gray-50 transition "
        >
          <img src="/assets/hd.png" alt="chat" className="w-5 h-5" />
          Tanya Helpdesk
        </button>
      )}

      {/* === Popup === */}
      {isChatOpen && (
        <div
        ref={popupRef}
        onMouseDown={handleMouseDown}
        className="fixed w-80 h-[420px] bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden flex flex-col transition-all duration-200 z-[9999]"
        style={{
            top: pos.y,
            left: pos.x,
            cursor: isDragging ? "grabbing" : "default",
        }}
>

          {/* Header */}
          <div
            id="popup-header"
            className="bg-[#0F2C59] text-white px-4 py-3 flex items-center justify-between select-none cursor-grab"
          >
            <h2 className="font-semibold text-sm">Helpdesk</h2>
            <button
            onClick={() => {
                // reset semua state saat popup ditutup
                setIsChatOpen(false);
                setIsNewChat(false);
                setDropdownOpen(false);
                setSelectedOPD(null);
            }}
            >
            <X size={18} />
            </button>

          </div>

          {/* === MODE CHAT BARU === */}
          {isNewChat ? (
            <div className="flex-1 p-4 flex flex-col">
              <p className="text-sm text-gray-600 mb-2">
                Kami akan mengalihkan Anda ke helpdesk OPD yang ingin Anda
                hubungi
              </p>

              <p className="font-semibold text-sm mb-1">OPD Tujuan</p>

              {/* Dropdown Pilih OPD */}
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full border rounded-lg p-2 text-left text-sm shadow-sm flex items-center justify-between focus:ring-2 focus:ring-[#226597]"
                >
                  <span className="flex items-center gap-2">
                    {selectedOPD ? (
                      <>
                        <img
                          src={selectedOPD.icon}
                          alt={selectedOPD.name}
                          className="w-5 h-5 rounded-full"
                        />
                        {selectedOPD.name}
                      </>
                    ) : (
                      <span className="text-gray-400">Pilih OPD</span>
                    )}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className={`w-4 h-4 text-gray-500 transition-transform ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {dropdownOpen && (
                <div
                    className="absolute z-20 mt-1 w-full bg-white border rounded-lg shadow-lg overflow-y-auto"
                    style={{
                    maxHeight: "140px", // batas tinggi dropdown
                    right: 0,
                    left: 0,
                    }}
                >
                    {opdList.map((opd, i) => (
                    <div
                        key={i}
                        onClick={() => {
                        setSelectedOPD(opd);
                        setDropdownOpen(false);
                        }}
                        className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer text-sm"
                    >
                        <img src={opd.icon} alt={opd.name} className="w-5 h-5 rounded-full" />
                        {opd.name}
                    </div>
                    ))}
                </div>
)}

              </div>

              {/* AREA CHAT */}
            <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-gray-50 rounded-md">
            {messages.length === 0 ? (
                <p className="text-center text-gray-400 text-sm mt-10">
                Belum ada pesan
                </p>
            ) : (
                messages.map((msg) => (
                <div
                    key={msg.id}
                    className={`p-2 rounded-lg max-w-[80%] ${
                    msg.sender === "user"
                        ? "bg-[#0F2C59] text-white self-end ml-auto"
                        : "bg-gray-200 text-gray-800"
                    }`}
                >
                    {msg.text}
                </div>
                ))
            )}
            </div>

{/* INPUT PESAN */}
<div className="flex items-center gap-2 mt-3">
  <input
    type="text"
    placeholder="Tulis pesan..."
    value={newMessage}
    onChange={(e) => setNewMessage(e.target.value)}
    className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none"
  />
  <button
  onClick={handleSendMessage}
  className="bg-[#0F2C59] hover:bg-[#15397A] text-white p-3 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300"
  title="Kirim Pesan"
>
  {/* Icon pesawat kirim (lurus elegan) */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-5 h-5"
  >
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
  </svg>
</button>


</div>


              
            </div>
          ) : (
            /* === MODE RIWAYAT CHAT === */
            <div className="flex-1 p-3 flex flex-col">
              <button
                onClick={() => setIsNewChat(true)}
                className="bg-[#0F2C59] text-white flex items-center justify-center gap-2 py-2 rounded-lg mb-3 text-sm font-medium shadow hover:bg-[#15397A]"
              >
                <Plus size={16} /> Chat Baru
              </button>

              <div className="divide-y text-sm max-h-[300px]">
                {chatHistory.map((chat, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 py-2 cursor-pointer hover:bg-gray-50"
                  >
                    <img
                      src={chat.icon}
                      alt={chat.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-gray-800 text-[13px]">
                        {chat.name}
                      </p>
                      <p className="text-gray-500 text-[12px] truncate">
                        {chat.lastMessage}
                      </p>
                    </div>
                    <span className="text-[11px] text-gray-400">
                      {chat.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
