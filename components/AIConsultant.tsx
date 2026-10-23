import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { getGeminiResponse } from '../services/geminiService';

export const AIConsultant: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Welcome to Arka Originals. I am your automated coffee consultant. How can I assist you with your sourcing needs today? I can help with roast profiles, pricing estimates, or origin details." }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    const responseText = await getGeminiResponse(userText);

    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <section className="py-24 bg-coffee-100 min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Side */}
        <div>
          <h3 className="text-coffee-600 font-bold uppercase tracking-widest mb-4 text-sm">Instant Expertise</h3>
          <h2 className="text-4xl md:text-5xl font-serif text-coffee-900 mb-6 leading-tight">
            Ask our Digital <br /> Sommelier.
          </h2>
          <p className="text-coffee-700 mb-6 text-lg">
            Not sure which origin suits your cafe's demographic? Need a quick recommendation on a medium-roast blend for cold brew?
          </p>
          <p className="text-coffee-700 mb-8">
            Our AI consultant is trained on our entire inventory and roasting logs to give you immediate answers before you even speak to a sales rep.
          </p>
          <ul className="space-y-4 text-coffee-800">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-coffee-500 rounded-full mr-3"></span>
              Flavor profile matching
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-coffee-500 rounded-full mr-3"></span>
              Origin backstory & ethical certifications
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-coffee-500 rounded-full mr-3"></span>
              Seasonal availability checks
            </li>
          </ul>
        </div>

        {/* Chat Widget */}
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden border border-coffee-200 h-[600px] flex flex-col">
          {/* Header */}
          <div className="bg-coffee-800 p-4 border-b border-coffee-700 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-white font-serif tracking-wider">Arka AI</span>
            </div>
            <span className="text-coffee-400 text-xs uppercase">Powered by Gemini</span>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-4 rounded-sm text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-coffee-600 text-white rounded-br-none' 
                      : 'bg-white text-coffee-800 border border-coffee-100 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-coffee-800 border border-coffee-100 p-4 rounded-sm rounded-bl-none shadow-sm flex items-center space-x-2">
                   <div className="w-2 h-2 bg-coffee-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                   <div className="w-2 h-2 bg-coffee-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                   <div className="w-2 h-2 bg-coffee-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-coffee-100">
            <form onSubmit={handleSend} className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about beans, pricing, or origins..."
                className="flex-1 p-3 border border-coffee-200 focus:outline-none focus:border-coffee-500 bg-coffee-50 text-coffee-900"
              />
              <button 
                type="submit" 
                disabled={isLoading}
                className="bg-coffee-500 text-white px-6 font-bold uppercase text-xs tracking-widest hover:bg-coffee-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};