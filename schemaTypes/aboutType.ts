import {defineField, defineType} from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      type: 'string',
    }),
    defineField({
      name: 'leftText',
      type: 'string',
    }),
    defineField({
      name: 'centerText',
      type: 'string',
    }),
    defineField({
      name: 'rightText',
      type: 'string',
    }),
    defineField({
      name: 'profileImage',
      type: 'image',
      options: {hotspot: true},
      fields: [{name: 'alt', type: 'string', title: 'Alt Text'}],
    }),
    defineField({
      name: 'summary',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'favorites',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'experience',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'experienceItem',
          title: 'Experience',
          fields: [
            {
              name: 'order',
              type: 'number',
            },
            {
              name: 'company',
              type: 'string',
            },
            {
              name: 'role',
              type: 'string',
            },
            {
              name: 'dates',
              type: 'string',
            },
            {
              name: 'description',
              type: 'string',
            },
          ],
        },
      ],
    }),
  ],
})
