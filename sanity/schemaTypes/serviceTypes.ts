import { defineType, defineField } from 'sanity';
import { BsFillGridFill } from 'react-icons/bs'; // Optional icon for the schema

export const servicesType = defineType({
  name: 'services',
  title: 'Services',
  type: 'document',
  icon: BsFillGridFill,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Short, attention-grabbing title for the service or feature.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief description highlighting the feature or service.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'url', // This can be a string representing the icon class or name if using a specific icon library
      description: 'The icon that visually represents this feature.',
    }),
  ],
});

export const servicesSection = defineType({
  name: 'servicesSection',
  title: 'Services Section',
  type: 'document',
  icon: BsFillGridFill,
  fields: [
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      description: 'List of services or features to display.',
      of: [{ type: 'reference', to: [{ type: 'services' }] }],
    }),
  ],
});
