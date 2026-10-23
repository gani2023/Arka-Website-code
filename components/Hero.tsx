import React from 'react';
import { motion, useScroll, useTransform, Transition } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Smooth easing for premium feel
  const transition: Transition = { duration: 1.4, ease: [0.22, 1, 0.36, 1] };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-coffee-50 flex items-center justify-center">
      {/* Background Image - Realistic Burlap & Beans */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <img 
          src="https://i.postimg.cc/DzSXGtR1/pexels-juanpphotoandvideo-894695.jpg" 
          alt="Premium Roasted Coffee Beans on Burlap" 
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-coffee-900/80 via-coffee-900/60 to-coffee-900/90 z-10" />
      </motion.div>

      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="relative"
        >
          {/* Decorative Line */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 80 }}
            transition={{ delay: 0.2, duration: 1.5, ease: "easeInOut" }}
            className="w-[1px] bg-gold-500 mx-auto mb-10 opacity-70"
          />

          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.4em" }}
            transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
            className="block text-coffee-400 text-xs md:text-sm font-bold font-sans uppercase mb-6 drop-shadow-lg"
          >
            Grown in Sun to Thrive in its Heat
          </motion.span>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-10 font-medium tracking-tight drop-shadow-2xl">
            Precision Roasting <br />
            <span className="italic text-coffee-400">for Commercial Scale.</span>
          </h1>
          
          <p className="font-sans text-coffee-100 text-lg md:text-xl max-w-2xl mx-auto mb-16 font-light leading-relaxed opacity-90">
            Sourcing high-density Arabica and Robusta lots.
            <strong className="block text-white mt-2 font-medium">Delivering consistent extraction yields for HoReCa partners.</strong>
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, ...transition }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link 
              to="/contact" 
              className="bg-coffee-600 text-white px-10 py-4 text-sm font-bold tracking-[0.2em] uppercase hover:bg-coffee-700 transition-all duration-500 shadow-card hover:shadow-float transform hover:-translate-y-1 rounded-sm border border-coffee-600"
            >
              Request Cupping Session
            </Link>
            <Link 
              to="/collection" 
              className="px-10 py-4 text-white border border-white/30 text-sm font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-coffee-900 transition-all duration-500 rounded-sm backdrop-blur-sm"
            >
              View Grading Sheets
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <ArrowDown size={32} strokeWidth={1} />
      </motion.div>
    </section>
  );
};