import type { NextConfig } from "next";

const nextConfig: NextConfig = process.env.MOUSUAN_STATIC_EXPORT === "1"
  ? {
      output: "export",
      trailingSlash: true,
      images: { unoptimized: true },
      // The static audit build does not execute the Cloudflare worker entrypoint;
      // its platform globals are supplied only by Workers at runtime.
      typescript: { ignoreBuildErrors: true },
    }
  : {};

export default nextConfig;
