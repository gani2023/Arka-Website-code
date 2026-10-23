import React from 'react';
import { SectionId, CoffeeProduct } from '../types';

const PRODUCTS: CoffeeProduct[] = [
  {
    id: '1',
    name: 'Arka Signature Espresso',
    origin: 'Brazil & Ethiopia Blend',
    roastLevel: 'Medium',
    notes: ['Dark Chocolate', 'Hazelnut', 'Dried Cherry'],
    pricePerKg: '$22.50',
    image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Sumatra Mandheling',
    origin: 'Single Origin - Indonesia',
    roastLevel: 'Dark',
    notes: ['Earthy', 'Spicy', 'Tobacco'],
    pricePerKg: '$26.00',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Ethiopian Yirgacheffe',
    origin: 'Single Origin - Ethiopia',
    roastLevel: 'Light',
    notes: ['Jasmine', 'Lemon Zest', 'Bergamot'],
    pricePerKg: '$28.00',
    image: 'https://images.unsplash.com/photo-1611854779393-1b2ae54f1996?q=80&w=800&auto=format&fit=crop'
  }
];

export const ProductShowcase: React.FC = () => {
  return (
    <section id={SectionId.CATALOG} className="py-24 bg-coffee-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-gold-500 font-bold uppercase tracking-widest mb-4 text-sm">Wholesale Catalog</h3>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Curated Selections</h2>
          <p className="text-coffee-300 max-w-2xl mx-auto">
            A glimpse into our core range. We offer over 20 seasonal varieties. 
            Download the full catalog or chat with our AI consultant for recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group bg-coffee-800 border border-coffee-700 overflow-hidden hover:border-gold-500/50 transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute top-4 right-4 bg-gold-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                  {product.roastLevel} Roast
                </div>
              </div>
              <div className="p-8">
                <div className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-2">
                  {product.origin}
                </div>
                <h4 className="text-2xl font-serif font-bold mb-4">{product.name}</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.notes.map((note, i) => (
                    <span key={i} className="bg-coffee-900 text-coffee-200 text-xs px-2 py-1 rounded-sm border border-coffee-600">
                      {note}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between border-t border-coffee-700 pt-6">
                  <span className="text-xl font-serif italic text-coffee-300">from {product.pricePerKg}/kg</span>
                  <button onClick={() => document.getElementById(SectionId.CONTACT)?.scrollIntoView()} className="text-gold-500 hover:text-white transition-colors font-bold uppercase text-xs tracking-widest">
                    Inquire &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-coffee-400 text-sm mb-4">Looking for something specific? Green beans also available.</p>
        </div>
      </div>
    </section>
  );
};