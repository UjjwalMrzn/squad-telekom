import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';
import logo from '../../assets/squad-logo-new.png'; 

// --- DATA STRUCTURE FOR MEGA MENU ---
const solutionsMenu = {
  verticals: [
    { name: 'Real Estate', path: '/solutions/real-estate' },
    { name: 'Banking', path: '/solutions/banking' },
    { name: 'E-Gaming', path: '#' },
    { name: 'FMCG', path: '#' },
    { name: 'Logistics', path: '#' },
    { name: 'E-Commerce', path: '#' },
  ],
  performance: [
    { name: 'Affiliate Channels', path: '#' },
  ],
  ai: [
    { name: 'AI Voice Calls', path: '#' },
    { name: 'AI Chat Bots', path: '#' },
    { name: 'AI Video Messaging', path: '#' },
    { name: 'Conversational AI', path: '#' },
  ]
};

// FIXED: Added About Us to root links
const navLinks = [
  { name: 'About Us', hasDropdown: false, path: '/about' },
  { name: 'Solutions', hasDropdown: true, menuData: solutionsMenu },
  { name: 'Portfolio', hasDropdown: true },
  { name: 'Why Squad', hasDropdown: true },
  { name: 'Careers', hasDropdown: false, path: '#' },
  { name: 'Resources', hasDropdown: true },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();

  // Handle scroll blur effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus automatically on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const mobileMenuVariants: Variants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] as const, staggerChildren: 0.1 }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  const mobileItemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleMobileExpand = (name: string) => {
    setMobileExpanded(mobileExpanded === name ? null : name);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onMouseLeave={() => setActiveDropdown(null)}
      // DYNAMIC NAVBAR CLASSES: Merges seamlessly when dropdown is open
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled || activeDropdown
          ? 'bg-white/95 backdrop-blur-xl' 
          : 'bg-transparent'
      } ${
        scrolled && !activeDropdown 
          ? 'shadow-sm border-b border-slate-200' 
          : 'border-b border-transparent'
      }`}
    >
      {/* 1400px Master Grid Container */}
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-12 relative z-20">
        <div className="flex justify-between items-center h-20">
          
          {/* LOGO */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <Link to="/" onClick={handleLogoClick}>
              <img 
                src={logo} 
                alt="Squad Telekom" 
                className="h-8 md:h-10 w-auto object-contain hover:opacity-80 transition-opacity duration-300" 
              />
            </Link>
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 h-full">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative group h-full flex items-center cursor-pointer"
                onMouseEnter={() => setActiveDropdown(link.name)}
              >
                <div 
                  className={`flex items-center font-semibold text-[13px] lg:text-sm transition-all duration-300 py-2 px-4 rounded-full border ${
                    activeDropdown === link.name 
                      ? 'text-brand-600 border-slate-200 bg-white shadow-sm' 
                      : 'text-slate-600 hover:text-brand-600 border-transparent'
                  }`}
                >
                  {/* FIXED: Applied routing to non-dropdown items */}
                  {link.hasDropdown ? (
                    <span>{link.name}</span>
                  ) : (
                    <Link to={link.path || '#'}>{link.name}</Link>
                  )}

                  {link.hasDropdown && (
                    <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${activeDropdown === link.name ? '-rotate-180' : ''}`} />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* DESKTOP CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {/* FIXED: Wrapped Button in Link */}
            <Link to="/contact">
              <Button variant="primary" size="sm" className="shadow-md hover:shadow-lg transition-shadow">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-brand-600 focus:outline-none p-2 transition-colors rounded-lg hover:bg-slate-50"
              aria-label="Toggle Menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* --- DESKTOP MEGA MENU DROPDOWN --- */}
      <AnimatePresence>
        {activeDropdown === 'Solutions' && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setActiveDropdown('Solutions')}
            className="absolute left-0 right-0 top-full bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden z-10"
          >
            <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-12 py-12">
              <div className="grid grid-cols-3 gap-12 lg:gap-24">
                
                {/* Column 1: Verticals */}
                <div>
                  <h4 className="text-slate-900 font-extrabold mb-6 text-[15px] tracking-tight">Verticals</h4>
                  <ul className="space-y-4">
                    {solutionsMenu.verticals.map((item, idx) => (
                      <li key={idx}>
                        <Link to={item.path} className="text-slate-500 hover:text-brand-500 font-medium text-sm transition-colors duration-200 block w-fit">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2: Performance Marketing */}
                <div>
                  <h4 className="text-slate-900 font-extrabold mb-6 text-[15px] tracking-tight">Performance Marketing</h4>
                  <ul className="space-y-4">
                    {solutionsMenu.performance.map((item, idx) => (
                      <li key={idx}>
                        <Link to={item.path} className="text-slate-500 hover:text-brand-500 font-medium text-sm transition-colors duration-200 block w-fit">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 3: AI Driven Solutions */}
                <div>
                  <h4 className="text-slate-900 font-extrabold mb-6 text-[15px] tracking-tight">AI Driven Solutions</h4>
                  <ul className="space-y-4">
                    {solutionsMenu.ai.map((item, idx) => (
                      <li key={idx}>
                        <Link to={item.path} className="text-slate-500 hover:text-brand-500 font-medium text-sm transition-colors duration-200 block w-fit">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 shadow-2xl overflow-hidden absolute w-full top-20 z-50"
          >
            <div className="px-4 py-4 space-y-1 max-w-[1700px] mx-auto pb-6">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <motion.div 
                    variants={mobileItemVariants}
                    onClick={() => link.hasDropdown ? toggleMobileExpand(link.name) : undefined}
                    className="flex items-center justify-between px-3 py-3 text-base font-bold text-slate-700 hover:text-brand-600 hover:bg-brand-50 rounded-xl transition-colors cursor-pointer"
                  >
                    {/* FIXED: Applied routing to non-dropdown items */}
                    {link.hasDropdown ? (
                      <span>{link.name}</span>
                    ) : (
                      <Link to={link.path || '#'} className="w-full" onClick={() => setIsOpen(false)}>{link.name}</Link>
                    )}
                    {link.hasDropdown && (
                      <ChevronDown className={`w-5 h-5 opacity-50 transition-transform duration-300 ${mobileExpanded === link.name ? '-rotate-180 text-brand-600' : ''}`} />
                    )}
                  </motion.div>
                  
                  {/* Mobile Submenu for Solutions */}
                  <AnimatePresence>
                    {link.hasDropdown && mobileExpanded === link.name && link.name === 'Solutions' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-slate-50/50 rounded-xl mt-1 mx-2"
                      >
                        <div className="p-4 space-y-4">
                          <div>
                            <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Verticals</h5>
                            <ul className="space-y-2">
                              {solutionsMenu.verticals.map((item, idx) => (
                                <li key={idx}>
                                  <Link to={item.path} onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-600 hover:text-brand-600 block py-1">{item.name}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Performance Marketing</h5>
                            <ul className="space-y-2">
                              {solutionsMenu.performance.map((item, idx) => (
                                <li key={idx}>
                                  <Link to={item.path} onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-600 hover:text-brand-600 block py-1">{item.name}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">AI Solutions</h5>
                            <ul className="space-y-2">
                              {solutionsMenu.ai.map((item, idx) => (
                                <li key={idx}>
                                  <Link to={item.path} onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-600 hover:text-brand-600 block py-1">{item.name}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <motion.div variants={mobileItemVariants} className="pt-4 px-3">
                {/* FIXED: Wrapped Button in Link and added onClick to close menu */}
                <Link to="/contact" onClick={() => setIsOpen(false)} className="w-full block">
                  <Button variant="primary" className="w-full justify-center py-4 text-lg shadow-md">
                    Contact Us
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};