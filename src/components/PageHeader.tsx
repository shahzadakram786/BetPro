"use client";

import React from 'react';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  currentPage: string;
  parentPage?: string; // e.g., "Blog"
  parentLink?: string; // e.g., "/blog"
}

const PageHeader = ({ title, currentPage, parentPage, parentLink }: PageHeaderProps) => {
  return (
    <section className="relative w-full bg-brand-black pt-20 pb-16 px-4 border-b border-white/5 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="container mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
            {title}
          </h1>
          
          <div className="flex items-center gap-2 text-[13px] font-medium tracking-wide">
            <span className="text-gray-500">You are here:</span>
            <Link href="/" className="text-brand-neon hover:brightness-110 transition-all">
              Home
            </Link>

            {/* If a parent page exists, show it as a clickable link */}
            {parentPage && parentLink && (
              <>
                <span className="text-gray-500">/</span>
                <Link href={parentLink} className="text-brand-neon hover:brightness-110 transition-all">
                  {parentPage}
                </Link>
              </>
            )}

            <span className="text-gray-500">/</span>
            <span className="text-gray-400 truncate max-w-[200px]">{currentPage}</span>
          </div>
        </div>

        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm self-start md:self-center">
          <ShieldCheck size={16} className="text-brand-neon" />
          <span className="text-white/90 text-xs font-bold uppercase tracking-widest text-nowrap">
            Official Dealer Services
          </span>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;