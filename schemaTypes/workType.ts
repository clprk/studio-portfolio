import {defineField, defineType} from 'sanity'

export const workType = defineType({
  // Work - Case Study
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    // Identifying Fields
    defineField({
      name: 'order',
      type: 'number',
    }),
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'string',
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
      name: 'tags',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
    }),
    defineField({
      name: 'headline',
      type: 'string',
    }),
    defineField({
      name: 'summary',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'role',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'timeline',
      type: 'string',
    }),
    // Body of Case Study
    defineField({
      name: 'body',
      type: 'array',
      title: 'Body',
      of: [
        {
          // Image Block
          type: 'object',
          name: 'imageBlock',
          title: 'Image Block',
          fields: [
            {
              name: 'heading',
              type: 'string',
              title: 'Heading',
            },
            {
              name: 'image',
              type: 'image',
              title: 'Image',
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
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
            {
              name: 'dark',
              type: 'boolean',
              title: 'Dark Mode',
            },
          ],
          initialValue: {
            dark: false,
          },
          preview: {
            select: {
              title: 'heading',
              media: 'image',
            },
            prepare({title, media}) {
              return {
                title: title || '/ Image Block /',
                media: media,
              }
            },
          },
        },
        {
          // Text Block
          type: 'object',
          name: 'textBlock',
          title: 'Text Block',
          fields: [
            {
              name: 'heading',
              type: 'string',
              title: 'Heading',
            },
            {
              name: 'content',
              type: 'array',
              title: 'Content',
              of: [{type: 'block'}],
            },
            {
              name: 'dark',
              type: 'boolean',
              title: 'Dark Mode',
            },
            {
              name: 'header',
              type: 'boolean',
              title: 'Section Header',
            },
          ],
          initialValue: {
            dark: false,
            header: false,
          },
          preview: {
            select: {
              title: 'heading',
              subtitle: 'content',
            },
            prepare({title}) {
              return {
                title: title || '/ Text Block /',
              }
            },
          },
        },
        {
          // Grid Block
          type: 'object',
          name: 'gridBlock',
          title: 'Grid Block',
          fields: [
            {
              name: 'heading',
              type: 'string',
              title: 'Heading',
            },
            {
              name: 'columns',
              type: 'string',
              title: 'Number of Columns',
              options: {
                list: [
                  {title: '2 Columns', value: '2'},
                  {title: '3 Columns', value: '3'},
                  {title: '4 Columns', value: '4'},
                ],
              },
            },
            {
              name: 'items',
              type: 'array',
              title: 'Grid Items',
              of: [
                {
                  // Grid Item
                  type: 'object',
                  name: 'gridItem',
                  title: 'Grid Item',
                  fields: [
                    {
                      name: 'type',
                      type: 'string',
                      title: 'Item Type',
                      options: {
                        list: [
                          {title: 'Text', value: 'text'},
                          {title: 'Image', value: 'image'},
                        ],
                      },
                    },
                    {
                      name: 'subtitle',
                      type: 'string',
                      title: 'Subtitle',
                    },
                    {
                      name: 'content',
                      type: 'array',
                      title: 'Content',
                      of: [{type: 'block'}],
                      hidden: ({parent}) => parent?.type !== 'text',
                    },
                    {
                      name: 'image',
                      type: 'image',
                      title: 'Image',
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
                      hidden: ({parent}) => parent?.type !== 'image',
                    },
                    {
                      name: 'caption',
                      type: 'string',
                      title: 'Caption',
                      hidden: ({parent}) => parent?.type !== 'image',
                    },
                  ],
                  preview: {
                    select: {
                      type: 'type',
                      subtitle: 'subtitle',
                      content: 'content',
                      caption: 'caption',
                      media: 'image',
                    },
                    prepare({type, subtitle, media}) {
                      const title = subtitle || `/ ${type === 'text' ? 'Text' : 'Image'} Item /`

                      return {
                        title,
                        media: type === 'image' ? media : undefined,
                      }
                    },
                  },
                },
              ],
            },
            {
              name: 'dark',
              type: 'boolean',
              title: 'Dark Mode',
            },
          ],
          initialValue: {
            dark: false,
          },
          preview: {
            select: {
              heading: 'heading',
              columns: 'columns',
              items: 'items',
            },
            prepare({heading, columns}) {
              return {
                title: heading || `/ ${columns}-Column Grid /`,
              }
            },
          },
        },
      ],
    }),
  ],
})
