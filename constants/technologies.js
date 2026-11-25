import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3, DiDjango } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaFigma, FaNode } from "react-icons/fa";
import {
	TbBrandNextjs,
	TbBrandTailwind,
	TbBrandReactNative,
	TbMicrophone,
	TbSparkles,
	TbRoute,
	TbWaveSine,
	TbTerminal2,
	TbCursorText
} from "react-icons/tb";
import { RiFlutterFill } from "react-icons/ri";
import {
	SiExpress,
	SiClickup,
	SiLaravel,
	SiDocker,
	SiThreedotjs,
	SiGreensock,
	SiOpenai,
	SiGoogle,
	SiTypescript,
	SiPython,
	SiFastapi,
	SiPostgresql,
	SiPrisma,
	SiRedis,
	SiExpo,
	SiVercel,
	SiSentry
} from "react-icons/si";
import JiraIcon from "public/assets/svg/jira.svg";
import MuiIcon from "public/assets/svg/mui.svg";

export const TECHNOLOGIES = [
	{
		category: "AI & LLMs",
		items: [
			{ name: "LiveKit Agents", icon: <TbMicrophone size={32} /> },
			{ name: "OpenAI", icon: <SiOpenai size={32} /> },
			{ name: "Anthropic Claude", icon: <TbSparkles size={32} /> },
			{ name: "Google Gemini", icon: <SiGoogle size={32} /> },
			{ name: "OpenRouter", icon: <TbRoute size={32} /> },
			{ name: "Speech AI (STT/TTS)", icon: <TbWaveSine size={32} /> }
		]
	},
	{
		category: "Front-end",
		items: [
			{ name: "TypeScript", icon: <SiTypescript size={32} /> },
			{ name: "JS", icon: <IoLogoJavascript size={32} /> },
			{ name: "React", icon: <FaReact size={32} /> },
			{ name: "Next", icon: <TbBrandNextjs size={32} /> },
			{ name: "Tailwind CSS", icon: <TbBrandTailwind size={32} /> },
			{ name: "MUI", icon: <MuiIcon width={32} /> },
			{ name: "Three.js", icon: <SiThreedotjs size={32} /> },
			{ name: "GSAP", icon: <SiGreensock size={32} /> },
			{ name: "HTML", icon: <AiFillHtml5 size={32} /> },
			{ name: "CSS", icon: <DiCss3 size={32} /> }
		]
	},
	{
		category: "Mobile",
		items: [
			{ name: "React Native", icon: <TbBrandReactNative size={32} /> },
			{ name: "Expo", icon: <SiExpo size={32} /> },
			{ name: "Flutter", icon: <RiFlutterFill size={32} /> }
		]
	},
	{
		category: "Back-end",
		items: [
			{ name: "Python", icon: <SiPython size={32} /> },
			{ name: "FastAPI", icon: <SiFastapi size={32} /> },
			{ name: "Node", icon: <FaNode size={32} /> },
			{ name: "Express", icon: <SiExpress size={32} /> },
			{ name: "Laravel", icon: <SiLaravel size={32} /> },
			{ name: "Django", icon: <DiDjango size={32} /> },
			{ name: "PostgreSQL", icon: <SiPostgresql size={32} /> },
			{ name: "Prisma", icon: <SiPrisma size={32} /> },
			{ name: "Redis", icon: <SiRedis size={32} /> }
		]
	},
	{
		category: "Tools",
		items: [
			{ name: "Docker", icon: <SiDocker size={32} /> },
			{ name: "Github", icon: <AiFillGithub size={32} /> },
			{ name: "Vercel", icon: <SiVercel size={32} /> },
			{ name: "Sentry", icon: <SiSentry size={32} /> },
			{ name: "Claude Code", icon: <TbTerminal2 size={32} /> },
			{ name: "Cursor", icon: <TbCursorText size={32} /> },
			{ name: "Figma", icon: <FaFigma size={32} /> },
			{ name: "Jira", icon: <JiraIcon width={32} /> },
			{ name: "Clickup", icon: <SiClickup size={32} /> }
		]
	}
];
