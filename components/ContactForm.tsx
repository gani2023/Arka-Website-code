import React, { useState } from 'react';
import { SectionId } from '../types';

export const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    volume: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setFormState({ name: '', company: '', email: '', volume: '', message: '' });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id={SectionId.CONTACT} className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-gold-600 font-bold uppercase tracking-widest mb-4 text-sm">Start the Conversation</h3>
          <h2 className="text-4xl md:text-5xl font-serif text-coffee-900 mb-6">Partner With Us</h2>
          <p className="text-coffee-600">
            Ready to upgrade your coffee offering? Fill out the form below and one of our account managers will reach out within 24 hours.
          </p>
        </div>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 text-green-800 p-8 text-center rounded-sm">
            <h4 className="text-2xl font-serif mb-2">Thank you!</h4>
            <p>Your inquiry has been received. We will be in touch shortly.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="mt-6 text-sm font-bold uppercase tracking-widest underline hover:text-green-600"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-coffee-500 tracking-wider mb-2">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full p-4 border border-coffee-200 bg-coffee-50 focus:outline-none focus:border-gold-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-coffee-500 tracking-wider mb-2">Company Name</label>
                <input 
                  type="text" 
                  name="company"
                  required
                  value={formState.company}
                  onChange={handleChange}
                  className="w-full p-4 border border-coffee-200 bg-coffee-50 focus:outline-none focus:border-gold-500 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-coffee-500 tracking-wider mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full p-4 border border-coffee-200 bg-coffee-50 focus:outline-none focus:border-gold-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-coffee-500 tracking-wider mb-2">Est. Weekly Volume (kg)</label>
                <select 
                  name="volume"
                  value={formState.volume}
                  onChange={handleChange}
                  className="w-full p-4 border border-coffee-200 bg-coffee-50 focus:outline-none focus:border-gold-500 transition-colors appearance-none"
                >
                  <option value="">Select Volume</option>
                  <option value="10-50">10-50 kg</option>
                  <option value="50-100">50-100 kg</option>
                  <option value="100+">100+ kg</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-coffee-500 tracking-wider mb-2">Message / Specific Requirements</label>
              <textarea 
                name="message"
                rows={5}
                required
                value={formState.message}
                onChange={handleChange}
                className="w-full p-4 border border-coffee-200 bg-coffee-50 focus:outline-none focus:border-gold-500 transition-colors"
              ></textarea>
            </div>

            <div className="text-center pt-6">
              <button 
                type="submit"
                className="bg-coffee-900 text-white px-12 py-4 text-sm font-bold uppercase tracking-widest hover:bg-gold-600 transition-all duration-300 shadow-xl"
              >
                Send Inquiry
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};