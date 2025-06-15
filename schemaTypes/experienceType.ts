import {defineField, defineType} from 'sanity'

export const experienceType = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'Company',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'Role',
        type: 'string',
      }),
    defineField({
        name: 'startDate',
        type: 'date',
    }),
    defineField({
        name: 'endDate',
        type: 'datetime',
    }),
    defineField({
      name: 'description',
      type: 'string',
    }),
  ],
})