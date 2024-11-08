"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/app/ui/avatar";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface Props {
	className?: string;
}

const Header: React.FC<Props> = ({ className }) => {
	const { t } = useTranslation();
	const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

	useEffect(() => {
		const handleResize = () => {
			setIsLargeScreen(window.innerWidth >= 768);
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<header className={`flex items-center gap-4 ${className}`}>
			<Avatar
				selectable={false}
				size={isLargeScreen ? "xl" : "md"}
			>
				<AvatarImage src='/avatar.jpg' />
				<AvatarFallback>AA</AvatarFallback>
			</Avatar>
			<div className='flex flex-col gap-0.5 text-nowrap'>
				<h6 className='font-semibold text-primary'>{t("top.name")}</h6>
				<p className='p-sm font-medium text-muted-foreground'>{t("top.job")}</p>
			</div>
		</header>
	);
};

export default Header;
