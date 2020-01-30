import React from 'react';

const ShopItemMinimized = ({collectionInfo: {name, quantity, price, imageUrl}}) => {
  return (
    <div>
      <img src={imageUrl} alt="cart item" />
      <div className="itemInfo">
        <span className="title">{name}</span>
        <span className="quantityAndPrice">{quantity} x {price}</span>
      </div>
    </div>
  );
};

export default ShopItemMinimized;