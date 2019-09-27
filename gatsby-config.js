module.exports = {
  siteMetadata: {
    title: `team-seadrive.com`,
    author: `AokabiC`,
    description: `碧黴(あおかび)の運営する個人サークル「SeA:」の公式Webサイト`,
    siteUrl: `https://team-seadrive.com`,
    social: {
      twitter: `AokabiC`,
    },
    icon: `content/assets/Team_SeAdrive_logo.png`,
  },
  plugins: [
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
    `gatsby-plugin-offline`,
    {
        resolve: `gatsby-plugin-typography`,
        options: {
            pathToConfigModule: `src/utils/typography`,
        }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'material icons',
          'Noto Serif JP',
          'Noto Sans JP',
        ],
      },
    },
  ],
}
