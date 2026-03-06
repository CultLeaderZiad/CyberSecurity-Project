import { Separator } from "../../../../components/ui/separator";

const footerData = {
  solutions: {
    title: "Solutions",
    links: [
      "Application Services",
      "Security Servers",
      "Security FireWalls",
      "Cloud Services",
      "Integrations",
    ],
  },
  partners: {
    title: "Partners",
    links: ["Amazon", "Figma", "Twitter", "CloudRail-IIOT"],
  },
  resources: {
    title: "Resources",
    links: ["Academy", "Blog", "Themes", "Hosting", "Developers", "Support"],
  },
  company: {
    title: "Company",
    links: ["About Us", "Careers", "FAQs", "Teams", "Contact Us"],
  },
};

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full py-12 px-4">
      <div className="max-w-[1232px] mx-auto">
        <div className="grid grid-cols-4 gap-8 mb-12">
          <div className="flex flex-col gap-6">
            <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-cold-greywhite text-lg tracking-[0] leading-[normal]">
              {footerData.solutions.title}
            </h3>
            <nav className="flex flex-col gap-4">
              {footerData.solutions.links.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="[font-family:'Lato',Helvetica] font-normal text-cold-greywhite text-base tracking-[0] leading-6 whitespace-nowrap hover:opacity-80 transition-opacity"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-cold-greywhite text-lg tracking-[0] leading-[normal]">
              {footerData.partners.title}
            </h3>
            <nav className="flex flex-col gap-4">
              {footerData.partners.links.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="[font-family:'Lato',Helvetica] font-normal text-cold-greywhite text-base tracking-[0] leading-[normal] whitespace-nowrap hover:opacity-80 transition-opacity"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-cold-greywhite text-lg tracking-[0] leading-[normal]">
              {footerData.resources.title}
            </h3>
            <nav className="flex flex-col gap-4">
              {footerData.resources.links.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="[font-family:'Lato',Helvetica] font-normal text-cold-greywhite text-base tracking-[0] leading-[normal] whitespace-nowrap hover:opacity-80 transition-opacity"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-cold-greywhite text-lg tracking-[0] leading-[normal]">
              {footerData.company.title}
            </h3>
            <nav className="flex flex-col gap-4">
              {footerData.company.links.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="[font-family:'Lato',Helvetica] font-normal text-cold-greywhite text-base tracking-[0] leading-[normal] whitespace-nowrap hover:opacity-80 transition-opacity"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <Separator className="bg-[#d9d9d9] mb-6" />

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <p className="[font-family:'Lato',Helvetica] font-light text-cold-grey30 text-sm tracking-[0] leading-[normal]">
              © 2024 All Rights Reserved
            </p>
          </div>

          <img
            className="w-36 h-6"
            alt="Social media icons"
            src="/frame-12.svg"
          />
        </div>
      </div>
    </footer>
  );
};
