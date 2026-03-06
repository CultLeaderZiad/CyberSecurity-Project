export const TrustSection = (): JSX.Element => {
  const sectors = [
    { name: "Finance", description: "Regulated financial institutions" },
    { name: "SaaS", description: "Cloud-native platforms" },
    { name: "Healthcare", description: "HIPAA-compliant systems" },
    { name: "E-commerce", description: "Payment processing systems" },
    { name: "Infrastructure", description: "DevOps and cloud operations" },
  ];

  return (
    <section className="relative w-full py-24 px-8 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 space-y-4">
          <p className="text-neutral-400 text-sm uppercase tracking-widest">
            Trusted Partners
          </p>
          <h2 className="text-4xl font-bold">
            Operating in Regulated and High-Risk Environments
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {sectors.map((sector) => (
            <div
              key={sector.name}
              className="flex flex-col items-center text-center space-y-4 p-6 border border-neutral-800 rounded-lg bg-neutral-950 hover:border-neutral-700 transition-colors duration-300"
            >
              <div className="w-16 h-16 rounded-lg bg-neutral-900 border border-neutral-700 flex items-center justify-center">
                <span className="text-2xl font-bold text-neutral-400">
                  {sector.name.charAt(0)}
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">{sector.name}</h3>
                <p className="text-sm text-neutral-400">{sector.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-16 border-t border-neutral-800">
          <p className="text-neutral-400 text-center text-sm">
            Trusted by teams operating in regulated and high-risk environments
          </p>
        </div>
      </div>
    </section>
  );
};
