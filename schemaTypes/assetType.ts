import {defineField, defineType} from 'sanity'

export const assetType = defineType({
  name: 'asset',
  title: 'Asset',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'image',
        type: 'image',
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alt text',
          },
        ],
      }),
  ],
})