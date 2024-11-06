const nextConfig = {
	crossOrigin: "anonymous",
	i18n: {
		locales: ["en", "ru", "uz"],
		defaultLocale: "ru",
	},
	httpAgentOptions: {
		keepAlive: true,
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
