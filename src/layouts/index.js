import React from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../scss/style.scss';

const Layout = props => {
  return (
    <React.Fragment>
      <SEO/>
      <div className={`page${props.bodyClass ? ` ${props.bodyClass}` : ''}`}>
        <div id="wrapper" className="wrapper">
          <Header/>
          {props.children}
        </div>
        <Footer/>
      </div>
    </React.Fragment>
  );
};

export default Layout;
