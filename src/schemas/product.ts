import { defineType } from "sanity"

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Product Title",
      type: "string",
      description: 'Name of the product (e.g. "Nyansapo Teaching App")',
    },
    {
      name: "tagline",
      title: "Tagline",
      type: "string",
      description:
        'Short tagline (e.g. "Data-Driven Assessments. Scalable Impact.")',
    },
    {
      name: "mainDescription",
      title: "Main Description",
      type: "text",
      description: "The main introduction paragraph about the product",
    },
    {
      name: "secondaryDescription",
      title: "Secondary Description",
      type: "text",
      description: "Additional context or benefits paragraph",
    },
    {
      name: "whyChooseTitle",
      title: "Why Choose Section Title",
      type: "string",
      description: 'Title for the "Why Choose" section',
    },
    {
      name: "whyChooseIntro",
      title: "Why Choose Introduction",
      type: "text",
      description: "Introduction text for the why choose section",
    },
    {
      name: "features",
      title: "Product Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Feature Title",
              type: "string",
            },
            {
              name: "description",
              title: "Feature Description",
              type: "text",
            },
          ],
        },
      ],
    },
    {
      name: "groupingLevels",
      title: "Student Grouping Levels",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "level",
              title: "Level Name",
              type: "string",
            },
            {
              name: "color",
              title: "Level Color",
              type: "string",
            },
            {
              name: "description",
              title: "Level Description",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "learningOutcomes",
      title: "Learning Outcomes",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Outcome Title",
              type: "string",
            },
            {
              name: "description",
              title: "Outcome Description",
              type: "text",
            },
          ],
        },
      ],
    },
    {
      name: "stakeholderBenefits",
      title: "Stakeholder Benefits",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "stakeholder",
              title: "Stakeholder Type",
              type: "string",
            },
            {
              name: "benefit",
              title: "Benefit Description",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "callToAction",
      title: "Call To Action",
      type: "object",
      fields: [
        {
          name: "title",
          title: "CTA Title",
          type: "string",
        },
        {
          name: "description",
          title: "CTA Description",
          type: "text",
        },
      ],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
  ],
})
