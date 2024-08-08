import { defineType } from "sanity"

export default defineType({
  name: "News&Stories",
  type: "document",
  title: "News&Stories",

  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "link",
      type: "url",
      title: "Link",
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
      name: "body",
      type: "array",
      title: "Body",
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
