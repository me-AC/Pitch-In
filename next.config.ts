import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	experimental: {
		ppr: 'incremental',
	},
	devIndicators: {
		position: 'bottom-right',
	},
	images: {
		// dangerouslyAllowSVG: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '*',
			},
		],
	},
};

export default nextConfig;
