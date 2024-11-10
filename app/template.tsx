"use client";

import { LayoutProps } from "@/lib/interface";
import { motion } from "framer-motion";

export default function Template({ children }: Readonly<LayoutProps>) {
	return (
		<motion.section
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
		>
			{children}
		</motion.section>
	);
}
