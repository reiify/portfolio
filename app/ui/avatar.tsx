import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as React from "react";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";

const avatarVariants = cva("flex shrink-0 items-center justify-center overflow-hidden bg-muted", {
	variants: {
		size: {
			"2xs": "size-4",
			xs: "size-6",
			sm: "size-8",
			md: "size-10",
			lg: "size-12",
			xl: "size-14",
			"2xl": "size-16",
		},
		selectable: {
			true: "select-auto",
			false: "select-none",
		},
	},
	defaultVariants: {
		size: "md",
		selectable: true,
	},
});

export interface AvatarProps
	extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
		VariantProps<typeof avatarVariants> {
	rounded?: "none" | "rounded" | "full";
}

const Avatar = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Root>, AvatarProps>(
	({ size, rounded = "full", selectable, className, ...props }, ref) => {
		const roundedClass = cn({
			"rounded-none": rounded === "none",
			"rounded-full": rounded === "full",
			"rounded-sm": rounded === "rounded" && (size === "2xs" || size === "xs"),
			rounded: rounded === "rounded" && (size === "sm" || size === "md"),
			"rounded-md": rounded === "rounded" && (size === "lg" || size === "xl"),
			"rounded-lg": rounded === "rounded" && size === "2xl",
		});

		return (
			<AvatarPrimitive.Root
				ref={ref}
				className={cn(avatarVariants({ size, selectable }), roundedClass, className)}
				{...props}
			/>
		);
	},
);
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
	React.ElementRef<typeof AvatarPrimitive.Image>,
	React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
	<AvatarPrimitive.Image
		ref={ref}
		className={cn("size-full object-cover", className)}
		{...props}
	/>
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
	React.ElementRef<typeof AvatarPrimitive.Fallback>,
	React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
	<AvatarPrimitive.Fallback
		ref={ref}
		className={cn("flex size-full items-center justify-center", className)}
		{...props}
	/>
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

const MotionAvatar = motion.create(Avatar);

export { MotionAvatar as Avatar, AvatarFallback, AvatarImage, avatarVariants };
