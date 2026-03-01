import React from 'react';
import { Phone, Clock, Facebook, Instagram, Twitter, Youtube, Linkedin, ArrowRight } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full font-sans">
      {/* TOP UTILITY BAR */}
      <div className="bg-[#0A0A0A] border-b border-white/5 py-3">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-[13px] text-gray-400">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-brand-neon" />
              <span>+34 664 11 25 57</span>
            </div>
            <div className="flex items-center gap-2 border-l border-gray-700 pl-6">
              <Clock size={14} className="text-brand-neon" />
              <span>24 × 7 Hours</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {[Facebook, Instagram, Twitter, Youtube, Linkedin].map((Icon, idx) => (
              <a key={idx} href="#" className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION BAR */}
      <nav className="bg-brand-black py-5">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo & Phone Group */}
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-black text-white tracking-tighter uppercase">
              BETPRO DEALER
            </h1>
            <span className="text-xl font-bold text-brand-neon hidden sm:block">
              +92 32222 0 8585
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-10">
            <a href="#" className="text-brand-neon font-bold text-sm tracking-widest uppercase">Home</a>
            <a href="#" className="text-white hover:text-brand-neon font-bold text-sm tracking-widest uppercase transition">Blog</a>
            <a href="#" className="text-white hover:text-brand-neon font-bold text-sm tracking-widest uppercase transition">Betpro Dealer</a>
          </div>

          {/* CTA Button */}
          <button className="bg-[#EAEAEA] text-black px-6 py-3 rounded-full font-black text-xs uppercase flex items-center gap-2 hover:bg-white transition-all shadow-lg">
            <ArrowRight size={16} />
            CONTACT US
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;