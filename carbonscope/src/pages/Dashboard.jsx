import { useState } from "react";

const NAV_ITEMS = [
  { icon: "▦", label: "Dashboard", active: true },
  { icon: "↑", label: "Submit Action" },
  { icon: "✔", label: "Verification" },
  { icon: "◈", label: "Carbon Credits" },
  { icon: "↗", label: "Reports" },
  { icon: "⛁", label: "Blockchain Records" },
];

const STATS = [
  { label: "Total Actions", value: "1,284", badge: "+12%", type: "green" },
  { label: "Verified Actions", value: "942", badge: "+8%", type: "green" },
  { label: "Pending", value: "342", badge: "-5%", type: "orange" },
  { label: "Carbon Credits", value: "12.5k", badge: "+15%", type: "green" },
  {
    label: "CO2 Impact",
    value: "450 T",
    badge: "+10%",
    type: "green",
    accent: true,
  },
];

const BARS = [
  { label: "JAN", outerH: 50, innerPct: 60 },
  { label: "FEB", outerH: 70, innerPct: 70 },
  { label: "MAR", outerH: 55, innerPct: 65 },
  { label: "APR", outerH: 90, innerPct: 85 },
  { label: "MAY", outerH: 78, innerPct: 90 },
  { label: "JUN", outerH: 108, innerPct: 95 },
];

const ACTIVITIES = [
  { label: "Reforestation", pct: 45, color: "#0fbd5d" },
  { label: "Waste reduction", pct: 30, color: "#34d399" },
  { label: "Renewable energy", pct: 15, color: "#14b8a6" },
  { label: "Other actions", pct: 10, color: "#94a3b8" },
];

const ACTIONS = [
  {
    icon: "🌲",
    name: "Tree plantation — north sector",
    date: "Oct 24, 2023",
    by: "EcoAudit Global",
    impact: "12.5 T CO2",
    status: "Verified",
  },
  {
    icon: "♻",
    name: "Plastics recycling drive",
    date: "Oct 22, 2023",
    by: "Pending review",
    impact: "5.2 T CO2",
    status: "Pending",
  },
  {
    icon: "☀",
    name: "Solar panel installation",
    date: "Oct 18, 2023",
    by: "VeriGreen Inst.",
    impact: "45.0 T CO2",
    status: "Verified",
  },
];

export default function Dashboard() {
  const [activeNav, setActiveNav] = useState("Dashboard");

  return (
    <div className="flex min-h-screen bg-slate-100 font-sans text-sm">
      {/* Sidebar */}
      <aside className="w-52 bg-white border-r border-slate-200 flex flex-col flex-shrink-0">
        <div className="p-4 flex items-center gap-2 border-b border-slate-200">
          <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center text-white text-base">
            🌿
          </div>
          <div>
            <div className="font-medium text-slate-900 text-sm">EcoBlock</div>
            <div className="text-[10px] text-slate-500">SaaS Dashboard</div>
          </div>
        </div>
        <nav className="flex-1 p-2 flex flex-col gap-0.5">
          {NAV_ITEMS.map(({ icon, label }) => (
            <button
              key={label}
              onClick={() => setActiveNav(label)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-colors w-full text-left ${
                activeNav === label
                  ? "bg-green-50 text-green-700 font-medium"
                  : "text-slate-500 hover:bg-slate-100"
              }`}
            >
              <span className="w-3 text-center">{icon}</span>
              {label}
            </button>
          ))}
        </nav>
        <div className="p-2 border-t border-slate-200 flex flex-col gap-0.5">
          {["Organization", "Settings"].map((item) => (
            <button
              key={item}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-slate-500 hover:bg-slate-100 w-full text-left"
            >
              {item}
            </button>
          ))}
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-12 bg-white border-b border-slate-200 px-5 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <span className="font-medium text-slate-900 text-sm">
              Dashboard Overview
            </span>
            <input
              className="bg-slate-100 border-none rounded-md px-3 py-1.5 text-xs text-slate-500 w-48 focus:outline-none focus:ring-1 focus:ring-green-400"
              placeholder="Search actions, records..."
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-500 text-sm">🔔</span>
            <div className="text-right">
              <div className="text-xs font-medium text-slate-900">
                Admin User
              </div>
              <div className="text-[10px] text-slate-500">
                Green Logistics Inc.
              </div>
            </div>
            <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-xs font-medium border border-green-200">
              AU
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4">
          {/* Welcome */}
          <div>
            <h1 className="text-xl font-medium text-slate-900">
              Welcome back, EcoBlock Admin
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Real-time monitoring of your environmental impact and carbon
              credits.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-5 gap-3">
            {STATS.map(({ label, value, badge, type, accent }) => (
              <div
                key={label}
                className={`bg-white rounded-xl border border-slate-200 p-4 ${accent ? "border-l-2 border-l-green-500" : ""}`}
              >
                <div className="text-xs text-slate-500">{label}</div>
                <div className="flex items-end justify-between mt-1.5">
                  <span className="text-xl font-medium text-slate-900">
                    {value}
                  </span>
                  <span
                    className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full ${
                      type === "green"
                        ? "bg-green-50 text-green-700"
                        : "bg-orange-50 text-orange-700"
                    }`}
                  >
                    {badge}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-2 gap-4">
            {/* Bar chart */}
            <div className="bg-white rounded-xl border border-slate-200 p-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-slate-900">
                  Environmental impact over time
                </span>
                <select className="text-[11px] border border-slate-200 rounded px-1.5 py-1 bg-slate-50 text-slate-500">
                  <option>Last 6 months</option>
                  <option>Last year</option>
                </select>
              </div>
              <div className="h-28 flex items-end gap-1.5 px-1">
                {BARS.map(({ label, outerH, innerPct }) => (
                  <div
                    key={label}
                    className="flex-1 flex flex-col items-center"
                  >
                    <div
                      className="w-full rounded-t relative"
                      style={{
                        height: outerH,
                        background: "rgba(15,189,93,0.15)",
                      }}
                    >
                      <div
                        className="absolute bottom-0 w-full rounded-t"
                        style={{
                          height: `${innerPct}%`,
                          background: "#0fbd5d",
                          opacity: 0.8,
                        }}
                      />
                    </div>
                    <span className="text-[9px] text-slate-400 mt-1">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress bars */}
            <div className="bg-white rounded-xl border border-slate-200 p-4">
              <div className="text-sm font-medium text-slate-900 mb-4">
                Activity distribution
              </div>
              <div className="flex flex-col gap-3">
                {ACTIVITIES.map(({ label, pct, color }) => (
                  <div key={label}>
                    <div className="flex justify-between text-xs font-medium text-slate-700 mb-1">
                      <span>{label}</span>
                      <span>{pct}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${pct}%`, background: color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-green-50 border border-green-100 rounded-lg p-3 text-xs text-slate-600">
                Your verification score improved by{" "}
                <strong className="text-green-700">14%</strong> this month.
                Great work!
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-200 flex justify-between items-center">
              <span className="text-sm font-medium text-slate-900">
                Recent environmental actions
              </span>
              <button className="text-xs font-medium text-green-700 hover:underline">
                View all
              </button>
            </div>
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50">
                  {[
                    "Action type",
                    "Submitted",
                    "Verified by",
                    "Impact",
                    "Status",
                  ].map((h) => (
                    <th
                      key={h}
                      className="px-4 py-3 text-left text-[10px] font-medium text-slate-500 uppercase tracking-wide"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ACTIONS.map(({ icon, name, date, by, impact, status }) => (
                  <tr
                    key={name}
                    className="border-t border-slate-100 hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded bg-green-50 flex items-center justify-center text-sm">
                          {icon}
                        </div>
                        <span className="text-xs font-medium text-slate-900">
                          {name}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-500">{date}</td>
                    <td className="px-4 py-3 text-xs text-slate-600">{by}</td>
                    <td
                      className={`px-4 py-3 text-xs font-medium ${status === "Verified" ? "text-green-700" : "text-slate-500"}`}
                    >
                      {impact}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`text-[9px] font-medium px-2 py-0.5 rounded-full uppercase tracking-wide ${
                          status === "Verified"
                            ? "bg-green-50 text-green-700"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
