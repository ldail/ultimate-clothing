import React from 'react';
import './ShopItemMinimized.css';

const ShopItemMinimized = ({collectionInfo: {name, quantity, price, imageUrl}}) => {
  return (
    <div className="ShopItemMinimized">
      <img src={imageUrl} alt="cart item" />
      <div className="itemInfo">
        <span className="quantityAndPrice">{quantity} x ${price}</span>
      </div>
    </div>
  );
};

export default ShopItemMinimized;