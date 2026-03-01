import React from 'react';
import { Map, User, Phone } from 'lucide-react';

const RepresentativeSection = () => {
  return (
    <section className="bg-brand-dark py-24 px-4 overflow-hidden">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* LEFT CONTENT */}
          <div className="flex-1 space-y-6">
            <div className="w-12 h-12 bg-[#1A1A1A] border border-white/5 rounded-xl flex items-center justify-center">
              <Map size={24} className="text-brand-neon" />
            </div>
            
            <h2 className="text-white text-4xl md:text-5xl font-black uppercase tracking-tight">
              BETPRO IN PAKISTAN
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl font-medium">
              Come join us for an exciting day of learning about Betpro id betting experience! 
              Our knowledgeable staff will be happy to teach you everything you need to know 
              about this exciting new betting platform! This event will also include a chance 
              to win some great prizes!
            </p>
          </div>

          {/* RIGHT CARD (Salman Shaikh) */}
          <div className="flex-1 w-full max-w-md">
            <div className="relative bg-brand-card rounded-betpro overflow-hidden border border-white/5 shadow-2xl transition-transform hover:scale-[1.02] duration-300">
              
              {/* Top Profile Area */}
              <div className="pt-12 pb-8 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-[#1A1A1A] border-4 border-brand-black flex items-center justify-center mb-6 shadow-inner">
                  <User size={40} className="text-brand-neon" />
                </div>
                
                <h3 className="text-white text-3xl font-black tracking-tight mb-1">
                  Salman Shaikh
                </h3>
                <p className="text-brand-neon text-xs font-bold uppercase tracking-[0.2em] opacity-80">
                  OFFICIAL REPRESENTATIVE
                </p>
              </div>

              {/* Action Area */}
              <div className="bg-brand-black/50 p-8 pt-0">
                <button className="w-full group relative flex items-center justify-center gap-3 bg-brand-neon hover:bg-[#32e612] text-black py-5 rounded-3xl font-black text-sm uppercase transition-all shadow-[0_10px_30px_rgba(57,255,20,0.2)]">
                  <Phone size={18} fill="black" />
                  CONTACT US
                </button>
              </div>

              {/* Decorative Subtle Glow */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-neon/5 blur-[80px] rounded-full"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RepresentativeSection;