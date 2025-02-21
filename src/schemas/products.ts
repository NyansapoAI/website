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
      type: "text",
      title: "Details Summary",
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
      type: "text",
      title: "Why Nyansapo Summary",
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
