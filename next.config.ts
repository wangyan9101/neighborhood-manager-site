import type { NextConfig } from "next";
import fs from "node:fs";

const isGitHubPages = process.env.DEPLOY_TARGET === "github-pages";
const isWindows = process.platform === "win32";

const repositoryName = "neighborhood-manager-site";
const usesLocalDeps = fs.existsSync(".deps");

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : isWindows ? undefined : "standalone",

  poweredByHeader: false,

  basePath: isGitHubPages ? `/${repositoryName}` : "",

  assetPrefix: isGitHubPages ? `/${repositoryName}/` : "",

  trailingSlash: isGitHubPages,

  images: {
    unoptimized: isGitHubPages,
  },
  turbopack: usesLocalDeps ? {
    resolveAlias: {
      three: "./.deps/three",
      "@react-three/fiber": "./.deps/@react-three/fiber",
      "@react-three/drei": "./.deps/@react-three/drei",
      "framer-motion": "./.deps/framer-motion",
      "lucide-react": "./.deps/lucide-react",
    },
  } : undefined,
};

export default nextConfig;
