import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import BlogSidebar from "@/components/blog/blogSlider";
import RelatedPosts from "@/components/blog/relatedPosts";

// 1. The query to fetch the specific post by slug
const POST_QUERY = defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  title,
  category,
  tag,
  "image": mainImage.asset->url,
  body,
  _createdAt
}`);

// 2. Define params as a Promise for Next.js 15
export default async function SinglePost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // 3. Await the params to "unwrap" the slug
  const { slug } = await params;

  // 4. Fetch the data using the unwrapped slug
  const post = await client.fetch(POST_QUERY, { slug });

  if (!post) {
    return notFound();
  }

  return (
    <main className="bg-brand-black min-h-screen">
      <PageHeader title="Blog" parentPage="Blog" parentLink="/blog" currentPage={post.title} />

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* LEFT: MAIN BLOG FEED (75%) */}
            <div className="lg:w-[72%] space-y-12">
              <article className="px-4 mx-auto space-y-10">
                <header className="space-y-4">
                  <div className="text-[#83D64D] font-bold uppercase tracking-widest text-xs">
                    {post.category} • {post.tag}
                  </div>
                  <h1 className="text-5xl font-black leading-tight">
                    {post.title}
                  </h1>
                </header>

                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full rounded-[2.5rem] border border-white/10 shadow-2xl"
                  />
                )}

                {/* 5. Render the Sanity Body content using PortableText */}
                <div className="prose prose-invert prose-green max-w-none text-gray-300 text-lg leading-relaxed">
                  <PortableText value={post.body} />
                </div>
              </article>



              <RelatedPosts currentSlug={slug} />
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
}
