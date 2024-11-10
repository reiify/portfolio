import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const badgeVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap border px-2 py-1 text-xs font-semibold transition-colors focus:outline-none focus-visible:ring focus-visible:ring-ring focus-visible:ring-offset-1",
	{
		variants: {
			variant: {
				primary: "border-transparent bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/90",
				secondary:
					"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/80",
				outline: "border hover:bg-accent hover:text-accent-foreground active:bg-accent active:text-accent-foreground",
				ghost:
					"border-transparent hover:bg-accent hover:text-accent-foreground active:bg-accent active:text-accent-foreground",
			},
			rounded: {
				none: "rounded-none",
				rounded: "rounded",
				full: "rounded-full",
			},
		},
		defaultVariants: {
			variant: "secondary",
			rounded: "full",
		},
	},
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, rounded, ...props }: BadgeProps) {
	return (
		<div
			className={cn(badgeVariants({ variant, rounded }), className)}
			{...props}
		/>
	);
}

export { Badge, badgeVariants };
