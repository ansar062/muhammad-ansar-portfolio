const author = "Muhammad Ansar";
const description =
	"Full-stack software engineer from Pakistan building web apps with Next.js, cross-platform apps with React Native, and backends with Laravel and Node.js — from database to deployment.";
const url = "https://muhammad-ansar-portfolio.vercel.app/";
export const AppMetadata = {
	metadataBase: new URL("https://muhammad-ansar-portfolio.vercel.app/"),
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
				url: "https://muhammad-ansar-portfolio.vercel.app/screenshot.png",
				width: 800,
				height: 600,
				alt: "My personal portfolio website"
			},
			{
				url: "https://muhammad-ansar-portfolio.vercel.app/screenshot.png",
				width: 1800,
				height: 1600,
				alt: "My personal portfolio website"
			}
		],
		locale: "en-US",
		type: "website"


	}
};
