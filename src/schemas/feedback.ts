import { defineType } from "sanity"
export default defineType({
  name: "feedback",
  type: "document",
  title: "Assessment Feedback",
  fields: [
    {
      name: "email",
      type: "string",
      title: "Email",
    },
    {
      name: "experience",
      type: "string",
      title: "Experience",
    },
    {
      name: "feedback",
      type: "string",
      title: "Feedback",
    },
  ],
})
