import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // stop page reload
    navigate("/dashboard"); // go to dashboard
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      {/* SIDEBAR */}
      <div className="lg:w-[400px] w-full bg-white dark:bg-slate-900 border-r flex flex-col p-8 lg:sticky lg:top-0 lg:h-screen">
        <div className="flex-1 flex flex-col gap-10">
          {/* BRAND */}
          <div className="flex items-center gap-3">
            <div className="bg-primary/20 p-2 rounded-lg text-primary">
              <span className="material-symbols-outlined text-3xl">eco</span>
            </div>
            <div>
              <h1 className="text-2xl font-black">EcoBlock</h1>
              <p className="text-primary text-sm">Environmental Transparency</p>
            </div>
          </div>

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-bold mb-2">
              Join the future of environmental transparency
            </h2>
            <p className="text-slate-500">
              Register your organization to access our platform.
            </p>
          </div>
        </div>

        {/* SUPPORT BOX */}
        <div className="mt-auto pt-10">
          <div className="bg-slate-900 text-white rounded-xl p-6">
            <p className="text-sm mb-2">Need help?</p>
            <p className="text-xs mb-4">Our support team is available 24/7.</p>
            <button className="text-xs underline">Contact Support</button>
          </div>
        </div>
      </div>

      {/* FORM */}
      <main className="flex-1 flex justify-center py-12 px-6 lg:px-20">
        <div className="w-full max-w-2xl">
          <div className="mb-10">
            <h2 className="text-3xl font-black mb-2">Create an account</h2>
            <p className="text-slate-500">Fill in the details below.</p>
          </div>

          <form className="space-y-8" onSubmit={handleSubmit}>
            {/* ORG DETAILS */}
            <section>
              <h3 className="font-bold mb-4">Organization Details</h3>

              <input
                type="text"
                placeholder="Organization Name"
                className="w-full p-3 border rounded-lg mb-4"
              />

              <select className="w-full p-3 border rounded-lg mb-4">
                <option>Select Type</option>
                <option>NGO</option>
                <option>College</option>
                <option>Government</option>
                <option>Private</option>
              </select>
            </section>

            {/* CONTACT */}
            <section>
              <h3 className="font-bold mb-4">Contact Person</h3>

              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border rounded-lg mb-4"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border rounded-lg mb-4"
              />
            </section>

            {/* PASSWORD */}
            <section>
              <h3 className="font-bold mb-4">Security</h3>

              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border rounded-lg mb-4"
              />

              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full p-3 border rounded-lg"
              />
            </section>

            {/* BUTTON */}
            <button
              className="w-full bg-primary text-white py-3 rounded-lg"
              type="submit"
            >
              Create Account
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Register;
