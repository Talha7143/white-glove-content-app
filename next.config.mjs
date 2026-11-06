/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  // Only apply basePath and static export when building in GitHub Actions for GitHub Pages
  ...(isGithubActions && {
    output: "export",
    basePath: "/white-glove-content-app",
  }),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
