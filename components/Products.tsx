import React, { useState } from 'react';
import { motion, Transition } from 'framer-motion';
import { ProductCategory } from '../types';
import { Link } from 'react-router-dom';

const productData: ProductCategory[] = [
  {
    title: "Roasted Beans",
    subtitle: "Graded lots and commercial blends.",
    items: [
      { 
        name: "Graded Arabica (PLAAA)", 
        description: "Our flagship premium grade.",
        specs: "Dark Chocolate | Nutty | Orange | Floral", 
        tags: ["Best Seller", "Premium"] 
      },
      { 
        name: "Graded Arabica (PLAA)", 
        description: "Sweeter profile, excellent for drip.",
        specs: "Sweet Notes | Clean Cup", 
        tags: ["Best Seller"] 
      },
      { 
        name: "70/30 Espresso Blend", 
        description: "Perfectly balanced commercial espresso base.",
        specs: "70% PLAAA | 25% High Grade Robusta", 
        tags: ["Best Seller", "Blend"] 
      },
      { 
        name: "MNEB (Mysore Nuggets)", 
        specs: "Extra Bold | Washed | Specialty Grade", 
        tags: ["Specialty"] 
      },
      { 
        name: "Monsooned Malabar", 
        specs: "Weathered | Low Acidity | Heavy Body", 
        tags: ["Premium"] 
      },
      { 
        name: "Other Graded Arabica", 
        specs: "Available in: PLA | PLPB (Peaberry)", 
        tags: ["Commercial"] 
      },
      { 
        name: "Graded Robusta", 
        specs: "Available in: RCAA | RCA | RCPB", 
        tags: ["Commercial"] 
      },
      { 
        name: "Bulk Arabica & Robusta", 
        specs: "Ungraded lots for mass production", 
        tags: ["Economy"] 
      }
    ]
  },
  {
    title: "Liquid Decoction",
    subtitle: "Ready-to-use traditional filter coffee base.",
    items: [
      { 
        name: "Strong Version", 
        description: "Intense kick for traditional South Indian palate.", 
        specs: "High Viscosity | Dark Roast Profile", 
        tags: ["HoReCa"] 
      },
      { 
        name: "Lighter Version", 
        description: "Milder profile for general consumption.", 
        specs: "Balanced | Smooth Finish", 
        tags: ["HoReCa"] 
      }
    ]
  },
  {
    title: "Instant Coffee",
    subtitle: "Soluble solutions for vending and retail.",
    items: [
      { 
        name: "Spray Dried", 
        description: "Fine powder format.", 
        specs: "Variants: 100% Coffee | 80/20 | 70/30 Chicory", 
        tags: ["Economy"] 
      },
      { 
        name: "Agglomerated", 
        description: "Granulated 'coffee-like' texture.", 
        specs: "Variants: 100% Coffee | 80/20 | 70/30 Chicory", 
        tags: ["Standard"] 
      },
      { 
        name: "Freeze Dried", 
        description: "Premium crystal preservation.", 
        specs: "Variants: 100% Arabica | 100% Robusta", 
        tags: ["Premium"] 
      }
    ]
  }
];

export const Products: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Premium smooth easing
  const smoothTransition: Transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

  return (
    <section className="py-24 bg-coffee-50 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={smoothTransition}
          className="text-center mb-20"
        >
          <span className="text-coffee-500 font-sans text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Our Inventory</span>
          <h2 className="font-serif text-5xl md:text-6xl mb-6 text-coffee-900 font-medium">Commercial Grading</h2>
          <p className="text-coffee-600 max-w-2xl mx-auto font-light text-xl leading-relaxed">
             Comprehensive sourcing from bulk economy lots to specialty MNEB.
          </p>
        </motion.div>

        {/* Custom Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {productData.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 border rounded-sm ${
                activeTab === index 
                  ? 'bg-coffee-900 text-white border-coffee-900 shadow-lg transform -translate-y-1' 
                  : 'bg-white text-coffee-400 border-coffee-200 hover:text-coffee-800 hover:border-coffee-400'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
           <motion.div
             key={activeTab}
             initial={{ opacity: 0, y: 15 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
           >
             {productData[activeTab].items.map((item, idx) => (
               <motion.div 
                 key={idx} 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: idx * 0.05, duration: 0.5 }}
                 whileHover={{ y: -8, boxShadow: '0 20px 40px -10px rgba(62, 41, 33, 0.1)' }}
                 className="group relative bg-white p-10 border border-coffee-100 flex flex-col justify-between h-full shadow-soft rounded-sm overflow-hidden"
               >
                 <div className="absolute top-0 left-0 w-1 h-0 bg-coffee-500 group-hover:h-full transition-all duration-500"></div>

                 <div className="relative z-10">
                   <div className="flex justify-between items-start mb-6">
                      <h4 className="font-serif text-2xl text-coffee-900 font-bold leading-none">{item.name}</h4>
                      {item.tags?.includes("Best Seller") && (
                        <span className="bg-coffee-100 text-coffee-800 text-[10px] font-bold px-2 py-1 uppercase tracking-widest border border-coffee-200">Volume Leader</span>
                      )}
                      {item.tags?.includes("Premium") && !item.tags?.includes("Best Seller") && (
                        <span className="border border-coffee-300 text-coffee-500 text-[10px] font-bold px-2 py-1 uppercase tracking-widest">AAA</span>
                      )}
                   </div>
                   {item.description && (
                     <p className="text-coffee-600 mb-6 text-base font-sans font-light leading-relaxed">{item.description}</p>
                   )}
                   <div className="w-full h-[1px] bg-coffee-100 my-6"></div>
                 </div>
                 
                 <div className="relative z-10">
                    <p className="text-[10px] text-coffee-400 uppercase tracking-[0.2em] font-bold mb-2">Technical Specs</p>
                    <p className="text-coffee-800 font-serif text-lg italic">{item.specs}</p>
                 </div>
               </motion.div>
             ))}
           </motion.div>
        </div>
        
        <div className="mt-20 text-center">
          <Link to="/contact" className="inline-flex items-center gap-3 text-coffee-500 hover:text-coffee-800 transition-colors text-sm font-bold uppercase tracking-[0.2em] group border-b border-transparent hover:border-coffee-800 pb-1">
            Request Q-Grader Report
            <span className="transform group-hover:translate-x-2 transition-transform text-lg">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};