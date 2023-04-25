import { defineType } from "sanity";
export default defineType({
    name: "subscribers",
    type: "document",
    title: "Subscribers",
    fields: [
        {
            name: "email",
            type: "string",
            title: "Email",
        },],
})
