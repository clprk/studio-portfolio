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
      options: {
        hotspot: true
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
      name: 'headline',
      type: 'string',
    }),
    defineField({
      name: 'summary',
      type: 'array',
      of: [
        {type: 'block',}, 
      ]
    }),
    defineField({
      name: 'role',
      type: 'string',
    }),
    defineField({
      name: 'timeline',
      type: 'string',
    }),
    defineField({
      name: 'body',
      type: 'array',
      title: 'Content Blocks',
      description: 'Drag and drop to reorder content blocks',
      of: [
        {
          type: 'object',
          name: 'imageBlock',
          title: 'Image Block',
          fields: [
            {
              name: 'heading',
              type: 'string',
              title: 'Heading',
              description: 'Optional heading for this image block'
            },
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              options: {
                hotspot: true
              },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative text'
                }
              ],
              validation: (rule) => rule.required()
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              description: 'Optional caption for the image'
            }
          ],
          preview: {
            select: {
              title: 'heading',
              subtitle: 'caption',
              media: 'image'
            },
            prepare({title, subtitle, media}) {
              return {
                title: title || 'Image Block',
                subtitle: subtitle || 'No caption',
                media: media
              }
            }
          }
        },
        {
          type: 'object',
          name: 'textBlock',
          title: 'Text Block',
          fields: [
            {
              name: 'heading',
              type: 'string',
              title: 'Heading',
              description: 'Optional heading for this text block'
            },
            {
              name: 'content',
              type: 'array',
              title: 'Content',
              of: [{type: 'block'}],
              validation: (rule) => rule.required()
            }
          ],
          preview: {
            select: {
              title: 'heading',
              subtitle: 'content'
            },
            prepare({title, subtitle}) {
              const block = (subtitle || []).find((block: any) => block._type === 'block')
              const content = block
                ? block.children
                    ?.filter((child: any) => child._type === 'span')
                    ?.map((span: any) => span.text)
                    ?.join('')
                : 'No content'
              
              return {
                title: title || 'Text Block',
                subtitle: content ? content.substring(0, 100) + '...' : 'No content'
              }
            }
          }
        },
        {
          type: 'object',
          name: 'gridBlock',
          title: 'Grid Layout',
          fields: [
            {
              name: 'heading',
              type: 'string',
              title: 'Heading',
              description: 'Optional heading for this grid section'
            },
            {
              name: 'columns',
              type: 'string',
              title: 'Number of Columns',
              options: {
                list: [
                  { title: '2 Columns', value: '2' },
                  { title: '3 Columns', value: '3' },
                  { title: '4 Columns', value: '4' }
                ]
              },
              validation: (rule) => rule.required()
            },
            {
              name: 'items',
              type: 'array',
              title: 'Grid Items',
              of: [
                {
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
                          { title: 'Text', value: 'text' },
                          { title: 'Image', value: 'image' }
                        ]
                      },
                      validation: (rule) => rule.required()
                    },
                    {
                      name: 'subtitle',
                      type: 'string',
                      title: 'Subtitle',
                    },
                    {
                      name: 'content',
                      type: 'array',
                      title: 'Text Content',
                      of: [{type: 'block'}],
                      hidden: ({ parent }) => parent?.type !== 'text'
                    },
                    {
                      name: 'image',
                      type: 'image',
                      title: 'Image',
                      options: {
                        hotspot: true
                      },
                      fields: [
                        {
                          name: 'alt',
                          type: 'string',
                          title: 'Alternative text'
                        }
                      ],
                      hidden: ({ parent }) => parent?.type !== 'image'
                    },
                    {
                      name: 'caption',
                      type: 'string',
                      title: 'Caption',
                      description: 'Optional caption'
                    }
                  ],
                  preview: {
                    select: {
                      type: 'type',
                      subtitle: 'subtitle',
                      content: 'content',
                      caption: 'caption',
                      media: 'image'
                    },
                    prepare({ type, subtitle, content, caption, media }) {
                      const title = subtitle || `${type === 'text' ? 'Text' : 'Image'} Item`;
                      let subtitleText = '';
                      
                      if (type === 'text' && content) {
                        const block = content.find((block: any) => block._type === 'block');
                        subtitleText = block
                          ? block.children
                              ?.filter((child: any) => child._type === 'span')
                              ?.map((span: any) => span.text)
                              ?.join('')
                              ?.substring(0, 50) + '...'
                          : '';
                      } else if (type === 'image') {
                        subtitleText = 'Image item';
                      }

                      return {
                        title,
                        subtitle: subtitleText,
                        media: type === 'image' ? media : undefined
                      };
                    }
                  }
                }
              ],
              validation: (rule) => rule.min(1).max(12)
            }
          ],
          preview: {
            select: {
              heading: 'heading',
              columns: 'columns',
              items: 'items'
            },
            prepare({ heading, columns, items }) {
              const itemCount = items ? items.length : 0;
              return {
                title: heading || `${columns}-Column Grid`,
                subtitle: `${itemCount} items in ${columns} columns`
              };
            }
          }
        }
      ],
    }),
  ],
})