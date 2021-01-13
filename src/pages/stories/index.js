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
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <h1>Her Story</h1>
                            <div>
                                We’re excited to introduce WiCSM’s new blog post: <b>Her Story</b><br/><br/>
                                Our blog posts feature female UTSC alumni who will be sharing their stories and
                                experiences of what it’s like to pursue programs in the CMS field!
                                You will get an opportunity to listen to our alumni talk about their accomplishments
                                and challenges, as well some advice on how to be successful in the field!
                                We’ll be posting every 1-2 weeks on our website. Stay tuned!
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pb-6">
                <div className="mb-2">
                    <div className="row">
                        {stories.map(edge => (

                            <div key={edge.node.frontmatter.path} className="col-12 col-md-6 mb-1">
                                    <div className="team card-two">
                                        <div className="card-header whitebox col-12">
                                            <div className="card-header-left">
                                                {edge.node.frontmatter.image && (
                                                    <div className="card-image">
                                                        <img
                                                            alt={edge.node.frontmatter.title}
                                                            className="img-fluid"
                                                            src={edge.node.frontmatter.image}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                            <div className="card-right">
                                                <h2 className="card-title mb-1">{edge.node.frontmatter.title}</h2>
                                                <ul className="card-meta">
                                                    <li>
                                                        <strong
                                                            className="">{edge.node.frontmatter.jobtitle}
                                                        </strong>
                                                    </li>
                                                    <li>

                                                        <a className="pl-0" target="_blank" rel="noreferrer"
                                                           href={edge.node.frontmatter.linkedin}>
                                                            {edge.node.frontmatter.linkedin}
                                                        </a>

                                                    </li>
                                                    <li>
                                                        <div className="">
                                                            <Link className="button mt-1" to={edge.node.frontmatter.path}>
                                                                Read Full Story
                                                            </Link>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export const query = graphql`
  query StoriesQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/stories/" } }
      sort: { fields: [frontmatter___order], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            image
            path
            linkedin
            jobtitle
            order
          }
        }
      }
    }
  }
`;

export default Stories;
