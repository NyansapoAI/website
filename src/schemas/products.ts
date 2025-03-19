import { defineType } from "sanity"

export default defineType({
  name: "products",
  type: "document",
  title: "Products",

  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "summary",
      type: "text",
      title: "Summary",
    },
    {
      name: "summaryHexColor",
      type: "string",
      title: "Summary Hex Color",
    },
    {
      name: "detailsTitle",
      type: "string",
      title: "Details Title",
    },
    {
      name: "detailsLink",
      type: "string",
      title: "Details Link",
    },
    {
      name: "detailsSummary",
      type: "array",
      title: "Details Summary",
      description: "Supports both text and bullet points",
      of: [
        {
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [{ title: "Bullet", value: "bullet" }],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
          },
        },
      ],
    },
    {
      name: "detailsImage",
      type: "image",
      title: "Details image",
    },
    {
      name: "video",
      type: "url",
      title: "Video Url",
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "reference", to: [{ type: "features" }] }],
    },
    {
      name: "whyNyansapoTitle",
      type: "string",
      title: "Why Nyansapo Title",
    },
    {
      name: "whyNyansapoSummary",
      type: "array",
      title: "Why Nyansapo Summary",
      description: "Supports both text and bullet points",
      of: [
        {
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [{ title: "Bullet", value: "bullet" }],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
          },
        },
      ],
    },
    {
      name: "hasAwards",
      type: "boolean",
      title: "Has Awards Section",
      description:
        "Enable this for products with awards (e.g. Nyansapo Teaching App)",
    },
    {
      name: "awardsTitle",
      type: "string",
      title: "Awards Section Title",
      description: "Title for the awards section",
    },
    {
      name: "awardsDescription",
      type: "string",
      title: "Awards Description",
      description:
        "Brief description of the awards (e.g. 'Recognized as one of the Strongest Foundational Literacy and Numeracy Assessment Solutions')",
    },
    {
      name: "awardLogos",
      type: "array",
      title: "Award Logos",
      description: "Logos of awards and accolades",
      of: [
        {
          type: "image",
          title: "Award Logo",
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative Text",
              description: "A description of the award (for accessibility)",
            },
          ],
        },
      ],
    },
    {
      name: "reachOut",
      type: "text",
      title: "Reach Out text",
    },
    {
      name: "mainImage",
      type: "image",
      title: "Main image",
    },
    {
      name: "publishedAt",
      type: "datetime",
      title: "Published at",
    },
    {
      name: "about",
      type: "array",
      title: "About",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
})
