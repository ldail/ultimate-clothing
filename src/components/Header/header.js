import React from 'react';
import {sidebarHiddenToggle} from '../../redux/navigation/navigation-actions'
import {connect} from 'react-redux';

const Header = ({sidebarHiddenToggle}) => {
  return (
      <header>
        <div className="promoBar">
          <button type="button" className="hamburger" onClick={() => sidebarHiddenToggle()}>=</button>
          <p>Free shipping on orders over $70 at checkout</p>
        </div>

        <h1>ULTIMATE</h1>
        <nav>
          <ul>
            <li>MEN</li>
            <li>WOMEN</li>
            <li>JACKETS</li>
            <li>SNEAKERS</li>
            <li>HATS</li>
          </ul>
        </nav>
      </header>
  );
};

const mapDispatchToProps = dispatch => ({
  sidebarHiddenToggle: () => dispatch(sidebarHiddenToggle())
})

export default connect(null,mapDispatchToProps)(Header);