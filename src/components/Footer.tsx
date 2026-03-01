'use client'

import React from "react";
import { Phone, MapPin, Mail } from "lucide-react";

const WHATSAPP_NUMBER = "923222208585";
const SECONDARY_NUMBER = "34664112557"; // Spanish number
const WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const SECONDARY_WA_LINK = `https://wa.me/${SECONDARY_NUMBER}`;

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
              Your premium destination for trusted and official betting dealer
              services in Pakistan.
            </p>
            {/* FIXED: Wrapped in an <a> tag with wa.me link */}
            <a 
              href={SECONDARY_WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#11110a] border border-brand-neon/20 px-5 py-3 rounded-xl hover:bg-brand-neon/5 transition-colors group"
            >
              <div className="bg-brand-neon/10 p-2 rounded-full group-hover:scale-110 transition-transform">
                <Phone size={18} className="text-brand-neon" />
              </div>
              <span className="text-brand-neon font-bold">
                +34 664 11 25 57
              </span>
            </a>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#" className="footer-link">Home</a></li>
              <li><a href="#" className="footer-link">Blog</a></li>
              <li><a href="#" className="footer-link">Betpro Dealer</a></li>
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
                <a href="mailto:developerstop4@gmail.com" className="text-gray-400 text-sm hover:text-brand-neon">
                  developerstop4@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-gray-500 font-medium">
          <p>© 2024 Betpro Dealer. All rights reserved.</p>
          
          {/* FIXED: Redirects to the correct WhatsApp number */}
          <a 
            href={WA_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-brand-neon transition-colors group"
          >
            <Phone size={14} className="text-brand-neon group-hover:animate-pulse" />
            <span>+92 32222 0 8585</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        .footer-link {
          @apply text-gray-400 hover:text-brand-neon text-sm transition uppercase font-medium;
        }
      `}</style>
    </footer>
  );
};

export default Footer;