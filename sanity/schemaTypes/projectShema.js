import { defineField, defineType } from "sanity";

export const projects = defineType({
	name: "projects",
	title: "Projects",
	type: "document",
	fields: [
		defineField({
			name: "createdAt",
			title: "Creation date",
			type: "date",
			options: {
				dateFormat: "DD-MM-YYYY",
				calendarTodayLabel: "Today"
			}
		}),
		defineField({
			name: "title",
			title: "Title",
			type: "string",
			validation: (rule) => rule.required()
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "text",
			validation: (rule) => rule.required()
		}),
		defineField({
			name: "category",
			title: "Category",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ type: "category" }]
				}
			]
		}),
		defineField({
			name: "stack",
			title: "Stack",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ type: "stack" }]
				}
			]
		}),

		defineField({
			name: "poster",
			title: "Poster",
			type: "image",
			options: {
				hotspot: true
			}
		}),

		defineField({
			name: "images",
			title: "Gallery",
			type: "array",
			of: [
				{
					type: "image"
				}
			]
		}),

		defineField({
			name: "repoUrl",
			title: "Repo URL",
			type: "url"
		}),

		defineField({
			name: "liveUrl",
			title: "Live URL",
			type: "url"
		})
	]
});
