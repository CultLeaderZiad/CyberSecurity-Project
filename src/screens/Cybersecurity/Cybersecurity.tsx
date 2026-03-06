import { Button } from "../../components/ui/button";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { CustomerTestimonialsSection } from "./sections/CustomerTestimonialsSection/CustomerTestimonialsSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { MainContentSection } from "./sections/MainContentSection";
import { ServicesOfferedSection } from "./sections/ServicesOfferedSection";

export const Cybersecurity = (): JSX.Element => {
  return (
    <div className="bg-black overflow-hidden w-full min-w-[1440px] relative">
      <CallToActionSection />

      <section className="relative w-full">
        <div className="relative w-full min-h-[800px]">
          <img
            className="absolute top-48 left-[535px] w-[829px] h-[550px] object-cover"
            alt="Cyber security"
            src="/cyber-security-2.png"
          />

          <img
            className="absolute top-[133px] left-[1341px] w-[99px] h-[550px] object-cover"
            alt="Cyber security"
            src="/cyber-security-2.png"
          />

          <div className="absolute top-24 left-10 w-[1360px] h-px bg-neutral-700" />

          <div className="absolute top-[235px] left-[475px] w-[572px] h-[471px] bg-[linear-gradient(91deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0.69)_59%,rgba(0,0,0,0.08)_100%)]" />

          <HeroSection />

          <p className="absolute top-[525px] left-[104px] w-[756px] [font-family:'Lato',Helvetica] font-normal text-[#d7d7d7] text-2xl tracking-[0] leading-[39.4px]">
            Unlock your business&#39;s full potential with our comprehensive
            cybersecurity strategies. Safeguard your growth and resilience in
            the digital age.
          </p>

          <div className="inline-flex items-start gap-8 absolute top-[706px] left-[104px]">
            <Button className="px-[30px] py-[17px] bg-[#54f4fc] hover:bg-[#54f4fc]/90 rounded-lg [font-family:'Montserrat',Helvetica] font-bold text-black text-base tracking-[0.80px] leading-[26.2px]">
              LEARN MORE
            </Button>

            <Button
              variant="outline"
              className="px-[30px] py-[17px] rounded-lg border-[#54f4fc] [font-family:'Montserrat',Helvetica] font-bold text-[#54f4fc] text-base tracking-[0.80px] leading-[26.2px] hover:bg-[#54f4fc]/10"
            >
              TALK WITH US
            </Button>
          </div>

          <div className="absolute top-[294px] left-[53px] w-px h-[335px] bg-[#424242]" />

          <div className="absolute top-[294px] left-[54px] w-10 h-px bg-[#424242]" />

          <div className="absolute top-[628px] left-[54px] w-10 h-px bg-[#424242]" />

          <div className="absolute top-[175px] left-[840px] w-6 h-6 border-t-[3px] [border-top-style:solid] border-l-[3px] [border-left-style:solid] border-[#54f4fc]" />

          <div className="absolute top-[756px] left-[840px] w-6 h-6 border-t-[3px] [border-top-style:solid] border-l-[3px] [border-left-style:solid] border-[#54f4fc]" />

          <div className="absolute top-[175px] left-[1376px] w-6 h-6 border-t-[3px] [border-top-style:solid] border-l-[3px] [border-left-style:solid] border-[#54f4fc] rotate-180" />

          <div className="absolute top-[756px] left-[1376px] w-6 h-6 border-t-[3px] [border-top-style:solid] border-l-[3px] [border-left-style:solid] border-[#54f4fc] rotate-180" />
        </div>
      </section>

      <MainContentSection />
      <ServicesOfferedSection />
      <CustomerTestimonialsSection />
      <FooterSection />
    </div>
  );
};
