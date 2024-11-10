"use client";

import Project from "@/app/ui/project";
import { motion } from "framer-motion";

const pageVariants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

export default function Page() {
	return (
		<motion.section
			variants={pageVariants}
			initial='hidden'
			animate='show'
			className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4'
		>
			<Project />
		</motion.section>
	);
}
