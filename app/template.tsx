"use client";

import { motion } from "framer-motion";

export default function Template({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<motion.section
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4, type: "spring" }}
		>
			{children}
		</motion.section>
	);
}
