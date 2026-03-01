"use client";

import React from 'react';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  currentPage: string;
}

const PageHeader = ({ title, currentPage }: PageHeaderProps) => {
  return (
    <section className="relative w-full bg-brand-black pt-20 pb-16 px-4 border-b border-white/5 overflow-hidden">
      
      {/* Background Grid Pattern (Matching the subtle texture in your image) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="container mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
        
        {/* Left Side: Title and Breadcrumb */}
        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
            {title}
          </h1>
          
          <div className="flex items-center gap-2 text-[13px] font-medium tracking-wide">
            <span className="text-gray-500">You are here:</span>
            <Link href="/" className="text-brand-neon hover:brightness-110 transition-all">
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-400">{currentPage}</span>
          </div>
        </div>

        {/* Right Side: Official Dealer Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm self-start md:self-center">
          <ShieldCheck size={16} className="text-brand-neon" />
          <span className="text-white/90 text-xs font-bold uppercase tracking-widest">
            Official Dealer Services
          </span>
        </div>

      </div>
    </section>
  );
};

export default PageHeader;