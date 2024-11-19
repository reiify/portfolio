import { Avatar } from "@/app/ui/avatar";
import { cardVariants } from "@/lib/animates";
import contacts from "@/lib/contacts";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const MotionLink = motion.create(Link);

export default function Contact() {
	const { t } = useTranslation();

	return (
		<>
			{contacts.map((contact) => {
				const Icon = contact.icon.icon;
				return (
					<MotionLink
						key={contact.id}
						layoutId={`contact-${contact.id}`}
						href={contact.link}
						variants={cardVariants}
						initial='initial'
						animate='animate'
						whileTap='tap'
						className='flex cursor-pointer items-center gap-3 rounded-xl bg-card/60 p-3'
						target='_blank'
					>
						<Avatar className='rounded-md border'>
							<Icon />
						</Avatar>

						<div className='flex flex-col gap-1 overflow-hidden'>
							<p className='p-md'>{t(contact.title)}</p>
							<p className='p-sm line-clamp-1 text-muted-foreground'>{contact.description}</p>
						</div>
					</MotionLink>
				);
			})}
		</>
	);
}
