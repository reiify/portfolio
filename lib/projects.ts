import { Project } from "@/lib/interface";
import tags from "@/lib/tags";

const projects: Project[] = [
	{
		id: 1,
		title: "projects.portfolio.title",
		description: "projects.portfolio.description",
		icon: "/icons/1.svg",
		image: "/2.png",
		link: "https://portoflio-krei.vercel.app",
		tags: [tags.code, tags.design],
		stack: [tags.figma, tags.next, tags.tailwind],
	},
	{
		id: 2,
		title: "projects.nextjsDashboard.title",
		description: "projects.nextjsDashboard.description",
		icon: "/icons/2.ico",
		image: "/2.png",
		link: "https://nextjs-dashboard-krei.vercel.app",
		tags: [tags.code, tags.edu],
		stack: [tags.next, tags.tailwind, tags.postgres],
	},
];

export default projects;
