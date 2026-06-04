import type { NextConfig } from "next";

const getAssetsDomain = () => {
  const assetsUrl = process.env.NEXT_PUBLIC_API_ASSETS_URL;
  if (!assetsUrl) return null;

  try {
    const url = new URL(assetsUrl);
    return {
      protocol: url.protocol.replace(":", "") as "http" | "https",
      hostname: url.hostname,
      port: url.port || undefined,
      pathname: "/**",
    };
  } catch {
    return null;
  }
};

const assetsDomain = getAssetsDomain();

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      ...(assetsDomain && assetsDomain.hostname !== "localhost"
        ? [
            {
              protocol: assetsDomain.protocol,
              hostname: assetsDomain.hostname,
              ...(assetsDomain.port && { port: assetsDomain.port }),
              pathname: assetsDomain.pathname,
            },
          ]
        : []),
    ],
  },
};

export default nextConfig;
