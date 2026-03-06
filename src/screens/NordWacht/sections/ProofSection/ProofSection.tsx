import { CheckCircle2 } from "lucide-react";

export const ProofSection = (): JSX.Element => {
    const certifications = [
        { name: "ISO/IEC 27001", type: "Certification" },
        { name: "SOC 2 Type II", type: "Certification" },
    ];

    const frameworks = [
        { name: "NIST Cybersecurity Framework", type: "Framework" },
        { name: "OWASP Top 10", type: "Framework" },
        { name: "CIS Critical Security Controls", type: "Framework" },
    ];

    return (
        <section className="relative w-full py-32 px-8 bg-black border-t border-white/5" id="standards">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <div className="mb-24 space-y-8 text-center">
                    <h2 className="text-5xl font-bold tracking-tight text-white flex flex-col items-center gap-4">
                        Standards & <span className="text-[#54f4fc]">Compliance</span>
                        <div className="h-1.5 w-32 bg-[#54f4fc] rounded-full mx-auto" />
                    </h2>
                    <p className="text-white/40 max-w-2xl mx-auto text-sm font-medium">
                        Auditable processes and frameworks verified against world-class security standards.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full">
                    {/* Certifications column */}
                    <div className="space-y-12">
                        <div className="flex items-center gap-4 border-l-2 border-[#54f4fc] pl-6 h-8">
                            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[#54f4fc]/60">
                                Formal Certifications
                            </h3>
                        </div>
                        <div className="space-y-4">
                            {certifications.map((item) => (
                                <div
                                    key={item.name}
                                    className="group flex items-center justify-between p-7 border border-white/5 rounded-xl bg-neutral-950/40 hover:border-[#54f4fc]/40 transition-all duration-500 overflow-hidden relative"
                                >
                                    <div className="flex items-center gap-6">
                                        <CheckCircle2 className="w-6 h-6 text-[#54f4fc] opacity-40 group-hover:opacity-100 transition-opacity" />
                                        <p className="text-xl font-bold text-white tracking-tight">{item.name}</p>
                                    </div>
                                    <div className="hidden md:block px-4 py-1 rounded-full border border-white/10 bg-white/5 text-[9px] font-black uppercase tracking-[0.15em] text-white/30 group-hover:border-[#54f4fc]/30 group-hover:text-[#54f4fc]/50 transition-all">
                                        {item.type}
                                    </div>
                                    {/* Subtle hover glow bar */}
                                    <div className="absolute inset-y-0 left-0 w-1 bg-[#54f4fc] -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Frameworks column */}
                    <div className="space-y-12">
                        <div className="flex items-center gap-4 border-l-2 border-[#54f4fc] pl-6 h-8">
                            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[#54f4fc]/60">
                                Framework Alignment
                            </h3>
                        </div>
                        <div className="space-y-4">
                            {frameworks.map((item) => (
                                <div
                                    key={item.name}
                                    className="group flex items-center justify-between p-7 border border-white/5 rounded-xl bg-neutral-950/40 hover:border-[#54f4fc]/40 transition-all duration-500 overflow-hidden relative"
                                >
                                    <div className="flex items-center gap-6">
                                        <CheckCircle2 className="w-6 h-6 text-[#54f4fc] opacity-40 group-hover:opacity-100 transition-opacity" />
                                        <p className="text-xl font-bold text-white tracking-tight">{item.name}</p>
                                    </div>
                                    <div className="hidden md:block px-4 py-1 rounded-full border border-white/10 bg-white/5 text-[9px] font-black uppercase tracking-[0.15em] text-white/30 group-hover:border-[#54f4fc]/30 group-hover:text-[#54f4fc]/50 transition-all">
                                        {item.type}
                                    </div>
                                    {/* Subtle hover glow bar */}
                                    <div className="absolute inset-y-0 left-0 w-1 bg-[#54f4fc] -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
