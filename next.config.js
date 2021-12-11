const withMDX = require("@next/mdx")({
  extension: /\.mdx$/,
});

module.exports = withMDX({
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "mdx"],
  images: {
    deviceSizes: [860, 1600, 1920],
  },
  webpack: (config, options) => {
    return config;
  },
});
