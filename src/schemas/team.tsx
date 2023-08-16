import { defineType } from "sanity"

export default defineType({
  name: "team",
  type: "document",
  title: "Team",

  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
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
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "mainImage",
      type: "image",
      title: "Main image",
    },
    {
      name: "video",
      type: "url",
      title: "Video Link",
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
