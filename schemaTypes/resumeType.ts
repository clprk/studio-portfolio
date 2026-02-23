import {defineField, defineType} from 'sanity'

export const resumeType = defineType({
  name: 'resume',
  title: 'Resume',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'resumeUrl',
      type: 'url',
    }),
    defineField({
      name: 'resume',
      type: 'file',
      title: 'Resume',
      options: {
        accept: '.pdf',
      },
    }),
  ],
})
