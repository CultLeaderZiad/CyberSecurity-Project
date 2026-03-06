export const FooterSection = (): JSX.Element => {
    return (
        <footer className="relative w-full py-16 px-8 border-t border-neutral-800 bg-black">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg text-[#54f4fc]">Security</h3>
                        <ul className="space-y-2 text-sm text-neutral-400">
                            <li>
                                <a href="#" className="hover:text-[#54f4fc] transition-colors">
                                    Infrastructure Hardening
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#54f4fc] transition-colors">
                                    Application Security
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#54f4fc] transition-colors">
                                    Threat Detection
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg text-[#54f4fc]">Company</h3>
                        <ul className="space-y-2 text-sm text-neutral-400">
                            <li>
                                <a href="#" className="hover:text-[#54f4fc] transition-colors">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#54f4fc] transition-colors">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#54f4fc] transition-colors">
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg text-[#54f4fc]">Resources</h3>
                        <ul className="space-y-2 text-sm text-neutral-400">
                            <li>
                                <a href="#" className="hover:text-[#54f4fc] transition-colors">
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#54f4fc] transition-colors">
                                    Security Guidelines
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#54f4fc] transition-colors">
                                    Status
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg text-[#54f4fc]">Legal</h3>
                        <ul className="space-y-2 text-sm text-neutral-400">
                            <li>
                                <a href="#" className="hover:text-[#54f4fc] transition-colors">
                                    Privacy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#54f4fc] transition-colors">
                                    Terms
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#54f4fc] transition-colors">
                                    Security
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="[font-family:'Archivo',Helvetica] font-semibold text-[#54f4fc] text-2xl tracking-[0]">
                        NordWacht
                    </div>
                    <p className="text-sm text-neutral-500 text-center">
                        © 2024 NordWacht. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
