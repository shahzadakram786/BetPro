// This goes in src/app/blog/[slug]/page.tsx
import React from 'react';

export default function SinglePost({ params }: { params: { slug: string } }) {
  return (
    <div className="text-white p-20">
      <h1>Reading Post: {params.slug}</h1>
      {/* This is where the full content of the post will go */}
    </div>
  );
}