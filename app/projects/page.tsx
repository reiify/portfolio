"use client";

import Project from "@/app/ui/project";
import { motion } from "framer-motion";

export default function Page() {
	return (
		<motion.section className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4'>
			<Project />
		</motion.section>
	);
}
