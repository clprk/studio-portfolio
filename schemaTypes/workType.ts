import {defineField, defineType} from 'sanity'

export const workType = defineType({
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      type: 'number',
    }),
    defineField({
      name: 'description',
      type: 'string',
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
    defineField({
      name: 'tags',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [
        {type: 'block',}, 
        { type: 'image' },
      ],
    }),
  ],
})