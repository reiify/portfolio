"use client";

import Project from "@/app/ui/project";
import { pageVariants } from "@/lib/animates";
import { motion } from "framer-motion";

export default function Page() {
	return (
		<motion.section
			variants={pageVariants}
			initial='initial'
			animate='animate'
			className='grid grid-cols-1 gap-3 pb-3 lg:grid-cols-2 xl:grid-cols-4'
		>
			<Project />
		</motion.section>
	);
}
