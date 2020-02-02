import React from 'react';
import ShopItemMinimized from '../ShopItemMinimized/ShopItemMinimized';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './Dropdown.css';
import {hideDropdownAndSidebar} from '../../redux/navigation/navigation-actions';

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

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems,
  dropdownHidden: state.navigation.dropdownHidden
})

const mapDispatchToProps = dispatch => ({
  hideDropdownAndSidebar: () => dispatch(hideDropdownAndSidebar())
})
export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);