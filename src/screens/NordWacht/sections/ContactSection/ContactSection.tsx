import { Button } from "../../../../components/ui/button";

export const ContactSection = (): JSX.Element => {
    return (
        <section className="relative w-full py-24 px-8 border-t border-neutral-800">
            <div className="max-w-4xl mx-auto text-center space-y-8">
                <div className="space-y-4">
                    <p className="text-[#54f4fc] text-sm uppercase tracking-widest font-semibold">
                        Get Started
                    </p>
                    <h2 className="text-4xl font-bold text-white">
                        Discuss Your <span className="text-[#54f4fc]">Security Requirements</span>
                    </h2>
                    <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                        Connect with the <span className="text-white">NordWacht</span> team to explore how systematic risk reduction applies to your infrastructure.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                    <Button className="w-full sm:w-auto px-10 py-6 bg-[#54f4fc] hover:bg-[#54f4fc]/90 text-black font-bold rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(84,244,252,0.2)] hover:scale-105">
                        Schedule Consultation
                    </Button>
                    <Button
                        variant="outline"
                        className="w-full sm:w-auto px-10 py-6 border-[#54f4fc]/30 text-[#54f4fc] hover:bg-[#54f4fc]/10 font-bold rounded-lg transition-all duration-300"
                    >
                        Learn More
                    </Button>
                </div>
            </div>
        </section>
    );
};
