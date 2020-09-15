import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import {AnimatedSocialIcon} from 'react-animated-social-icons';

const Footer = props => (
  <div className="footer-strip">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="footer">
            <AnimatedSocialIcon
                brandName="instagram"
                url="https://www.instagram.com/wicsm.utsc/"
                animation="bounce"
                defaultColor="#D1D1D1"
                hoverColor="white"
                width="1.5em"
                style={{paddingRight: '1.5em'}}
                animationDuration={0.8}
            />
            <AnimatedSocialIcon
                brandName="facebook"
                url="https://www.facebook.com/WiCSM.UTSC"
                animation="bounce"
                defaultColor="#D1D1D1"
                hoverColor="white"
                width="1.5em"
                style={{paddingRight: '1.5em'}}
                animationDuration={0.8}
            />
            <AnimatedSocialIcon
                brandName="twitter"
                url="https://twitter.com/wicsm_utsc?lang=en"
                animation="bounce"
                defaultColor="#D1D1D1"
                hoverColor="white"
                width="1.5em"
                style={{paddingRight: '1.5em'}}
                animationDuration={0.8}
            />
            <AnimatedSocialIcon
                brandName="linkedin"
                url="https://www.linkedin.com/company/wicsm-utsc/"
                animation="bounce"
                defaultColor="#D1D1D1"
                hoverColor="white"
                width="1.5em"
                style={{paddingRight: '1.5em'}}
                animationDuration={0.8}
            />
            <AnimatedSocialIcon
                brandName="twitterAlt"
                url="https://www.tiktok.com/@wicsmutsc"
                animation="bounce"
                defaultColor="#D1D1D1"
                hoverColor="white"
                width="1.5em"
                style={{paddingRight: '1.5em'}}
                animationDuration={0.8}
            />
            <ul className="footer-menu">
              <li>
                {' '}
                <Link to="/">Home</Link>
              </li>
              <li>
                {' '}
                <Link to="/contact">Contact</Link>
              </li>
              <li className="copyright">
                ©
                {' '}
                {new Date().getFullYear()}
                {' '}
                {props.data.site.siteMetadata.title}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <Footer data={data}/>}
  />
);
