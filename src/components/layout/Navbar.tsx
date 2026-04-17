import { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';
import logo from '../../assets/squad-logo-new.png'; 

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll effect to navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', hasDropdown: true },
    { name: 'Portfolio', hasDropdown: true },
    { name: 'Why Squad', hasDropdown: true },
    { name: 'Careers', hasDropdown: false },
    { name: 'Resources', hasDropdown: true },
  ];

  // Premium staggered animation variants for Mobile Menu
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
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-sm border-b border-slate-200' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          
          {/* LOGO */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <a href="/" onClick={handleLogoClick}>
              <img 
                src={logo} 
                alt="Squad Telekom" 
                className="h-8 md:h-10 w-auto object-contain hover:opacity-80 transition-opacity duration-300" 
              />
            </a>
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.div 
                whileHover="hover"
                key={link.name} 
                className="relative group cursor-pointer flex items-center text-slate-600 font-medium text-sm transition-colors py-2"
              >
                <span className="group-hover:text-brand-600 transition-colors duration-300 z-10">
                  {link.name}
                </span>
                
                {link.hasDropdown && (
                  <ChevronDown className="ml-1 w-4 h-4 text-slate-400 group-hover:text-brand-600 group-hover:-rotate-180 transition-transform duration-300 z-10" />
                )}
              </motion.div>
            ))}
          </div>

          {/* DESKTOP CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="primary" size="sm" className="shadow-md hover:shadow-lg transition-shadow">
              Contact Us
            </Button>
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

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 shadow-2xl overflow-hidden absolute w-full"
          >
            <div className="px-4 py-4 space-y-1 max-w-[1400px] mx-auto pb-6">
              {navLinks.map((link) => (
                <motion.div 
                  variants={mobileItemVariants}
                  key={link.name} 
                  className="flex items-center justify-between px-3 py-3 text-base font-bold text-slate-700 hover:text-brand-600 hover:bg-brand-50 rounded-xl transition-colors cursor-pointer"
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="w-5 h-5 opacity-50" />}
                </motion.div>
              ))}
              <motion.div variants={mobileItemVariants} className="pt-4 px-3">
                <Button variant="primary" className="w-full justify-center py-4 text-lg shadow-md">
                  Contact Us
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};