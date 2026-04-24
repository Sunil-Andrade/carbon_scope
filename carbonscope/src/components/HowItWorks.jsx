function HowItWorks() {
  const steps = [
    "Register",
    "Submit",
    "Verify",
    "Record",
    "Credits",
    "Dashboard",
  ];

  return (
    <section id="how-it-works" className="px-6 lg:px-20 py-20">
      <h2 className="text-3xl font-bold mb-10">How It Works</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <div key={i} className="p-6 border rounded-xl">
            <h3 className="font-bold mb-2">
              {i + 1}. {step}
            </h3>
            <p className="text-gray-600 text-sm">Explanation of {step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
