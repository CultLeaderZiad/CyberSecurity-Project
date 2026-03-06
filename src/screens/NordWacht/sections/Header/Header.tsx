import { Button } from "../../../../components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

const navigationItems = [
    { label: "Capabilities", href: "#capabilities" },
    { label: "Standards", href: "#standards" },
    { label: "Approach", href: "#approach" },
];

export const Header = (): JSX.Element => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full px-8 md:px-16 py-6 bg-black/80 backdrop-blur-md border-b border-white/5">
            <div className="flex items-center gap-4">
                <div className="[font-family:'Archivo',Helvetica] font-bold text-[#54f4fc] text-2xl tracking-[0.05em] uppercase">
                    NordWacht
                </div>
                <div className="h-6 w-px bg-white/20 mx-2" />
                <div className="text-white/40 text-xs tracking-widest uppercase font-medium">
                    Iron Security
                </div>
            </div>

            <NavigationMenu className="hidden lg:block">
                <NavigationMenuList className="flex items-center gap-10">
                    {navigationItems.map((item, index) => (
                        <NavigationMenuItem key={index}>
                            <NavigationMenuLink
                                href={item.href}
                                className="[font-family:'Montserrat',Helvetica] font-medium text-white/70 text-sm tracking-wide hover:text-[#54f4fc] transition-colors"
                            >
                                {item.label}
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-6">
                <button className="text-white/70 text-xs font-bold tracking-widest uppercase hover:text-white transition-colors">
                    Log In
                </button>
                <Button className="px-6 py-2 bg-[#54f4fc] hover:bg-[#54f4fc]/90 text-black font-bold text-xs tracking-widest uppercase rounded-full shadow-[0_0_15px_rgba(84,244,252,0.3)]">
                    Request Demo
                </Button>
            </div>
        </header>
    );
};
