// src/pages/SubmitAction.jsx
import { useState } from "react";
import Sidebar from "../components/Sidebar";

const ACTIVITY_TYPES = [
  "Tree plantation",
  "Recycling",
  "Energy saving",
  "Waste management",
  "Water conservation",
];

export default function SubmitAction() {
  const [form, setForm] = useState({
    activityType: "",
    quantity: "",
    description: "",
    date: "",
    location: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", form);
    // hook up to your API here
  };

  return (
    <div className="flex min-h-screen bg-slate-100 font-sans">
      <Sidebar />

      <main className="flex-1 overflow-y-auto p-8 lg:p-10">
        <div className="max-w-2xl mx-auto">
          {/* Page header */}
          <div className="mb-8">
            <h1 className="text-2xl font-medium text-slate-900">
              Submit environmental action
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Document your positive impact. Every small action contributes to a
              greener future.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Action details */}
            <section className="bg-white rounded-xl border border-slate-200 p-5">
              <h2 className="text-sm font-medium text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-green-500 text-base">ℹ</span> Action
                details
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-slate-500">
                    Activity type
                  </label>
                  <select
                    name="activityType"
                    value={form.activityType}
                    onChange={handleChange}
                    className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-1 focus:ring-green-400"
                  >
                    <option value="">Select activity...</option>
                    {ACTIVITY_TYPES.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-slate-500">
                    Quantity / impact value
                  </label>
                  <input
                    name="quantity"
                    type="number"
                    value={form.quantity}
                    onChange={handleChange}
                    placeholder="e.g. 5"
                    className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-1 focus:ring-green-400"
                  />
                </div>

                <div className="col-span-2 flex flex-col gap-1">
                  <label className="text-xs font-medium text-slate-500">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Briefly describe what you did and the results..."
                    className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-1 focus:ring-green-400 resize-none"
                  />
                </div>
              </div>
            </section>

            {/* Upload proof */}
            <section className="bg-white rounded-xl border border-slate-200 p-5">
              <h2 className="text-sm font-medium text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-green-500 text-base">↑</span> Upload proof
              </h2>
              <label className="block border-2 border-dashed border-slate-200 rounded-xl p-8 text-center cursor-pointer hover:border-green-400 transition-colors">
                <div className="text-2xl text-slate-400">📎</div>
                <p className="mt-2 text-sm font-medium text-slate-700">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  PNG, JPG or PDF (max. 10MB)
                </p>
                <input
                  type="file"
                  className="hidden"
                  accept=".png,.jpg,.jpeg,.pdf"
                />
              </label>
            </section>

            {/* Location & date */}
            <section className="bg-white rounded-xl border border-slate-200 p-5">
              <h2 className="text-sm font-medium text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-green-500 text-base">◎</span> Location &
                date
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-slate-500">
                    Date of action
                  </label>
                  <input
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={handleChange}
                    className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-1 focus:ring-green-400"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-slate-500">
                    Location name
                  </label>
                  <input
                    name="location"
                    type="text"
                    value={form.location}
                    onChange={handleChange}
                    placeholder="e.g. Central Park, NY"
                    className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-1 focus:ring-green-400"
                  />
                </div>

                <div className="col-span-2">
                  <div className="h-36 bg-slate-100 border border-slate-200 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl">📍</div>
                      <div className="text-xs font-medium text-slate-600 mt-1 bg-white border border-slate-200 px-3 py-1 rounded-full">
                        Confirm position
                      </div>
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1.5 uppercase tracking-widest font-medium">
                    Map picker (optional)
                  </p>
                </div>
              </div>
            </section>

            {/* Actions */}
            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                className="px-5 py-2 rounded-lg border border-slate-200 text-sm text-slate-600 hover:bg-slate-100 transition-colors"
              >
                Save as draft
              </button>
              <button
                type="submit"
                className="px-6 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white text-sm font-medium transition-colors"
              >
                Submit action
              </button>
            </div>
          </form>

          <footer className="mt-16 pt-6 border-t border-slate-200 text-center text-xs text-slate-400">
            © 2024 EcoBlock Protocol. Building a sustainable future, one block
            at a time.
          </footer>
        </div>
      </main>
    </div>
  );
}
