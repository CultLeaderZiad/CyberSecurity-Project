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
                    <p className="text-[#54f4fc] text-sm uppercase tracking-widest font-semibold">
                        NordWacht Capabilities
                    </p>
                    <h2 className="text-4xl font-bold max-w-2xl text-white">
                        Systematic <span className="text-[#54f4fc]">Risk Reduction</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {capabilities.map((capability) => (
                        <div
                            key={capability.title}
                            className="group p-8 border border-neutral-800 rounded-lg bg-neutral-950 hover:border-[#54f4fc]/30 transition-all duration-500 hover:shadow-[0_0_20px_rgba(84,244,252,0.1)]"
                        >
                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-6 bg-[#54f4fc] opacity-50 group-hover:opacity-100 transition-opacity" />
                                    <h3 className="text-xl font-semibold text-white group-hover:text-[#54f4fc] transition-colors">{capability.title}</h3>
                                </div>
                                <p className="text-sm text-[#54f4fc]/80 font-mono">
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
