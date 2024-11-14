import { Button } from "@/app/ui/button";
import { ModalProps } from "@/lib/interface";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";

export default function Modal({ isVisible, children, className, onClose, layoutId }: ModalProps) {
	const { t } = useTranslation();
	return createPortal(
		<AnimatePresence>
			{layoutId && isVisible && (
				<>
					<motion.div
						className='fixed top-1/4 z-10 flex items-center justify-center p-4 md:inset-1/4'
						layoutId={layoutId}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { duration: 0.2 } }}
						exit={{ opacity: 0, transition: { duration: 0.2 } }}
						onClick={() => onClose()}
					>
						<motion.div
							onClick={(e) => e.stopPropagation()}
							className={cn("relative z-20 rounded-xl bg-card p-4", className)}
						>
							<Button
								variant='ghost'
								onClick={() => onClose()}
								className='absolute right-3 top-3 text-xs'
								whileTap={{
									scale: 0.98,
								}}
							>
								<span className='sr-only'>{t("btns.close")}</span>
								<X />
							</Button>
							{children}
						</motion.div>
					</motion.div>
					<div
						className='fixed inset-0 bg-black/60'
						onClick={() => onClose()}
					/>
				</>
			)}
		</AnimatePresence>,
		document.body,
	);
}
