import { useState, useRef, useEffect } from "react";

const HelpdeskWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  const messages = [
    {
      id: 1,
      type: "system",
      content:
        "Kami akan mengalihkan Anda ke helpdesk OPD yang ingin Anda hubungi",
      showProfile: false,
    },
    {
      id: 2,
      type: "system",
      content: "OPD tujuan",
      showProfile: false,
    },
    {
      id: 3,
      type: "system",
      content: "Dinas Pendidikan",
      showProfile: false,
    },
    {
      id: 4,
      type: "system",
      content: "Anda telah terhubung ke OPD",
      showProfile: false,
    },
    {
      id: 5,
      type: "user",
      content:
        "Selamat siang, bagaimana caranya untuk cek status permohonan saya?",
      showProfile: true,
      profileName: "Anda",
      time: "12:30",
    },
    {
      id: 6,
      type: "agent",
      content:
        "Bisa diakses melalui layanan, lalu klik untuk cek status permohonan, kemudian input untuk ID permohonan dan Pin-nya.",
      showProfile: true,
      profileName: "Admin",
      time: "12:31",
    },
    {
      id: 7,
      type: "user",
      content: "Baik, terima kasih min",
      showProfile: true,
      profileName: "Anda",
      time: "12:32",
    },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [isOpen]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      // Logic untuk mengirim pesan baru bisa ditambahkan di sini
      setNewMessage("");
    }
  };

  // Tampilan card kecil saat tertutup
  if (!isOpen) {
    return (
      <div
        className="bg-white rounded-lg border border-gray-200 p-4 flex items-center gap-3 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 max-w-xs"
        onClick={() => setIsOpen(true)}
      >
        <div className="flex-shrink-0">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 58 59"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M52.0548 15.2007V38.2556C52.0548 39.7842 51.4476 41.2502 50.3667 42.3311C49.2858 43.412 47.8198 44.0193 46.2911 44.0193H31.8818L17.4726 55.5467V44.0193H11.7089C10.1802 44.0193 8.71422 43.412 7.63331 42.3311C6.55241 41.2502 5.94516 39.7842 5.94516 38.2556V15.2007C5.94516 13.6721 6.55241 12.2061 7.63331 11.1252C8.71422 10.0443 10.1802 9.43701 11.7089 9.43701H46.2911C47.8198 9.43701 49.2858 10.0443 50.3667 11.1252C51.4476 12.2061 52.0548 13.6721 52.0548 15.2007ZM20.3544 23.8463H14.5907V29.61H20.3544V23.8463ZM26.1181 23.8463H31.8818V29.61H26.1181V23.8463ZM43.4093 23.8463H37.6456V29.61H43.4093V23.8463Z"
                fill="#226597"
              />
            </svg>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 text-sm">
            Butuh Bantuan?
          </h3>
          <p className="text-xs text-gray-600">
            Klik untuk chat dengan helpdesk
          </p>
        </div>
      </div>
    );
  }

  // Tampilan chat penuh saat terbuka
  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-80 max-w-sm overflow-hidden">
      {/* Header Helpdesk */}
      <div className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 58 59"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M52.0548 15.2007V38.2556C52.0548 39.7842 51.4476 41.2502 50.3667 42.3311C49.2858 43.412 47.8198 44.0193 46.2911 44.0193H31.8818L17.4726 55.5467V44.0193H11.7089C10.1802 44.0193 8.71422 43.412 7.63331 42.3311C6.55241 41.2502 5.94516 39.7842 5.94516 38.2556V15.2007C5.94516 13.6721 6.55241 12.2061 7.63331 11.1252C8.71422 10.0443 10.1802 9.43701 11.7089 9.43701H46.2911C47.8198 9.43701 49.2858 10.0443 50.3667 11.1252C51.4476 12.2061 52.0548 13.6721 52.0548 15.2007ZM20.3544 23.8463H14.5907V29.61H20.3544V23.8463ZM26.1181 23.8463H31.8818V29.61H26.1181V23.8463ZM43.4093 23.8463H37.6456V29.61H43.4093V23.8463Z"
                fill="#226597"
              />
            </svg>
          </div>
          <div>
            <h1 className="font-bold text-gray-800 text-lg">Helpdesk</h1>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-500 hover:text-gray-700 transition-colors p-1 rounded-full hover:bg-gray-100"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Chat Messages */}
      <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message) => (
          <div key={message.id} className="space-y-2">
            {/* System Messages */}
            {message.type === "system" && (
              <div className="text-center">
                <div className="inline-block bg-gray-200 rounded-2xl px-4 py-2 max-w-xs">
                  <p className="text-sm text-gray-700">{message.content}</p>
                </div>
              </div>
            )}

            {/* User Messages */}
            {message.type === "user" && message.showProfile && (
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">A</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-gray-700">
                      {message.profileName}
                    </span>
                    <span className="text-xs text-gray-500">
                      {message.time}
                    </span>
                  </div>
                  <div className="bg-blue-500 text-white rounded-2xl rounded-tl-none px-4 py-2 max-w-xs">
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Agent Messages */}
            {message.type === "agent" && message.showProfile && (
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">AD</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-gray-700">
                      {message.profileName}
                    </span>
                    <span className="text-xs text-gray-500">
                      {message.time}
                    </span>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-none px-4 py-2 max-w-xs shadow-sm">
                    <p className="text-sm text-gray-700">{message.content}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Swipe Hint */}
      <div className="bg-gray-100 border-t border-gray-200 py-2">
        <p className="text-center text-xs text-gray-500">Usap kebawah</p>
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 p-4">
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Tulis pesan"
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default HelpdeskWidget;
