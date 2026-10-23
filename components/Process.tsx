import React from 'react';
import { motion, Transition } from 'framer-motion';

export const Process: React.FC = () => {
  const steps = [
    { 
      number: "01", 
      title: "Optical Sort", 
      desc: "Laser sorting to remove defects (blacks, sours) ensuring clean cup scores.",
      image: "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Optical green coffee bean sorting"
    },
    { 
      number: "02", 
      title: "Maillard Phase", 
      desc: "Controlled heat application to develop body and enzymatic sugars.",
      image: "https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Coffee roaster Maillard phase heat application"
    },
    { 
      number: "03", 
      title: "First Crack", 
      desc: "Precision termination of roast for desired solubility and acidity levels.",
      image: "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Roasted coffee beans cooling"
    },
    { 
      number: "04", 
      title: "Degassing", 
      desc: "Valve-sealed resting period to stabilize CO2 prior to grinding or shipping.",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Specialty coffee valve-sealed resting bags"
    },
  ];

  // Premium smooth easing
  const smoothTransition: Transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

  return (
    <section className="py-32 relative overflow-hidden bg-coffee-900">
       {/* Background Image - Coffee Cherries */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.postimg.cc/cCCy1BvY/pexels-quang-nguyen-vinh-222549-2131720.jpg" 
          alt="Premium Coffee Processing" 
          className="w-full h-full object-cover opacity-10 mix-blend-overlay" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-coffee-900/95 via-coffee-900/90 to-coffee-900/95"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
         <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.3 }}
           transition={smoothTransition}
           className="mb-20 text-center"
         >
          <span className="text-gold-500 font-sans text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Processing Protocol</span>
          <h3 className="font-serif text-5xl md:text-6xl font-medium text-white">Farm to Filter</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.15, ...smoothTransition }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative group bg-white/5 backdrop-blur-sm p-6 border border-white/10 hover:border-gold-500/50 rounded-sm transition-all duration-500 flex flex-col justify-between"
            >
              {/* Photo Above Step */}
              <div className="relative w-full h-52 mb-6 overflow-hidden rounded-sm border border-white/10 group-hover:border-gold-500/40 transition-colors bg-black/30">
                <img 
                  src={step.image} 
                  alt={step.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 bg-coffee-950/85 backdrop-blur-md px-3 py-1 text-gold-400 font-serif font-bold text-xs tracking-widest border border-gold-500/30 rounded-sm shadow-md">
                  STEP {step.number}
                </div>
              </div>

              <div className="relative z-10 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-2xl mb-3 text-white font-bold group-hover:text-gold-300 transition-colors">{step.title}</h4>
                  <p className="text-coffee-200 text-sm font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};