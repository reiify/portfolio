const nextConfig = {
	crossOrigin: "anonymous",
	i18n: {
		locales: ["en", "ru", "uz"],
		defaultLocale: "ru",
	},
	httpAgentOptions: {
		keepAlive: true,
	},
	compiler: {
		removeConsole: process.env.NODE_ENV === "production",
	},

	async rewrites() {
		return [
			{
				source: "/home",
				destination: "/",
			},
		];
	},
};

export default nextConfig;
