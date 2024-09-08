import { BsBriefcase } from 'react-icons/bs'; // Optional icon for Work Experience
import { defineField, defineType } from 'sanity';

export const workExperienceType = defineType({
  name: 'workExperience',
  title: 'Work Experience',
  type: 'document',
  icon: BsBriefcase,
  fields: [
    defineField({
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
      description: 'The title of your position.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      description: 'Name of the company where you worked.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Where the company is based.',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      description: 'When you started the job.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      description: 'When you ended the job (leave empty if current job).',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
    }),
    defineField({
      name: 'isCurrent',
      title: 'Current Job?',
      type: 'boolean',
      description: 'Is this your current job?',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'A brief description of your responsibilities and achievements.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'technologiesUsed',
      title: 'Technologies Used',
      type: 'array',
      description: 'List of technologies used in this role.',
      of: [{ type: 'string' }],
    }),
  ],
});
