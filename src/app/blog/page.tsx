
import BlogCard from '@/components/blog/blogCard';
import BlogSidebar from '@/components/blog/blogSlider';
import PageHeader from '@/components/PageHeader';
import React from 'react';
// import BlogCard from '@/components/BlogCard';
// import BlogSidebar from '@/components/BlogSidebar';
// import SubPageHero from '@/components/SubPageHero';

const BlogPage = () => {
  return (
    <main className="bg-brand-black min-h-screen">
      {/* Dynamic Header using the component we built earlier */}
      <PageHeader title="Blogs" currentPage="Blog" />

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* LEFT: MAIN BLOG FEED (75%) */}
            <div className="lg:w-[72%] space-y-12">
               <BlogCard />
               {/* Pagination would go here */}
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