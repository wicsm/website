import React from 'react';
import Helmet from 'react-helmet';
import {StaticQuery, graphql} from 'gatsby';
import favicon from '../../static/favicon.svg';
const SEO = props => (
    <StaticQuery
        query={detailsQuery}
        render={(data) => {
            const title = props.title || data.site.siteMetadata.title;
            return (
                <>
                    <Helmet
                        htmlAttributes={{
                            lang: 'en',
                        }}
                        title={title}
                        image={data.site.siteMetadata.image}
                        titleTemplate={`%s - ${data.site.siteMetadata.title}`}
                        link={[
                            {
                                rel: 'shortcut icon',
                                type: 'image/png',
                                href: `${favicon}`
                            },
                        ]}
                    />
                    <Helmet>
                        <meta property="og:site_name" content={title} />
                        <meta property="og:url" content={data.site.siteMetadata.url} />
                        <meta property="og:title" content={title} />
                        <meta property="og:description" content={data.site.siteMetadata.description} />
                        <meta property="og:image" content={data.site.siteMetadata.image} />
                    </Helmet>
                    <Helmet>
                        <meta name="twitter:title" content={title} />
                        <meta name="twitter:description" content={data.site.siteMetadata.description} />
                        <meta name="twitter:image" concontent={data.site.siteMetadata.image} />
                    </Helmet>
                </>
            );
        }}
    />
);

SEO.defaultProps = {
    lang: 'en',
    meta: [],
    keywords: [],
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        image
        url
      }
    }
  }
`;
