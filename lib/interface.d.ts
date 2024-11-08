/* eslint-disable @typescript-eslint/no-explicit-any */
export interface LayoutProps {
	children: React.ReactNode;
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
