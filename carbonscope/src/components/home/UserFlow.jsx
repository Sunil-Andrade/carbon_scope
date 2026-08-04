function UserFlow() {
  const steps = [
    {
      title: "Register & Login",
      desc: "Organizations (colleges, NGOs, communities) create an account and access the platform dashboard.",
    },
    {
      title: "Submit Environmental Action",
      desc: "Users submit activities like tree plantation, waste reduction, or energy-saving initiatives with proof like images and location data.",
    },
    {
      title: "Initial Validation",
      desc: "Backend checks submitted data for completeness and basic correctness before processing.",
    },
    {
      title: "Verification Process",
      desc: "Submitted actions are verified using the verification module to ensure authenticity.",
    },
    {
      title: "Carbon Credit Calculation",
      desc: "Verified actions are converted into carbon credits based on predefined environmental impact rules.",
    },
    {
      title: "Blockchain Recording",
      desc: "Verified data is stored in database and permanently recorded on blockchain for transparency and immutability.",
    },
    {
      title: "Dashboard & Analytics",
      desc: "Users view their verified actions, carbon credits, and environmental impact through charts and reports.",
    },
  ];

  return (
    <section id="user-flow" className="px-6 lg:px-20 py-20">
      {/* TITLE */}
      <h2 className="text-3xl font-bold mb-10">User Flow</h2>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <div
            key={i}
            className="p-6 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 hover:shadow-lg transition"
          >
            <h3 className="font-bold mb-3 text-primary">
              {i + 1}. {step.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UserFlow;
