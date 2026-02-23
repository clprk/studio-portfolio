import {defineField, defineType} from 'sanity'

export const extraType = defineType({
  name: 'extra',
  title: 'Extra',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'order',
      type: 'number',
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text',
        },
      ],
    }),
    defineField({
      name: 'link',
      type: 'url',
    }),
    defineField({
      name: 'summary',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'dates',
      type: 'string',
    }),
  ],
})
