import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const PaymentSuccess: React.FC = () => {
  return (
    <div className="min-h-screen bg-coffee-50 flex items-center justify-center px-6 pt-20">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-md w-full bg-white p-10 rounded-sm shadow-card border border-coffee-100 text-center"
      >
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
          <CheckCircle size={40} />
        </div>
        <h2 className="font-serif text-3xl text-coffee-900 font-bold mb-4">Order Confirmed!</h2>
        <p className="text-coffee-600 mb-8 leading-relaxed">
          Thank you for your purchase. Your payment was successful and your Arka Originals Sampler Kit is being prepared for dispatch.
        </p>
        <Link 
          to="/"
          className="inline-flex items-center justify-center gap-2 w-full bg-coffee-900 text-white font-bold uppercase tracking-[0.2em] py-4 hover:bg-coffee-800 transition-colors text-xs rounded-sm"
        >
          Return to Home <ArrowRight size={16} />
        </Link>
      </motion.div>
    </div>
  );
};
