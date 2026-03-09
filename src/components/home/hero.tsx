import React from 'react';
import { Phone, CheckCircle2, AlertTriangle } from 'lucide-react';
import { CtaButton } from '../ui/CtaButton';

const Hero = () => {
  return (
    <section className="relative w-full h-[86vh] flex flex-col items-center justify-center bg-brand-black overflow-hidden px-4 py-25">
      
      {/* 1. THE BACKGROUND IMAGE LAYER */}
      <div 
        className="absolute inset-0 z-0 bg-[url('/hero1.png')] bg-cover bg-center bg-no-repeat"
        aria-hidden="true"
      />

      {/* 2. THE DARK OVERLAY LAYER (Pixel Perfect Readability) */}
      {/* We use a 70% black overlay so the white text and neon green POP */}
      <div className="absolute inset-0 z-1 bg-black/70" />

     

      {/* 4. THE CONTENT LAYER */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        
        {/* Official Dealer Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-black/80 border border-brand-neon/30 mb-8 backdrop-blur-sm">
          <CheckCircle2 size={14} className="text-brand-neon" />
          <span className="text-brand-neon text-[10px] font-bold uppercase tracking-[0.2em]">
            100% Official Dealer
          </span>
        </div>

        {/* Main Heading Group */}
        <h1 className="flex flex-col gap-2">
          <span className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight drop-shadow-2xl">
            BETPRO DEALER
          </span>
          <span className="text-5xl md:text-8xl font-black text-brand-neon tracking-tight drop-shadow-[0_0_15px_rgba(57,255,20,0.3)]">
            03222208585
          </span>
        </h1>

        {/* Alert/Notice Box */}
        <div className="mt-10 mb-12 flex items-center gap-3 px-6 py-4 bg-red-950/30 border border-red-900/30 rounded-2xl max-w-2xl backdrop-blur-md">
          <div className="bg-red-500/20 p-1.5 rounded-lg shrink-0">
            <AlertTriangle size={18} className="text-red-500" />
          </div>
          <p className="text-gray-200 text-sm md:text-base font-medium leading-relaxed">
            Hum withdrawal par kisi bhi qisam ka commission charge nahi karte.
          </p>
        </div>

        {/* Glowing CTA Button */}
<div className="flex gap-4">
  <CtaButton label="Contact us" /> 
</div>      </div>

      {/* 5. BOTTOM TRANSITION GRADIENT */}
      <div className="absolute bottom-0 w-full h-32 bg-linear-to-t from-brand-black to-transparent z-3"></div>
    </section>
  );
};

export default Hero;