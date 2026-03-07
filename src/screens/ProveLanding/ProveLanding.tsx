import { HeroSection } from "./sections/HeroSection/HeroSection";
import { TrustSection } from "./sections/TrustSection/TrustSection";
import { CapabilitiesSection } from "./sections/CapabilitiesSection/CapabilitiesSection";
import { ProofSection } from "./sections/ProofSection/ProofSection";
import { ContactSection } from "./sections/ContactSection/ContactSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";

export const ProveLanding = (): JSX.Element => {
  return (
    <div className="bg-black overflow-hidden w-full relative text-white">
      <button
        className="fixed top-4 right-4 z-50 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          throw new Error("This is your first Sentry error!");
        }}
      >
        Break the world
      </button>
      <HeroSection />
      <TrustSection />
      <CapabilitiesSection />
      <ProofSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};
