import { inter } from "@/app/ui/fonts";
import type { Metadata } from "next";
import ClientLayout from "./ClientLayout";
import "./globals.css";

export const metadata: Metadata = {
	icons: {
		icon: [
			{
				media: "(prefers-color-scheme: light)",
				url: "/favicon-light.svg",
				href: "/favicon-light.svg",
			},
			{
				media: "(prefers-color-scheme: dark)",
				url: "/favicon-dark.svg",
				href: "/favicon-dark.svg",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html>
			<body className={`${inter.className} flex h-dvh flex-col gap-4 p-2 antialiased md:flex-row md:p-4`}>
				<ClientLayout>{children}</ClientLayout>
			</body>
		</html>
	);
}
