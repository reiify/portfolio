import { Tags } from "@/lib/interface";
import * as simple from "@icons-pack/react-simple-icons";
import * as lucide from "lucide-react";

const tags: Tags = {
	/* Brands */
	behance: {
		name: "Behance",
		icon: simple.SiBehance,
	},
	crunchyroll: {
		name: "Crunchyroll",
		icon: simple.SiCrunchyroll,
	},
	discord: {
		name: "Discord",
		icon: simple.SiDiscord,
	},
	dribbble: {
		name: "Dribbble",
		icon: simple.SiDribbble,
	},
	github: {
		name: "GitHub",
		icon: simple.SiGithub,
	},
	gitlab: {
		name: "GitLab",
		icon: simple.SiGitlab,
	},
	ig: {
		name: "Instagram",
		icon: simple.SiInstagram,
	},
	linkedin: {
		name: "LinkedIn",
		icon: simple.SiLinkedin,
	},
	pinterest: {
		name: "Pinterst",
		icon: simple.SiPinterest,
	},
	reddit: {
		name: "Reddit",
		icon: simple.SiReddit,
	},
	tg: {
		name: "Telegram",
		icon: simple.SiTelegram,
	},
	threads: {
		name: "Threads",
		icon: simple.SiThreads,
	},
	tt: {
		name: "TikTok",
		icon: simple.SiTiktok,
	},
	vercel: {
		name: "Vercel",
		icon: simple.SiVercel,
	},
	vk: {
		name: "VK",
		icon: simple.SiVk,
	},
	x: {
		name: "X",
		icon: simple.SiX,
	},

	/* Design */
	ae: {
		name: "After Effects",
		icon: simple.SiAdobeaftereffects,
	},
	ai: {
		name: "Illustrator",
		icon: simple.SiAdobeillustrator,
	},
	blender: {
		name: "Blender",
		icon: simple.SiBlender,
	},
	c4d: {
		name: "Cinema 4D",
		icon: simple.SiCinema4d,
	},
	corel: {
		name: "Corel Draw",
		icon: simple.SiCoreldraw,
	},
	figma: {
		name: "Figma",
		icon: simple.SiFigma,
	},
	framer: {
		name: "Framer",
		icon: simple.SiFramer,
	},
	id: {
		name: "InDesign",
		icon: simple.SiAdobeindesign,
	},
	lr: {
		name: "Lightroom",
		icon: simple.SiAdobelightroom,
	},
	lrc: {
		name: "Lightroom Classic",
		icon: simple.SiAdobelightroomclassic,
	},
	lunacy: {
		name: "Lunacy",
		icon: simple.SiLunacy,
	},
	maya: {
		name: "Autodesk Maya",
		icon: simple.SiAutodeskmaya,
	},
	ps: {
		name: "Photoshop",
		icon: simple.SiAdobephotoshop,
	},
	pr: {
		name: "Premiere Pro",
		icon: simple.SiAdobepremierepro,
	},
	rive: {
		name: "Rive",
		icon: simple.SiRive,
	},
	sketch: {
		name: "Sketch",
		icon: simple.SiSketch,
	},
	tilda: {
		name: "Tilda",
		icon: simple.SiTildapublishing,
	},
	webflow: {
		name: "Webflow",
		icon: simple.SiWebflow,
	},
	wix: {
		name: "Wix",
		icon: simple.SiWix,
	},
	xd: {
		name: "Adobe XD",
		icon: simple.SiAdobexd,
	},

	/* Dev */
	ang: {
		name: "Angular",
		icon: simple.SiAngular,
	},
	astro: {
		name: "Astro",
		icon: simple.SiAstro,
	},
	bootstrap: {
		name: "Bootstrap",
		icon: simple.SiBootstrap,
	},
	c: {
		name: "C",
		icon: simple.SiC,
	},
	cpp: {
		name: "C++",
		icon: simple.SiCplusplus,
	},
	cs: {
		name: "C#",
		icon: simple.SiSharp, // I can't find Csharp
	},
	capacitor: {
		name: "Capacitor",
		icon: simple.SiCapacitor,
	},
	cordova: {
		name: "Cordova",
		icon: simple.SiApachecordova,
	},
	css: {
		name: "CSS",
		icon: simple.SiCss3,
	},
	dart: {
		name: "Dart",
		icon: simple.SiDart,
	},
	docker: {
		name: "Docker",
		icon: simple.SiDocker,
	},
	dotnet: {
		name: ".NET",
		icon: simple.SiDotnet,
	},
	electron: {
		name: "Electron",
		icon: simple.SiElectron,
	},
	framework7: {
		name: "Framework 7",
		icon: simple.SiFramework7,
	},
	gatsby: {
		name: "Gatsby",
		icon: simple.SiGatsby,
	},
	git: {
		name: "Git",
		icon: simple.SiGit,
	},
	go: {
		name: "Go",
		icon: simple.SiGo,
	},
	headless: {
		name: "Headless UI",
		icon: simple.SiHeadlessui,
	},
	html: {
		name: "HTML",
		icon: simple.SiHtml5,
	},
	i18next: {
		name: "i18next",
		icon: simple.SiI18next,
	},
	js: {
		name: "JavaScript",
		icon: simple.SiJavascript,
	},
	kotlin: {
		name: "Kotlin",
		icon: simple.SiKotlin,
	},
	laravel: {
		name: "Laravel",
		icon: simple.SiLaravel,
	},
	lua: {
		name: "Lua",
		icon: simple.SiLua,
	},
	mysql: {
		name: "MySQL",
		icon: simple.SiMysql,
	},
	next: {
		name: "Next.js",
		icon: simple.SiNextdotjs,
	},
	node: {
		name: "Node.js",
		icon: simple.SiNodedotjs,
	},
	nuxt: {
		name: "Nuxt.js",
		icon: simple.SiNuxtdotjs,
	},
	npm: {
		name: "npm",
		icon: simple.SiNpm,
	},
	php: {
		name: "PHP",
		icon: simple.SiPhp,
	},
	pnpm: {
		name: "pnpm",
		icon: simple.SiPnpm,
	},
	postcss: {
		name: "PostCSS",
		icon: simple.SiPostcss,
	},
	postgres: {
		name: "PostgreSQL",
		icon: simple.SiPostgresql,
	},
	preact: {
		name: "Preact",
		icon: simple.SiPreact,
	},
	pwa: {
		name: "PWA",
		icon: simple.SiPwa,
	},
	python: {
		name: "Python",
		icon: simple.SiPython,
	},
	quasar: {
		name: "Quasar",
		icon: simple.SiQuasar,
	},
	react: {
		name: "React",
		icon: simple.SiReact,
	},
	reactnative: {
		name: "React Native",
		icon: simple.SiReact,
	},
	reactrouter: {
		name: "React Router",
		icon: simple.SiReactrouter,
	},
	redux: {
		name: "Redux",
		icon: simple.SiRedux,
	},
	rollup: {
		name: "Rollup",
		icon: simple.SiRollupdotjs,
	},
	ruby: {
		name: "Ruby",
		icon: simple.SiRuby,
	},
	rust: {
		name: "Rust",
		icon: simple.SiRust,
	},
	sass: {
		name: "SASS",
		icon: simple.SiSass,
	},
	shadcn: {
		name: "shadcn/ui",
		icon: simple.SiShadcnui,
	},
	sqlite: {
		name: "SQLite",
		icon: simple.SiSqlite,
	},
	svelte: {
		name: "Svelte",
		icon: simple.SiSvelte,
	},
	swift: {
		name: "Swift",
		icon: simple.SiSwift,
	},
	tailwind: {
		name: "Tailwind CSS",
		icon: simple.SiTailwindcss,
	},
	tauri: {
		name: "Tauri",
		icon: simple.SiTauri,
	},
	ts: {
		name: "TypeScript",
		icon: simple.SiTypescript,
	},
	unocss: {
		name: "Unocss",
		icon: simple.SiUnocss,
	},
	vite: {
		name: "Vite",
		icon: simple.SiVite,
	},
	vitest: {
		name: "Vitest",
		icon: simple.SiVitest,
	},
	vue: {
		name: "Vue.js",
		icon: simple.SiVuedotjs,
	},
	vuetify: {
		name: "Vuetify",
		icon: simple.SiVuetify,
	},
	webpack: {
		name: "Webpack",
		icon: simple.SiWebpack,
	},
	wordpress: {
		name: "WordPress",
		icon: simple.SiWordpress,
	},

	/* UI */
	code: {
		name: "tags.code",
		icon: lucide.Code,
	},
	design: {
		name: "tags.design",
		icon: lucide.Brush,
	},
	edu: {
		name: "tags.edu",
		icon: lucide.GraduationCap,
	},
	geo: {
		name: "tags.geo",
		icon: lucide.MapPin,
	},
	mail: {
		name: "tags.mail",
		icon: lucide.Mail,
	},
	tel: {
		name: "tags.tel",
		icon: lucide.Phone,
	},
};

export default tags;
