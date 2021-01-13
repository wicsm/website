const guid = process.env.NETLIFY_GOOGLE_ANALYTICS_ID;

module.exports = {
    siteMetadata: {
        title: 'WiCSM',
        description: 'Women in Computer Science, Statistics & Mathematics, welcomes and uplifts young women in the realm of CSM.',
        contact: {
            phone: 'XXX XXX XXX',
            email: 'wicsm.utsc@gmail.com',
        },
        url: "https://wicsm-utsc.netlify.app",
        image: "/images/share.png",
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
            {
                name: 'Sponsors',
                link: '/sponsors',
            },
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
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
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
        // {
        //   resolve: 'gatsby-plugin-mailchimp',
        //   options: {
        //     endpoint: 'https://app.us17.list-manage.com/subscribe/post?u=efad66933962ce3967ef723cd&amp;id=b947f02062', // string; add your MC list endpoint here; see instructions below
        //     timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
        //   },
        // },
    ],
};
