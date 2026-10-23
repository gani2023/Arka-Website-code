import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// Coffee Bean Logo
const Logo = ({ effectiveScrolled }: { effectiveScrolled: boolean }) => (
  <img 
    src="https://i.postimg.cc/N079dK0M/Brown-and-Cream-Typographic-Coffee-Shop-Logo.png" 
    alt="Arka Originals Logo" 
    className={`w-10 h-10 object-contain mr-3 transition-opacity duration-300 ${effectiveScrolled ? 'opacity-100' : 'opacity-90'}`}
    referrerPolicy="no-referrer"
  />
);

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // On the Home page ('/'), we rely on scroll to toggle style.
  // On other pages (white backgrounds), we always use the "scrolled" (dark text) style.
  const isHome = location.pathname === '/';
  const effectiveScrolled = !isHome || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${effectiveScrolled ? 'bg-coffee-50/95 backdrop-blur-lg shadow-soft py-4' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo & Brand */}
        <Link to="/" className="flex items-center group">
          <Logo effectiveScrolled={effectiveScrolled} />
          <div className="flex flex-col">
            <span className={`font-serif text-2xl font-bold tracking-tight transition-colors duration-300 ${effectiveScrolled ? 'text-coffee-900' : 'text-white'}`}>
              ARKA <span className={`font-light italic transition-colors duration-300 ${effectiveScrolled ? 'text-coffee-600' : 'text-coffee-300'}`}>ORIGINALS</span>
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          <Link to="/" className={`text-xs uppercase font-bold tracking-[0.2em] transition-colors relative group ${effectiveScrolled ? 'text-coffee-600 hover:text-coffee-900' : 'text-white/80 hover:text-white'}`}>
            Home
            <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${effectiveScrolled ? 'bg-coffee-400' : 'bg-white'}`}></span>
          </Link>
          <Link to="/legacy" className={`text-xs uppercase font-bold tracking-[0.2em] transition-colors relative group ${effectiveScrolled ? 'text-coffee-600 hover:text-coffee-900' : 'text-white/80 hover:text-white'}`}>
            Legacy
            <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${effectiveScrolled ? 'bg-coffee-400' : 'bg-white'}`}></span>
          </Link>
          <Link to="/collection" className={`text-xs uppercase font-bold tracking-[0.2em] transition-colors relative group ${effectiveScrolled ? 'text-coffee-600 hover:text-coffee-900' : 'text-white/80 hover:text-white'}`}>
            Collection
            <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${effectiveScrolled ? 'bg-coffee-400' : 'bg-white'}`}></span>
          </Link>
          <Link to="/samples" className={`text-xs uppercase font-bold tracking-[0.2em] transition-colors relative group ${effectiveScrolled ? 'text-coffee-600 hover:text-coffee-900' : 'text-white/80 hover:text-white'}`}>
            Samples
            <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${effectiveScrolled ? 'bg-coffee-400' : 'bg-white'}`}></span>
          </Link>
          <Link to="/consultant" className={`text-xs uppercase font-bold tracking-[0.2em] transition-colors relative group ${effectiveScrolled ? 'text-coffee-600 hover:text-coffee-900' : 'text-white/80 hover:text-white'}`}>
             AI Consultant
             <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${effectiveScrolled ? 'bg-coffee-400' : 'bg-white'}`}></span>
          </Link>
          <Link to="/contact" className={`px-8 py-3 text-xs uppercase font-bold tracking-[0.2em] transition-all duration-300 rounded-sm border ${
            effectiveScrolled 
              ? 'bg-coffee-800 text-coffee-50 border-coffee-800 hover:bg-transparent hover:text-coffee-900' 
              : 'bg-white/10 text-white border-white/30 hover:bg-white hover:text-coffee-900 backdrop-blur-sm'
          }`}>
            Partner With Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden transition-colors duration-300 ${effectiveScrolled ? 'text-coffee-900' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-coffee-50 border-b border-coffee-200 p-8 flex flex-col gap-6 items-center shadow-card animate-in slide-in-from-top-5 duration-300">
          <Link onClick={() => setIsMobileMenuOpen(false)} to="/" className="text-sm uppercase font-bold tracking-widest text-coffee-800">Home</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} to="/legacy" className="text-sm uppercase font-bold tracking-widest text-coffee-800">Legacy</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} to="/collection" className="text-sm uppercase font-bold tracking-widest text-coffee-800">Collection</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} to="/samples" className="text-sm uppercase font-bold tracking-widest text-coffee-800">Samples</Link>
           <Link onClick={() => setIsMobileMenuOpen(false)} to="/consultant" className="text-sm uppercase font-bold tracking-widest text-coffee-800">AI Consultant</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} to="/contact" className="text-coffee-600 text-sm uppercase font-bold tracking-widest">Contact</Link>
        </div>
      )}
    </nav>
  );
};