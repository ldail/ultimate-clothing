import React from 'react';
import {sidebarHiddenToggle, dropdownHiddenToggle} from '../../redux/navigation/navigation-actions'
import {connect} from 'react-redux';
import {LinkScrollToTop as Link} from '../LinkScrollToTop';
import HamburgerMenu from '../../assets/HamburgerMenu';

//Styling
import './Header.css';

//Assets
import CartIcon from '../../assets/Cart';
import { createStructuredSelector } from 'reselect';
import { userSelector } from '../../redux/user/user-selector';
import { cartItemsSelector } from '../../redux/cart/cart-selector';
import { signOutStart } from '../../redux/user/user-actions';

const Header = ({sidebarHiddenToggle, dropdownHiddenToggle, user, cartItems, signOutStart}) => {

  let totalItemCount = 0;
  cartItems.forEach(item => {
    totalItemCount += item.quantity
  })

  return (
      <header id="Header">
        <div className="promoBar">
          <button type="button" onClick={() => sidebarHiddenToggle()} className="tablet-hidden"><HamburgerMenu stroke={`#ffffff`} fill={`#ffffff`} /></button>
          <p>Free shipping on orders over $70 at checkout</p>
        </div>

        <div id="tablet-nav" className="mobile-hidden">
          <ul>
            <li>{user ? <Link to="/" onClick={() => signOutStart()}>SIGN OUT</Link> : <Link to="/signin">SIGN IN</Link>}</li>
            <li onClick={() => dropdownHiddenToggle()} ><CartIcon className="cart"/><span className="totalItemCount">{totalItemCount}</span></li>
          </ul>
        </div>

        <h1><Link to="/">ULTIMATE</Link></h1>
        <nav aria-label="shop navigation">
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

const mapStateToProps = createStructuredSelector({
  user: userSelector,
  cartItems: cartItemsSelector
})

const mapDispatchToProps = dispatch => ({
  sidebarHiddenToggle: () => dispatch(sidebarHiddenToggle()),
  dropdownHiddenToggle: () => dispatch(dropdownHiddenToggle()),
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);