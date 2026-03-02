import React from 'react';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';
import { sanityFetch } from '@/sanity/lib/live'; // Helper created by Sanity init
import { POSTS_QUERY } from '@/sanity/lib/queries';

const BlogCard = async () => {
  // Fetch real posts from Sanity
  const { data: posts } = await sanityFetch({ query: POSTS_QUERY });

  if (!posts || posts.length === 0) {
    return <div className="text-white p-10">No blog posts found. Create one in /admin!</div>;
  }

  return (
    <div className="space-y-12">
      {posts.map((post: any) => (
        <article 
          key={post.slug} 
          className="bg-[#0F1421] rounded-[2.5rem] overflow-hidden border border-white/5 transition-all hover:border-white/10 group"
        >
          {/* META INFO */}
          <div className="p-6 pb-0 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-gray-500">
            <span>{post.category}</span>
            <span className="text-white/20">•</span>
            <span>{post.tag}</span>
          </div>

          {/* TITLE */}
          <div className="px-6 py-4">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-white text-3xl font-black tracking-tight hover:text-[#83D64D] transition-colors">
                {post.title}
              </h2>
            </Link>
          </div>

          {/* IMAGE */}
          <div className="px-6">
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/5">
              <img 
                src={post.image || "/placeholder.png"} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* EXCERPT & BUTTON */}
          <div className="p-8 pt-6 space-y-6">
            <p className="text-gray-400 text-sm leading-relaxed font-medium line-clamp-3">
              {post.excerpt}
            </p>
            <Link 
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-2 text-white text-xs font-black uppercase tracking-widest hover:text-[#83D64D] transition-colors group/btn"
            >
              Continue Reading
              <MoveRight size={16} className="group-hover/btn:translate-x-2 transition-transform text-[#83D64D]" />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};

export default BlogCard;