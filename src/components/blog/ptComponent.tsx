// src/components/blog/PortableTextComponents.tsx
import { PortableTextComponents } from "@portabletext/react";

export const ptComponents: PortableTextComponents = {
  block: {
    // Customizing the main Headings
    h2: ({ children }) => (
      <h2 className="text-3xl font-black text-white mt-12 mb-6 uppercase tracking-tight leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold text-brand-neon mt-8 mb-4">
        {children}
      </h3>
    ),
    // Styling standard paragraphs
    normal: ({ children }) => (
      <p className="text-gray-400 text-lg leading-relaxed mb-6 font-medium">
        {children}
      </p>
    ),
    // Styling quotes for highlights
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-brand-neon bg-white/5 p-6 rounded-r-2xl my-8 italic text-white shadow-inner">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="space-y-4 mb-8 ml-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="space-y-4 mb-8 ml-6 list-decimal text-brand-neon font-bold">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-3">
        <span className="text-brand-neon mt-1.5 shrink-0 text-xs">❯</span>
        <span className="text-gray-300 font-medium leading-snug">{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li className="text-gray-300 font-medium leading-snug">
        <span className="pl-2">{children}</span>
      </li>
    ),
  },
  marks: {
    // Styling links within the text
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/") ? "noopener noreferrer" : undefined;
      const target = !value.href.startsWith("/") ? "_blank" : undefined;
      return (
        <a 
          href={value.href} 
          rel={rel}
          target={target}
          className="text-brand-neon font-bold hover:text-white underline decoration-brand-neon/30 hover:decoration-white transition-all underline-offset-4"
        >
          {children}
        </a>
      );
    },
    // Styling bold text
    strong: ({ children }) => (
      <strong className="text-white font-black">{children}</strong>
    ),
  },
};