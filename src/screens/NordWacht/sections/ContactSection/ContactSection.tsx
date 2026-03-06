import { Button } from "../../../../components/ui/button";

export const ContactSection = (): JSX.Element => {
    return (
        <section className="relative w-full py-40 px-8 bg-black border-t border-white/5" id="approach">
            <div className="max-w-4xl mx-auto text-center space-y-12">
                <div className="space-y-6">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-[#54f4fc]/30 bg-[#54f4fc]/5 text-[#54f4fc] text-[10px] font-bold tracking-[0.2em] uppercase">
                        Get Started
                    </div>
                    <h2 className="text-5xl font-bold text-white tracking-tight leading-[1.2]">
                        Implement <span className="text-[#54f4fc] drop-shadow-[0_0_15px_rgba(84,244,252,0.2)]">Systematic Risk Reduction</span> <br />
                        Today
                    </h2>
                    <p className="text-lg text-white/40 max-w-2xl mx-auto font-medium">
                        Connect with the <span className="text-white">NordWacht engineering team</span> to explore how precision security architecture applies to your specific environment.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                    <Button className="w-full sm:w-auto px-12 py-8 bg-[#54f4fc] hover:bg-[#54f4fc]/90 text-black font-bold text-xs tracking-widest uppercase rounded-lg shadow-[0_0_20px_rgba(84,244,252,0.3)] transition-all hover:scale-105">
                        Schedule Consultation
                    </Button>
                    <Button
                        variant="ghost"
                        className="w-full sm:w-auto px-12 py-8 border border-white/10 text-white font-bold text-xs tracking-widest uppercase rounded-lg hover:bg-white/5 transition-all"
                    >
                        Download Protocol Specs
                    </Button>
                </div>
            </div>
        </section>
    );
};
