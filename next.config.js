module.exports = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx"],
  images: {
    deviceSizes: [860, 1600, 1920],
  },
  webpack: (config, options) => {
    return config;
  },
  async redirects() {
    return [
      {
        source: '/compro_with_arisa',
        destination: 'https://scrapbox.io/aokabic/%E3%80%8E%E9%8A%80%E9%AB%AA%E8%B5%A4%E7%9C%BC%E3%81%AE%E5%BE%8C%E8%BC%A9%E3%81%A8%E5%AD%A6%E3%81%B6%E7%AB%B6%E6%8A%80%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E3%80%8F%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88%E3%83%9A%E3%83%BC%E3%82%B8',
        permanent: true,
      },
      {
        source: '/compro_with_arisa2',
        destination: 'https://scrapbox.io/aokabic/%E3%80%8E%E9%8A%80%E9%AB%AA%E8%B5%A4%E7%9C%BC%E3%81%AE%E5%BE%8C%E8%BC%A9%E3%81%A8%E5%AD%A6%E3%81%B6%E7%AB%B6%E6%8A%80%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B02%E3%80%8F%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88%E3%83%9A%E3%83%BC%E3%82%B8',
        permanent: true,
      },
    ]
  },
};
