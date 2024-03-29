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
      name: "studentLink",
      type: "url",
      title: "Assessment link",
    },
    {
      name: "experience",
      type: "string",
      title: "Experience",
    },
    {
      name: "assessmentType",
      type: "string",
      title: "Assessment Type",
    },
    {
      name: "feedback",
      type: "text",
      title: "Feedback",
    },
    {
      name: "postAssessmentFeedback",
      type: "string",
      title: "Post Assessment Feeback",
    },
    {
      name: "agree",
      type: "text",
      title: "Do you agree with the Assessment results",
    },
    {
      name: "adopt",
      type: "text",
      title:
        "  Would you consider adopting this platform for your accelerated learning programs? ",
    },
  ],
})
