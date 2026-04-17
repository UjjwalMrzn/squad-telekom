import { Mail, MapPin } from 'lucide-react';
import logoImage from '../../assets/squad-logo-new.png';

// Custom SVG for LinkedIn to completely bypass the lucide-react brand icon issue
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  // FIXED: Smart click handler to prevent hard reload and scroll smoothly if already on the homepage
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#020617] pt-20 pb-10 border-t border-slate-800 relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(59,186,177,0.05)_0%,transparent_70%)] pointer-events-none" />

      {/* LOCKED GRID: 1400px invisible master line */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* COLUMN 1: Brand & Bio */}
          <div className="lg:col-span-4 flex flex-col items-start">
            
            <a href="/" onClick={handleLogoClick} className="mb-6 block">
              <img 
                src={logoImage} 
                alt="Squad Telekom" 
                className="h-10 md:h-12 w-auto object-contain object-left hover:opacity-80 transition-opacity duration-300" 
              />
            </a>
            
            <p className="text-slate-400 text-sm leading-relaxed font-medium mb-8 max-w-sm">
              Empowering enterprises by providing comprehensive wholesale SMS and voice solutions, ensuring effective and streamlined communication.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="https://squadtelekom.com/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-brand-500 hover:text-white hover:border-brand-500 transition-all duration-300 shadow-sm hover:shadow-brand-500/20"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div className="lg:col-span-2 lg:ml-8">
            <h4 className="text-white font-bold tracking-wide mb-6 uppercase text-sm">Quick Links</h4>
            <ul className="flex flex-col gap-5">
              {['Home', 'About Us', 'Service', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-slate-400 font-medium transition-colors duration-300 hover:text-[#3bbab1]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Solutions */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold tracking-wide mb-6 uppercase text-sm">Solutions</h4>
            <ul className="flex flex-col gap-5">
              {[
                'Voice Services (NCLI, CLI, TDM)', 
                'Wholesale SMS & API Integration', 
                'Rates Management System', 
                'Ticketing System'
              ].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-slate-400 font-medium transition-colors duration-300 hover:text-[#3bbab1]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold tracking-wide mb-6 uppercase text-sm">Customer Support</h4>
            <ul className="flex flex-col gap-6">
              <li>
                <a href="mailto:info@squadtelekom.com" className="flex items-start gap-3 text-slate-400 hover:text-[#3bbab1] transition-colors duration-300 group">
                  <div className="w-8 h-8 rounded-full bg-slate-800/50 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500/20 group-hover:text-[#3bbab1] transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-medium mt-1">info@squadtelekom.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-slate-400">
                  <div className="w-8 h-8 rounded-full bg-slate-800/50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="font-medium mt-1 leading-relaxed">
                    Squad Telekom LLC<br />
                    Wilmington, Delaware
                  </span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-slate-800/80 flex justify-center md:justify-start items-center">
          <p className="text-slate-500 text-sm font-medium">
            Copyright © 2021-{currentYear} by Squad Telekom LLC. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};