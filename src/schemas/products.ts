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
