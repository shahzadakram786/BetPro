"use client";

import React from 'react';
import { Zap, ShieldCheck, Headphones } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      title: "Fast Transactions",
      description: "Enjoy lightning-fast deposits and withdrawals. We process all your requests within minutes, ensuring you never miss an opportunity.",
      Icon: Zap
    },
    {
      title: "100% Secure",
      description: "Your privacy and security are our top priority. We use advanced encryption and strict confidentiality protocols to protect your data.",
      Icon: ShieldCheck
    },
    {
      title: "24/7 Support",
      description: "Our dedicated customer support team is available round the clock to assist you with any queries or account-related issues.",
      Icon: Headphones
    }
  ];

  return (
    <section className="bg-[#0B0F1A] py-24 px-4">
      <div className="container mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-white text-4xl md:text-5xl font-black tracking-tight">
            Why Choose Us?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">
            Experience the best service in the market with our premium dealer benefits.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-[#0F1421] border border-white/5 p-10 rounded-[2.5rem] flex flex-col items-center text-center group hover:border-brand-neon/20 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-8 group-hover:bg-brand-neon/10 transition-colors">
                <benefit.Icon 
                  size={28} 
                  className="text-brand-neon" 
                />
              </div>

              {/* Text Content */}
              <h3 className="text-white text-2xl font-black mb-4 tracking-tight">
                {benefit.title}
              </h3>
              <p className="text-gray-400 leading-relaxed font-medium">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;