import React from 'react';
import {graphql, Link} from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';

const Stories = (props) => {
    const stories = props.data.allMarkdownRemark.edges;
    return (
        <Layout bodyClass="page-stories">
            <SEO title="Stories"/>
            <div className="intro">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>Her Story</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    {stories.map(edge => (
                        <div key={edge.node.frontmatter.linkedin} className="col-12 col-md-12 mb-1">
                            <div className="card service service-teaser">
                                <div className="card-content pb-6">
                                    <div className="card-header-left">
                                        {edge.node.frontmatter.image && (
                                            <div className="card-image col-sm-12 col-lg-2">
                                                <img
                                                    alt={edge.node.frontmatter.title}
                                                    className="img-fluid mb-1"
                                                    src={edge.node.frontmatter.image}
                                                />
                                            </div>
                                        )}
                                    </div>
                                    <h2><Link to={edge.node.frontmatter.linkedin}>{edge.node.frontmatter.title}</Link></h2>
                                    <div
                                        className="team-content"
                                        dangerouslySetInnerHTML={{__html: edge.node.html}}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export const query = graphql`
  query StoriesQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/stories/" } }
      sort: { fields: [frontmatter___title], order: ASC }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            image
            linkedin
            order
          }
        }
      }
    }
  }
`;

export default Stories;
