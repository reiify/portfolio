/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/app/ui/button";
import { clsx } from "clsx";
import { motion } from "framer-motion";
import { BriefcaseBusiness, House, Phone, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
	const [activeIndex, setActiveIndex] = useState<number>(0);
	const { t } = useTranslation();
	const pathname = usePathname();
	const router = useRouter();

	useEffect(() => {
		const currentIndex = links.findIndex((link) => link.href === pathname);
		if (currentIndex !== -1) {
			setActiveIndex(currentIndex);
		}
	}, [pathname]);

	const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

	useEffect(() => {
		const handleResize = () => {
			setIsLargeScreen(window.innerWidth >= 768);
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		localStorage.setItem("lastVisitedPage", pathname);
	}, [pathname]);

	useEffect(() => {
		const lastVisitedPage = localStorage.getItem("lastVisitedPage");
		if (lastVisitedPage && typeof window !== "undefined") {
			router.push(lastVisitedPage);
		}
	}, [router]);

	return (
		<motion.nav
			layout
			className='flex justify-between md:flex-col'
		>
			{links.map((link, index) => {
				const LinkIcon = link.icon;
				return (
					<Button
						asChild
						key={index}
						onClick={() => setActiveIndex(index)}
						variant='ghost'
						align={isLargeScreen ? "horizontal" : "vertical"}
						className='justify-start'
						whileTap={{
							scale: 0.98,
						}}
					>
						<Link
							href={link.href}
							className={clsx({ "text-muted-foreground": activeIndex !== index }, "relative")}
						>
							<LinkIcon className='size-5 md:size-4' />
							<p>{t(link.name)}</p>
							{activeIndex === index && (
								<motion.span
									layoutId='highlight'
									className='absolute inset-0 -z-10 rounded-md md:border md:bg-secondary'
									transition={{
										type: "spring",
										duration: 0.4,
									}}
								/>
							)}
						</Link>
					</Button>
				);
			})}
		</motion.nav>
	);
}
