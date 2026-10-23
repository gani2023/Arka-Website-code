import React from 'react';
import { motion, useScroll, useTransform, Transition } from 'framer-motion';
import { Mountain, Sun, Sprout, CheckCircle2 } from 'lucide-react';

export const Legacy: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]); // Reduced movement for smoothness
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 3]);

  // Premium smooth easing
  const smoothTransition: Transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Visual Side with Parallax Cards */}
          <div className="w-full lg:w-1/2 relative min-h-[600px] flex items-center justify-center perspective-1000">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-coffee-50/50 rounded-full blur-3xl -z-10"></div>

            <motion.div 
              style={{ y, rotate }}
              className="relative z-10 w-[80%] aspect-[3/4] bg-coffee-50 p-3 shadow-card rounded-sm"
            >
              <div className="w-full h-full overflow-hidden relative group">
                <img 
                  src="https://i.postimg.cc/CM7kWHCn/IMG-8992.jpg"
                  alt="Green Coffee Beans" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-coffee-900/5 mix-blend-multiply"></div>
                
                {/* Verified Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2 shadow-sm">
                  <CheckCircle2 size={12} className="text-green-600" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-coffee-800">Estate Verified</span>
                </div>
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 shadow-float max-w-xs border-l-4 border-coffee-600 z-20">
                 <p className="font-serif text-3xl font-bold text-coffee-900 leading-none mb-2">1300 MASL</p>
                 <p className="text-[10px] uppercase tracking-[0.2em] text-coffee-500 font-bold">Elevation</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.2, ...smoothTransition }}
              className="absolute top-10 right-0 w-[45%] aspect-square bg-white p-3 shadow-float z-20 rounded-sm"
            >
               <div className="w-full h-full relative overflow-hidden group">
                <img 
                  src="https://i.postimg.cc/sgq2k10P/pexels-maksgelatin-4815899.jpg"
                  alt="Lush Green Coffee Estate" 
                  className="w-full h-full object-cover filter contrast-125 transition-transform duration-700 group-hover:scale-105"
                />
               </div>
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 lg:pl-10">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={smoothTransition}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="h-[1px] w-12 bg-coffee-400"></span>
                <span className="text-coffee-500 font-sans text-xs font-bold tracking-[0.3em] uppercase">The Terroir</span>
              </div>
              
              <h2 className="font-serif text-5xl md:text-6xl text-coffee-900 mb-8 leading-tight">
                Cultivating <br/>
                <span className="italic text-coffee-600">Micro-Lots.</span>
              </h2>
              
              <div className="space-y-6 text-coffee-600 font-sans text-lg font-light leading-relaxed mb-12">
                <p>
                  We act as custodians of legacy estates in the Western Ghats. Our focus is on <strong className="text-coffee-900 font-medium">Shade-Grown Polyculture</strong>, ensuring nutrient-dense soil that imparts distinct flavor notes.
                </p>
                <p>
                   By harvesting only fully ripe cherries from high-altitude blocks, we secure beans with higher cellular density—essential for consistent heat transfer during roasting.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <Mountain size={24} strokeWidth={1} />, title: "SHG Certified", sub: "Strictly High Grown" },
                { icon: <Sun size={24} strokeWidth={1} />, title: "Natural Process", sub: "Sun Dried on Patios" },
                { icon: <Sprout size={24} strokeWidth={1} />, title: "Bio-Diverse", sub: "Intercropped Estate" },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: 0.2 + (idx * 0.1), ...smoothTransition }}
                  whileHover={{ y: -5, backgroundColor: '#FDFBF7', transition: { duration: 0.3 } }}
                  className="bg-white p-6 border border-coffee-100 rounded-sm hover:shadow-card cursor-default group"
                >
                  <div className="text-coffee-400 mb-4 group-hover:text-coffee-700 transition-colors">{item.icon}</div>
                  <h4 className="font-serif text-lg text-coffee-900 font-bold mb-1">{item.title}</h4>
                  <p className="text-[10px] uppercase tracking-[0.1em] text-coffee-400">{item.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};