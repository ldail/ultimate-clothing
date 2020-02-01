import React from 'react';
import { addItem } from '../../redux/cart/cart-actions';
import {connect} from 'react-redux';
import './ShopItem.css';

const ShopItem = ({addItem, collectionTitle, collectionInfo: {id, imageUrl, name, price}}) => {
  return (
    <li className="ShopItem">
      <img src={imageUrl} className="shopItemImage" alt={collectionTitle} />
      <button className="shopInverted mobile-show" onClick={() => addItem({id, imageUrl, name, price})}>+</button>
      <button className="shopInverted mobile-hidden" onClick={() => addItem({id, imageUrl, name, price})}>Add to cart</button>
      <div className="flex">
        <p className="mobile-hidden">{name}</p>
       <span>${price}</span>
      </div>
    </li>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: (item) => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(ShopItem);