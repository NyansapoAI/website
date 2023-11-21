import { defineType } from "sanity"

export default defineType({
  name: "awards",
  type: "document",
  title: "Awards",

  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "mainImage",
      type: "image",
      title: "Main image",
    },
    {
      name: "link",
      type: "url",
      title: "Link",
    },
    {
      name: "year",
      type: "string",
      title: "Year",
    },
  ],
})
