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
                    <p className="text-[#54f4fc] text-sm uppercase tracking-widest font-semibold">
                        NordWacht Standards
                    </p>
                    <h2 className="text-4xl font-bold max-w-2xl text-white">
                        Industry-Recognized <span className="text-[#54f4fc]">Frameworks</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <div className="space-y-3">
                            <h3 className="text-sm uppercase tracking-widest text-[#54f4fc]/60">
                                Certifications
                            </h3>
                            <div className="space-y-3">
                                {certifications.map((cert) => (
                                    <div
                                        key={cert.name}
                                        className="p-4 border border-neutral-800 rounded bg-neutral-950 hover:border-[#54f4fc]/30 hover:bg-[#54f4fc]/5 transition-all duration-300 group"
                                    >
                                        <p className="font-semibold text-white group-hover:text-[#54f4fc] transition-colors">{cert.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-3">
                            <h3 className="text-sm uppercase tracking-widest text-[#54f4fc]/60">
                                Frameworks
                            </h3>
                            <div className="space-y-3">
                                {frameworks.map((framework) => (
                                    <div
                                        key={framework.name}
                                        className="p-4 border border-neutral-800 rounded bg-neutral-950 hover:border-[#54f4fc]/30 hover:bg-[#54f4fc]/5 transition-all duration-300 group"
                                    >
                                        <p className="font-semibold text-white group-hover:text-[#54f4fc] transition-colors">{framework.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-12 border-t border-neutral-800 space-y-4">
                    <p className="text-neutral-300">
                        <span className="font-semibold text-[#54f4fc]">Aligned with industry security frameworks</span>
                    </p>
                    <p className="text-neutral-400">
                        Auditable processes and documented controls ensure compliance and transparency with <span className="text-[#54f4fc]">NordWacht</span> protocols.
                    </p>
                </div>
            </div>
        </section>
    );
};
