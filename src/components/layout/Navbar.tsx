import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Solutions', hasDropdown: true },
    { name: 'Portfolio', hasDropdown: true },
    { name: 'Why Squad', hasDropdown: true },
    { name: 'Careers', hasDropdown: false },
    { name: 'Resources', hasDropdown: true },
  ];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            {/* You can replace this div with your actual SVG logo later */}
            <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">Squad</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group cursor-pointer flex items-center text-slate-600 hover:text-slate-900 font-medium text-sm transition-colors">
                {link.name}
                {link.hasDropdown && <ChevronDown className="ml-1 w-4 h-4 text-slate-400 group-hover:text-slate-600" />}
              </div>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">Log in</Button>
            <Button variant="primary" size="sm">Contact Us</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full left-0 shadow-soft">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <div key={link.name} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-brand-500 hover:bg-slate-50 rounded-md">
                {link.name}
              </div>
            ))}
            <div className="pt-4 flex flex-col gap-3 px-3">
              <Button variant="outline" className="w-full justify-center">Log in</Button>
              <Button variant="primary" className="w-full justify-center">Contact Us</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};