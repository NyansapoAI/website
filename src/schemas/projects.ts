import { defineType } from "sanity"

export default defineType({
  name: "projects",
  type: "document",
  title: "Projects",

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
      name: "description",
      type: "text",
      title: "Description",
    },

    {
      name: "link",
      type: "url",
      title: "LinkedIn Url",
    },
    {
      name: "video",
      type: "url",
      title: "Video Url",
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
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
})
