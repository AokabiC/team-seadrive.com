module.exports = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx"],
  images: {
    deviceSizes: [860, 1600, 1920],
  },
  webpack: (config, options) => {
    return config;
  },
};
