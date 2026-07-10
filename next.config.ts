import type { NextConfig } from "next";

const isGitHubPages = process.env.DEPLOY_TARGET === "github-pages";

const repositoryName = "neighborhood-manager-site";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : "standalone",

  poweredByHeader: false,

  basePath: isGitHubPages ? `/${repositoryName}` : "",

  assetPrefix: isGitHubPages ? `/${repositoryName}/` : "",

  trailingSlash: isGitHubPages,

  images: {
    unoptimized: isGitHubPages,
  },
};

export default nextConfig;
