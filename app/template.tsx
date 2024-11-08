"use client";

import { LayoutProps } from "@/lib/interface";
import { motion } from "framer-motion";

export default function Template({ children }: LayoutProps) {
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
