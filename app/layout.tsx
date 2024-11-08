"use client";

import { inter } from "@/app/ui/fonts";
import Header from "@/app/ui/header";
import Nav from "@/app/ui/nav";
import { useEffect, useState } from "react";
import i18n, { useI18n } from "../i18n";
import "./globals.css";
import Template from "./template";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
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
		<html>
			<body className={`${inter.className} flex h-dvh flex-col gap-4 p-4 antialiased md:flex-row`}>
				<nav>
					<Header className='mb-4' />
					{isLargeScreen && <Nav />}
				</nav>
				<main className='flex h-dvh w-full flex-wrap gap-3 rounded-3xl bg-secondary p-3 md:h-full'>
					<Template>{children}</Template>
				</main>
				{!isLargeScreen && <Nav />}
			</body>
		</html>
	);
}
