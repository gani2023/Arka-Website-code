import React, { useState, useEffect } from 'react';
import { SectionId } from '../types';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-coffee-900/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-white">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection(SectionId.HERO)}>
          <svg className="w-8 h-8 text-gold-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z" />
          </svg>
          <span className="font-serif text-xl md:text-2xl font-bold tracking-wider">ARKA ORIGINALS</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          <button onClick={() => scrollToSection(SectionId.TRUST)} className="hover:text-gold-500 transition-colors text-sm uppercase tracking-widest">Why Us</button>
          <button onClick={() => scrollToSection(SectionId.CATALOG)} className="hover:text-gold-500 transition-colors text-sm uppercase tracking-widest">Beans</button>
          <button onClick={() => scrollToSection(SectionId.CONSULTANT)} className="hover:text-gold-500 transition-colors text-sm uppercase tracking-widest">AI Consultant</button>
          <button 
            onClick={() => scrollToSection(SectionId.CONTACT)} 
            className="border border-gold-500 text-gold-500 px-6 py-2 rounded-sm hover:bg-gold-500 hover:text-white transition-all duration-300 uppercase text-xs font-bold tracking-widest"
          >
            Request Quote
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-coffee-800 absolute top-full left-0 right-0 border-t border-coffee-700">
          <div className="flex flex-col p-6 space-y-4 text-white">
            <button onClick={() => scrollToSection(SectionId.TRUST)} className="text-left py-2 hover:text-gold-500">Why Us</button>
            <button onClick={() => scrollToSection(SectionId.CATALOG)} className="text-left py-2 hover:text-gold-500">Beans</button>
            <button onClick={() => scrollToSection(SectionId.CONSULTANT)} className="text-left py-2 hover:text-gold-500">AI Consultant</button>
            <button onClick={() => scrollToSection(SectionId.CONTACT)} className="text-left py-2 text-gold-500 font-bold">Request Quote</button>
          </div>
        </div>
      )}
    </header>
  );
};