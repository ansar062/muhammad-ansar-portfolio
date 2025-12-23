import { defineField, defineType } from "sanity";

export const stack = defineType({
	name: "stack",
	title: "Stack",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
			validation: (rule) => rule.required()
		})
	]
});
