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
      name: "order",
      type: "number",
      title: "Order",
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
      name: "twitter",
      type: "url",
      title: "X Profile",
    },
    {
      name: "linkedin",
      type: "url",
      title: "Linkedin Profile",
    },
    {
      name: "photo",
      type: "image",
      title: "Photo",
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "photo",
    },
  },
})
