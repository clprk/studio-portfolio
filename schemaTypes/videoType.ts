// schemaTypes/videoType.ts
import {defineType, defineField} from 'sanity'

export const videoType = defineType({
  name: 'videoType',
  title: 'Video',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'video',
      type: 'mux.video',
      title: 'Video file',
    }),
  ],
})
