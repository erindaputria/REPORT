import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PaperAirplaneIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

export default function LayananPesan() {
  const { state } = useLocation();
  const chat = state?.chat || {
    nama: "Sri Wulandari",
    foto: "/assets/shizuku.jpg",
    jabatan: "Divisi Sumber Daya Manusia",
  };

  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    {
      sender: "user",
      text: "Selamat siang, bagaimana caranya untuk cek status permohonan saya?",
    },
    {
      sender: "admin",
      text: "Bisa diakses melalui layanan, lalu klik untuk cek status permohonan, kemudian input untuk ID permohonan dan PIN-nya.",
    },
    {
      sender: "user",
      text: "Baik, terima kasih min",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const chatEndRef = useRef(null);

  // Auto scroll ke bawah setiap pesan baru
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!newMessage.trim()) return;
    setMessages([...messages, { sender: "admin", text: newMessage }]); // ⬅️ sekarang sender admin (seksi)
    setNewMessage("");
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] py-8 px-6 flex flex-col items-center">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-4xl flex flex-col justify-between min-h-[600px]">
        {/* === Header === */}
        <div className="flex items-center gap-3 px-6 py-4 border-b">
          <button
            onClick={() => navigate(-1)}
            className="text-[#0F2C59] hover:text-[#15397A]"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <img
            src={chat.foto}
            alt={chat.nama}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-[#0F2C59]">{chat.nama}</h2>
            <p className="text-sm text-gray-500">{chat.jabatan}</p>
          </div>
        </div>

        {/* === Chat Area === */}
        <div className="flex-1 px-6 py-4 overflow-y-auto flex flex-col gap-3">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-end ${
                msg.sender === "user" ? "justify-start" : "justify-end"
              }`}
            >
              {msg.sender === "user" && (
                <img
                  src={chat.foto}
                  alt="user"
                  className="w-8 h-8 rounded-full mr-2"
                />
              )}
              <div
                className={`px-4 py-2 rounded-2xl text-sm shadow-sm max-w-[70%] ${
                  msg.sender === "user"
                    ? "bg-gray-100 text-gray-800"
                    : "bg-[#0F2C59] text-white"
                }`}
              >
                {msg.text}
              </div>
              {msg.sender === "admin" && (
                <img
                  src="/assets/Bokuto.jpg"
                  alt="admin"
                  className="w-8 h-8 rounded-full ml-2"
                />
              )}
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* === Input Area === */}
        <div className="border-t px-4 py-3 flex items-center gap-3 bg-gray-50 rounded-b-2xl">
          <input
            type="text"
            placeholder="Tulis pesan"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0F2C59]"
          />
          <button
            onClick={handleSend}
            className="bg-[#0F2C59] text-white p-2 rounded-full hover:bg-[#15397A] transition"
          >
            <PaperAirplaneIcon className="w-4 h-4 rotate-45" />
          </button>
        </div>
      </div>
    </div>
  );
}
