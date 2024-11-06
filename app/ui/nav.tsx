"use client";

import { Button } from "@/app/ui/button";
import clsx from "clsx";
import { BriefcaseBusiness, House, Phone, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const links = [
	{
		href: "/",
		name: "route.home",
		icon: House,
	},
	{
		href: "/projects",
		name: "route.projects",
		icon: BriefcaseBusiness,
	},
	{
		href: "/contact",
		name: "route.contact",
		icon: Phone,
	},
	{
		href: "/settings",
		name: "route.settings",
		icon: Settings,
	},
];

export default function Nav() {
	const { t } = useTranslation();
	const pathname = usePathname();
	const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

	useEffect(() => {
		const handleResize = () => {
			setIsLargeScreen(window.innerWidth >= 768);
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<nav className='flex justify-between md:flex-col'>
			{links.map((link) => {
				const LinkIcon = link.icon;
				return (
					<Button
						asChild
						key={link.name}
						variant={isLargeScreen && pathname === link.href ? "secondary" : "ghost"}
						align={isLargeScreen ? "horizontal" : "vertical"}
						className={clsx(
							{
								"text-muted-foreground": pathname !== link.href,
								"md:border-border": pathname === link.href,
							},
							"justify-start",
						)}
						whileTap={{ scale: 0.98 }}
					>
						<Link href={link.href}>
							<LinkIcon className='w-6' />
							<p className='block'>{t(link.name)}</p>
						</Link>
					</Button>
				);
			})}
		</nav>
	);
}
