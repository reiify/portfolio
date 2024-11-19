import Modal from "@/app/ui//modal";
import { Avatar, AvatarImage } from "@/app/ui/avatar";
import { Badge } from "@/app/ui/badge";
import { cardVariants, modalContentVariants } from "@/lib/animates";
import projects from "@/lib/projects";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "./button";

const MotionImage = motion.create(Image);

export default function Project() {
	const { t } = useTranslation();
	const [selectedId, setSelectedId] = useState<string | null>(null);

	return (
		<>
			{projects.map((project) => (
				<motion.div
					key={project.id}
					layoutId={`project-${project.id}`}
					variants={cardVariants}
					initial='initial'
					animate='animate'
					whileTap='tap'
					className='flex cursor-pointer flex-col items-start gap-3 rounded-xl bg-card/60 p-3'
					onClick={() => setSelectedId(project.id.toString())}
				>
					<Avatar
						size='sm'
						rounded='full'
						selectable={false}
						layoutId={`avatar-${project.id}`}
					>
						<AvatarImage src={project.icon} />
					</Avatar>

					<motion.p
						layoutId={`title-${project.id}`}
						className='p-md line-clamp-1 overflow-visible font-medium'
					>
						{t(project.title)}
					</motion.p>
					<motion.p
						layoutId={`description-${project.id}`}
						className='p-sm line-clamp-2 h-full overflow-visible text-muted-foreground'
					>
						{t(project.description ?? "")}
					</motion.p>

					<MotionImage
						src={project.image ?? ""}
						alt='project open graph image'
						width={1920}
						height={1080}
						className='aspect-video w-full select-none rounded-md border'
						priority={true}
						layoutId={`image-${project.id}`}
					/>
				</motion.div>
			))}

			<AnimatePresence>
				{selectedId && (
					<Modal
						isVisible={true}
						onClose={() => setSelectedId(null)}
						layoutId={`project-${selectedId}`}
					>
						{projects.map(
							(project) =>
								project.id.toString() === selectedId && (
									<motion.div
										key={project.id}
										className='flex flex-col items-start gap-5 p-3'
									>
										<motion.div className='flex flex-row items-center gap-3'>
											<Avatar
												size='md'
												rounded='full'
												selectable={false}
												layoutId={`avatar-${project.id}`}
											>
												<AvatarImage src={project.icon} />
											</Avatar>

											<motion.div className='flex flex-col gap-1'>
												<motion.p
													layoutId={`title-${project.id}`}
													className='p-md line-clamp-1 overflow-visible font-medium'
												>
													{t(project.title)}
												</motion.p>
												<motion.p
													layoutId={`description-${project.id}`}
													className='p-sm line-clamp-2 overflow-visible text-muted-foreground'
												>
													{t(project.description ?? "")}
												</motion.p>
											</motion.div>
										</motion.div>
										<motion.div
											className='flex flex-row flex-wrap gap-2'
											variants={modalContentVariants}
											initial='initial'
											animate='animate'
										>
											{project.tags?.map((tag) => {
												const TagIcon = tag.icon;
												return (
													<Badge
														key={tag.name}
														variant='secondary'
														className='[&_svg]:size-5'
													>
														<TagIcon />
														{t(tag.name)}
													</Badge>
												);
											})}
										</motion.div>

										<motion.div
											className='flex flex-row flex-wrap gap-2'
											variants={modalContentVariants}
											initial='initial'
											animate='animate'
										>
											{project.stack?.map((stack) => {
												const StackIcon = stack.icon;
												return (
													<Badge
														key={stack.name}
														variant='secondary'
														className='[&_svg]:size-5'
													>
														<StackIcon />
														{t(stack.name)}
													</Badge>
												);
											})}
										</motion.div>

										<MotionImage
											src={project.image ?? ""}
											alt='project open graph image'
											width={1920}
											height={1080}
											className='aspect-video w-full select-none rounded-md border'
											layoutId={`image-${project.id}`}
										/>

										<div className='flex w-full place-content-end gap-3'>
											<Button
												asChild
												initial={{
													y: 40,
													opacity: 0,
												}}
												animate={{
													y: 0,
													opacity: 1,
													transition: {
														delay: 0.2,
														duration: 0.2,
													},
												}}
												whileTap={{
													scale: 0.98,
												}}
											>
												<Link
													href={project.link as string}
													target='_blank'
												>
													{t("btns.visit")}
													<ExternalLink size={16} />
												</Link>
											</Button>
										</div>
									</motion.div>
								),
						)}
					</Modal>
				)}
			</AnimatePresence>
		</>
	);
}
