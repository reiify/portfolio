import { Tags } from "@/lib/interface";
import * as lucide from "lucide-react";
import * as simple from "simple-icons";

const tags: Tags = {
	/* Brands */
	behance: {
		name: "Behance",
		icon: simple.siBehance,
	},
	crunchyroll: {
		name: "Crunchyroll",
		icon: simple.siCrunchyroll,
	},
	discord: {
		name: "Discord",
		icon: simple.siDiscord,
	},
	dribbble: {
		name: "Dribbble",
		icon: simple.siDribbble,
	},
	github: {
		name: "GitHub",
		icon: simple.siGithub,
	},
	gitlab: {
		name: "GitLab",
		icon: simple.siGitlab,
	},
	ig: {
		name: "Instagram",
		icon: simple.siInstagram,
	},
	linkedin: {
		name: "LinkedIn",
		icon: simple.siLinkedin,
	},
	pinterest: {
		name: "Pinterst",
		icon: simple.siPinterest,
	},
	reddit: {
		name: "Reddit",
		icon: simple.siReddit,
	},
	tg: {
		name: "Telegram",
		icon: simple.siTelegram,
	},
	threads: {
		name: "Threads",
		icon: simple.siThreads,
	},
	tt: {
		name: "TikTok",
		icon: simple.siTiktok,
	},
	vercel: {
		name: "Vercel",
		icon: simple.siVercel,
	},
	vk: {
		name: "VK",
		icon: simple.siVk,
	},
	x: {
		name: "X",
		icon: simple.siX,
	},

	/* Design */
	ae: {
		name: "After Effects",
		icon: simple.siAdobeaftereffects,
	},
	ai: {
		name: "Illustrator",
		icon: simple.siAdobeillustrator,
	},
	blender: {
		name: "Blender",
		icon: simple.siBlender,
	},
	c4d: {
		name: "Cinema 4D",
		icon: simple.siCinema4d,
	},
	corel: {
		name: "Corel Draw",
		icon: simple.siCoreldraw,
	},
	figma: {
		name: "Figma",
		icon: simple.siFigma,
	},
	framer: {
		name: "Framer",
		icon: simple.siFramer,
	},
	id: {
		name: "InDesign",
		icon: simple.siAdobeindesign,
	},
	lr: {
		name: "Lightroom",
		icon: simple.siAdobelightroom,
	},
	lrc: {
		name: "Lightroom Classic",
		icon: simple.siAdobelightroomclassic,
	},
	lunacy: {
		name: "Lunacy",
		icon: simple.siLunacy,
	},
	maya: {
		name: "Autodesk Maya",
		icon: simple.siAutodeskmaya,
	},
	ps: {
		name: "Photoshop",
		icon: simple.siAdobephotoshop,
	},
	pr: {
		name: "Premiere Pro",
		icon: simple.siAdobepremierepro,
	},
	rive: {
		name: "Rive",
		icon: simple.siRive,
	},
	sketch: {
		name: "Sketch",
		icon: simple.siSketch,
	},
	tilda: {
		name: "Tilda",
		icon: simple.siTildapublishing,
	},
	webflow: {
		name: "Webflow",
		icon: simple.siWebflow,
	},
	wix: {
		name: "Wix",
		icon: simple.siWix,
	},
	xd: {
		name: "Adobe XD",
		icon: simple.siAdobexd,
	},

	/* Dev */
	ang: {
		name: "Angular",
		icon: simple.siAngular,
	},
	astro: {
		name: "Astro",
		icon: simple.siAstro,
	},
	bootstrap: {
		name: "Bootstrap",
		icon: simple.siBootstrap,
	},
	c: {
		name: "C",
		icon: simple.siC,
	},
	cpp: {
		name: "C++",
		icon: simple.siCplusplus,
	},
	cs: {
		name: "C#",
		icon: simple.siSharp, // I can't find Csharp
	},
	capacitor: {
		name: "Capacitor",
		icon: simple.siCapacitor,
	},
	cordova: {
		name: "Cordova",
		icon: simple.siApachecordova,
	},
	css: {
		name: "CSS",
		icon: simple.siCss3,
	},
	dart: {
		name: "Dart",
		icon: simple.siDart,
	},
	docker: {
		name: "Docker",
		icon: simple.siDocker,
	},
	dotnet: {
		name: ".NET",
		icon: simple.siDotnet,
	},
	electron: {
		name: "Electron",
		icon: simple.siElectron,
	},
	framework7: {
		name: "Framework 7",
		icon: simple.siFramework7,
	},
	gatsby: {
		name: "Gatsby",
		icon: simple.siGatsby,
	},
	git: {
		name: "Git",
		icon: simple.siGit,
	},
	go: {
		name: "Go",
		icon: simple.siGo,
	},
	headless: {
		name: "Headless UI",
		icon: simple.siHeadlessui,
	},
	html: {
		name: "HTML",
		icon: simple.siHtml5,
	},
	i18next: {
		name: "i18next",
		icon: simple.siI18next,
	},
	js: {
		name: "JavaScript",
		icon: simple.siJavascript,
	},
	kotlin: {
		name: "Kotlin",
		icon: simple.siKotlin,
	},
	laravel: {
		name: "Laravel",
		icon: simple.siLaravel,
	},
	lua: {
		name: "Lua",
		icon: simple.siLua,
	},
	mysql: {
		name: "MySQL",
		icon: simple.siMysql,
	},
	next: {
		name: "Next.js",
		icon: simple.siNextdotjs,
	},
	node: {
		name: "Node.js",
		icon: simple.siNodedotjs,
	},
	nuxt: {
		name: "Nuxt.js",
		icon: simple.siNuxtdotjs,
	},
	npm: {
		name: "npm",
		icon: simple.siNpm,
	},
	php: {
		name: "PHP",
		icon: simple.siPhp,
	},
	pnpm: {
		name: "pnpm",
		icon: simple.siPnpm,
	},
	postcss: {
		name: "PostCSS",
		icon: simple.siPostcss,
	},
	postgres: {
		name: "PostgreSQL",
		icon: simple.siPostgresql,
	},
	preact: {
		name: "Preact",
		icon: simple.siPreact,
	},
	pwa: {
		name: "PWA",
		icon: simple.siPwa,
	},
	python: {
		name: "Python",
		icon: simple.siPython,
	},
	quasar: {
		name: "Quasar",
		icon: simple.siQuasar,
	},
	react: {
		name: "React",
		icon: simple.siReact,
	},
	reactnative: {
		name: "React Native",
		icon: simple.siReact,
	},
	reactrouter: {
		name: "React Router",
		icon: simple.siReactrouter,
	},
	redux: {
		name: "Redux",
		icon: simple.siRedux,
	},
	rollup: {
		name: "Rollup",
		icon: simple.siRollupdotjs,
	},
	ruby: {
		name: "Ruby",
		icon: simple.siRuby,
	},
	rust: {
		name: "Rust",
		icon: simple.siRust,
	},
	sass: {
		name: "SASS",
		icon: simple.siSass,
	},
	shadcn: {
		name: "shadcn/ui",
		icon: simple.siShadcnui,
	},
	sqlite: {
		name: "SQLite",
		icon: simple.siSqlite,
	},
	svelte: {
		name: "Svelte",
		icon: simple.siSvelte,
	},
	swift: {
		name: "Swift",
		icon: simple.siSwift,
	},
	tailwind: {
		name: "Tailwind CSS",
		icon: simple.siTailwindcss,
	},
	tauri: {
		name: "Tauri",
		icon: simple.siTauri,
	},
	ts: {
		name: "TypeScript",
		icon: simple.siTypescript,
	},
	unocss: {
		name: "Unocss",
		icon: simple.siUnocss,
	},
	vite: {
		name: "Vite",
		icon: simple.siVite,
	},
	vitest: {
		name: "Vitest",
		icon: simple.siVitest,
	},
	vue: {
		name: "Vue.js",
		icon: simple.siVuedotjs,
	},
	vuetify: {
		name: "Vuetify",
		icon: simple.siVuetify,
	},
	webpack: {
		name: "Webpack",
		icon: simple.siWebpack,
	},
	wordpress: {
		name: "WordPress",
		icon: simple.siWordpress,
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
};

export default tags;
