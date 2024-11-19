/* eslint-disable @typescript-eslint/no-explicit-any */

export interface LayoutProps {
	children: React.ReactNode;
}

export interface ModalProps {
	isVisible: boolean;
	children: React.ReactNode;
	className?: string;
	onClose: () => void;
	layoutId?: string | undefined;
}

export interface Project {
	id: number;
	title: string;
	description?: string;
	icon?: string;
	image?: string;
	link?: string;
	tags?: Tag[];
	stack?: Tag[];
}

export interface Tag {
	name: string;
	icon: any;
}

export interface Tags {
	[key: string]: Tag;
}

export interface Contact {
	id: number;
	title: string;
	description?: string;
	icon: Tag;
	link: string;
}
