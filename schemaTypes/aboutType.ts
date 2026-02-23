import {defineField, defineType} from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      type: 'string',
      title: 'Header',
    }),
    defineField({
      name: 'leftTinyText',
      type: 'string',
      title: 'Left Text',
    }),
    defineField({
      name: 'centerTinyText',
      type: 'string',
      title: 'Center Text',
    }),
    defineField({
      name: 'rightTinyText',
      type: 'string',
      title: 'Right Text',
    }),
    defineField({
      name: 'profileImage',
      type: 'image',
      title: 'Profile Image',
      options: {hotspot: true},
      fields: [{name: 'alt', type: 'string', title: 'Alt Text'}],
    }),
    defineField({
      name: 'summary',
      type: 'array',
      title: 'Summary',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'favorites',
      type: 'array',
      title: 'Favorites',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'experience',
      title: 'Experience',
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
