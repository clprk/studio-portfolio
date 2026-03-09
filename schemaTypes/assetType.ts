import {defineField, defineType} from 'sanity'

export const assetType = defineType({
  name: 'asset',
  title: 'Assets',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'type',
      type: 'string',
      options: {
        list: ['image', 'url', 'file'],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'image',
      type: 'image',
      hidden: ({parent}: any) => parent?.type !== 'image',
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
      name: 'url',
      type: 'url',
      hidden: ({parent}: any) => parent?.type !== 'url',
    }),
    defineField({
      name: 'file',
      type: 'file',
      hidden: ({parent}: any) => parent?.type !== 'file',
      options: {
        accept: '.pdf',
      },
    }),
  ],
})
