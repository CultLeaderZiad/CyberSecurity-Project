export const FooterSection = (): JSX.Element => {
    return (
        <footer className="relative w-full py-24 px-8 bg-black border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    <div className="space-y-8">
                        <div className="[font-family:'Archivo',Helvetica] font-bold text-[#54f4fc] text-2xl tracking-[0.05em] uppercase">
                            NordWacht
                        </div>
                        <p className="text-white/30 text-xs leading-loose font-medium max-w-xs uppercase tracking-widest">
                            Securing the infrastructure of high-growth companies with precision and systematic architectural hardening.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#54f4fc]">Protocols</h3>
                        <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-white/40">
                            <li><a href="#" className="hover:text-white transition-colors">Infra Hardening</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">App Security</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">API Defense</a></li>
                        </ul>
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#54f4fc]">Governance</h3>
                        <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-white/40">
                            <li><a href="#" className="hover:text-white transition-colors">ISO 27001</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">SOC 2 Alignment</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">NIST Mapping</a></li>
                        </ul>
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#54f4fc]">Channel</h3>
                        <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-white/40">
                            <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Security Status</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact Specs</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex gap-12">
                        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/20">© 2024 NordWacht Global</span>
                        <a href="#" className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/20 hover:text-white transition-colors">Legal Framework</a>
                        <a href="#" className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/20 hover:text-white transition-colors">Privacy Protocol</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-[#54f4fc] animate-pulse" />
                        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#54f4fc]">System Status: Nominal</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
