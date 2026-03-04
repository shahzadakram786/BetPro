"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

const Pagination = ({ totalPages, currentPage }: PaginationProps) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-4 py-10">
      {/* Previous Button */}
      <Link
        href={`/blog?page=${currentPage - 1}`}
        className={`p-3 rounded-xl border border-white/10 transition-colors ${
          currentPage <= 1 ? "pointer-events-none opacity-20" : "hover:bg-brand-neon hover:text-black"
        }`}
      >
        <ChevronLeft size={20} />
      </Link>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          href={`/blog?page=${page}`}
          className={`w-12 h-12 flex items-center justify-center rounded-xl font-bold transition-all ${
            currentPage === page
              ? "bg-brand-neon text-black shadow-[0_0_20px_rgba(131,214,77,0.3)]"
              : "border border-white/10 text-white hover:border-brand-neon/50"
          }`}
        >
          {page}
        </Link>
      ))}

      {/* Next Button */}
      <Link
        href={`/blog?page=${currentPage + 1}`}
        className={`p-3 rounded-xl border border-white/10 transition-colors ${
          currentPage >= totalPages ? "pointer-events-none opacity-20" : "hover:bg-brand-neon hover:text-black"
        }`}
      >
        <ChevronRight size={20} />
      </Link>
    </div>
  );
};

export default Pagination;