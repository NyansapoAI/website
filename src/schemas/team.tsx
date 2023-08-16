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
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "about",
      type: "text",
      title: "About",
    },
    {
      name: "photo",
      type: "image",
      title: "Photo",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "photo",
    },
  },
})
