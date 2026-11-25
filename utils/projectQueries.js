// Project queries for the public Sanity dataset, kept in code so the site does not depend on
// query strings stored in Vercel environment variables.
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "ipo27378";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const base = `https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}`;

// How many projects the home page shows: two rows of the three-column grid.
export const LATEST_PROJECTS_COUNT = 6;

const fields = `{
  _id,
  createdAt,
  title,
  description,
  category[]->{ title },
  stack[]->{ _id, title },
  poster,
  "images": images[].asset->url,
  repoUrl,
  liveUrl,
  linkType
}`;

const queryUrl = (query, params = {}) => {
	const search = new URLSearchParams({ query });
	for (const [key, value] of Object.entries(params)) search.set(`$${key}`, JSON.stringify(value));
	return `${base}?${search.toString()}`;
};

export const latestProjectsUrl = queryUrl(
	`*[_type == "projects"] | order(createdAt desc) [0...${LATEST_PROJECTS_COUNT}] ${fields}`
);

export const allProjectsUrl = queryUrl(`*[_type == "projects"] | order(createdAt desc) ${fields}`);

export const projectsByCategoryUrl = (category) =>
	queryUrl(
		`*[_type == "projects" && count((category[]->title)[@ == $category]) > 0] | order(createdAt desc) ${fields}`,
		{ category }
	);
