import type { NextConfig } from "next";

// Extract domain from API_ASSETS_URL if provided
const getAssetsDomain = () => {
  const assetsUrl = process.env.NEXT_PUBLIC_API_ASSETS_URL;
  if (!assetsUrl) return null;

  try {
    const url = new URL(assetsUrl);
    return {
      protocol: url.protocol.replace(":", "") as "http" | "https",
      hostname: url.hostname,
      port: url.port || undefined,
      pathname: "/**"
    };
  } catch {
    return null;
  }
};

const assetsDomain = getAssetsDomain();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Localhost for development (allows any port)
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "/**"
      },
      // Placeholder images
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        pathname: "/**"
      },
      // Cloudinary images
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**"
      },
      // API assets domain (if configured and different from localhost)
      ...(assetsDomain && assetsDomain.hostname !== "localhost"
        ? [
            {
              protocol: assetsDomain.protocol,
              hostname: assetsDomain.hostname,
              ...(assetsDomain.port && { port: assetsDomain.port }),
              pathname: assetsDomain.pathname
            }
          ]
        : [])
    ]
  }
};

export default nextConfig;
