import React from 'react';
import { Phone, CheckCircle2, AlertTriangle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-150 flex flex-col items-center justify-center bg-brand-black overflow-hidden px-4 py-20">
      
      {/* Background Pattern Overlay (Geometric shapes from Figma) */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-[#1a1a10] via-transparent to-transparent"></div>
        {/* Placeholder for the geometric diamond assets found in your image */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 border border-white/5 rotate-45"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 border border-white/10 rotate-45"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        
        {/* Official Dealer Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#11110a] border border-brand-neon/30 mb-8">
          <CheckCircle2 size={14} className="text-brand-neon" />
          <span className="text-brand-neon text-[10px] font-bold uppercase tracking-[0.2em]">
            100% Offical Dealer
          </span>
        </div>

        {/* Main Heading Group */}
        <h1 className="flex flex-col gap-2">
          <span className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight">
            BETPRO DEALER
          </span>
          <span className="text-5xl md:text-8xl font-black text-brand-neon tracking-tight">
            +92 32222 0 8585
          </span>
        </h1>

        {/* Alert/Notice Box */}
        <div className="mt-10 mb-12 flex items-center gap-3 px-6 py-4 bg-red-950/20 border border-red-900/30 rounded-2xl max-w-2xl">
          <div className="bg-red-500/20 p-1.5 rounded-lg shrink-0">
            <AlertTriangle size={18} className="text-red-500" />
          </div>
          <p className="text-gray-300 text-sm md:text-base font-medium leading-relaxed">
            Hum withdrawal par kisi bhi qisam ka commission charge nahi karte.
          </p>
        </div>

        {/* Glowing CTA Button */}
        <button className="group relative flex items-center gap-3 bg-brand-neon hover:bg-[#32e612] text-black px-10 py-5 rounded-full font-black text-sm uppercase transition-all duration-300 shadow-[0_0_40px_rgba(57,255,20,0.4)] hover:shadow-[0_0_60px_rgba(57,255,20,0.6)]">
          <Phone size={18} fill="black" />
          CONTACT US
        </button>
      </div>

      {/* Subtle bottom gradient to blend with next section */}
      <div className="absolute bottom-0 w-full h-32 bg-linear-to-t from-brand-black to-transparent"></div>
    </section>
  );
};

export default Hero;