'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#features', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="#"
            className={`text-xl font-semibold tracking-tight transition-colors duration-300 ${
              isScrolled ? 'text-secondary-500' : 'text-white'
            }`}
          >
            Law Office Of Justice B Adjei
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-normal transition-colors duration-200 hover:text-primary-500 ${
                  isScrolled ? 'text-secondary-500' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-5 py-2.5 bg-accent-500 text-white text-sm font-medium rounded-md hover:bg-accent-600 transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now: +1 409-963-1955</span>
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-md transition-colors duration-200 ${
              isScrolled
                ? 'text-secondary-500 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 shadow-lg">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-sm font-normal text-secondary-500 hover:bg-gray-50 hover:text-primary-500 rounded-md transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center space-x-2 px-4 py-3 mt-2 bg-accent-500 text-white text-sm font-medium rounded-md hover:bg-accent-600 transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now: +1 409-963-1955</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}