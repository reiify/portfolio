import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import * as React from "react";

const buttonVariants = cva(
	"min-size-8 inline-flex items-center justify-center gap-2 whitespace-nowrap border text-sm font-semibold transition-colors focus:outline-none focus-visible:ring focus-visible:ring-ring focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				primary:
					"supports-[hover]:bg-primary/90 support-[active]:bg-primary/90 border-transparent bg-primary text-primary-foreground",
				secondary:
					"supports-[hover]:bg-secondary/80 supports-[active]:bg-secondary/80 border-transparent bg-secondary text-secondary-foreground",
				outline:
					"border-border supports-[active]:bg-accent supports-[hover]:bg-accent supports-[active]:text-accent-foreground supports-[hover]:text-accent-foreground",
				ghost:
					"border-transparent supports-[active]:bg-accent supports-[hover]:bg-accent supports-[active]:text-accent-foreground supports-[hover]:text-accent-foreground",
			},
			rounded: {
				none: "rounded-none",
				rounded: "rounded-md",
				full: "rounded-full",
			},
			align: {
				vertical: "flex-col p-2",
				horizontal: "flex-row px-4 py-2",
			},
		},
		defaultVariants: {
			variant: "primary",
			rounded: "rounded",
			align: "horizontal",
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, rounded, align, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(buttonVariants({ variant, rounded, align, className }))}
				ref={ref}
				{...props}
			/>
		);
	},
);
Button.displayName = "Button";

const MotionButton = motion.create(Button);

export { MotionButton as Button, buttonVariants };
