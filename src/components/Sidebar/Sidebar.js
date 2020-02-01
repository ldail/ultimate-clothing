import React from 'react';
import {connect} from 'react-redux';
import {dropdownHiddenToggle} from '../../redux/navigation/navigation-actions'
import {Link} from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({user, sidebarHidden, dropdownHiddenToggle, cartItems}) => {
  let totalItemCount = 0;
  cartItems.forEach(item => {
    totalItemCount += item.quantity
  })

  return (
    <ul id="Sidebar" className={sidebarHidden ? 'hiddenSidebar' : 'shownSidebar'}>
      <li>{user ? 'SIGN OUT' : 'SIGN IN'}</li>
      <li onClick={() => dropdownHiddenToggle()}>{`CART (${totalItemCount})`}</li>
      <li className="break"><Link to="/shop">SHOP</Link></li>
      <li className="break"><Link to="/shop/mens">MEN'S</Link></li>
      <li><Link to="/shop/womens">WOMEN'S</Link></li>
      <li><Link to="/shop/jackets">JACKETS</Link></li>
      <li><Link to="/shop/sneakers">SNEAKERS</Link></li>
      <li><Link to="/shop/hats">HATS</Link></li>
    </ul>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  sidebarHidden: state.navigation.sidebarHidden,
  cartItems: state.cart.cartItems
})

const mapDispatchToProps = (dispatch) => ({
  dropdownHiddenToggle: () => dispatch(dropdownHiddenToggle())
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);