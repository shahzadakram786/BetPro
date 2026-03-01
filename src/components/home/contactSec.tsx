import React from 'react';
import { User, Lock, MapPin, Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="bg-black py-25 md:px-5">
      <div className="container mx-auto p-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            KEEP IN TOUCH!
          </h2>
          <div className="w-12 h-1 bg-brand-neon mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col  md:flex-row items-center md:px-6 gap-16 ">
          
          {/* LEFT: LOGIN CARD (The "BP" Card) */}
          <div className="w-full lg:w-[45%]">
            <div className="relative bg-linear-to-b from-brand-blue-top to-brand-blue-bottom rounded-[3rem] p-12 border border-white/10 shadow-2xl overflow-hidden">
              {/* BP Logo Circle */}
              <div className="flex justify-center mb-10">
                <div className="w-28 h-28 bg-[#70E1E1] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(112,225,225,0.3)]">
                  <span className="text-black text-5xl font-serif italic font-black">BP</span>
                </div>
              </div>

              {/* Input Fields */}
              <div className="space-y-8 mb-12">
                <div className="relative border-b border-white/20 pb-2 flex items-center gap-4">
                  <User size={20} className="text-white/60" />
                  <input 
                    type="text" 
                    placeholder="Username" 
                    className="bg-transparent border-none outline-none text-white placeholder:text-white/40 w-full"
                  />
                </div>
                <div className="relative border-b border-white/20 pb-2 flex items-center gap-4">
                  <Lock size={20} className="text-white/60" />
                  <input 
                    type="password" 
                    placeholder="Password" 
                    className="bg-transparent border-none outline-none text-white placeholder:text-white/40 w-full"
                  />
                </div>
              </div>

              {/* 3D Login Button */}
              <div className="flex justify-center">
                <button className="bg-linear-to-b from-brand-blue-light to-brand-blue-top text-white px-12 py-3 rounded-full font-bold shadow-[0_10px_20px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform active:scale-95">
                  Login
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: CONTACT DETAILS */}
          <div className="w-full lg:w-auto flex flex-col gap-10">
            {/* Location */}
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-[#111] border border-white/5 rounded-2xl flex items-center justify-center group-hover:border-brand-neon/50 transition-colors">
                <MapPin size={24} className="text-brand-neon" />
              </div>
              <div>
                <p className="text-gray-500 text-[10px] uppercase font-black tracking-widest mb-1">Location</p>
                <p className="text-white font-bold">Johar town lahore</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-[#111] border border-white/5 rounded-2xl flex items-center justify-center group-hover:border-brand-neon/50 transition-colors">
                <Phone size={24} className="text-brand-neon" />
              </div>
              <div>
                <p className="text-gray-500 text-[10px] uppercase font-black tracking-widest mb-1">Phone</p>
                <p className="text-white font-bold">+34 664 11 25 57</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-[#111] border border-white/5 rounded-2xl flex items-center justify-center group-hover:border-brand-neon/50 transition-colors">
                <Mail size={24} className="text-brand-neon" />
              </div>
              <div className='felx flex-wrap'>
                <p className="text-gray-500 text-[10px] uppercase font-black tracking-widest mb-1">Email</p>
                <p className="text-white font-bold">developerstop4@gmail.com</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;