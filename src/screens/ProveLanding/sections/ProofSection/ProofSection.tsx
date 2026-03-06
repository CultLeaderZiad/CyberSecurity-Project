export const ProofSection = (): JSX.Element => {
  const certifications = [
    { name: "ISO 27001", category: "Certifications" },
    { name: "SOC 2 Type II", category: "Certifications" },
  ];

  const frameworks = [
    { name: "NIST Cybersecurity Framework", category: "Frameworks" },
    { name: "OWASP Top 10", category: "Frameworks" },
    { name: "CIS Controls", category: "Frameworks" },
  ];

  return (
    <section className="relative w-full py-24 px-8 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 space-y-4">
          <p className="text-neutral-400 text-sm uppercase tracking-widest">
            Standards & Alignment
          </p>
          <h2 className="text-4xl font-bold max-w-2xl">
            Industry-Recognized Frameworks
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-sm uppercase tracking-widest text-neutral-400">
                Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="p-4 border border-neutral-800 rounded bg-neutral-950 hover:border-neutral-700 transition-colors duration-300"
                  >
                    <p className="font-semibold">{cert.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-sm uppercase tracking-widest text-neutral-400">
                Frameworks
              </h3>
              <div className="space-y-3">
                {frameworks.map((framework) => (
                  <div
                    key={framework.name}
                    className="p-4 border border-neutral-800 rounded bg-neutral-950 hover:border-neutral-700 transition-colors duration-300"
                  >
                    <p className="font-semibold">{framework.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-12 border-t border-neutral-800 space-y-4">
          <p className="text-neutral-300">
            <span className="font-semibold">Aligned with industry security frameworks</span>
          </p>
          <p className="text-neutral-400">
            Auditable processes and documented controls ensure compliance and transparency
          </p>
        </div>
      </div>
    </section>
  );
};
