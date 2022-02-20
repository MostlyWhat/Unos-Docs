module.exports = {
  siteMetadata: {
    title: 'UNOS Assistant Documentation',
    description: "Universal Not-Propietary Operations System or UNOS is an artificial intelligence-powered system operator, or in simple terms, it's a home-assistant system similar to Alexa, Google Assistant and Siri. But is designed with expandability, transparency and adaptability in mind.",
    keywords: 'unos,docs,documentation',
  },
  pathPrefix: `/gtc`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Carbon Design Gatsby Theme',
        icon: 'src/images/favicon.svg',
        short_name: 'Gatsby Theme Carbon',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#161616',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        mediumAccount: 'carbondesign',
        repository: {
          baseUrl:
            'https://github.com/carbon-design-system/gatsby-theme-carbon',
          subDirectory: '/packages/example',
        },
      },
    },
  ],
};
