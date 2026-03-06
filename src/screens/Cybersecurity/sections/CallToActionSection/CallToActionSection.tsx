import { ChevronDownIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

const navigationItems = [
  { label: "Pricing", hasDropdown: false },
  { label: "Features", hasDropdown: true },
  { label: "Support", hasDropdown: false },
  { label: "Blog", hasDropdown: false },
  { label: "Partners", hasDropdown: false },
];

export const CallToActionSection = (): JSX.Element => {
  return (
    <header className="flex items-center justify-between w-full px-10 py-4">
      <div className="[font-family:'Archivo',Helvetica] font-semibold text-[#54f4fc] text-[32px] tracking-[0] leading-[44.8px]">
        Iron
      </div>

      <NavigationMenu>
        <NavigationMenuList className="flex items-center gap-12">
          {navigationItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink className="flex items-center gap-2 [font-family:'Montserrat',Helvetica] font-medium text-white text-base tracking-[0.80px] leading-[26.2px] whitespace-nowrap cursor-pointer hover:text-[#54f4fc] transition-colors">
                {item.label}
                {item.hasDropdown && (
                  <ChevronDownIcon className="w-[18px] h-[18px]" />
                )}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <Button variant="ghost" className="px-0 py-[17px] hover:bg-transparent">
        <span className="[font-family:'Montserrat',Helvetica] font-bold text-[#54f4fc] text-lg tracking-[0.90px] leading-[29.5px] whitespace-nowrap">
          SIGN UP
        </span>
      </Button>
    </header>
  );
};
