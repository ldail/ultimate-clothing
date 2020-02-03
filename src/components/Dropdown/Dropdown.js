import React from 'react';
import ShopItemMinimized from '../ShopItemMinimized/ShopItemMinimized';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './Dropdown.css';
import {hideDropdownAndSidebar} from '../../redux/navigation/navigation-actions';
import { cartItemsSelector } from '../../redux/cart/cart-selector';
import { dropdownSelector } from '../../redux/navigation/navigation-selector';
import { createStructuredSelector } from 'reselect';

const Dropdown = ({cartItems, dropdownHidden, hideDropdownAndSidebar}) => {
  return (
    <div id="Dropdown" className={dropdownHidden ? 'hiddenDropdown' : 'shownDropdown'}>
      <Link to="/checkout" onClick={() => hideDropdownAndSidebar()}><button className="shop">GO TO CHECKOUT</button></Link>
      <div className="cart">
        {cartItems.map((item,index)=> {
          return <ShopItemMinimized key={index} collectionInfo={item} />
        })}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector,
  dropdownHidden: dropdownSelector
})

const mapDispatchToProps = dispatch => ({
  hideDropdownAndSidebar: () => dispatch(hideDropdownAndSidebar())
})
export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);