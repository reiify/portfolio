"use client";

import Header from "@/app/ui/header";
import Nav from "@/app/ui/nav";
import { LayoutProps } from "@/lib/interface";
import { useEffect, useState } from "react";
import i18n, { useI18n } from "../i18n";
import Template from "./template";

export default function ClientLayout({ children }: LayoutProps) {
	const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);
	const [isInitialized, setIsInitialized] = useState<boolean>(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(min-width: 768px)");

		setIsLargeScreen(mediaQuery.matches);
		setIsInitialized(true);

		const handleResize = (event: MediaQueryListEvent) => setIsLargeScreen(event.matches);

		mediaQuery.addEventListener("change", handleResize);
		return () => mediaQuery.removeEventListener("change", handleResize);
	}, []);

	useEffect(() => {
		if (!i18n.isInitialized) i18n.init();
	}, []);

	useI18n();

	if (!isInitialized) return null;

	return (
		<>
			<nav className='flex flex-col gap-4'>
				<Header className='mt-8 md:mt-0' />
				{isLargeScreen && <Nav />}
			</nav>
			<main className='flex h-dvh w-full flex-wrap gap-3 overflow-y-auto rounded-3xl bg-secondary p-3 md:h-full'>
				<Template>{children}</Template>
			</main>
			{!isLargeScreen && <Nav />}
		</>
	);
}
