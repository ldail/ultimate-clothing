import React from 'react';

const CheckoutItem = () => {
  return (
    <li>
      <img src="#" alt="hat" />
      <div className="quantityChanger">
        <span className="leftArrow">{`<`}</span>
        <span className="quantity">3</span>
        <span className="rightArrow">></span>
      </div>
      <span className="price">35</span>
      <span className="removeButton">X</span>
    </li>
  );
};

export default CheckoutItem;