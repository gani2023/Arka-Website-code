import React from 'react';
import { MapPin, Users, UtensilsCrossed, Settings } from 'lucide-react';
import { motion, Transition } from 'framer-motion';

export const CustomSolutions: React.FC = () => {
  // Premium smooth easing
  const smoothTransition: Transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

  return (
    <section className="py-32 bg-white relative overflow-hidden border-t border-coffee-100">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={smoothTransition}
            className="lg:w-1/3 flex flex-col justify-center"
          >
            <span className="text-coffee-500 font-sans text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Toll Roasting</span>
            <h2 className="font-serif text-5xl md:text-6xl text-coffee-900 mb-8 leading-[1.1] font-medium">
              We don't guess. <br />
              We <span className="text-coffee-600 italic">Profile.</span>
            </h2>
            <p className="text-coffee-600 text-lg mb-8 leading-relaxed font-light">
              Agtron color matching and TDS (Total Dissolved Solids) optimization. We engineer blends that hold up to milk and sugar in diverse markets.
            </p>
            <div>
              <a href="#contact" className="bg-coffee-50 hover:bg-coffee-900 hover:text-white text-coffee-900 px-8 py-4 font-bold uppercase tracking-[0.2em] text-xs transition-all duration-300 inline-flex items-center gap-4 border border-coffee-200 hover:border-coffee-900 rounded-sm">
                Start Formulation <span className="text-xl">→</span>
              </a>
            </div>
          </motion.div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <MapPin size={24} />,
                title: "Regional Palates",
                sub: "Coastal vs. North",
                desc: "Adjusting chicory percentages and roast development time to match local water hardness and preferences."
              },
              {
                icon: <Users size={24} />,
                title: "Private Label",
                sub: "Your Brand, Our Facility",
                desc: "Full white-labeling services with custom packaging foil options for retail chains."
              },
              {
                icon: <UtensilsCrossed size={24} />,
                title: "Extraction Yield",
                sub: "High Efficiency",
                desc: "Formulations designed for commercial brewers to maximize cup count per kg without sacrificing body."
              }
            ].map((card, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: idx * 0.15, ...smoothTransition }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px -5px rgba(62, 41, 33, 0.08)' }}
                className="bg-coffee-50 p-10 border border-coffee-100 hover:border-coffee-300 transition-all duration-300 group shadow-sm rounded-sm"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-8 text-coffee-500 group-hover:text-coffee-900 group-hover:bg-coffee-200 transition-colors duration-300 shadow-sm">
                  {card.icon}
                </div>
                <h4 className="font-serif text-2xl text-coffee-900 mb-4 font-bold">{card.title}</h4>
                <p className="text-coffee-700 text-sm leading-relaxed font-light">
                  <strong className="text-coffee-900 block mb-2 uppercase tracking-wide text-[10px] opacity-60 font-bold">{card.sub}</strong> 
                  {card.desc}
                </p>
              </motion.div>
            ))}

             <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.4, ...smoothTransition }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="bg-coffee-800 p-10 border border-coffee-800 flex flex-col justify-center items-center text-center shadow-card text-white rounded-sm"
            >
              <Settings size={32} className="mb-6 opacity-80" />
              <h4 className="font-serif text-3xl mb-4 font-medium">OEM Services</h4>
              <p className="text-white/80 text-sm font-sans leading-relaxed font-light">
                Complete co-packing and supply chain solutions for volume partners.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};