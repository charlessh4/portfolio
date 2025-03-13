/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static site export for GitHub Pages
  basePath: "/portfolio", // Replace with your actual GitHub repository name
  images: {
    unoptimized: true, // Ensures images work correctly on GitHub Pages
  },
};

module.exports = nextConfig;