import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import Call from '../components/Call';

const Home = (props) => {
  const markdown = props.data.allMarkdownRemark.edges;
  const json = props.data.allFeaturesJson.edges;
  return (
    <Layout bodyClass="page-home">
      <SEO title="Home"/>
      <Helmet>
        <meta
          name="description"
          content="Women in Computer Science, Statistics & Mathematics, welcomes and uplifts young women in the realm of CSM."
        />
      </Helmet>
      <div className="intro pb-10 pb-md-12">
        <div className="container">
          <div className="col-12 col-md-5">
            <h1>WiCSM</h1>
            <h4>
              Women in Computer Science, Statistics & Mathematics, welcomes and uplifts young women
              in the realm of CSM.
            </h4>
          </div>
        </div>
      </div>

      <div className="container pt-5 pb-1 pt-md-7 pb-md-1">
        <div className="row justify-content-start">
          <div className="col-12 col-md-12 mb-1">
            <h2 className="title-3 text-dark mb-3">About</h2>
            <p>
              WiCSM aims to attract more talented young women into the field of CSM,
              by encouraging them to pursue a degree in a profession that is working to
              break/minimize gender barriers.
            </p>
            <p>
              We do this by hosting numerous communal, academic, and skillful events to create
              a safe place for students to come together & connect.
            </p>
            <p>
              By introducing them to mentors and encouraging them to network with members
              of the CSM community, we guide them through their educational and career goals.
            </p>
          </div>
        </div>


      </div>

      <div className="container pt-5 pb-5 pt-md-7 pb-md-7">
        <div className="row justify-content-start">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-3">What we do</h2>
          </div>
          {markdown.map(edge => (
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
          <div className="col-12 text-center">
            <Link className="button button-primary mt-2" to="/events">
              View All Events
            </Link>
          </div>
        </div>
      </div>

      <div className="container pt-5 pb-5 pt-md-7 pb-md-7">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-4">Our Features</h2>
          </div>
          {json.map(edge => (
            <div key={edge.node.id} className="col-12 col-md-6 col-lg-4 mb-2">
              <div className="feature">
                {edge.node.image && (
                  <div className="feature-image">
                    <img src={withPrefix(edge.node.image)}/>
                  </div>
                )}
                <h2 className="feature-title">{edge.node.title}</h2>
                <div className="feature-content">{edge.node.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/event/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "DD MMMM YYYY")
          }
          excerpt
        }
      }
    }
    allFeaturesJson {
      edges {
        node {
          id
          title
          description
          image
        }
      }
    }
  }
`;

export default Home;
