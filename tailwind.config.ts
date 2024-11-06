import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: ["./app/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				border: "var(--border)",
				ring: "var(--ring)",
				primary: {
					DEFAULT: "var(--primary)",
					foreground: "var(--primary-foreground)",
				},
				secondary: {
					DEFAULT: "var(--secondary)",
					foreground: "var(--secondary-foreground)",
				},
				accent: {
					DEFAULT: "var(--accent)",
					foreground: "var(--accent-foreground)",
				},
				card: {
					DEFAULT: "var(--card)",
					foreground: "var(--card-foreground)",
				},
				muted: {
					DEFAULT: "var(--muted)",
					foreground: "var(--muted-foreground)",
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
