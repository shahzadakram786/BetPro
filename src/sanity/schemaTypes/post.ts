import { defineField, defineType } from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Post Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    }),
    defineField({
      name: 'category',
      title: 'Category (e.g. Bpexch)',
      type: 'string',
    }),
    defineField({
      name: 'tag',
      title: 'Tag (e.g. Desialdnn)',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Featured Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt (Short Summary)',
      type: 'text',
    }),
    defineField({
      name: 'body',
      title: 'Full Blog Content',
      type: 'array', 
      of: [{ type: 'block' }]
    }),
  ],
})