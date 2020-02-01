import React from 'react';
import {sidebarHiddenToggle} from '../../redux/navigation/navigation-actions'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

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
          <li><Link to="/shop/mens">MEN</Link></li>
          <li><Link to="/shop/womens">WOMEN'S</Link></li>
          <li><Link to="/shop/jackets">JACKETS</Link></li>
          <li><Link to="/shop/sneakers">SNEAKERS</Link></li>
          <li><Link to="/shop/hats">HATS</Link></li>
          </ul>
        </nav>
      </header>
  );
};

const mapDispatchToProps = dispatch => ({
  sidebarHiddenToggle: () => dispatch(sidebarHiddenToggle())
})

export default connect(null,mapDispatchToProps)(Header);