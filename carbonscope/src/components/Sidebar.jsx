// src/components/Sidebar.jsx
import { NavLink } from "react-router-dom";

const NAV_ITEMS = [
  { icon: "▦", label: "Dashboard", to: "/dashboard" },
  // { icon: "❧", label: "Impact Hub", to: "/impact" },
  { icon: "⊕", label: "Submit Action", to: "/submit" },
  { icon: "✔️", label: "Verification", to: "/verification" },
  // { icon: "⚇", label: "Community", to: "/community" },
];

export default function Sidebar() {
  return (
    <aside className="w-52 bg-white border-r border-slate-200 flex flex-col flex-shrink-0 h-screen sticky top-0">
      {/* Logo */}
      <div className="p-4 flex items-center gap-2 border-b border-slate-200">
        <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center text-white text-sm flex-shrink-0">
          🌿
        </div>
        <div>
          <div className="text-sm font-medium text-slate-900">EcoBlock</div>
          <div className="text-[10px] text-slate-500">Green Contributor</div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-2 flex flex-col gap-0.5">
        {NAV_ITEMS.map(({ icon, label, to }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-colors ${
                isActive
                  ? "bg-green-50 text-green-700 font-medium"
                  : "text-slate-500 hover:bg-slate-100"
              }`
            }
          >
            <span className="w-3 text-center text-xs">{icon}</span>
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Footer CTA */}
      <div className="p-3 border-t border-slate-200">
        <button className="w-full py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-xs font-medium transition-colors">
          Join Challenge
        </button>
      </div>
    </aside>
  );
}
