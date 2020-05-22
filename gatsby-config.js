module.exports = {
  siteMetadata: {
    title: `team-seadrive.com`,
    titleTemplate: `%s | team-seadrive.com`,
    lang: `ja`,
    author: `AokabiC`,
    description: `碧黴(あおかび)のサークル「team-seadrive.com」公式Webサイト`,
    siteUrl: `https://team-seadrive.com`,
    social: {
      twitter: `AokabiC`,
    },
    defaultOgpImage: `/images/ogp_default.png`,
    icon: `/content/assets/Team_SeAdrive_logo.png`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-code-titles`,
          `gatsby-remark-autolink-headers`,
        //   {
        //     resolve: 'gatsby-remark-toc',
        //     options: {
        //       header: '', // the custom header text
        //       include: [
        //         'content/**/*.md' // an include glob to match against
        //       ]
        //     }
        //   },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 650,
              quality: 90,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-katex`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Team SeAdrive Website`,
        short_name: `SeAdriveWeb`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/Team_SeAdrive_logo.png`,
      },
    },
    'gatsby-plugin-twitter',
    'gatsby-redirect-from',
    'gatsby-plugin-meta-redirect' // make sure this is always the last one
  ],
}
// require("ts-node").register();