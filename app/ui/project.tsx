import { Avatar, AvatarImage } from "@/app/ui/avatar";
import projects from "@/lib/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Project() {
	const { t } = useTranslation();
	return (
		<>
			{projects.map((project, index) => {
				return (
					<motion.div
						key={index}
						layoutId={`project-${index}`}
						transition={{
							type: "spring",
							duration: 0.4,
						}}
						whileTap={{
							scale: 0.98,
						}}
						className='flex flex-col items-start gap-3 rounded-xl border p-3'
					>
						<Avatar
							size='sm'
							rounded='rounded'
							selectable={false}
						>
							<AvatarImage src={project.icon} />
						</Avatar>

						<p className='p-md line-clamp-1 overflow-visible font-medium'>{t(project.title)}</p>
						<p className='p-sm line-clamp-2 overflow-visible text-muted-foreground'>{t(project.description ?? "")}</p>

						<Image
							src={project.image ?? ""}
							alt='project open graph image'
							width={1920}
							height={1080}
							className='aspect-video select-none rounded-md border'
						/>
					</motion.div>
				);
			})}
		</>
	);
}
