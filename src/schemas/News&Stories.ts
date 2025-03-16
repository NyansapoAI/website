import { defineType } from "sanity"

export default defineType({
  name: "news",
  type: "document",
  title: "News & Featured Partners",

  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "Name of the organization/publication featuring Nyansapo",
    },
    {
      name: "link",
      type: "url",
      title: "Link",
      description: "URL to the organization's website or the feature article",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "isFeatured",
      type: "boolean",
      title: "Show in Featured By Section",
      description: "Enable to display this partner in the Featured By section",
      initialValue: true,
    },
    {
      name: "mainImage",
      type: "image",
      title: "Partner Logo",
      description:
        "Upload the partner's logo (transparent background preferred)",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: "publishedAt",
      type: "datetime",
      title: "Published at",
      description: "Used for sorting features chronologically",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
      isFeatured: "isFeatured",
    },
    prepare(selection) {
      const { title, media, isFeatured } = selection
      return {
        title: title || "Unnamed Partner",
        subtitle: isFeatured ? "Featured Partner" : "Not Featured",
        media: media,
      }
    },
  },
})
