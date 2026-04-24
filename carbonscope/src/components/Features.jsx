function Features() {
  return (
    
    <section  id="features" className="px-6 lg:px-20 py-20 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          Powerful Tools for Environmental Accountability
        </h2>
        <p className="text-gray-600">
          Turn sustainable actions into verifiable assets.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          "Action Tracking",
          "Tamper-Proof Records",
          "Credit Calculation",
          "ESG Reporting",
          "Node Verification",
          "Credit Wallet",
        ].map((item) => (
          <div
            key={item}
            className="p-6 border rounded-xl hover:border-primary"
          >
            <h3 className="font-bold text-lg mb-2">{item}</h3>
            <p className="text-gray-600 text-sm">Description about {item}.</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
