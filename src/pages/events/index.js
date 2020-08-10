import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';

const Events = (props) => {
  const events = props.data.allMarkdownRemark.edges;
  return (
    <Layout bodyClass="page-services">
      <SEO title="Events"/>
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Events</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-6">
        <div className="row">
          {events.map(edge => (
            <div key={edge.node.frontmatter.path} className="col-12 col-md-4 mb-1">
              <div className="card service service-teaser">
                <div className="card-content">
                  <h2>
                    <Link to={edge.node.frontmatter.path}>{edge.node.frontmatter.title}</Link>
                  </h2>
                  <p>{edge.node.excerpt}</p>
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
  query EventsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/events/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;

export default Events;
