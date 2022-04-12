/** @type {import('next').NextConfig} */
const customNextConfig = require("./next.config");
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "keilmart.com",
      "localhost:3000",
    ],
  },
};

module.exports = {
  images: {
    domains: ["assets.vercel.com"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = withPlugins([[withImages]], nextConfig);
