const author = "Muhammad Ansar";
const description =
	"Software developer from Pakistan, Republic of, who loves to develop beautiful websites, single page applications, customer relationship management or code from scratch using React and Next.js";
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
		"muhammad ansar - software developer",
		"Frontend developer",
		"Flutter developer",
		"Portfolio website",
		"Frontend Developer Portfolio",
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
				url: "https://drive.google.com/file/d/1c_BQNpDmEWaAZmw7pNKUamr9ByasPzcG/view?usp=sharing",
				width: 800,
				height: 600,
				alt: "My personal portfolio website"
			},
			{
				url: "https://drive.google.com/file/d/1c_BQNpDmEWaAZmw7pNKUamr9ByasPzcG/view?usp=sharing",
				width: 1800,
				height: 1600,
				alt: "My personal portfolio website"
			}
		],
		locale: "en-US",
		type: "website"


	}
};
