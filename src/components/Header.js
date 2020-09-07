import React from 'react';
import { Link } from 'gatsby';
import Menu from './Menu';
import Hamburger from './Hamburger';
// eslint-disable-next-line import/no-duplicates
import logo from '../images/single-logo.svg';
// eslint-disable-next-line import/no-duplicates
import logoMobile from '../images/single-logo.svg';
import MenuMobile from './MenuMobile';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: false,
    };
  }

  toggleMenu = menuActive => {
    this.setState(prevState => ({
      menuActive: !prevState.menuActive,
    }));
  };

  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img alt="Homepage" src={logo}/>
            </Link>
          </div>
          <div className="logo-mobile">
            <Link to="/">
              <img alt="Homepage" src={logoMobile}/>
            </Link>
          </div>
          <MenuMobile active={this.state.menuActive}/>
          <Menu/>
          <Hamburger toggleMenu={this.toggleMenu}/>
        </div>
      </div>
    );
  }
}

export default Header;
