"use client";

import React from 'react';
import { MoveRight } from 'lucide-react';

const DealerFeature = () => {
  const WA_LINK = "https://wa.me/923222208585";

  return (
    <section className="bg-brand-black py-20 px-4">
      <div className="container mx-auto">
        {/* Fixed height container for desktop (581px) */}
        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20 lg:h-[581px]">
          
          {/* LEFT CONTENT AREA */}
          <div className="flex-1 flex flex-col justify-center max-w-2xl">
            <h2 className="text-white text-4xl md:text-5xl font-black leading-tight mb-8 tracking-tight">
              Your Trusted Betpro Dealer in Pakistan
            </h2>
            
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6">
              We are the leading official Betpro Dealer providing secure, fast, and 
              reliable betting accounts. With years of experience in the industry, we 
              ensure that our clients get the best experience with 24/7 support and 
              instant transactions.
            </p>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10">
              Whether you are a beginner looking to place your first bet or a 
              professional seeking higher limits and better odds, our dedicated team is 
              here to assist you every step of the way.
            </p>

            <div>
              <a 
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#88d64d] hover:bg-[#7bc442] text-black px-8 py-4 rounded-full font-bold text-sm transition-all group shadow-lg"
              >
                Get Your Account Now
                <MoveRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>

          {/* RIGHT DESIGN AREA */}
          <div className="flex-1 relative min-h-[400px] lg:min-h-full">
            {/* The Main Mask Image Container */}
            <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl">
              <img 
                src="/mask.png" 
                alt="Betpro Mockup" 
                className="w-full h-full object-cover object-top"
              />
              {/* Dark Gradient Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* FLOATING STATS CARD (Teal Section) */}
            <div className="absolute -bottom-6 -right-4 md:right-0 bg-[#16C79A] p-8 rounded-[2rem] text-white shadow-[0_20px_50px_rgba(0,0,0,0.3)] max-w-[280px] z-20">
              <h4 className="text-4xl font-black mb-1 tracking-tighter">50K +</h4>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 opacity-90">
                Transactions Daily
              </p>
              
              <div className="w-10 h-[2px] bg-white/30 mb-4" />
              
              <p className="text-[12px] leading-relaxed font-bold">
                Instant deposit & withdrawals through Joyia Dealers with 24/7 Support.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DealerFeature;