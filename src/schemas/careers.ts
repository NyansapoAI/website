import { defineType } from "sanity"

export default defineType({
  name: "careers",
  type: "document",
  title: "Careers",

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
      name: "formUrl",
      type: "url",
      title: "Application Form Link",
    },
    {
      name: "deadline",
      type: "datetime",
      title: "Application Deadline",
    },
    {
      name: "open",
      type: "boolean",
      title: "Applications Open",
    },
    {
      name: "type",
      type: "string",
      title: "Duration",
    },
    {
      name: "location",
      type: "string",
      title: "Location",
    },
    {
      name: "department",
      type: "string",
      title: "Department",
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
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
})
