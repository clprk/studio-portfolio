import {defineField, defineType} from 'sanity'

export const experienceType = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'order',
      type: 'number',
    }),
    defineField({
      name: 'company',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'role',
        type: 'string',
      }),
    defineField({
        name: 'dates',
        type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'string',
    }),
  ],
})