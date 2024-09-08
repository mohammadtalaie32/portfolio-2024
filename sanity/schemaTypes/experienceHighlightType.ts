import { defineType, defineField } from 'sanity';

export const experienceHighlightType = defineType({
  name: 'experienceHighlight',
  title: 'Experience Highlight',
  type: 'document',
  fields: [
    defineField({
      name: 'years',
      title: 'Years of Experience',
      type: 'number',
      description: 'Total years of professional experience',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief summary of your experience or services offered',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
