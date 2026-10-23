import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  const [showAdminLink, setShowAdminLink] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  // Reset click count if inactive for 2 seconds
  useEffect(() => {
    if (clickCount === 0) return;
    const timer = setTimeout(() => setClickCount(0), 2000);
    return () => clearTimeout(timer);
  }, [clickCount]);

  // Easter egg trigger: Click the Brand Name 3 times to reveal admin link
  const handleSecretClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setClickCount(prev => {
      const newCount = prev + 1;
      if (newCount === 3) {
        setShowAdminLink(true);
        return 0;
      }
      return newCount;
    });
  };

  return (
    <footer className="bg-coffee-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div 
              className="flex items-center mb-6 cursor-pointer select-none group"
              onClick={handleSecretClick}
              title="Admin Access"
            >
              <img 
                src="https://i.postimg.cc/N079dK0M/Brown-and-Cream-Typographic-Coffee-Shop-Logo.png" 
                alt="Arka Originals Logo" 
                className="w-8 h-8 object-contain mr-3 opacity-80 group-hover:opacity-100 transition-opacity"
                referrerPolicy="no-referrer"
              />
              <span className="font-serif text-2xl font-bold tracking-wider text-white">
                ARKA <span className="text-coffee-400 italic group-hover:text-white transition-colors">ORIGINALS</span>
              </span>
            </div>

            {showAdminLink && (
               <Link 
                 to="/admin" 
                 onClick={() => setShowAdminLink(false)}
                 className="inline-flex items-center gap-2 bg-coffee-800 text-coffee-200 px-3 py-1 rounded-sm border border-coffee-700 hover:bg-white hover:text-coffee-900 transition-colors animate-in fade-in duration-300 mb-6"
               >
                 <Lock size={10} />
                 <span className="font-bold uppercase tracking-widest text-[10px]">Admin Portal</span>
               </Link>
             )}

            <p className="text-coffee-300 text-sm leading-relaxed mb-6 font-light">
              Freshly roasted specialty coffee, thoughtfully profiled for clarity, balance, and true expression of origin.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-coffee-500 mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-coffee-200 font-medium tracking-wide">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/legacy" className="hover:text-white transition-colors">Legacy</Link></li>
              <li><Link to="/collection" className="hover:text-white transition-colors">Collection</Link></li>
              <li><Link to="/samples" className="hover:text-white transition-colors">Samples</Link></li>
              <li><Link to="/consultant" className="hover:text-white transition-colors">AI Consultant</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Partner</Link></li>
            </ul>
          </div>

          {/* Contact Info - Optimized for Local SEO */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-coffee-500 mb-6">Hubs & Locations</h4>
            <ul className="space-y-4 text-sm text-coffee-200 font-medium tracking-wide">
              <li>
                <span className="block text-[10px] text-coffee-500 uppercase tracking-wider mb-1">Estate & Processing</span>
                Chikamagalur, Karnataka
              </li>
              <li itemScope itemType="https://schema.org/PostalAddress">
                <span className="block text-[10px] text-coffee-500 uppercase tracking-wider mb-1">Roasting Unit</span>
                <span itemProp="streetAddress">Chikamagalur</span>, <span itemProp="addressRegion">Karnataka</span>
              </li>

              <li className="pt-2 text-white font-bold font-serif text-lg">
                <a href="tel:+919368488134">+91 9368488134</a>
              </li>
              <li>partner@arkaoriginals.com</li>
            </ul>
          </div>

           {/* Newsletter */}
           <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-coffee-500 mb-6">Updates</h4>
            <p className="text-coffee-300 text-xs mb-4 font-light">Get weekly updates on harvest and pricing.</p>
            <div className="flex">
              <input type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 text-white text-sm px-4 py-3 w-full focus:outline-none focus:border-coffee-500 transition-colors rounded-l-sm" />
              <button className="bg-coffee-600 px-4 text-white hover:bg-white hover:text-coffee-900 transition-colors rounded-r-sm">
                &rarr;
              </button>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-coffee-400 font-light">
          <div className="flex items-center gap-4">
             <p className="select-none">
               &copy; {new Date().getFullYear()} Arka Originals Coffee Roasters.
             </p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0 items-center">
            <a href="https://www.instagram.com/arkaoriginals/" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-white transition-colors">Instagram</a>
            <span className="cursor-pointer hover:text-white transition-colors">Privacy</span>
            <span className="cursor-pointer hover:text-white transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};