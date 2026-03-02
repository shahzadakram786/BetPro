import { defineQuery } from "next-sanity";

// This query grabs exactly what your BlogCard needs to display
export const POSTS_QUERY = defineQuery(`*[_type == "post"] | order(_createdAt desc) {
  title,
  "slug": slug.current,
  category,
  tag,
  "image": mainImage.asset->url,
  excerpt,
  _createdAt
}`);