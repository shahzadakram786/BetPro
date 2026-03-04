
import BlogCard from '@/components/blog/blogCard';
import BlogSidebar from '@/components/blog/blogSlider';
import Pagination from '@/components/blog/pagination';
import PageHeader from '@/components/PageHeader';
import { client } from '@/sanity/lib/client';
import { defineQuery } from 'next-sanity';
import React from 'react';
// import BlogCard from '@/components/BlogCard';
// import BlogSidebar from '@/components/BlogSidebar';
// import SubPageHero from '@/components/SubPageHero';

export const dynamic = 'force-dynamic';


// 1. Updated Query to handle Pagination and Search
const ALL_POSTS_QUERY = defineQuery(`{
  "posts": *[_type == "post" && (!defined($search) || title match $search + "*")] | order(_createdAt desc) [$start...$end] {
    title,
    "slug": slug.current,
    "image": mainImage.asset->url,
    category,
    tag,
    excerpt,
    _createdAt
  },
  "total": count(*[_type == "post" && (!defined($search) || title match $search + "*")])
}`);


const BlogPage = async({ searchParams }: { searchParams: Promise<{ page?: string; search?: string }> }) => {

// 2. Extract URL parameters
  const { page, search } = await searchParams;
  
  const currentPage = parseInt(page || "1");
  const POSTS_PER_PAGE = 3;
  
  // 3. Calculate the range for Sanity
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;

  // 4. Fetch data in the Parent
  const { posts, total } = await client.fetch(ALL_POSTS_QUERY, { 
    start, 
    end, 
    search: search || null 
  });

  const totalPages = Math.ceil(total / POSTS_PER_PAGE);








  return (
    <main className="bg-brand-black min-h-screen">
      {/* Dynamic Header using the component we built earlier */}
      <PageHeader title="Blogs" currentPage="Blog" />

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* LEFT: MAIN BLOG FEED (75%) */}
            <div className="lg:w-[72%] space-y-12">
               <BlogCard posts={posts} />
               {/* Pagination would go here */}
               <Pagination totalPages={totalPages} currentPage={currentPage} />
            </div>

            {/* RIGHT: STICKY SIDEBAR (25%) */}
            <aside className="lg:w-[28%] space-y-8">
               <BlogSidebar />
            </aside>

          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;