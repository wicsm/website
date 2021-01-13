import React from 'react';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import {graphql, Link} from "gatsby";

const Sponsors = (props) => {
    const sponsors = props.data.allMarkdownRemark.edges;
    const email = props.data.site.siteMetadata.contact.email;
    return (
        <Layout bodyClass="page-sponsors">
            <SEO title="Sponsors"/>
            <div className="intro">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>Sponsors</h1>
                            <b>
                                <p>
                                    To sponsor our club please <Link to={`mailto:${email}`}>send us an email </Link>
                                    and we will be happy to help design a custom sponsorship package especially for you.
                                </p>
                            </b>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container pb-6">
                <div className="mb-2">
                    <h1>2020/21 Wonder Woman Package:</h1>
                    <div className="row">
                        {sponsors.map(edge => (
                            <>
                                <div className="col-lg-6 col-md-12 col-sm-12 mb-1">
                                    <Link to={edge.node.frontmatter.link} target="_blank">
                                        <img
                                            alt={edge.node.frontmatter.title}
                                            className="img-fluid mb-1"
                                            src={edge.node.frontmatter.image}
                                            style={{width: 100 + '%'}}
                                        />
                                    </Link>
                                </div>
                            </>
                        ))}
                    </div>
                </div>

            </div>
        </Layout>
    );
};
export const query = graphql`
  query SponsorsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/sponsors/" } }
      sort: { fields: [frontmatter___order], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            image
            link
            order
          }
        }
      }
    }
    site {
      siteMetadata {
        contact {
          email
        }
      }
    }
  }
`;
export default Sponsors;
