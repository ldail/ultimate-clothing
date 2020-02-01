import React from 'react';
import ShopItemMinimized from '../ShopItemMinimized/ShopItemMinimized';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './Dropdown.css';

const Dropdown = ({cartItems}) => {
  return (
    <div id="Dropdown">
      <div className="cart">
        {cartItems.map((item,index)=> {
          return <ShopItemMinimized key={index} collectionInfo={item} />
        })}
      </div>
      <button className="shop"><Link to="/checkout">GO TO CHECKOUT</Link></button>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
})
export default connect(mapStateToProps, null)(Dropdown);