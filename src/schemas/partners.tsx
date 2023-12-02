import { defineType } from "sanity"

export default defineType({
  name: "partners",
  type: "document",
  title: "Partners",

  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "logo",
      type: "image",
      title: "Logo",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
  ],
})
