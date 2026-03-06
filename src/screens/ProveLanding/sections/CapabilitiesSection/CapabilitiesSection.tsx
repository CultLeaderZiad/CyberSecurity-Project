export const CapabilitiesSection = (): JSX.Element => {
  const capabilities = [
    {
      title: "Infrastructure Hardening",
      risk: "Reduces lateral movement and persistence",
      description:
        "Systematic hardening of cloud infrastructure, networks, and systems to eliminate common attack paths.",
    },
    {
      title: "Application Security Reviews",
      risk: "Reduces exploitability and data exposure",
      description:
        "Deep code and architecture analysis to identify and remediate security vulnerabilities before production.",
    },
    {
      title: "Monitoring & Detection",
      risk: "Reduces dwell time and incident impact",
      description:
        "Continuous threat monitoring and detection to identify compromises in hours, not months.",
    },
    {
      title: "Access & Identity Controls",
      risk: "Reduces credential abuse and unauthorized access",
      description:
        "Zero-trust architecture and identity governance to prevent privilege escalation and lateral movement.",
    },
  ];

  return (
    <section className="relative w-full py-24 px-8 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 space-y-4">
          <p className="text-neutral-400 text-sm uppercase tracking-widest">
            Capabilities
          </p>
          <h2 className="text-4xl font-bold max-w-2xl">
            Systematic Risk Reduction
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className="p-8 border border-neutral-800 rounded-lg bg-neutral-950 hover:border-neutral-700 transition-colors duration-300"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">{capability.title}</h3>
                <p className="text-sm text-cyan-400 font-mono">
                  {capability.risk}
                </p>
                <p className="text-neutral-400 leading-relaxed">
                  {capability.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
