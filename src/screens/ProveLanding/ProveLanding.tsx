import { HeroSection } from "./sections/HeroSection/HeroSection";
import { TrustSection } from "./sections/TrustSection/TrustSection";
import { CapabilitiesSection } from "./sections/CapabilitiesSection/CapabilitiesSection";
import { ProofSection } from "./sections/ProofSection/ProofSection";
import { ContactSection } from "./sections/ContactSection/ContactSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";

export const ProveLanding = (): JSX.Element => {
  return (
    <div className="bg-black overflow-hidden w-full relative text-white">
      <HeroSection />
      <TrustSection />
      <CapabilitiesSection />
      <ProofSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};
