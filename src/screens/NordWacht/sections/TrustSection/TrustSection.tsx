export const TrustSection = (): JSX.Element => {
    const sectors = [
        "Finance",
        "SaaS",
        "Healthcare",
        "E-commerce",
        "DevOps",
    ];

    return (
        <section className="relative w-full py-32 px-8 bg-black overflow-hidden" id="trust">
            {/* Grid Pattern in background */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(#ffffff0a 1px, transparent 1px), linear-gradient(90deg, #ffffff0a 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <div className="flex flex-col items-center mb-24 space-y-8 text-center">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-[#54f4fc]/50 bg-[#54f4fc]/10 text-[#54f4fc] text-[10px] font-bold tracking-[0.2em] uppercase">
                        Sector Coverage
                    </div>
                    <h2 className="text-3xl font-bold max-w-2xl text-white tracking-tight leading-tight">
                        Trusted by teams operating in <br className="hidden md:block" />
                        <span className="text-white/80">regulated and high-risk environments</span>
                    </h2>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 w-full">
                    {sectors.map((sector) => (
                        <div
                            key={sector}
                            className="group relative flex flex-col items-center justify-center h-24 md:h-32 p-6 border border-white/5 rounded-xl bg-neutral-950/40 hover:border-[#54f4fc]/30 transition-all duration-500 overflow-hidden"
                        >
                            {/* Subtle hover glow */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-[radial-gradient(circle_at_center,rgba(84,244,252,1)_0%,transparent_70%)] transition-opacity" />

                            <span className="text-xs uppercase tracking-[0.4em] font-bold text-white/40 group-hover:text-[#54f4fc] transition-colors duration-500">
                                {sector}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
