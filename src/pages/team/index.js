import React from 'react';
import {graphql} from 'gatsby';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';

const Team = (props) => {
    const teams = props.data.allMarkdownRemark.edges;
    console.log(teams);
    return (
        <Layout bodyClass="page-teams">
            <SEO title="Team"/>
            <div className="intro">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>Meet The Team</h1>
                            <p>
                                {/* eslint-disable-next-line max-len */}
                                <b>
                                    Our exceptional team of volunteer student
                                    leaders and champions are listed here.
                                    Contact them individually,
                                    <br/>
                                    <a href="/contact">or shoot us an email.</a>
                                </b>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pb-6">
                <div className="row">
                    {teams.map(edge => (
                        <div key={edge.node.frontmatter.path} className="col-12 col-md-6 mb-1">
                            <div className="team card-two">
                                <div className="card-header whitebox col-12">
                                    <div className="card-header-left">
                                        {edge.node.frontmatter.image && (
                                            <div className="card-image">
                                                <img
                                                    alt={edge.node.frontmatter.title}
                                                    className="img-fluid mb-1"
                                                    src={edge.node.frontmatter.image}
                                                />
                                            </div>
                                        )}
                                    </div>
                                    <div className="card-right">
                                        <h2 className="card-title">{edge.node.frontmatter.title}</h2>
                                        <ul className="card-meta">
                                            <li>
                                                <strong className="">{edge.node.frontmatter.jobtitle}</strong>
                                            </li>
                                            <li>

                                                <a className="pl-0" target="_blank" rel="noreferrer"
                                                   href={edge.node.frontmatter.linkedinurl}>
                                                    <FontAwesomeIcon icon={faLinkedinIn} size="lg"/>
                                                </a>

                                                <a className="pl-1" href={edge.node.frontmatter.email}>
                                                    <FontAwesomeIcon icon={faEnvelope} size="lg"/>
                                                </a>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div
                                    className="team-content"
                                    dangerouslySetInnerHTML={{__html: edge.node.html}}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export const query = graphql`
  query TeamQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/team/" } }
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            path
            image
            order
            jobtitle
            linkedinurl
            email
          }
        }
      }
    }
  }
`;

export default Team;
