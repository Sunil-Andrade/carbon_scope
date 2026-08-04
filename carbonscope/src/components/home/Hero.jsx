function Hero() {
  return (
    <section className="px-6 lg:px-20 py-16">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl lg:text-6xl font-black">
            Transparent Environmental Impact Through{" "}
            <span className="text-primary">Blockchain</span>
          </h1>

          <p className="text-gray-600">
            Record your environmental actions and earn micro carbon credits.
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-3 bg-primary text-white rounded-xl">
              Register Organization
            </button>
            <button className="px-6 py-3 bg-gray-200 rounded-xl">
              Explore Platform
            </button>
          </div>
        </div>

        <div className="flex-1">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgXT_KxQI91hbvHuRYvVIdjVB67WfsXN1GXFJ3P4eee9hTKo90BC9e8SHTp2GOyk2CpET3rc4cGvSYy4YSpMH-6FGU0dM9klVJro_ZL33X-y_sX6RZR9KbtkTVqTTdKUrgIbBBuTZA7u2VURQyHsTsDGh0Thl7TsYbCYnu_ep_TNBN-iDxJ94_r0YU-cPV6-C_shVsVf-I30IWgTO_l0W5D6Tf3tUIqJG6FPqu8xAOxCS8c6jumUtpHkAB2zblEPhvvHbZ_fB5xMA"
            className="rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
