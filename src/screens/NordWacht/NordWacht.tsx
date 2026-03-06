import { Header } from "./sections/Header/Header";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { TrustSection } from "./sections/TrustSection/TrustSection";
import { CapabilitiesSection } from "./sections/CapabilitiesSection/CapabilitiesSection";
import { ProofSection } from "./sections/ProofSection/ProofSection";
import { ContactSection } from "./sections/ContactSection/ContactSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";

export const NordWacht = (): JSX.Element => {
    return (
        <div className="bg-black min-h-screen overflow-hidden w-full relative text-white">
            {/* Global Background Layer */}
            <div
                className="fixed inset-0 opacity-[0.03] pointer-events-none z-0"
                style={{
                    backgroundImage: `linear-gradient(#ffffff0a 1px, transparent 1px), linear-gradient(90deg, #ffffff0a 1px, transparent 1px)`,
                    backgroundSize: '100px 100px'
                }}
            />

            <div className="relative z-10 font-[Inter,sans-serif]">
                <Header />
                <HeroSection />
                <TrustSection />
                <CapabilitiesSection />
                <ProofSection />
                <ContactSection />
                <FooterSection />
            </div>
        </div>
    );
};
