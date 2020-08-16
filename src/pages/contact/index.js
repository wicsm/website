import React from 'react';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Call from '../../components/Call';

const Contact = props => (
  <Layout bodyClass="page-contact">
    <SEO title="Contact"/>
    <div className="intro intro-small">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Contact</h1>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Call button={false}/>
        </div>
      </div>
    </div>
  </Layout>
);

export default Contact;
