import React from 'react';
import {sidebarHiddenToggle} from '../../redux/navigation/navigation-actions'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import hamburger from '../../assets/hamburger-menu.svg';
import HamburgerMenu from '../../assets/HamburgerMenu';

//Styling
import './Header.css';

const Header = ({sidebarHiddenToggle}) => {
  return (
      <header id="Header">
        <div className="promoBar">
          <button type="button" onClick={() => sidebarHiddenToggle()}><HamburgerMenu stroke={`#ffffff`} fill={`#ffffff`} /></button>
          <p>Free shipping on orders over $70 at checkout</p>
        </div>

        <h1><Link to="/">ULTIMATE</Link></h1>
        <nav>
          <ul>
          <div className="flex">
            <li><Link to="/shop/mens">MEN</Link></li>
            <li><Link to="/shop/womens">WOMEN</Link></li>
          </div>
          <div className="flex">
            <li><Link to="/shop/jackets">JACKETS</Link></li>
            <li><Link to="/shop/sneakers">SNEAKERS</Link></li>
            <li><Link to="/shop/hats">HATS</Link></li>
          </div>
          </ul>
        </nav>
      </header>
  );
};

const mapDispatchToProps = dispatch => ({
  sidebarHiddenToggle: () => dispatch(sidebarHiddenToggle())
})

export default connect(null,mapDispatchToProps)(Header);