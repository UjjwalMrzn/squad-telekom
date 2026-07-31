import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import { Button } from '../ui/Button';
import { useTheme } from '../../context/ThemeContext';
import logo from '../../assets/squad-logo-new.png'; 

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

// --- DATA STRUCTURE FOR MEGA MENU ---
// const solutionsMenu = {
//   verticals: [
//     { name: 'Real Estate', path: '/solutions/real-estate' },
//     { name: 'Banking', path: '/solutions/banking' },
//     { name: 'E-Gaming', path: '/solutions/e-gaming' },
//     { name: 'FMCG', path: '#' },
//     { name: 'Logistics', path: '#' },
//     { name: 'E-Commerce', path: '#' },
  // ],
//   performance: [
//     { name: 'Affiliate Channels', path: '#' },
//   ],
//   ai: [
//     { name: 'AI Voice Calls', path: '#' },
//     { name: 'AI Chat Bots', path: '#' },
//     { name: 'AI Video Messaging', path: '#' },
//     { name: 'Conversational AI', path: '#' },
//   ]
// };

const portfolioMenu = {
  productsAndServices: [
    { name: 'A2P Messaging', path: '/portfolio/a2p-messaging' },
    { name: 'RCS Messaging', path: '/portfolio/rcs-messaging' },
    { name: 'WhatsApp Business Messaging', path: '/portfolio/whatsapp-business-messaging' },
    { name: 'Telegram Business Messaging', path: '/portfolio/telegram' },
  ],
  otherServices: [
    { name: 'E-SIM', path: '/portfolio/esim' },
    { name: 'Voice OTP', path: '/portfolio/voice-otp' },
    { name: 'Software', path: '/portfolio/software' },
  ]
};

// "Why Squad" now scrolls to the WhyChooseUs section on the homepage instead of routing to a page
const WHY_SQUAD_SECTION_ID = 'why-squad';

const navLinks = [
  { name: 'About Us', hasDropdown: false, path: '/about' },
  // { name: 'Solutions', hasDropdown: false },
  { name: 'Portfolio', hasDropdown: true, menuData: portfolioMenu },
  { name: 'Why Squad', hasDropdown: false, path: '/' },
  // { name: 'Careers', hasDropdown: false, path: '#' },
  { name: 'Our Presence', hasDropdown: false, path: '/our-presence' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Destructure from ThemeContext
  const { isDark, toggleTheme } = useTheme();

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

  // Scrolls to the WhyChooseUs section; navigates home first if we're on another page
  const handleWhySquadClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);

    if (location.pathname === '/') {
      document.getElementById(WHY_SQUAD_SECTION_ID)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: WHY_SQUAD_SECTION_ID } });
    }
  };

  const toggleMobileExpand = (name: string) => {
    setMobileExpanded(mobileExpanded === name ? null : name);
  };

  // Helper to ensure button clicks don't bubble up and cause unintended menu behaviors
  const handleThemeToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleTheme();
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onMouseLeave={() => setActiveDropdown(null)}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled || activeDropdown
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl' 
          : 'bg-transparent'
      } ${
        scrolled && !activeDropdown 
          ? 'shadow-sm border-b border-slate-200 dark:border-slate-800' 
          : 'border-b border-transparent'
      }`}
    >
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
                      ? 'text-brand-600 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm' 
                      : 'text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 border-transparent'
                  }`}
                >
                  {link.hasDropdown ? (
                    <span>{link.name}</span>
                  ) : (
                    <Link
                      to={link.path || '#'}
                      onClick={link.name === 'Why Squad' ? handleWhySquadClick : undefined}
                    >
                      {link.name}
                    </Link>
                  )}

                  {link.hasDropdown && (
                    <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${activeDropdown === link.name ? '-rotate-180' : ''}`} />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* DESKTOP CTA */}
          <div className="hidden md:flex items-center space-x-3">
            
            {/* LINKEDIN BUTTON - Desktop */}
            <a
              href="https://www.linkedin.com/company/squadtelekomllc/"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Squad Telekom LinkedIn"
              className="relative w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:border-brand-300 dark:hover:border-brand-600 hover:bg-brand-50 dark:hover:bg-slate-800 transition-all duration-300 cursor-pointer"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>

            {/* THEME TOGGLE BUTTON - Desktop */}
            <button
              onClick={handleThemeToggle}
              type="button" // Force button type to prevent default form submissions if any exist nearby
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="relative w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:border-brand-300 dark:hover:border-brand-600 hover:bg-brand-50 dark:hover:bg-slate-800 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                  <motion.div 
                    key="sun" 
                    initial={{ y: 20, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }} 
                    exit={{ y: -20, opacity: 0 }} 
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Sun className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div 
                    key="moon" 
                    initial={{ y: 20, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }} 
                    exit={{ y: -20, opacity: 0 }} 
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Moon className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <Link to="/contact">
              <Button variant="primary" size="sm" className="shadow-md hover:shadow-lg transition-shadow ml-1">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* MOBILE MENU BUTTON & THEME TOGGLE */}
          <div className="md:hidden flex items-center gap-2.5">
            
            {/* LINKEDIN BUTTON - Mobile */}
            <a
              href="https://www.linkedin.com/company/squadtelekomllc/"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Squad Telekom LinkedIn"
              className="relative w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-50 dark:hover:bg-slate-800 transition-all duration-300 cursor-pointer"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>

            {/* THEME TOGGLE BUTTON - Mobile */}
            <button
              onClick={handleThemeToggle}
              type="button"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="relative w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-50 dark:hover:bg-slate-800 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                  <motion.div 
                    key="sun-mobile" 
                    initial={{ y: 20, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }} 
                    exit={{ y: -20, opacity: 0 }} 
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Sun className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div 
                    key="moon-mobile" 
                    initial={{ y: 20, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }} 
                    exit={{ y: -20, opacity: 0 }} 
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Moon className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen); }}
              className="text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 focus:outline-none p-2 transition-colors rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
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

      {/* --- DESKTOP MEGA MENU DROPDOWN: SOLUTIONS --- */}
      {/* <AnimatePresence>
        {activeDropdown === 'Solutions' && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setActiveDropdown('Solutions')}
            className="absolute left-0 right-0 top-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden z-10"
          >
            <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-12 py-12">
              <div className="grid grid-cols-3 gap-12 lg:gap-24"> */}
                
                {/* Column 1: Verticals */}
                {/* <div>
                  <h4 className="text-slate-900 dark:text-white font-extrabold mb-6 text-[15px] tracking-tight">Verticals</h4>
                  <ul className="space-y-4">
                    {solutionsMenu.verticals.map((item, idx) => (
                      <li key={idx}>
                        <Link to={item.path} className="text-slate-500 dark:text-slate-400 hover:text-brand-500 dark:hover:text-brand-400 font-medium text-sm transition-colors duration-200 block w-fit">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div> */}

                {/* Column 2: Performance Marketing */}
                {/* <div>
                  <h4 className="text-slate-900 dark:text-white font-extrabold mb-6 text-[15px] tracking-tight">Performance Marketing</h4>
                  <ul className="space-y-4">
                    {solutionsMenu.performance.map((item, idx) => (
                      <li key={idx}>
                        <Link to={item.path} className="text-slate-500 dark:text-slate-400 hover:text-brand-500 dark:hover:text-brand-400 font-medium text-sm transition-colors duration-200 block w-fit">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div> */}

                {/* Column 3: AI Driven Solutions */}
                {/* <div>
                  <h4 className="text-slate-900 dark:text-white font-extrabold mb-6 text-[15px] tracking-tight">AI Driven Solutions</h4>
                  <ul className="space-y-4">
                    {solutionsMenu.ai.map((item, idx) => (
                      <li key={idx}>
                        <Link to={item.path} className="text-slate-500 dark:text-slate-400 hover:text-brand-500 dark:hover:text-brand-400 font-medium text-sm transition-colors duration-200 block w-fit">
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
      </AnimatePresence> */}

      {/* --- DESKTOP MEGA MENU DROPDOWN: PORTFOLIO --- */}
      <AnimatePresence>
        {activeDropdown === 'Portfolio' && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setActiveDropdown('Portfolio')}
            className="absolute left-0 right-0 top-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden z-10"
          >
            <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-12 py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
                
                {/* Column 1: Products and Services */}
                <div>
                  <h4 className="text-slate-900 dark:text-white font-extrabold mb-6 text-[15px] tracking-tight">Products and Services</h4>
                  <ul className="space-y-4">
                    {portfolioMenu.productsAndServices.map((item, idx) => (
                      <li key={idx}>
                        <Link 
                          to={item.path} 
                          className="text-slate-500 dark:text-slate-400 hover:text-brand-500 dark:hover:text-brand-400 font-medium text-sm transition-colors duration-200 block w-fit"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2: Other Services */}
                <div>
                  <h4 className="text-slate-900 dark:text-white font-extrabold mb-6 text-[15px] tracking-tight">Other Services</h4>
                  <ul className="space-y-4">
                    {portfolioMenu.otherServices.map((item, idx) => (
                      <li key={idx}>
                        <Link 
                          to={item.path} 
                          className="text-slate-500 dark:text-slate-400 hover:text-brand-500 dark:hover:text-brand-400 font-medium text-sm transition-colors duration-200 block w-fit"
                        >
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
            className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-100 dark:border-slate-800 shadow-2xl overflow-hidden absolute w-full top-20 z-50"
          >
            <div className="px-4 py-4 space-y-1 max-w-[1700px] mx-auto pb-6">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <motion.div 
                    variants={mobileItemVariants}
                    onClick={() => link.hasDropdown ? toggleMobileExpand(link.name) : undefined}
                    className="flex items-center justify-between px-3 py-3 text-base font-bold text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-50 dark:hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
                  >
                    {link.hasDropdown ? (
                      <span>{link.name}</span>
                    ) : (
                      <Link
                        to={link.path || '#'}
                        className="w-full"
                        onClick={link.name === 'Why Squad' ? handleWhySquadClick : () => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                    {link.hasDropdown && (
                      <ChevronDown className={`w-5 h-5 opacity-50 transition-transform duration-300 ${mobileExpanded === link.name ? '-rotate-180 text-brand-600' : ''}`} />
                    )}
                  </motion.div>
                  
                  {/* Mobile Submenu for Solutions */}
                  {/* <AnimatePresence>
                    {link.hasDropdown && mobileExpanded === link.name && link.name === 'Solutions' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-slate-50/50 dark:bg-slate-800/50 rounded-xl mt-1 mx-2"
                      >
                        <div className="p-4 space-y-4">
                          <div>
                            <h5 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">Verticals</h5>
                            <ul className="space-y-2">
                              {solutionsMenu.verticals.map((item, idx) => (
                                <li key={idx}>
                                  <Link to={item.path} onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 block py-1">{item.name}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">Performance Marketing</h5>
                            <ul className="space-y-2">
                              {solutionsMenu.performance.map((item, idx) => (
                                <li key={idx}>
                                  <Link to={item.path} onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 block py-1">{item.name}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">AI Solutions</h5>
                            <ul className="space-y-2">
                              {solutionsMenu.ai.map((item, idx) => (
                                <li key={idx}>
                                  <Link to={item.path} onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 block py-1">{item.name}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence> */}

                  {/* Mobile Submenu for Portfolio */}
                  <AnimatePresence>
                    {link.hasDropdown && mobileExpanded === link.name && link.name === 'Portfolio' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-slate-50/50 dark:bg-slate-800/50 rounded-xl mt-1 mx-2"
                      >
                        <div className="p-4 space-y-6">
                          <div>
                            <h5 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">Products and Services</h5>
                            <ul className="space-y-2">
                              {portfolioMenu.productsAndServices.map((item, idx) => (
                                <li key={idx}>
                                  <Link 
                                    to={item.path} 
                                    onClick={() => setIsOpen(false)} 
                                    className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 block py-1"
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h5 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">Other Services</h5>
                            <ul className="space-y-2">
                              {portfolioMenu.otherServices.map((item, idx) => (
                                <li key={idx}>
                                  <Link 
                                    to={item.path} 
                                    onClick={() => setIsOpen(false)} 
                                    className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 block py-1"
                                  >
                                    {item.name}
                                  </Link>
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