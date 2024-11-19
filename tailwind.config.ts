import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: ["./app/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				background: "rgba(var(--background))",
				foreground: "rgba(var(--foreground))",
				border: "rgba(var(--border))",
				ring: "rgba(var(--ring))",
				primary: {
					DEFAULT: "rgba(var(--primary))",
					foreground: "rgba(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "rgba(var(--secondary))",
					foreground: "rgba(var(--secondary-foreground))",
				},
				accent: {
					DEFAULT: "rgba(var(--accent))",
					foreground: "rgba(var(--accent-foreground))",
				},
				card: {
					DEFAULT: "rgba(var(--card))",
					foreground: "rgba(var(--card-foreground))",
				},
				muted: {
					DEFAULT: "rgba(var(--muted))",
					foreground: "rgba(var(--muted-foreground))",
				},
			},
		},
		borderRadius: {
			"3xl": "calc(var(--radius) + 16px)",
			"2xl": "calc(var(--radius) + 8px",
			xl: "calc(var(--radius) + 4px)",
			lg: "var(--radius)",
			md: "calc(var(--radius) - 2px)",
			sm: "calc(var(--radius) - 4px)",
		},
	},
	plugins: [],
};
export default config;
