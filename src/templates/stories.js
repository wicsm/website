import React from 'react';
import {graphql} from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../layouts/index';

const Stories = ({data}) => {
    const {title, image} = data.markdownRemark.frontmatter;
    const {html} = data.markdownRemark;
    return (
        <Layout bodyClass="page-service">
            <SEO title={title}/>
            <div className="strip strip-white strip-diagonal">
                <div className="container pt-4 pt-md-10">
                    <div className="row justify-content-start">
                        <div className="col-12 col-md-12">
                            <div className="service service-single">
                                <div className="card-header col-lg-6 col-md-12 col-sm-12">
                                        <img
                                            alt={title}
                                            className="img-fluid mb-1"
                                            src={image}
                                            style={{width: "inherit"}}
                                        />
                                </div>
                                <h1 className="title">{title}</h1>
                                <div className="content" dangerouslySetInnerHTML={{__html: html}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        path
        image
      }
      html
    }
  }
`;

export default Stories;
