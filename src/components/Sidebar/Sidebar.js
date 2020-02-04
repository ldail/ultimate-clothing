import React from 'react';
import {connect} from 'react-redux';
import {dropdownHiddenToggle} from '../../redux/navigation/navigation-actions'
import {Link} from 'react-router-dom';
import './Sidebar.css';
import { createStructuredSelector } from 'reselect';
import { userSelector } from '../../redux/user/user-selector';
import { sidebarSelector } from '../../redux/navigation/navigation-selector';
import { cartItemsSelector } from '../../redux/cart/cart-selector';
import { signOutStart } from '../../redux/user/user-actions';
import CloseSidebarAndDropdownLink from '../CloseSidebarAndDropdownLink';

const Sidebar = ({user, sidebarHidden, dropdownHiddenToggle, cartItems, signOutStart}) => {
  let totalItemCount = 0;
  cartItems.forEach(item => {
    totalItemCount += item.quantity
  })

  return (
    <ul id="Sidebar" className={sidebarHidden ? 'hiddenSidebar' : 'shownSidebar'}>
      <li>{user ? <CloseSidebarAndDropdownLink to="/" onClick={signOutStart}>SIGN OUT</CloseSidebarAndDropdownLink> : <CloseSidebarAndDropdownLink to="/signin">SIGN IN</CloseSidebarAndDropdownLink>}</li>
      <li onClick={() => dropdownHiddenToggle()}>{`CART (${totalItemCount})`}</li>
      <li className="break"><CloseSidebarAndDropdownLink to="/shop">SHOP</CloseSidebarAndDropdownLink></li>
      <li className="break"><CloseSidebarAndDropdownLink to="/shop/mens">MEN'S</CloseSidebarAndDropdownLink></li>
      <li><CloseSidebarAndDropdownLink to="/shop/womens">WOMEN'S</CloseSidebarAndDropdownLink></li>
      <li><CloseSidebarAndDropdownLink to="/shop/jackets">JACKETS</CloseSidebarAndDropdownLink></li>
      <li><CloseSidebarAndDropdownLink to="/shop/sneakers">SNEAKERS</CloseSidebarAndDropdownLink></li>
      <li><CloseSidebarAndDropdownLink to="/shop/hats">HATS</CloseSidebarAndDropdownLink></li>
    </ul>
  );
};

const mapStateToProps = createStructuredSelector({
  user: userSelector,
  sidebarHidden: sidebarSelector,
  cartItems: cartItemsSelector
})

const mapDispatchToProps = (dispatch) => ({
  dropdownHiddenToggle: () => dispatch(dropdownHiddenToggle()),
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);