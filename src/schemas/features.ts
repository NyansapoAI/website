import { defineType } from "sanity"

export default defineType({
  name: "features",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "icon",
      type: "image",
      title: "Icon",
    },
    {
      name: "video",
      type: "url",
      title: "Video Url",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    // define features fields
  ],
})
