module.exports = {
  siteMetadata: {
    title: `Max Krieger`,
    description: `noodling around`,
    author: `@maxkriegers`,
  },
  plugins: [
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `markdown-pages`,
    //     path: `${__dirname}/src/markdown-pages`,
    //   },
    // },
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [`gatsby-remark-autolink-headers`],
    //   },
    // },
    `gatsby-plugin-fontawesome-css`,
    `@pauliescanlon/gatsby-mdx-embed`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [{ resolve: `gatsby-remark-autolink-headers` }],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Max Krieger`,
        short_name: `Max Krieger`,
        start_url: `/`,
        background_color: `rgba(255, 254, 252)`,
        theme_color: `#FFF8E7`,
        display: `minimal-ui`,
        icon: `static/telescope.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `work sans\:400,500,600,700`,
          `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-56010603-1`,
        head: true,
      },
    },
  ],
}
