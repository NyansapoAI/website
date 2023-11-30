import { defineType } from "sanity"

export default defineType({
  name: "contactForm",
  type: "document",
  title: "Contact Form",

  fields: [
    {
      name: "firstName",
      type: "string",
      title: "First Name",
      validation: (Rule) => Rule.min(2).max(20),
    },
    {
      name: "lastName",
      type: "string",
      title: "Last Name",
      validation: (Rule) => Rule.min(2).max(20),
    },
    {
      name: "email",
      type: "string",
      title: "Email",
      validation: (Rule) => Rule.email(),
    },
    {
      name: "companyName",
      type: "string",
      title: "Company Name",
      validation: (Rule) => Rule.min(2).max(20),
    },
    {
      name: "companyUrl",
      type: "url",
      title: "Company URL",
    },
    {
      name: "message",
      type: "text",
      title: "Message",
    },
  ],
})
