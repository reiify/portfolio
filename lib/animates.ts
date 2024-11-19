export const cardVariants = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			type: "spring",
			stiffness: 300,
			damping: 30,
		},
	},
	tap: {
		scale: 0.98,
	},
};

export const pageVariants = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			stagger: 0.1,
			delay: 0.15,
		},
	},
};

export const modalVariants = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			duration: 0.2,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0.2,
		},
	},
};

export const modalContentVariants = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			duration: 0.2,
		},
	},
};
