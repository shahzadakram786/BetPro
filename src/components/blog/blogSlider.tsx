"use client";

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const BlogSidebar = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  // Handle the Search functionality
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    // This pushes the search term to the main blog page URL
    router.push(`/blog?search=${encodeURIComponent(query)}`);
  };

  // Best Practice: In a real app, you'd fetch these from Sanity.
  // For now, we use dynamic objects to enable linking.
  const recentPosts = [
    { title: "Bpexch Net", slug: "bpexch-net" },
    { title: "BetPro Dealer Pakistan", slug: "betpro-dealer-pakistan" },
    { title: "Betpro AED (Dirham) Account Available", slug: "betpro-aed-account" },
    { title: "Betpro Account Limited? Issues in Pakistan", slug: "betpro-account-limited" },
    { title: "Withdraw Under Review Betpro App", slug: "withdraw-under-review" }
  ];

  return (
    <div className="space-y-10">
      {/* SEARCH WIDGET */}
      <div className="bg-[#0F1421] p-8 rounded-[2rem] border border-white/5">
        <h4 className="text-white font-black uppercase text-sm tracking-widest mb-6">Search</h4>
        <form onSubmit={handleSearch} className="flex gap-2">
          <div className="flex-1 bg-black/40 border border-white/10 rounded-xl px-4 flex items-center gap-2 group focus-within:border-brand-neon/50 transition-colors">
            <Search size={16} className="text-gray-500" />
            <input 
              type="text" 
              placeholder="Search..." 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-transparent border-none outline-none text-white text-sm w-full py-3"
            />
          </div>
          <button 
            type="submit" 
            className="bg-[#83D64D] text-black px-4 py-3 rounded-xl font-black text-[10px] uppercase hover:bg-white transition-colors"
          >
            Search
          </button>
        </form>
      </div>

      {/* RECENT POSTS WIDGET */}
      <div className="bg-[#0F1421] p-8 rounded-[2rem] border border-white/5">
        <div className="mb-6">
          <h4 className="text-white font-black uppercase text-sm tracking-widest">Recent Posts</h4>
          <div className="w-8 h-1 bg-[#83D64D] mt-2 rounded-full" />
        </div>
        
        <ul className="space-y-4">
          {recentPosts.map((post, i) => (
            <li key={i} className="flex items-start gap-3 group">
              <div className="w-1.5 h-1.5 rounded-full bg-[#83D64D] mt-2 group-hover:scale-150 transition-transform shrink-0" />
              <Link 
                href={`/blog/${post.slug}`} 
                className="text-gray-400 text-sm font-medium hover:text-white transition-colors leading-snug"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* RECENT COMMENTS (Matching your screenshot) */}
      <div className="bg-[#0F1421] p-8 rounded-[2rem] border border-white/5">
        <div className="mb-6">
          <h4 className="text-white font-black uppercase text-sm tracking-widest">Recent Comments</h4>
          <div className="w-8 h-1 bg-[#83D64D] mt-2 rounded-full" />
        </div>
        <p className="text-gray-500 text-sm italic">No comments to show.</p>
      </div>
    </div>
  );
};

export default BlogSidebar;