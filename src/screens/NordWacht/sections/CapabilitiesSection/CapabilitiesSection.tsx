import { Shield, Search, Glasses, Lock, Cloud, Zap } from "lucide-react";

export const CapabilitiesSection = (): JSX.Element => {
    const capabilities = [
        {
            title: "Infrastructure Hardening",
            risk: "Reduces lateral movement and containment failure",
            icon: <Shield className="w-6 h-6" />,
        },
        {
            title: "Application Security Reviews",
            risk: "Reduces exploitability of critical systems",
            icon: <Search className="w-6 h-6" />,
        },
        {
            title: "Monitoring & Detection",
            risk: "Reduces dwell time and incident escalation",
            icon: <Glasses className="w-6 h-6" />,
        },
        {
            title: "Access & Identity Controls",
            risk: "Reduces credential abuse and privilege escalation",
            icon: <Lock className="w-6 h-6" />,
        },
        {
            title: "Cloud Security Posture",
            risk: "Reduces misconfiguration and exposure risk",
            icon: <Cloud className="w-6 h-6" />,
        },
        {
            title: "API Security Architecture",
            risk: "Reduces unauthorized access and data leakage",
            icon: <Zap className="w-6 h-6" />,
        },
    ];

    return (
        <section className="relative w-full py-32 px-8 bg-black border-t border-white/5" id="capabilities">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <div className="mb-24 space-y-6 text-center">
                    <h2 className="text-5xl font-bold tracking-tight text-white flex flex-col items-center gap-4">
                        Security <span className="text-[#54f4fc]">Capabilities</span>
                        <div className="h-1.5 w-32 bg-[#54f4fc] rounded-full mx-auto" />
                    </h2>
                    <p className="text-white/40 max-w-2xl mx-auto text-sm font-medium">
                        Systematic risk reduction across your digital infrastructure using the <span className="text-white">Iron Protocol</span>.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {capabilities.map((capability) => (
                        <div
                            key={capability.title}
                            className="group p-10 border border-[#54f4fc]/10 rounded-2xl bg-neutral-950/20 hover:border-[#54f4fc]/40 transition-all duration-500 hover:bg-[#54f4fc]/5"
                        >
                            <div className="space-y-8">
                                <div className="w-16 h-16 rounded-xl bg-[#54f4fc]/10 flex items-center justify-center text-[#54f4fc] group-hover:bg-[#54f4fc] group-hover:text-black transition-all duration-500 shadow-[0_0_15px_rgba(84,244,252,0.1)]">
                                    {capability.icon}
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-white tracking-tight leading-tight">
                                        {capability.title}
                                    </h3>
                                    <p className="text-xs text-white/30 leading-relaxed font-medium tracking-wide">
                                        {capability.risk}
                                    </p>
                                    <div className="w-24 h-px bg-white/10" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
