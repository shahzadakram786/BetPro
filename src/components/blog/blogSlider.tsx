"use client";

import { Search } from 'lucide-react';

const BlogSidebar = () => {
  const recentPosts = [
    "Betpro Net",
    "BetPro Dealer Pakistan",
    "Betpro AED (Dirham) Account Available",
    "Betpro Account Limited? The common issues in Pakistan",
    "Withdraw Under Review Betpro App: Why & What to Do"
  ];

  return (
    <div className="space-y-10">
      {/* SEARCH WIDGET */}
      <div className="bg-[#0F1421] p-8 rounded-[2rem] border border-white/5">
        <h4 className="text-white font-black uppercase text-sm tracking-widest mb-6">Search</h4>
        <div className="flex gap-2">
          <div className="flex-1 bg-black/40 border border-white/10 rounded-xl px-4 flex items-center gap-2 group focus-within:border-brand-neon/50 transition-colors">
            <Search size={16} className="text-gray-500" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-transparent border-none outline-none text-white text-sm w-full py-3"
            />
          </div>
          <button className="bg-[#83D64D] text-black px-4 py-3 rounded-xl font-black text-[10px] uppercase hover:bg-white transition-colors">
            Search
          </button>
        </div>
      </div>

      {/* RECENT POSTS WIDGET */}
      <div className="bg-[#0F1421] p-8 rounded-[2rem] border border-white/5">
        <div className="mb-6">
          <h4 className="text-white font-black uppercase text-sm tracking-widest">Recent Posts</h4>
          <div className="w-8 h-1 bg-[#83D64D] mt-2 rounded-full" /> {/* The Green Line from your image */}
        </div>
        
        <ul className="space-y-4">
          {recentPosts.map((post, i) => (
            <li key={i} className="flex items-start gap-3 group cursor-pointer">
              <div className="w-1.5 h-1.5 rounded-full bg-[#83D64D] mt-2 group-hover:scale-150 transition-transform" />
              <span className="text-gray-400 text-sm font-medium hover:text-white transition-colors leading-snug">
                {post}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogSidebar;