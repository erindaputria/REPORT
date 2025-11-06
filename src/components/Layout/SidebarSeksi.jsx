import React from "react";
import {
  HomeIcon,
  ClipboardDocumentListIcon,
  ChartBarIcon,
  StarIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/solid";

import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const loc = useLocation();

  const items = [
    { label: "Dashboard", icon: HomeIcon, path: "/berandaseksi" },
    {
      label: "Penugasan",
      icon: ClipboardDocumentListIcon,
      path: "/penugasanseksi",
    },
    { label: "Monitoring", icon: ChartBarIcon },
    { label: "Rating", icon: StarIcon },
    { label: "Layanan Chat", icon: ChatBubbleLeftEllipsisIcon },
  ];

  return (
    <aside className="w-64 min-h-screen bg-white/90 shadow-lg p-6 sticky top-0">
      <div className="flex items-center gap-3 mb-6 px-2">
        <img
          src="/assets/Logo Report.png"
          alt="Logo"
          className="w-10 h-10 object-contain"
        />
        <h1 className="text-xl font-extrabold bg-gradient-to-r from-[#d92e2e] to-[#6a0dad] bg-clip-text text-transparent tracking-wide">
          REPORT
        </h1>
      </div>

      <nav className="space-y-2">
        {items.map((it) => {
          const Active = it.icon;
          const active = loc.pathname.startsWith(it.to);
          return (
            <Link
              key={it.to}
              to={it.to}
              className={`flex items-center gap-3 p-3 rounded-lg ${
                active
                  ? "bg-blue-700 text-white shadow-md"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <Active className="w-5 h-5" />
              <span className="font-medium text-sm">{it.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
