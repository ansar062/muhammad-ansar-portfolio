const author = "Muhammad Ansar";
const description =
	"Software engineer from Pakistan building AI, web and mobile products: real-time voice AI agents with LiveKit and LLMs, web apps with Next.js, cross-platform apps with React Native, and backends with FastAPI, Laravel and Node.js.";
const url = "https://www.ans4r.site/";
export const AppMetadata = {
	metadataBase: new URL("https://www.ans4r.site/"),
	title: {
		default: `Portfolio | ${author}`,
		template: `%s | ${author}`
	},
	description: description,
	icons: {
		icon: "/favicon.png"
	},
	keywords: [
		"ansar",
		"muhammad ansar - software engineer",
		"AI engineer",
		"LLM engineer",
		"LiveKit voice AI developer",
		"Full-stack developer",
		"Next.js developer",
		"React Native developer",
		"Laravel developer",
		"Portfolio website",
		"Full-stack Developer Portfolio",
		"developer",
		"portfolio"
	],
	creator: author,
	authors: [{ name: author, url: url }],
	colorScheme: "dark",
	openGraph: {
		title: `${author} | Portfolio`,
		description: description,
		url: url,
		siteName: `${author} | Portfolio`,
		images: [
			{
				url: "https://www.ans4r.site/screenshot.png",
				width: 800,
				height: 600,
				alt: "My personal portfolio website"
			},
			{
				url: "https://www.ans4r.site/screenshot.png",
				width: 1800,
				height: 1600,
				alt: "My personal portfolio website"
			}
		],
		locale: "en-US",
		type: "website"


	}
};
