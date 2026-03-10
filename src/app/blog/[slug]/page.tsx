import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import BlogSidebar from "@/components/blog/blogSlider";
import RelatedPosts from "@/components/blog/relatedPosts";
import { ptComponents } from "@/components/blog/ptComponent";

const POST_QUERY = defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  title,
  category,
  tag,
  "image": mainImage.asset->url,
  body,
  _createdAt
}`);

export default async function SinglePost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await client.fetch(POST_QUERY, { slug });

  if (!post) {
    return notFound();
  }



// --- START: SCHEMA MARKUP (JSON-LD) ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.image,
    "datePublished": post._createdAt,
    "dateModified": post._updatedAt || post._createdAt,
    "author": {
      "@type": "Organization",
      "name": "Betpro Dealer Pakistan",
      "url": "https://dealerbetpro.live"
    },
    "description": post.excerpt || post.title,
    "publisher": {
      "@type": "Organization",
      "name": "Dealer Betpro",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dealerbetpro.live/logo.png" // Ensure you have a logo at this path
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://dealerbetpro.live/blog/${slug}`
    }
  };
  // --- END: SCHEMA MARKUP ---











  return (
    <main className="bg-brand-black min-h-screen">
      <PageHeader title="Blog" parentPage="Blog" parentLink="/blog" currentPage={post.title} />

      {/* CHANGE: Adjusted vertical padding for mobile (py-10) vs desktop (py-20) */}
      <section className="py-10 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* LEFT: MAIN BLOG CONTENT (72%) */}
            <div className="w-full lg:w-[72%] space-y-12">
              {/* CHANGE: Removed px-4 on mobile to maximize readability width */}
              <article className="mx-auto space-y-8 md:space-y-10">
                
                <header className="space-y-4">
                  <div className="text-[#83D64D] font-bold uppercase tracking-widest text-[10px] md:text-xs">
                    {post.category} • {post.tag}
                  </div>
                  {/* CHANGE: Responsive title scaling */}
                  <h1 className="text-3xl md:text-5xl font-black leading-tight text-white">
                    {post.title}
                  </h1>
                </header>

                {post.image && (
                  <div className="relative overflow-hidden rounded-3xl md:rounded-[2.5rem] border border-white/10 shadow-2xl">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                )}

                {/* CHANGE: Added responsive text sizing for body */}
                <div className="prose prose-invert prose-green max-w-none text-gray-300 text-base md:text-lg leading-relaxed">
                  <PortableText value={post.body} components={ptComponents} />
                </div>
              </article>

              <RelatedPosts currentSlug={slug} />
            </div>

            {/* RIGHT: SIDEBAR (Stays sticky only on Desktop) */}
            <aside className="w-full lg:w-[28%] mt-12 lg:mt-0">
              <BlogSidebar />
            </aside>

          </div>
        </div>
      </section>
    </main>
  );
}