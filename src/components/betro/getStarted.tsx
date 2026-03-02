"use client";

import React from 'react';
import { MessageCircle, Phone, User, Lock } from 'lucide-react';

const GetStarted = () => {
  const steps = [
    {
      number: "1",
      title: "Contact Us on WhatsApp",
      description: "Reach out to our official number +34 664 11 25 57 via WhatsApp to request a new Betpro account."
    },
    {
      number: "2",
      title: "Make a Deposit",
      description: "Choose your preferred payment method (Easypaisa, JazzCash, or Bank Transfer) and make your initial deposit."
    },
    {
      number: "3",
      title: "Receive Your Credentials",
      description: "Once verified, we will instantly provide your secure login ID and password to start betting."
    }
  ];

  return (
    <section className="bg-black py-24 px-4">
      <div className="container mx-auto ">
        
        {/* HOW TO GET STARTED AREA */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          
          {/* Left: Login Mockup Card */}
          <div className="flex-1 w-full max-w-lg">
            <div className="bg-gradient-to-b from-[#2B4C65] to-[#0A0F16] rounded-[2.5rem] p-10 shadow-2xl border border-white/5">
              <div className="flex flex-col items-center mb-10">
                <div className="w-24 h-24 rounded-full bg-[#75E6DA] flex items-center justify-center shadow-lg mb-4">
                  <span className="text-black text-4xl font-black italic tracking-tighter">BP</span>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border-b border-white/20 pb-2 flex items-center gap-3">
                  <User size={18} className="text-gray-400" />
                  <span className="text-gray-400 text-sm">Username</span>
                </div>
                <div className="border-b border-white/20 pb-2 flex items-center gap-3">
                  <Lock size={18} className="text-gray-400" />
                  <span className="text-gray-400 text-sm">Password</span>
                </div>
                <button className="w-full bg-gradient-to-b from-[#4A7D9A] to-[#2B4C65] text-white py-3 rounded-full font-bold shadow-lg mt-4">
                  Login
                </button>
              </div>
            </div>
          </div>

          {/* Right: Steps Content */}
          <div className="flex-1 space-y-10">
            <h2 className="text-white text-4xl font-black tracking-tight mb-12">How to Get Started</h2>
            <div className="space-y-10">
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="w-10 h-10 rounded-full bg-[#76DB57] text-white flex items-center justify-center shrink-0 font-black">
                    {step.number}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-white text-xl font-bold">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* READY TO START WINNING AREA */}
        <div className="pt-20 border-t border-t-4 border-white/80 rounded-lg text-center space-y-8">
          <h2 className="text-white text-4xl md:text-5xl font-black tracking-tight">Ready to Start Winning?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-medium">
            Join thousands of satisfied customers who trust us as their official Betpro Dealer. Get your account today!
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
            <a href="https://wa.me/34664112557" target="_blank" className="w-full md:w-auto bg-[#83D64D] text-black px-8 py-4 rounded-full font-black text-sm flex items-center justify-center gap-2 hover:scale-105 transition-transform">
              <MessageCircle size={20} fill="black" />
              Message on WhatsApp
            </a>
            <a href="tel:+34664112557" className="w-full md:w-auto bg-[#1A1F26] text-white px-8 py-4 rounded-full font-black text-sm flex items-center justify-center gap-2 border border-white/10 hover:bg-white/5 transition-colors">
              Call +34 664 11 25 57
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GetStarted;