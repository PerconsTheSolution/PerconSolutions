import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      onNavigate('home');
      // Small timeout to allow the home component to mount if we are on another page
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setIsMobileMenuOpen(false);
  };

  const handlePageChange = (pageId: string) => {
    onNavigate(pageId);
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const serviceLinks = [
    { name: 'Small Business & Enterprise', id: 'business' },
    { name: 'Residential', id: 'residential' },
    { name: 'IT Education', id: 'education' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-cyan-900/30 py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="cursor-pointer" 
            onClick={() => handlePageChange('home')}
          >
            <Logo className="h-12 w-auto" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            
            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button 
                className="flex items-center space-x-1 text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm font-medium uppercase tracking-wide py-2"
                onClick={() => handlePageChange('home')} // Or scroll to #services
              >
                <span>Services</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-0 w-64 pt-2 transition-all duration-200 transform origin-top-left ${
                  isServicesOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                }`}
              >
                <div className="bg-slate-900 border border-cyan-900/30 rounded-xl shadow-xl overflow-hidden backdrop-blur-xl">
                  {serviceLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => handlePageChange(link.id)}
                      className="block w-full text-left px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-cyan-900/20 transition-colors border-b border-slate-800 last:border-0"
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm font-medium uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
            
            <button className="px-5 py-2 rounded-full border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-300 text-sm font-semibold shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-300 hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-800 absolute w-full max-h-[80vh] overflow-y-auto">
          <div className="px-4 pt-2 pb-6 space-y-2">
            
            {/* Mobile Services Section */}
            <div className="py-2">
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-slate-300 hover:text-cyan-400"
              >
                <span>SERVICES</span>
                <ChevronDown size={16} className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="pl-6 mt-1 space-y-1 border-l-2 border-slate-800 ml-3">
                  {serviceLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => handlePageChange(link.id)}
                      className="block w-full text-left px-3 py-2 text-sm text-slate-400 hover:text-white rounded-md"
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <button className="w-full mt-4 px-5 py-3 rounded-lg bg-cyan-600 text-white font-semibold">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};