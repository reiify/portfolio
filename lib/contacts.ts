import { Contact } from "@/lib/interface";
import tags from "@/lib/tags";

const contacts: Contact[] = [
	{
		id: 1,
		title: tags.mail.name,
		description: "shadowjexon@yandex.com",
		icon: tags.mail,
		link: "mailto:shadowjexon@yandex.com",
	},
	{
		id: 2,
		title: tags.tel.name,
		description: "+998 93 208 45 62",
		icon: tags.tel,
		link: "tel:+998932084562",
	},
	{
		id: 3,
		title: tags.behance.name,
		description: "@kagamirei",
		icon: tags.behance,
		link: "https://www.behance.net/kagamirei",
	},
	{
		id: 4,
		title: tags.discord.name,
		description: "reiify",
		icon: tags.discord,
		link: "https://discord.gg/QGaTuCKw",
	},
	{
		id: 5,
		title: tags.dribbble.name,
		description: "@reiify",
		icon: tags.dribbble,
		link: "https://dribbble.com/reiify",
	},
	{
		id: 6,
		title: tags.github.name,
		description: "@reiify",
		icon: tags.github,
		link: "https://github.com/reiify",
	},
	{
		id: 7,
		title: tags.ig.name,
		description: "@rei.ify",
		icon: tags.ig,
		link: "https://instagram.com/rei.ify",
	},
	{
		id: 8,
		title: tags.tg.name,
		description: "@kagamirei",
		icon: tags.tg,
		link: "https://t.me/kagamirei",
	},
	{
		id: 9,
		title: tags.vk.name,
		description: "@kagamirei",
		icon: tags.vk,
		link: "https://vk.com/kagamirei",
	},
	{
		id: 10,
		title: tags.figma.name,
		description: "@kagamirei",
		icon: tags.figma,
		link: "https://www.figma.com/@kagamirei",
	},
];

export default contacts;
