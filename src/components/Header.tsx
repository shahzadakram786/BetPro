"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Phone, Clock, Facebook, Instagram, Twitter, 
  Youtube, Linkedin, ArrowRight, Menu, X 
} from 'lucide-react';

// 1. DATA CONFIGURATION (Best Practice: Keep data outside the component)
const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'Betpro Dealer', href: '/bettingdealer' },
];

const SOCIAL_LINKS = [
  { Icon: Facebook, href: '#' },
  { Icon: Instagram, href: '#' },
  { Icon: Twitter, href: '#' },
  { Icon: Youtube, href: '#' },
  { Icon: Linkedin, href: '#' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const WHATSAPP_NUMBER = "923222208585";
  const WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <header className="w-full font-sans sticky top-0 z-50">
      {/* TOP UTILITY BAR */}
      <div className="bg-[#0A0A0A] border-b border-white/5 py-3 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-[13px] text-gray-400">
          <div className="flex items-center gap-6">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand-neon transition-colors">
              <Phone size={14} className="text-brand-neon" />
              <span className='text-sm'>+34 664 11 25 57</span>
            </a>
            <div className="flex items-center gap-2 border-l border-gray-700 pl-6 text-gray-500">
              <Clock size={14} className="text-brand-neon" />
              <span className='text-sm'>24 × 7 Hours</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ Icon, href }, idx) => (
              <a key={idx} href={href} className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-neon hover:text-black transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION BAR */}
      <nav className="bg-brand-black/95 backdrop-blur-md py-5 border-b border-white/5 relative z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <h1 className="text-xl md:text-2xl font-black text-white tracking-tighter uppercase shrink-0">
              BETPRO DEALER
            </h1>
          </Link>

          {/* Desktop Nav (Mapped) */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className={`font-bold text-sm tracking-widest uppercase transition-colors ${
                    pathname === link.href ? "text-brand-neon" : "text-white hover:text-brand-neon"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" 
               className="bg-[#EAEAEA] text-black px-8 py-3 rounded-full font-black text-xs uppercase flex items-center gap-2 hover:bg-white transition-all shadow-lg hover:scale-105 active:scale-95">
              <ArrowRight size={16} /> CONTACT US
            </a>
          </div>

          <button className="lg:hidden text-white p-2 z-50 transition-transform active:scale-90" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} className="text-brand-neon" /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* FULL SCREEN RIGHT DRAWER */}
      <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[45] transition-opacity duration-300 lg:hidden ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={() => setIsMenuOpen(false)} />

      <div className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-brand-dark z-[48] shadow-2xl transform transition-transform duration-500 ease-in-out lg:hidden flex flex-col ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col h-full p-8 pt-24">
          <div className="flex flex-col gap-8">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className={`font-black text-4xl uppercase tracking-tighter transition-colors ${
                  pathname === link.href ? "text-brand-neon" : "text-white hover:text-brand-neon"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-12 pt-12 border-t border-white/10">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="w-full bg-brand-neon text-black p-5 rounded-2xl font-black text-center uppercase tracking-widest flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(57,255,20,0.2)]" onClick={() => setIsMenuOpen(false)}>
              <Phone size={20} fill="black" /> WhatsApp Now
            </a>
          </div>

          <div className="mt-auto flex justify-center gap-6 pb-10">
            {SOCIAL_LINKS.slice(0,3).map(({ Icon }, idx) => (
              <Icon key={idx} size={24} className="text-gray-400 hover:text-brand-neon transition-colors cursor-pointer" />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;