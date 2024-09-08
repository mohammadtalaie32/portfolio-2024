import { BsArrowUpSquareFill } from 'react-icons/bs';
import {defineArrayMember, defineField, defineType, UserAvatar} from 'sanity'

export const headlineType = defineType ({
  name: "headline",
  title: "Headline",
  type: "document",
  icon: BsArrowUpSquareFill,
  fields: [
    defineField({
        name: "headline",
        title: "Headline",
        type: "array",
        of: [{ type: 'block' }],
        description: "In one short sentence, what do you do?",
        validation: (Rule) => Rule.required(),
      }),
      {
        name: "profileImage",
        title: "Profile Image",
        type: "image",
        description: "Upload a profile picture",
        options: { hotspot: true },
        fields: [
          {
            name: "alt",
            title: "Alt",
            type: "string",
          },
        ],
      },
      {
        name: "resumeURL",
        title: "Upload Resume",
        type: "file",
      },
      {
        name: "socialLinks",
        title: "Social Links",
        type: "object",
        description: "Add your social media links:",
        fields: [
          {
            name: "github",
            title: "Github URL",
            type: "url",
            initialValue: "https://github.com/",
          },
          {
            name: "linkedin",
            title: "Linkedin URL",
            type: "url",
            initialValue: "https://linkedin.com/in/",
          },
        ],
    },
      {
        name: "flags",
        title: "Flags",
        type: "array",
        description: "Add a list of flags to display below headline",
        of: [{ type: "string" }],
      }
  ],
});