import React, { useState } from 'react';
import { Phone, Mail, MapPin, Loader2 } from 'lucide-react';
import { motion, Transition } from 'framer-motion';
import { StorageService } from '../services/storageService';

export const Contact: React.FC = () => {
  // Premium smooth easing
  const smoothTransition: Transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formState, setFormState] = useState({
    name: '',
    business: '',
    location: '',
    phone: '',
    volume: 'Less than 50 kg',
    requirements: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create new inquiry object
    const newInquiry = {
      date: new Date().toISOString(),
      ...formState
    };

    // Use Service
    await StorageService.addInquiry(newInquiry);

    setIsSubmitting(false);
    
    // Reset form and alert user
    alert("Thank you. Your inquiry has been received. We will contact you shortly.");
    setFormState({
      name: '',
      business: '',
      location: '',
      phone: '',
      volume: 'Less than 50 kg',
      requirements: ''
    });
  };

  return (
    <section className="py-24 bg-white relative border-t border-coffee-100 min-h-[80vh] flex items-center">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-0 shadow-float overflow-hidden rounded-sm">
          
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={smoothTransition}
            className="lg:w-5/12 bg-coffee-900 p-12 lg:p-20 flex flex-col justify-between text-white relative overflow-hidden"
          >
             {/* Subtle Texture */}
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
             
             {/* Gradient Overlay */}
             <div className="absolute inset-0 bg-gradient-to-br from-coffee-800/50 to-coffee-900/90"></div>

             <div className="relative z-10">
                <span className="text-coffee-300 font-sans text-xs font-bold tracking-[0.3em] uppercase mb-6 block">Start a Partnership</span>
                <h3 className="font-serif text-5xl lg:text-6xl mb-8 leading-[1] font-medium">
                  Discuss your <br/>volume needs.
                </h3>
                <p className="text-coffee-200 mb-16 font-light text-lg">
                  Partner with a roasting house that understands your margins. Reach out for bulk pricing samples.
                </p>

                <div className="space-y-10 font-sans">
                  <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-full text-coffee-300 group-hover:bg-white group-hover:text-coffee-900 transition-colors duration-300">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs uppercase text-coffee-400 tracking-[0.2em] font-bold mb-1">Call Us</p>
                      <p className="text-xl font-bold font-serif">+91 9368488134</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-full text-coffee-300 group-hover:bg-white group-hover:text-coffee-900 transition-colors duration-300">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs uppercase text-coffee-400 tracking-[0.2em] font-bold mb-1">Email Us</p>
                      <p className="text-xl font-bold font-serif">partner@arkaoriginals.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-full text-coffee-300 group-hover:bg-white group-hover:text-coffee-900 transition-colors duration-300">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs uppercase text-coffee-400 tracking-[0.2em] font-bold mb-1">Roastery</p>
                      <p className="text-xl font-bold font-serif">Chikamagalur, Karnataka</p>
                    </div>
                  </div>
                </div>
             </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ...smoothTransition, delay: 0.2 }}
            className="lg:w-7/12 bg-coffee-50 p-12 lg:p-20"
          >
            <h4 className="font-serif text-4xl mb-10 text-coffee-900 font-bold">Supply Request Form</h4>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] font-bold text-coffee-500 mb-3">Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formState.name} 
                    onChange={handleChange} 
                    required 
                    className="w-full bg-white border border-coffee-200 p-4 text-coffee-900 focus:border-coffee-500 focus:outline-none transition-colors rounded-sm shadow-sm" 
                    placeholder="John Doe" 
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] font-bold text-coffee-500 mb-3">Business Name</label>
                  <input 
                    type="text" 
                    name="business" 
                    value={formState.business} 
                    onChange={handleChange} 
                    required 
                    className="w-full bg-white border border-coffee-200 p-4 text-coffee-900 focus:border-coffee-500 focus:outline-none transition-colors rounded-sm shadow-sm" 
                    placeholder="Cafe Coffee X" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] font-bold text-coffee-500 mb-3">Location</label>
                  <input 
                    type="text" 
                    name="location" 
                    value={formState.location} 
                    onChange={handleChange} 
                    required 
                    className="w-full bg-white border border-coffee-200 p-4 text-coffee-900 focus:border-coffee-500 focus:outline-none transition-colors rounded-sm shadow-sm" 
                    placeholder="City, State" 
                  />
                </div>
                 <div>
                  <label className="block text-xs uppercase tracking-[0.2em] font-bold text-coffee-500 mb-3">Phone</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formState.phone} 
                    onChange={handleChange} 
                    required 
                    className="w-full bg-white border border-coffee-200 p-4 text-coffee-900 focus:border-coffee-500 focus:outline-none transition-colors rounded-sm shadow-sm" 
                    placeholder="+91..." 
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.2em] font-bold text-coffee-500 mb-3">Monthly Volume Requirement</label>
                <select 
                  name="volume" 
                  value={formState.volume} 
                  onChange={handleChange} 
                  className="w-full bg-white border border-coffee-200 p-4 text-coffee-900 focus:border-coffee-500 focus:outline-none transition-colors appearance-none font-sans rounded-sm shadow-sm"
                >
                  <option>Less than 50 kg</option>
                  <option>50 kg - 200 kg</option>
                  <option>200 kg - 500 kg</option>
                  <option>500 kg +</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.2em] font-bold text-coffee-500 mb-3">Specific Requirements</label>
                <textarea 
                  name="requirements" 
                  rows={4} 
                  value={formState.requirements} 
                  onChange={handleChange} 
                  className="w-full bg-white border border-coffee-200 p-4 text-coffee-900 focus:border-coffee-500 focus:outline-none transition-colors rounded-sm shadow-sm" 
                  placeholder="Looking for a custom blend for my hotel chain..."
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-coffee-800 text-white font-bold uppercase tracking-[0.2em] py-5 hover:bg-coffee-900 transition-colors duration-300 mt-6 shadow-lg text-xs rounded-sm flex justify-center items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={16} /> Processing...
                  </>
                ) : (
                  "Start Supply Conversation"
                )}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};