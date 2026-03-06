export const FooterSection = (): JSX.Element => {
  return (
    <footer className="relative w-full py-16 px-8 border-t border-neutral-800 bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Security</h3>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <a href="#" className="hover:text-neutral-100 transition-colors">
                  Infrastructure Hardening
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-100 transition-colors">
                  Application Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-100 transition-colors">
                  Threat Detection
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Company</h3>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <a href="#" className="hover:text-neutral-100 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-100 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-100 transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Resources</h3>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <a href="#" className="hover:text-neutral-100 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-100 transition-colors">
                  Security Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-100 transition-colors">
                  Status
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Legal</h3>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <a href="#" className="hover:text-neutral-100 transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-100 transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-100 transition-colors">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8">
          <p className="text-sm text-neutral-500 text-center">
            © 2024 Security Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
