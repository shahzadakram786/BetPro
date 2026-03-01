import React from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Column 1: Brand & Contact Button */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black uppercase tracking-tighter">
              BETPRO DEALER
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Your premium destination for trusted and official betting dealer services in Pakistan.
            </p>
            <div className="inline-flex items-center gap-3 bg-[#11110a] border border-brand-neon/20 px-5 py-3 rounded-xl">
              <div className="bg-brand-neon/10 p-2 rounded-full">
                <Phone size={18} className="text-brand-neon" />
              </div>
              <span className="text-brand-neon font-bold">+34 664 11 25 57</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-brand-neon text-sm transition uppercase font-medium">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-neon text-sm transition uppercase font-medium">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-neon text-sm transition uppercase font-medium">Betpro Dealer</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Contact</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-brand-neon shrink-0" />
                <span className="text-gray-400 text-sm">Johar town lahore</span>
              </li>
              <li className="flex items-start gap-4">
                <Mail size={20} className="text-brand-neon shrink-0" />
                <span className="text-gray-400 text-sm">developerstop4@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:row justify-between items-center gap-4 text-[12px] text-gray-500 font-medium">
          <p>© 2024 Betpro Dealer. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-brand-neon rounded-full"></span>
            <p>+34 664 11 25 57</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;