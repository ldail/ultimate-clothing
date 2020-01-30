import React, { useEffect, useState } from 'react';
import { increaseQuantity, decreaseQuantity, removeItem } from '../../redux/cart/cart-actions';
import {connect} from 'react-redux';

const CheckoutItem = ({itemInfo, increaseQuantity, decreaseQuantity, removeItem}) => {
  let {imageUrl, name, quantity, price, id} = itemInfo;
  let [finalQuantity, setFinalQuantity] = useState(quantity);
  console.log(itemInfo);

  return (
    <li>
      <img src={imageUrl} alt="cart item" />
      <div className="quantityChanger">
        <button className="leftArrow" onClick={() => {
          setFinalQuantity(finalQuantity -1);
          decreaseQuantity(itemInfo)}
          }>&#10094;</button>
        <span className="quantity">{finalQuantity}</span>
        <button className="rightArrow" onClick={() => {
          setFinalQuantity(finalQuantity + 1);
          increaseQuantity(itemInfo)
          }}>&#10095;</button>
      </div>
      <span className="price">{price}</span>
      <span className="removeButton" onClick={() => removeItem(itemInfo)}>&#10005;</span>
    </li>
  );
};

const mapDispatchToProps = dispatch => ({
  increaseQuantity: (item) => dispatch(increaseQuantity(item)),
  decreaseQuantity: (item) => dispatch(decreaseQuantity(item)),
  removeItem: (item) => dispatch(removeItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);