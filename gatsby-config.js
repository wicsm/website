const guid = process.env.NETLIFY_GOOGLE_ANALYTICS_ID;

module.exports = {
  siteMetadata: {
    title: 'WiCSM',
    description: 'my theme',
    contact: {
      phone: 'XXX XXX XXX',
      email: 'wicsm.utsc@gmail.com',
    },
    menuLinks: [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'About Us',
        link: '/#about',
      },
      {
        name: 'Team',
        link: '/team',
      },
      {
        name: 'Her Story',
        link: '/stories',
      },
      {
        name: 'Events',
        link: '/events',
      },
      // {
      //   name: 'Her Story',
      //   link: '/events',
      // },

      {
        name: 'Contact',
        link: '/contact',
      },

    ],
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: guid || 'UA-XXX-1',
        // Puts tracking script in the head instead of the body
        head: false,
      },
    },
  ],
};
