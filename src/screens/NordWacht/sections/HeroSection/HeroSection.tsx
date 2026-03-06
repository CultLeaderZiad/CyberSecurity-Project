import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-32 pb-24 px-8 overflow-hidden bg-black">
            {/* Grid Background */}
            <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(#ffffff0a 1px, transparent 1px), linear-gradient(90deg, #ffffff0a 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Radial Gradient overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_80%)] pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center space-y-12">
                <div className="inline-block px-4 py-1.5 rounded-full border border-[#54f4fc]/30 bg-[#54f4fc]/5 text-[#54f4fc] text-[10px] font-bold tracking-[0.2em] uppercase">
                    Infrastructure-First Protection
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight max-w-5xl">
                    <span className="text-white">Preventing Breaches </span>
                    <br />
                    <span className="text-[#54f4fc] drop-shadow-[0_0_20px_rgba(84,244,252,0.3)]">
                        Before They Become <br className="hidden md:block" /> Incidents
                    </span>
                </h1>

                <p className="text-sm md:text-base text-white/50 leading-relaxed max-w-2xl font-medium">
                    Systematic risk reduction across cloud infrastructure, APIs, and data pipelines. <span className="text-white/70">Built for Iron-clad security in regulated environments.</span>
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                    <Button className="px-10 py-7 bg-[#54f4fc] hover:bg-[#54f4fc]/90 text-black font-bold text-xs tracking-widest uppercase rounded-lg shadow-[0_0_25px_rgba(84,244,252,0.4)]">
                        Protect Your Infrastructure
                    </Button>
                    <Button
                        variant="ghost"
                        className="px-10 py-7 border border-white/20 text-white font-bold text-xs tracking-widest uppercase rounded-lg hover:bg-white/5 transition-all"
                    >
                        View Security Protocols
                    </Button>
                </div>

                {/* Stats bar */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pt-24 w-full max-w-4xl border-t border-white/5">
                    <div className="flex flex-col items-center space-y-2">
                        <span className="text-xl font-bold text-white tracking-widest font-mono">100%</span>
                        <span className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-medium">Compliance</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <span className="text-xl font-bold text-white tracking-widest font-mono">24/7</span>
                        <span className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-medium">Monitoring</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <span className="text-xl font-bold text-white tracking-widest font-mono">EU-HQ</span>
                        <span className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-medium">Berlin-Based</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
