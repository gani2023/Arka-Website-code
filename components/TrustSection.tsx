import React, { useRef, useState, useEffect } from 'react';
import { SectionId } from '../types';
import { Play, Pause, Volume2, VolumeX, ShieldCheck } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Autoplay handling
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const stats = [
    { label: "Partner Cafes", value: "40+" },
    { label: "Beans Sourced", value: "24 Varieties" },
    { label: "Monthly Capacity", value: "20,000 kg" },
    { label: "Roast Freshness", value: "< 15 Days" },
  ];

  const features = [
    {
      title: "Direct Trade Guarantee",
      desc: "We negotiate directly with farmers, ensuring fair wages and the highest quality selection for your business.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      )
    },
    {
      title: "Consistent Profiling",
      desc: "Our state-of-the-art roasting facility uses automated profiling to ensure batch-to-batch consistency.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
      )
    },
    {
      title: "Lab Tested Quality",
      desc: "Every batch is cupped and tested by Q-Graders before it leaves our warehouse.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      )
    }
  ];

  return (
    <section id={SectionId.TRUST} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h3 className="text-gold-600 font-bold uppercase tracking-widest mb-4 text-sm">Our Philosophy</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-coffee-900 mb-6 leading-tight">
              Trust is the most <br /> important ingredient.
            </h2>
            <p className="text-coffee-600 leading-relaxed text-lg mb-6">
              In the competitive coffee market, you cannot afford inconsistency. Arka Originals was founded on a simple promise: to deliver the exact same high-quality cup, every single time.
            </p>
            <p className="text-coffee-600 leading-relaxed text-lg mb-8">
              We handle the logistics, the quality control, and the sourcing relationships so you can focus on serving your customers.
            </p>
            
            <div className="flex items-center gap-4 text-coffee-500 font-bold text-sm tracking-widest uppercase">
              <ShieldCheck className="text-green-600" />
              <span>Verified Estate Partners</span>
            </div>
          </div>
          
          {/* Vertical Video Section - Shorts Style */}
          <div className="relative flex justify-center">
             {/* Phone Frame styling */}
             <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border-[8px] border-coffee-900 ring-1 ring-coffee-100 group transform rotate-1 hover:rotate-0 transition-all duration-500">
                
                {/* 
                  Video with Cloudinary optimizations:
                  - f_auto: Automatically selects best format (webm/mp4)
                  - q_auto: Optimizes quality/size
                  - poster: Displays image before video loads (frame at 0s)
                */}
                <video 
                  ref={videoRef}
                  className="w-full h-full object-cover bg-coffee-800"
                  src="https://res.cloudinary.com/dlculbltv/video/upload/f_auto,q_auto/v1771356470/IMG_8570_ztypeg.mp4"
                  poster="https://res.cloudinary.com/dlculbltv/video/upload/f_auto,q_auto,so_0/v1771356470/IMG_8570_ztypeg.jpg"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                />
                
                {/* Live Badge */}
                <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider animate-pulse flex items-center gap-1.5 shadow-sm z-20">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  Live from Estate
                </div>

                {/* Mute Toggle */}
                <button 
                  onClick={toggleMute}
                  className="absolute top-4 right-4 bg-black/30 backdrop-blur-md p-2 rounded-full text-white hover:bg-black/50 transition-colors z-20"
                >
                  {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80 pointer-events-none z-10"></div>
                
                {/* Bottom Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                   <div className="flex items-center gap-2 mb-2">
                     <div className="w-6 h-6 rounded-full bg-gold-500 flex items-center justify-center text-[10px] font-bold text-coffee-900">A</div>
                     <span className="text-xs font-bold drop-shadow-md">Arka Originals</span>
                   </div>
                   <p className="font-serif text-xl leading-tight mb-2 drop-shadow-md">Unfiltered Authenticity.</p>
                   <p className="text-xs text-white/80 font-light">See exactly where your beans come from.</p>
                </div>

                {/* Big Play Button (Hidden when playing) */}
                <button 
                  onClick={togglePlay}
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-white/40 z-30 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}
                >
                  {isPlaying ? <Pause fill="currentColor" /> : <Play fill="currentColor" className="ml-1"/>}
                </button>
             </div>
             
             {/* Decorative Elements */}
             <div className="absolute -right-4 top-10 w-24 h-24 bg-gold-500/20 rounded-full blur-xl -z-10"></div>
             <div className="absolute -left-4 bottom-10 w-32 h-32 bg-coffee-500/20 rounded-full blur-xl -z-10"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-coffee-200 mb-24">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl md:text-4xl font-serif text-coffee-800 font-bold mb-2">{stat.value}</div>
              <div className="text-coffee-500 text-xs uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <div key={idx} className="p-8 bg-coffee-50 border border-coffee-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-gold-600 mb-6 shadow-sm mx-auto md:mx-0">
                {feature.icon}
              </div>
              <h4 className="text-xl font-serif font-bold text-coffee-800 mb-4">{feature.title}</h4>
              <p className="text-coffee-600 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};