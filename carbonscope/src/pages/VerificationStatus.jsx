// src/pages/VerificationStatus.jsx
import { useState } from "react";
import Sidebar from "../components/Sidebar";

const FILTERS = ["All Actions", "Pending", "Approved", "Rejected"];

const ACTIONS = [
  { id: "#EB-1024", type: "Tree Planting",        icon: "🌳", date: "Oct 12, 2023", proof: { label: "View Photo",   }, status: "Pending"  },
  { id: "#EB-0988", type: "Plastic Recycling",    icon: "♻",  date: "Oct 08, 2023", proof: { label: "View Receipt" }, status: "Approved" },
  { id: "#EB-0941", type: "Solar Panel Install",  icon: "☀",  date: "Sep 30, 2023", proof: { label: "View Doc"    }, status: "Approved" },
  { id: "#EB-0812", type: "River Cleanup",        icon: "💧", date: "Sep 15, 2023", proof: { label: "View Photo"  }, status: "Rejected" },
];

const STATUS_STYLES = {
  Pending:  { dot: "#f59e0b", bg: "rgba(245,158,11,0.1)",  text: "#92400e" },
  Approved: { dot: "#0fbd5d", bg: "rgba(15,189,93,0.1)",   text: "#065f46" },
  Rejected: { dot: "#ef4444", bg: "rgba(239,68,68,0.1)",   text: "#991b1b" },
};

const STATS = [
  { icon: "✔", label: "Approved Actions", value: "18",        iconBg: "rgba(15,189,93,0.1)",   iconColor: "#0a8c42" },
  { icon: "⏳", label: "Under Review",    value: "4",         iconBg: "rgba(245,158,11,0.1)",  iconColor: "#b45309" },
  { icon: "🌿", label: "Impact Score",    value: "1,250 pts", iconBg: "rgba(15,189,93,0.1)",   iconColor: "#0a8c42" },
];

export default function VerificationStatus() {
  const [activeFilter, setActiveFilter] = useState("All Actions");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filtered = ACTIONS.filter((a) => {
    const matchFilter = activeFilter === "All Actions" || a.status === activeFilter;
    const matchSearch =
      a.id.toLowerCase().includes(search.toLowerCase()) ||
      a.type.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <div className="flex min-h-screen bg-slate-100 font-sans">
      <Sidebar />

      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="px-8 py-5 bg-white border-b border-slate-200 flex items-center justify-between flex-shrink-0">
          <div>
            <h1 className="text-xl font-medium text-slate-900">Verification Status</h1>
            <p className="text-xs text-slate-500 mt-0.5">Track your environmental impact validation progress.</p>
          </div>
          <button className="flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-xs font-medium transition-colors">
            <span className="text-sm">⊕</span> Submit New Action
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-5">
          {/* Filter Bar */}
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex gap-1 p-1 bg-white border border-slate-200 rounded-xl">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-colors ${
                    activeFilter === f
                      ? "bg-green-500 text-white"
                      : "text-slate-500 hover:bg-green-50"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by ID or activity..."
              className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-700 w-56 focus:outline-none focus:ring-1 focus:ring-green-400"
            />
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50">
                    {["ID", "Activity Type", "Date", "Proof", "Status", ""].map((h) => (
                      <th
                        key={h}
                        className={`px-5 py-3 text-[10px] font-medium text-slate-500 uppercase tracking-wide ${h === "" ? "text-right" : "text-left"}`}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-5 py-10 text-center text-xs text-slate-400">
                        No actions match your filter.
                      </td>
                    </tr>
                  ) : (
                    filtered.map((row) => {
                      const s = STATUS_STYLES[row.status];
                      return (
                        <tr key={row.id} className="border-t border-slate-100 hover:bg-green-50/40 transition-colors">
                          <td className="px-5 py-3 text-xs font-mono text-slate-400">{row.id}</td>
                          <td className="px-5 py-3">
                            <div className="flex items-center gap-2">
                              <span className="text-base">{row.icon}</span>
                              <span className="text-xs font-medium text-slate-800">{row.type}</span>
                            </div>
                          </td>
                          <td className="px-5 py-3 text-xs text-slate-500">{row.date}</td>
                          <td className="px-5 py-3">
                            <button className="text-xs font-medium text-green-600 hover:underline">
                              {row.proof.label}
                            </button>
                          </td>
                          <td className="px-5 py-3">
                            <span
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium"
                              style={{ background: s.bg, color: s.text }}
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ background: s.dot }}
                              />
                              {row.status}
                            </span>
                          </td>
                          <td className="px-5 py-3 text-right">
                            <button className="text-slate-400 hover:text-green-600 transition-colors text-sm">
                              •••
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-5 py-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">Showing 1 to {filtered.length} of 24 submissions</span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className="w-7 h-7 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:text-green-600 hover:border-green-400 text-xs transition-colors"
                >
                  ‹
                </button>
                {[1, 2, 3].map((n) => (
                  <button
                    key={n}
                    onClick={() => setPage(n)}
                    className={`w-7 h-7 rounded-lg text-xs font-medium transition-colors ${
                      page === n
                        ? "bg-green-500 text-white"
                        : "text-slate-500 hover:bg-green-50"
                    }`}
                  >
                    {n}
                  </button>
                ))}
                <button
                  onClick={() => setPage((p) => Math.min(3, p + 1))}
                  className="w-7 h-7 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:text-green-600 hover:border-green-400 text-xs transition-colors"
                >
                  ›
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {STATS.map(({ icon, label, value, iconBg, iconColor }) => (
              <div key={label} className="bg-white rounded-xl border border-slate-200 p-4 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-base flex-shrink-0"
                  style={{ background: iconBg, color: iconColor }}
                >
                  {icon}
                </div>
                <div>
                  <div className="text-[11px] text-slate-500">{label}</div>
                  <div className="text-lg font-medium text-slate-900 mt-0.5">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}