import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";
import Link from "next/link";

const RELATED_QUERY = defineQuery(`*[_type == "post" && slug.current != $currentSlug][0...3]{
  title,
  "slug": slug.current,
  "image": mainImage.asset->url,
  _createdAt
}`);

export default async function RelatedPosts({ currentSlug }: { currentSlug: string }) {
  const posts = await client.fetch(RELATED_QUERY, { currentSlug });

  if (posts.length === 0) return null;

  return (
    <section className="py-16 border-t border-white/5">
      <div className="flex items-center gap-2 mb-8">
        <span className="text-brand-neon text-xl">❯</span>
        <h2 className="text-xl font-bold uppercase tracking-wider text-white">
          You Might Also Like
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post: any) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group space-y-4">
            <div className="aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-white font-bold leading-snug group-hover:text-brand-neon transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm flex items-center gap-2">
                📅 {new Date(post._createdAt).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}